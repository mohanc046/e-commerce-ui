import { v4 as uuid } from 'uuid';

import _ from 'lodash';

import './hoverBanner.css'

export const HoverBanner = (props) => {

  const { products = [] } = _.get(props, 'products', { categoryName: "", products: [] });

  return <div class="hover-banner-area mb-65 mb-md-45 mb-sm-45">
    <div class="container wide figContainer">
      {
        products.map(list => <div class="row" key={uuid()}>
          {
            list.map(item => <div class="col-md-4 mb-30" key={uuid()}>
              <div class="single-category single-category--three">
                <figure class="single-category__image single-category__image--three single-category__image--three--creativehome single-category__image--three--banner figOuterContainer">
                  <img src={item.imagePath} class="img-fluid" alt="" />
                  <figcaption class="title figCaptionContainer">
                    <p><a href="#">{item.name}</a></p>
                    <button class="figButtonStyle"><a href={item.redirectTo}>shop now</a></button>
                  </figcaption>
                </figure>
                <a href={item.redirectTo} class="banner-link"></a>
              </div>
            </div>)
          }
        </div>)
      }
    </div>
  </div>
}