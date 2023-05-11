import { v4 as uuid } from 'uuid';

import _ from 'lodash';

import './productList.css';

export const ProductList = (props) => {

  const { categoryName = "", products = [] } = _.get(props, 'products', { categoryName: "", products: [] });

  return <>
    <div class="section sec-con section-padding">
      <div class="container productSectionContainer">
        <h3 class="productListTitleContainer">
          {categoryName}
        </h3>
        {
          products.map(list => <div class="row mbl-brand defaultProductContainerStyle" key={uuid()} >
            {
              list.map(item => <div class="col-sm-2" key={uuid()}>
                <a href={item.redirectTo}><img src={item.imagePath} alt="" width="200" /></a>
              </div>)
            }
          </div>)}
      </div>
    </div></>
}