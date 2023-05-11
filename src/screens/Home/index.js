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
          redirectTo: "#"
        },
        {
          imagePath: "assets/images/brand/12product/arrow.jpg",
          redirectTo: "#"
        },
        {
          imagePath: "assets/images/brand/12product/borocell.jpg",
          redirectTo: "#"
        },
        {
          imagePath: "assets/images/brand/12product/Google-Products.jpg",
          redirectTo: "#"
        },
        {
          imagePath: "assets/images/brand/12product/Us-polo.jpg",
          redirectTo: "#"
        },
        {
          imagePath: "assets/images/brand/12product/Boat.jpg",
          redirectTo: "#"
        }
      ],
      [
        {
          imagePath: "assets/images/brand/12product/noise.jpg",
          redirectTo: "#"
        },
        {
          imagePath: "assets/images/brand/12product/wild-craft.jpg",
          redirectTo: "#"
        },
        {
          imagePath: "assets/images/brand/12product/amazon-devices.jpg",
          redirectTo: "#"
        },
        {
          imagePath: "assets/images/brand/12product/sony.jpg",
          redirectTo: "#"
        },
        {
          imagePath: "assets/images/brand/12product/jbl.jpg",
          redirectTo: "#"
        },
        {
          imagePath: "assets/images/brand/12product/portronics.jpg",
          redirectTo: "#"
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
          redirectTo: "#"
        },
        {
          imagePath: "assets/images/brand/scott.jpg",
          redirectTo: "#"
        },
        {
          imagePath: "assets/images/brand/zebronics.jpg",
          redirectTo: "#"
        },
        {
          imagePath: "assets/images/brand/Mark & Spencer.jpg",
          redirectTo: "#"
        },
        {
          imagePath: "assets/images/brand/Boat.jpg",
          redirectTo: "#"
        },
        {
          imagePath: "assets/images/brand/Levis.jpg",
          redirectTo: "#"
        }
      ]
    ]
  }

  const hoverBanner = [
    [
      {
        name: "Color palattle",
        redirectTo: "#",
        imagePath: "assets/images/slider/home14/banner.jpg",
        buttonLabel: "shop now"
      },
      {
        name: "Bags",
        redirectTo: "#",
        imagePath: "assets/images/slider/home14/banner2.jpg",
        buttonLabel: "shop now"
      },
      {
        name: "water bottle",
        redirectTo: "#",
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