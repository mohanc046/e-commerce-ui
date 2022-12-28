import banner from '../../img/hero/banner.jpg'

import feature1 from '../../img/featured/feature-1.jpg'
import feature2 from '../../img/featured/feature-2.jpg'
import feature3 from '../../img/featured/feature-3.jpg'
import feature4 from '../../img/featured/feature-4.jpg'
import feature5 from '../../img/featured/feature-5.jpg'
import feature6 from '../../img/featured/feature-6.jpg'
import feature7 from '../../img/featured/feature-7.jpg'
import feature8 from '../../img/featured/feature-8.jpg'

import category_1 from '../../img/categories/cat-1.jpg'
import category_2 from '../../img/categories/cat-2.jpg'
import category_3 from '../../img/categories/cat-3.jpg'
import category_4 from '../../img/categories/cat-4.jpg'
import category_5 from '../../img/categories/cat-5.jpg'

import { useState } from 'react'

export const Home = () => {


  const [featuredProduct, setFeaturedProduct] = useState([
    {
      additionCss: "fresh-meat",
      backgroundContainerStyle: { backgroundImage: `url(${feature1})` },
      productName: "Crab Pool Security",
      price: '₹30.00'
    },
    {
      additionCss: "fresh-meat",
      backgroundContainerStyle: { backgroundImage: `url(${feature2})` },
      productName: "Crab Pool Security",
      price: '₹30.00'
    },
    {
      additionCss: "fresh-meat",
      backgroundContainerStyle: { backgroundImage: `url(${feature3})` },
      productName: "Crab Pool Security",
      price: '₹30.00'
    },
    {
      additionCss: "fresh-meat",
      backgroundContainerStyle: { backgroundImage: `url(${feature4})` },
      productName: "Crab Pool Security",
      price: '₹30.00'
    },
    {
      additionCss: "fresh-meat",
      backgroundContainerStyle: { backgroundImage: `url(${feature5})` },
      productName: "Crab Pool Security",
      price: '₹30.00'
    },
    {
      additionCss: "fresh-meat",
      backgroundContainerStyle: { backgroundImage: `url(${feature6})` },
      productName: "Crab Pool Security",
      price: '₹30.00'
    },
    {
      additionCss: "fresh-meat",
      backgroundContainerStyle: { backgroundImage: `url(${feature7})` },
      productName: "Crab Pool Security",
      price: '₹30.00'
    },
    {
      additionCss: "fresh-meat",
      backgroundContainerStyle: { backgroundImage: `url(${feature8})` },
      productName: "Crab Pool Security",
      price: '₹30.00'
    },
  ])

  const [slider, setSlider] = useState([
    {
      productName: 'Fresh Fruit',
      backgroundContainerStyle: { backgroundImage: `url(${category_1})` }
    },
    {
      productName: 'Dried Fruit',
      backgroundContainerStyle: { backgroundImage: `url(${category_2})` }
    },
    {
      productName: 'Vegetables',
      backgroundContainerStyle: { backgroundImage: `url(${category_3})` }
    },
    {
      productName: 'drink fruits',
      backgroundContainerStyle: { backgroundImage: `url(${category_4})` }
    },
    {
      productName: 'drink fruits',
      backgroundContainerStyle: { backgroundImage: `url(${category_5})` }
    },
  ])

  return (<>
    <section class="hero">
      <div class="container">
        <div class="row">
          <div class="col-lg-3">
            <div class="hero__categories">
              <div class="hero__categories__all">
                <i class="fa fa-bars"></i>
                <span>All departments</span>
              </div>
              <ul>
                <li><a href="#">Fresh Meat</a></li>
                <li><a href="#">Vegetables</a></li>
                <li><a href="#">Fruit & Nut Gifts</a></li>
                <li><a href="#">Fresh Berries</a></li>
                <li><a href="#">Ocean Foods</a></li>
                <li><a href="#">Butter & Eggs</a></li>
                <li><a href="#">Fast food</a></li>
                <li><a href="#">Fresh Onion</a></li>
                <li><a href="#">Papaya & Crisps</a></li>
                <li><a href="#">Oatmeal</a></li>
                <li><a href="#">Fresh Bananas</a></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-9">
            <div class="hero__search">
              <div class="hero__search__form">
                <form action="#">
                  <div class="hero__search__categories">
                    All Categories
                    <span class="arrow_carrot-down"></span>
                  </div>
                  <input type="text" placeholder="What do yo u need?" />
                  <button type="submit" class="site-btn">SEARCH</button>
                </form>
              </div>
              <div class="hero__search__phone">
                <div class="hero__search__phone__icon">
                  <i class="fa fa-phone"></i>
                </div>
                <div class="hero__search__phone__text">
                  <h5>+65 11.188.888</h5>
                  <span>support 24/7 time</span>
                </div>
              </div>
            </div>
            <div class="hero__item set-bg" style={{ backgroundImage: `url(${banner})` }}>
              <div class="hero__text">
                <span>FRUIT FRESH</span>
                <h2>Vegetable <br />100% Organic</h2>
                <p>Free Pickup and Delivery Available</p>
                <a href="#" class="primary-btn">SHOP NOW</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="categories">
      <div class="container">
        <div class="row">
          <div class="categories__slider owl-carousel">
            {slider.map(item => {
              return <div class="col-lg-3">
                <div class="categories__item set-bg" style={item.backgroundContainerStyle} >
                  <h5><a href="/shop-details">{item.productName}</a></h5>
                </div>
              </div>
            })}
          </div>
        </div>
      </div>
    </section>

    <section class="featured spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-title">
              <h2>Featured Product</h2>
            </div>
            <div class="featured__controls">
              <ul>
                <li class="active" data-filter="*">All</li>
                <li data-filter=".oranges">Oranges</li>
                <li data-filter=".fresh-meat">Fresh Meat</li>
                <li data-filter=".vegetables">Vegetables</li>
                <li data-filter=".fastfood">Fastfood</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="row featured__filter">
          {featuredProduct.map(item => {
            return <div class={`col-lg-3 col-md-4 col-sm-6 mix oranges ${item.additionCss}`}>
              <div class="featured__item">
                <div class="featured__item__pic set-bg" style={item.backgroundContainerStyle}>
                  <ul class="featured__item__pic__hover">
                    <li><a href="/shop-details"><i class="fa fa-heart"></i></a></li>
                    <li><a href="/shopping-cart"><i class="fa fa-retweet"></i></a></li>
                    <li><a href="/shopping-cart"><i class="fa fa-shopping-cart"></i></a></li>
                  </ul>
                </div>
                <div class="featured__item__text">
                  <h6><a href="/shop-details">{item.productName}</a></h6>
                  <h5>{item.price}</h5>
                </div>
              </div>
            </div>
          })}
        </div>
      </div>
    </section>
  </>

  )
}