
import { useState } from 'react';
import { QuickAccess } from '../QuickAccess/index';
import cart1 from '../../img/cart/cart-1.jpg';
import cart2 from '../../img/cart/cart-2.jpg';
import cart3 from '../../img/cart/cart-3.jpg';

export const ShoppingCart = () => {

  const [shoppingDetails, setShoppingDetails] = useState([
    {
      productName: "Vegetable’s Package",
      productImage: cart1,
      price: "₹55.00",
      quantity: "2",
      totalPrice: "₹110.00"
    },
    {
      productName: "Fresh Garden Vegetable",
      productImage: cart2,
      price: "₹55.00",
      quantity: "2",
      totalPrice: "₹110.00"
    },
    {
      productName: "Organic Bananas",
      productImage: cart3,
      price: "₹55.00",
      quantity: "2",
      totalPrice: "₹110.00"
    }


  ])

  return <>

    <QuickAccess />


    <div className="feedback-bg">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <div class="breadcrumb__text">
              <h2>Shopping Cart</h2>
              <div class="breadcrumb__option">
                <a href="/home">Home</a>
                <span>Shopping Cart</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="shoping-cart spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="shoping__cart__table">
              <table>
                <thead>
                  <tr>
                    <th class="shoping__product">Products</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {shoppingDetails.map(item => {
                    return <tr>
                      <td class="shoping__cart__item">
                        <img src={item.productImage} alt="" />
                        <h5>{item.productName}</h5>
                      </td>
                      <td class="shoping__cart__price">
                        {item.price}
                      </td>
                      <td class="shoping__cart__quantity">
                        <div class="quantity">
                          <div class="pro-qty">
                            <input type="text" value={`₹{item.quantity}`} />
                          </div>
                        </div>
                      </td>
                      <td class="shoping__cart__total">
                        {item.totalPrice}
                      </td>
                      <td class="shoping__cart__item__close">
                        <span class="icon_close"></span>
                      </td>
                    </tr>
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="shoping__cart__btns">
              <a href="#" class="primary-btn cart-btn">CONTINUE SHOPPING</a>
              <a href="#" class="primary-btn cart-btn cart-btn-right"><span class="icon_loading"></span>
                Update Cart</a>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="shoping__continue">
              <div class="shoping__discount">
                <h5>Discount Codes</h5>
                <form action="#">
                  <input type="text" placeholder="Enter your coupon code" />
                  <button type="submit" class="site-btn">APPLY COUPON</button>
                </form>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="shoping__checkout">
              <h5>Cart Total</h5>
              <ul>
                <li>Subtotal <span>₹454.98</span></li>
                <li>Total <span>₹454.98</span></li>
              </ul>
              <a href="/checkout" class="primary-btn">PROCEED TO CHECKOUT</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>

}