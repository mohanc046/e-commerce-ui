import axios from "axios";

import _ from 'lodash';

import { notification } from 'antd';

import { createStore, action, thunk, persist } from "easy-peasy";

import localForage from "localforage";

import { encryptTransform } from 'redux-persist-transform-encrypt';

import { FIXED_VALUES } from "../utils/constants";

import { generateProductCatalogPDF } from "../utils";


const STATUS_CODE = {
  SUCCESS: 200
}

const encryption = encryptTransform({

  secretKey: "some-secret",

  onError: function (error) {
    // Handle the error.
    console.log("😱");
    console.log(error);
  }
});

const store = createStore(
  persist({

    downloadReport: {

      data: {

        isLoaderStatus: false,

        isCategoryLoading: false,

        isProductListLoading: false,

        refreshToPullUpdate: true,

        isModalEnabled: false,

        lotDetailsList: [],

        category1: [],

        category2: [],

        filteredCategory2List: [],

        catalogueList: [],

        searchText: "",

        selectedPrimaryCategory: {},

        selectedSecondaryCategory: {},

        selectedCatalogueName: "",

        pricingList: FIXED_VALUES.PRICING_LIST,

        selectedPricing: {},

        productList: [],

        dropDownButtonOption: {}

      },

      getStoreDetails: action((state, payload) => {

        return _.get(state, 'data')

      }),

      updateStore: action((state, payload) => {

        _.update(state, 'data', () => { return { ...state.data, ...payload } })

      }),

      fetchCategoryInformation: thunk(async (actions, payload) => {

        try {

          actions.updateStore({ isCategoryLoading: true });

          let categoryListResponse = await axios.get(`https://e-commerce-service-oz66.onrender.com/api/categoryInfo`);

          const { data: { statusCode = "500", category1 = [], category2 = [], catalogueList = [] } } = categoryListResponse;

          if (statusCode === STATUS_CODE.SUCCESS) {

            actions.updateStore({
              category1, category2, catalogueList,
              selectedPrimaryCategory: {},
              selectedSecondaryCategory: {},
              productList: [],
              dropDownButtonOption: {},
              pricingList: FIXED_VALUES.PRICING_LIST,
              searchText: "",
              selectedPricing: {}
            })

          } else {

            notification.open({ type: "warning", description: "Facing issue while getting category information!" })

          }
        } catch (error) {

          console.log("Error while Lot Details creation ", error);

        } finally {

          actions.updateStore({ isCategoryLoading: false })

        }
      }),

      fetchProductList: thunk(async (actions, payload) => {

        try {

          const {
            searchText,
            primaryCategory,
            secondaryCategory,
            selectedPricing,
            selectedCatalogueName
          } = payload;


          if ([primaryCategory, secondaryCategory, searchText, selectedPricing, selectedCatalogueName].every(item => _.isEmpty(item))) {

            notification.open({ type: "warning", description: "Choose/enter valid option to download catalog." })

            return;
          }

          actions.updateStore({ isProductListLoading: true });

          let categoryListResponse = await axios.post(`https://e-commerce-service-oz66.onrender.com/api/productList`, payload);

          const { data: { statusCode = "500", productList = [] } } = categoryListResponse;

          if (statusCode === STATUS_CODE.SUCCESS) {

            actions.updateStore({ productList });

            await generateProductCatalogPDF()


          } else {

            notification.open({ type: "warning", description: "Facing issue while getting product list!" })

          }
        } catch (error) {

          console.log("Error while Lot Details creation ", error);

        } finally {

          actions.updateStore({ isProductListLoading: false })

        }
      })
    },

    products: {
      data: {

        isLoaderStatus: false,

        isProductListLoading: false,

        refreshToPullUpdate: true,

        isModalEnabled: false,

        sortBy: "",

        minPrice: 0,

        maxPrice: 0,

        offset: 0,

        search: "",

        count: FIXED_VALUES.DEFAULT_PAGINATION_COUNT,

        selectedCataory: "",

        categoryCount: {},

        productList: [],

      },

      getStoreDetails: action((state, payload) => {

        return _.get(state, 'data')

      }),

      updateStore: action((state, payload) => {

        _.update(state, 'data', () => { return { ...state.data, ...payload } })

      }),



      fetchProductList: thunk(async (actions, payload, { getState }) => {

        try {

          let {
            offset,
            count,
            productList
          } = getState().data

          console.log(payload)

          // if ([offset, count].every(item => _.isUndefined(item))) {

          //   notification.open({ type: "warning", description: "Invalid Data given!" })

          //   return;
          // }

          actions.updateStore({ isProductListLoading: true });

          let productListReponse = await axios.post(`http://localhost:3006/api/product/getActiveProducts`, {offset, count, ...payload});

          console.log(productListReponse)

          const { data: { statusCode = "500", products = [] } } = productListReponse;

          if (statusCode === STATUS_CODE.SUCCESS) {
            if (!_.isEmpty(products)) {
              await actions.updateStore({ productList: offset === 0 ? products : [...productList, ...products] })
            } else {
              await actions.updateStore({ offset: offset <= 0 ? offset : offset - 1 })
            }

            productList = getState().data.productList

            actions.updateStore({ categoryCount: {'All' : _.size(productList), ..._.countBy(productList, 'category_name')} })

          } else {

            notification.open({ type: "warning", description: "Error while getting product list!" })

          }
        } catch (error) {

          console.log("Error while getting product list!", error);

        } finally {

          actions.updateStore({ isProductListLoading: false })

        }
      })
    }

  },
    {
      version: 1,
      storage: localForage,
      transformers: [encryption]
    }
  ))

export default store;