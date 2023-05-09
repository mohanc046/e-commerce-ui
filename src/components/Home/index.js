import { useEffect } from 'react';
import _ from 'lodash';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { PageHeader } from '../PageHeader';
import { useStoreActions, useStoreState } from '../../store/hooks';
import './home.css';
import ProductTemplate from './ProductTemplate';
import { Spinner } from '../Loader/Spinner';

export const Home = () => {

  let downloadReportDataStore = useStoreState(state => state.downloadReport);

  const category1 = downloadReportDataStore.data.category1;

  const category2 = downloadReportDataStore.data.category2;

  const selectedPrimaryCategory = downloadReportDataStore.data.selectedPrimaryCategory;

  const selectedSecondaryCategory = downloadReportDataStore.data.selectedSecondaryCategory;

  const productList = downloadReportDataStore.data.productList;

  const pricingList = downloadReportDataStore.data.pricingList;

  const isCategoryLoading = downloadReportDataStore.data.isCategoryLoading;

  const isProductListLoading = downloadReportDataStore.data.isProductListLoading;

  const selectedPricing = downloadReportDataStore.data.selectedPricing;

  const searchText = downloadReportDataStore.data.searchText;

  const dropDownButtonOption = downloadReportDataStore.data.dropDownButtonOption;

  let fetchCategoryInformation = useStoreActions(action => action.downloadReport.fetchCategoryInformation);

  let fetchProductList = useStoreActions(action => action.downloadReport.fetchProductList);

  let updateStore = useStoreActions(action => action.downloadReport.updateStore);

  useEffect(() => {
    fetchCategoryInformation();
  }, [])

  let visibilityConditionCheck = _.get(dropDownButtonOption, 'value', null);

  const fixedDropDownInfo = [
    {
      value: 1,
      label: 'Download category',
    },
    {
      value: 2,
      label: 'Download by price',
    },
    {
      value: 3,
      label: 'Download by catalogue and price',
    },
    {
      value: 4,
      label: 'Download by product search',
    },
    {
      value: 5,
      label: 'Download by catalogue name',
    }
  ]


  return (<>

    <Header />

    <PageHeader />

    <div class="section-title-container mb-50">
      <div class="container">
        <div class="row primaryDropDownContainer" >
          <div class="col-lg-12">
            <div class="dropdown">
              <button type="button" class="btn btn-primary dropdown-toggle borderRadius9" data-toggle="dropdown">
                {isCategoryLoading && <Spinner />}
                {_.get(dropDownButtonOption, 'label', `Choose filter to classify category`)}
              </button>
              <div class="dropdown-menu">
                {
                  fixedDropDownInfo.map(item => <a class="dropdown-item"
                    onClick={() => updateStore({
                      dropDownButtonOption: item,
                      selectedPrimaryCategory: {},
                      selectedSecondaryCategory: {},
                      selectedPricing: {},
                      searchText: ""
                    })}>
                    {_.get(item, 'label', '')}
                  </a>)
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="icon-box-area mb-100 mb-md-30 mb-sm-30">
      <div class="container">
        <div class="row category1Container">

          {(visibilityConditionCheck === 1 || visibilityConditionCheck === 3) && (<>

            <div class="col-md-4 mb-md-70 mb-sm-70">
              <div class="single-icon-box">
                <div class="icon-box-content">
                  <div class="dropdown">
                    <button class="btn btn-primary dropdown-toggle categoryButtonStyle" type="button" data-toggle="dropdown" > {_.get(selectedPrimaryCategory, 'label', 'catagory 1')}</button>
                    <ul class="dropdown-menu" >
                      {
                        category1.map(item => <li><a class="dropdown-item" onClick={() => {
                          updateStore({
                            selectedPrimaryCategory: {
                              value: _.get(item, 'S_no', ''),
                              label: _.get(item, 'Category1', '')
                            }
                          })
                        }
                        }>
                          {_.get(item, 'Category1', '')}</a></li>)
                      }
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4 mb-md-70 mb-sm-70">
              <div class="single-icon-box mb-10">
                <div class="icon-box-content">
                  <div class="dropdown">
                    <button class="btn btn-primary dropdown-toggle categoryButtonStyle" type="button" data-toggle="dropdown" > {_.get(selectedSecondaryCategory, 'label', 'catagory 2')}</button>
                    <ul class="dropdown-menu" >
                      {
                        category2.map(item => <li><a class="dropdown-item" onClick={() => {
                          updateStore({
                            selectedSecondaryCategory: {
                              value: _.get(item, 'S.No', ''),
                              label: _.get(item, 'Category2', '')
                            }
                          })
                        }
                        }>
                          {_.get(item, 'Category2', '')}</a></li>)
                      }
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </>
          )}

          {(visibilityConditionCheck === 2 || visibilityConditionCheck === 3) && (
            <div class="col-md-4 mb-md-70 mb-sm-70">
              <div class="single-icon-box">
                <div class="icon-box-icon">
                  <div class="dropdown">
                    <button
                      class="btn btn-primary dropdown-toggle categoryButtonStyle"
                      type="button"
                      data-toggle="dropdown"
                    >
                      {_.get(selectedPricing, 'label', 'price')}
                    </button>
                    <ul class="dropdown-menu">
                      {
                        pricingList.map(item => <li>
                          <a class="dropdown-item" onClick={() => {
                            updateStore({ selectedPricing: item })
                          }}
                          >
                            {_.get(item, 'label', '')}
                          </a></li>)
                      }
                    </ul>
                  </div>
                </div>
              </div>
            </div>)
          }

        </div>
      </div>
    </div>


    {(visibilityConditionCheck === 4 || visibilityConditionCheck === 5) && (
      <div class="box-layout-map-area mb-100">
        <div class="container">
          <div class="col-lg-12 marginTop90">
            <form className="formContainer">
              <input
                value={searchText}
                className='searchInputContainer'
                type="text" name="search"
                placeholder={visibilityConditionCheck === 4 ? "Product search .." : `Catalogue search`}
                onChange={(event) => updateStore({ searchText: event.target.value })}
                style={{
                  width: "50%",
                  border: "2px solid #0d6efd",
                  borderRadius: "15px",
                  backgroundColor: "white",
                  padding: "12px 20px 12px 40px",
                  boxSizing: "border-box",
                  fontSize: "16px",
                  transition: "ease-in-out",
                  textAlign: "center"
                }}
              />
            </form>
          </div>
        </div>
      </div>)
    }


    <div class="section-title-container mb-50">
      <div class="container">
        <div class="row downloadButtonContainer">
          <div class="col-lg-12">
            <button
              type="button"
              class="btn btn-outline-primary downloadButtonStyle"
              onClick={() => {
                fetchProductList({
                  primaryCategory: `${_.get(selectedPrimaryCategory, 'value', '')}`,
                  secondaryCategory: `${_.get(selectedSecondaryCategory, 'value', '')}`,
                  selectedPricing,
                  searchText,
                  isProductSearch: visibilityConditionCheck === 4,
                  isCategorySearch: visibilityConditionCheck === 5,
                })
              }}
            >
              {isProductListLoading && <Spinner />}
              {isProductListLoading ? 'PROCESSING' : 'DOWNLOAD'}
            </button>
          </div>
        </div>
      </div>
    </div>

    <div style={{ display: "none" }}>
      <div id="downloadReport-uniqueID" >
        <ProductTemplate productList={productList} />
      </div>
    </div>

    <Footer />
  </>

  )
}