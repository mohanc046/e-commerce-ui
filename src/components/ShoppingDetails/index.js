
import { useState } from 'react';
import { QuickAccess } from '../QuickAccess/index';
import product1 from '../../img/product/details/product-details-1.jpg';
import product2 from '../../img/product/details/product-details-2.jpg';
import product3 from '../../img/product/details/product-details-3.jpg';
import product4 from '../../img/product/details/product-details-4.jpg';
import product5 from '../../img/product/details/product-details-5.jpg';

export const ShoppingDetails = () => {

  const [productDetails, setProductDetails] = useState({
    productName: "Vegetable’s Package",
    productImage: product1,
    sliderImages: [product2, product3, product4, product5]
  })

  return <>

    <QuickAccess />

    <div className="feedback-bg">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <div class="breadcrumb__text">
              <h2>{productDetails.productName}</h2>
              <div class="breadcrumb__option">
                <a href="/home">Home</a>
                <span>{productDetails.productName}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="product-details spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-6">
            <div class="product__details__pic">
              <div class="product__details__pic__item">
                <img class="product__details__pic__item--large" src={productDetails.productImage} alt="" />
              </div>
              <div class="product__details__pic__slider owl-carousel">
                {productDetails.sliderImages.map(item => {
                  return <img data-imgbigurl="img/product/details/product-details-2.jpg"
                    src={item} alt="" />
                })}
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
            <div class="product__details__text">
              <h3>{productDetails.productName}</h3>
              <div class="product__details__rating">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star-half-o"></i>
                <span>(18 reviews)</span>
              </div>
              <div class="product__details__price">₹50.00</div>
              <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam
                vehicula elementum sed sit amet dui. Sed porttitor lectus nibh. Vestibulum ac diam sit amet
                quam vehicula elementum sed sit amet dui. Proin eget tortor risus.</p>
              <div class="product__details__quantity">
                <div class="quantity">
                  <div class="pro-qty">
                    <input type="text" value="1" />
                  </div>
                </div>
              </div>
              <a href="/shopping-cart" class="primary-btn">ADD TO CARD</a>
              <a href="#" class="heart-icon"><span class="icon_heart_alt"></span></a>
              <ul>
                <li><b>Availability</b> <span>In Stock</span></li>
                <li><b>Shipping</b> <span>01 day shipping. <samp>Free pickup today</samp></span></li>
                <li><b>Weight</b> <span>0.5 kg</span></li>
                <li><b>Share on</b>
                  <div class="share">
                    <a href="#"><i class="fa fa-facebook"></i></a>
                    <a href="#"><i class="fa fa-twitter"></i></a>
                    <a href="#"><i class="fa fa-instagram"></i></a>
                    <a href="#"><i class="fa fa-pinterest"></i></a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-12">
            <div class="product__details__tab">
              <ul class="nav nav-tabs" role="tablist">
                <li class="nav-item">
                  <a class="nav-link active" data-toggle="tab" href="#tabs-1" role="tab"
                    aria-selected="true">Description</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-toggle="tab" href="#tabs-2" role="tab"
                    aria-selected="false">Information</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-toggle="tab" href="#tabs-3" role="tab"
                    aria-selected="false">Reviews <span>(1)</span></a>
                </li>
              </ul>
              <div class="tab-content">
                <div class="tab-pane active" id="tabs-1" role="tabpanel">
                  <div class="product__details__tab__desc">
                    <h6>Products Infomation</h6>
                    <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
                      Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Vivamus
                      suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam
                      vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada.
                      Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat,
                      accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a
                      pellentesque nec, egestas non nisi. Vestibulum ac diam sit amet quam vehicula
                      elementum sed sit amet dui. Vestibulum ante ipsum primis in faucibus orci luctus
                      et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam
                      vel, ullamcorper sit amet ligula. Proin eget tortor risus.</p>
                    <p>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem
                      ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet
                      elit, eget tincidunt nibh pulvinar a. Cras ultricies ligula sed magna dictum
                      porta. Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus
                      nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                      Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Sed
                      porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum
                      sed sit amet dui. Proin eget tortor risus.</p>
                  </div>
                </div>
                <div class="tab-pane" id="tabs-2" role="tabpanel">
                  <div class="product__details__tab__desc">
                    <h6>Products Infomation</h6>
                    <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
                      Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus.
                      Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam
                      sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo
                      eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat.
                      Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent
                      sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ac
                      diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ante
                      ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                      Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
                      Proin eget tortor risus.</p>
                    <p>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem
                      ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet
                      elit, eget tincidunt nibh pulvinar a. Cras ultricies ligula sed magna dictum
                      porta. Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus
                      nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.</p>
                  </div>
                </div>
                <div class="tab-pane" id="tabs-3" role="tabpanel">
                  <div class="product__details__tab__desc">
                    <h6>Products Infomation</h6>
                    <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
                      Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus.
                      Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam
                      sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo
                      eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat.
                      Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent
                      sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ac
                      diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ante
                      ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                      Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
                      Proin eget tortor risus.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>

}