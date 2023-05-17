import _ from 'lodash';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Carousel } from '../../components/Carousel';
import { DealCard } from '../../components/DealCard';
import './home.css';
import { ProductList } from '../../components/ProductList';
import { HoverBanner } from '../../components/HoverBanner';

export const Home = () => {

  const exclusiveBrand = {
    categoryName: "BEST OF NSH EXCLUSIVE BRANDS",
    products: [
      [
        {
          imagePath: "assets/images/brand/12product/american-Tourister.jpg",
          redirectTo: '/products'
        },
        {
          imagePath: "assets/images/brand/12product/arrow.jpg",
          redirectTo: '/products'
        },
        {
          imagePath: "assets/images/brand/12product/borocell.jpg",
          redirectTo: '/products'
        },
        {
          imagePath: "assets/images/brand/12product/Google-Products.jpg",
          redirectTo: '/products'
        },
        {
          imagePath: "assets/images/brand/12product/Us-polo.jpg",
          redirectTo: '/products'
        },
        {
          imagePath: "assets/images/brand/12product/Boat.jpg",
          redirectTo: '/products'
        }
      ],
      [
        {
          imagePath: "assets/images/brand/12product/noise.jpg",
          redirectTo: '/products'
        },
        {
          imagePath: "assets/images/brand/12product/wild-craft.jpg",
          redirectTo: '/products'
        },
        {
          imagePath: "assets/images/brand/12product/amazon-devices.jpg",
          redirectTo: '/products'
        },
        {
          imagePath: "assets/images/brand/12product/sony.jpg",
          redirectTo: '/products'
        },
        {
          imagePath: "assets/images/brand/12product/jbl.jpg",
          redirectTo: '/products'
        },
        {
          imagePath: "assets/images/brand/12product/portronics.jpg",
          redirectTo: '/products'
        }
      ]
    ]
  }

  const bestOfBrand = {
    categoryName: "BEST OF MONTH",
    products: [
      [
        {
          imagePath: "assets/images/brand/t-shirts.jpg",
          redirectTo: '/products'
        },
        {
          imagePath: "assets/images/brand/scott.jpg",
          redirectTo: '/products'
        },
        {
          imagePath: "assets/images/brand/zebronics.jpg",
          redirectTo: '/products'
        },
        {
          imagePath: "assets/images/brand/Mark & Spencer.jpg",
          redirectTo: '/products'
        },
        {
          imagePath: "assets/images/brand/Boat.jpg",
          redirectTo: '/products'
        },
        {
          imagePath: "assets/images/brand/Levis.jpg",
          redirectTo: '/products'
        }
      ]
    ]
  }

  const hoverBanner = [
    [
      {
        name: "Color palattle",
        redirectTo: '/products',
        imagePath: "assets/images/slider/home14/banner.jpg",
        buttonLabel: "shop now"
      },
      {
        name: "Bags",
        redirectTo: '/products',
        imagePath: "assets/images/slider/home14/banner2.jpg",
        buttonLabel: "shop now"
      },
      {
        name: "water bottle",
        redirectTo: '/products',
        imagePath: "assets/images/slider/home14/banner3.jpg",
        buttonLabel: "shop now"
      }
    ]
  ] 

  return (<div class="homeContainer">

    <Header />

    <Carousel />

    <ProductList products={exclusiveBrand} />

    <HoverBanner productList={hoverBanner} />

    <ProductList products={bestOfBrand} />

    <DealCard />

    <Footer />
  </div>

  )
}