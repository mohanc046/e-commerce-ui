import './sidenav.css';

export const SideNav = () => {
  return (
    <>
      {/* <!-- OffCanvas Search Start --> */}
      <div id="offcanvas-search" class="offcanvas offcanvas-search">
        <div class="inner">
          <div class="offcanvas-search-form">
            <button class="offcanvas-close">×</button>
            <form action="#">
              <div class="row mb-n3">
                <div class="col-lg-8 col-12 mb-3"><input type="text" placeholder="Search Products..." /></div>
                <div class="col-lg-4 col-12 mb-3">
                  <select class="search-select select2-basic">
                    <option value="0">All Categories</option>
                    <option value="kids-babies">Kids &amp; Babies</option>
                    <option value="home-decor">Home Decor</option>
                    <option value="gift-ideas">Gift ideas</option>
                    <option value="kitchen">Kitchen</option>
                    <option value="toys">Toys</option>
                    <option value="kniting-sewing">Kniting &amp; Sewing</option>
                    <option value="pots">Pots</option>
                  </select>
                </div>
              </div>
            </form>
          </div>
          <p class="search-description text-body-light mt-2"> <span># Type at least 1 character to search</span> <span># Hit enter to search or ESC to close</span></p>

        </div>
      </div>
      {/* <!-- OffCanvas Search End --> */}

      {/* <!-- OffCanvas Wishlist Start --> */}
      <div id="offcanvas-wishlist" class="offcanvas offcanvas-wishlist">
        <div class="inner">
          <div class="head">
            <span class="title">Wishlist</span>
            <button class="offcanvas-close">×</button>
          </div>
          <div class="body customScroll">
            <ul class="minicart-product-list">
              <li>
                <a href="product-details.html" class="image"><img src="assets/images/product/cart-product-1.webp" alt="Cart product Image" /></a>
                <div class="content">
                  <a href="product-details.html" class="title">Walnut Cutting Board</a>
                  <span class="quantity-price">1 x <span class="amount">$100.00</span></span>
                  <a href="#" class="remove">×</a>
                </div>
              </li>
              <li>
                <a href="product-details.html" class="image"><img src="assets/images/product/cart-product-2.webp" alt="Cart product Image" /></a>
                <div class="content">
                  <a href="product-details.html" class="title">Lucky Wooden Elephant</a>
                  <span class="quantity-price">1 x <span class="amount">$35.00</span></span>
                  <a href="#" class="remove">×</a>
                </div>
              </li>
              <li>
                <a href="product-details.html" class="image"><img src="assets/images/product/cart-product-3.webp" alt="Cart product Image" /></a>
                <div class="content">
                  <a href="product-details.html" class="title">Fish Cut Out Set</a>
                  <span class="quantity-price">1 x <span class="amount">$9.00</span></span>
                  <a href="#" class="remove">×</a>
                </div>
              </li>
            </ul>
          </div>
          <div class="foot">
            <div class="buttons">
              <a href="wishlist.html" class="btn btn-dark btn-hover-primary">view wishlist</a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- OffCanvas Wishlist End --> */}

      {/* <!-- OffCanvas Cart Start --> */}
      <div id="offcanvas-cart" class="offcanvas offcanvas-cart">
        <div class="inner">
          <div class="head">
            <span class="title">Cart</span>
            <button class="offcanvas-close">×</button>
          </div>
          <div class="body customScroll">
            <ul class="minicart-product-list">
              <li>
                <a href="product-details.html" class="image"><img src="assets/images/product/cart-product-1.webp" alt="Cart product Image" /></a>
                <div class="content">
                  <a href="product-details.html" class="title">Walnut Cutting Board</a>
                  <span class="quantity-price">1 x <span class="amount">$100.00</span></span>
                  <a href="#" class="remove">×</a>
                </div>
              </li>
              <li>
                <a href="product-details.html" class="image"><img src="assets/images/product/cart-product-2.webp" alt="Cart product Image" /></a>
                <div class="content">
                  <a href="product-details.html" class="title">Lucky Wooden Elephant</a>
                  <span class="quantity-price">1 x <span class="amount">$35.00</span></span>
                  <a href="#" class="remove">×</a>
                </div>
              </li>
              <li>
                <a href="product-details.html" class="image"><img src="assets/images/product/cart-product-3.webp" alt="Cart product Image" /></a>
                <div class="content">
                  <a href="product-details.html" class="title">Fish Cut Out Set</a>
                  <span class="quantity-price">1 x <span class="amount">$9.00</span></span>
                  <a href="#" class="remove">×</a>
                </div>
              </li>
            </ul>
          </div>
          <div class="foot">
            <div class="sub-total">
              <strong>Subtotal :</strong>
              <span class="amount">$144.00</span>
            </div>
            <div class="buttons">
              <a href="shopping-cart.html" class="btn btn-dark btn-hover-primary">view cart</a>
              <a href="checkout.html" class="btn btn-outline-dark">checkout</a>
            </div>
            <p class="minicart-message">Free Shipping on All Orders Over $100!</p>
          </div>
        </div>
      </div>
      {/* <!-- OffCanvas Cart End --> */}

      {/* <!-- OffCanvas Search Start --> */}
      <div id="offcanvas-mobile-menu" class="offcanvas offcanvas-mobile-menu">
        <div class="inner customScroll">
          <div class="offcanvas-menu-search-form">
            <form action="#">
              <input type="text" placeholder="Search..." />
              <button><i class="fal fa-search"></i></button>
            </form>
          </div>
          <div class="offcanvas-menu">
            <ul>
              <li><a href="#"><span class="menu-text">Home</span></a>
                <ul class="sub-menu">
                  <li>
                    <a href="#"><span class="menu-text">Home Group</span></a>
                    <ul class="sub-menu">
                      <li><a href="index.html"><span class="menu-text">Arts Propelled</span></a></li>
                      <li><a href="index-2.html"><span class="menu-text">Decor Thriving</span></a></li>
                      <li><a href="index-3.html"><span class="menu-text">Savvy Delight</span></a></li>
                      <li><a href="index-4.html"><span class="menu-text">Perfect Escapes</span></a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="#"><span class="menu-text">Home Group</span></a>
                    <ul class="sub-menu">
                      <li><a href="index-5.html"><span class="menu-text">Kitchen Cozy</span></a></li>
                      <li><a href="index-6.html"><span class="menu-text">Dreamy Designs</span></a></li>
                      <li><a href="index-7.html"><span class="menu-text">Crispy Recipes</span></a></li>
                      <li><a href="index-8.html"><span class="menu-text">Decoholic Chic</span></a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="#"><span class="menu-text">Home Group</span></a>
                    <ul class="sub-menu">
                      <li><a href="index-9.html"><span class="menu-text">Reblended Dish</span></a></li>
                      <li><a href="index-10.html"><span class="menu-text">Craftin House</span></a></li>
                      <li><a href="index-11.html"><span class="menu-text">Craftswork Biz</span></a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li><a href="#"><span class="menu-text">Shop</span></a>
                <ul class="sub-menu">
                  <li>
                    <a href="#"><span class="menu-text">Shop Pages</span></a>
                    <ul class="sub-menu">
                      <li><a href="shop.html"><span class="menu-text">Shop No Sidebar</span></a></li>
                      <li><a href="shop-left-sidebar.html"><span class="menu-text">Shop Left Sidebar</span></a></li>
                      <li><a href="shop-right-sidebar.html"><span class="menu-text">Shop Right Sidebar</span></a></li>
                      <li><a href="shop-fullwidth-no-gutters.html"><span class="menu-text">Shop Fullwidth No Space</span></a></li>
                      <li><a href="shop-fullwidth.html"><span class="menu-text">Shop Fullwidth No Sidebar</span></a></li>
                      <li><a href="shop-fullwidth-left-sidebar.html"><span class="menu-text">Shop Fullwidth Left Sidebar</span></a></li>
                      <li><a href="shop-fullwidth-right-sidebar.html"><span class="menu-text">Shop Fullwidth Right Sidebar</span></a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="#"><span class="menu-text">Product Pages</span></a>
                    <ul class="sub-menu">
                      <li><a href="product-details.html"><span class="menu-text">Basic</span></a></li>
                      <li><a href="product-details-fullwidth.html"><span class="menu-text">Fullwidth</span></a></li>
                      <li><a href="product-details-sticky.html"><span class="menu-text">Sticky Details</span></a></li>
                      <li><a href="product-details-sidebar.html"><span class="menu-text">Width Sidebar</span></a></li>
                      <li><a href="product-details-extra-content.html"><span class="menu-text">Extra Content</span></a></li>
                      <li><a href="product-details-image-variation.html"><span class="menu-text">Variations Images</span></a></li>
                      <li><a href="product-details-group.html"><span class="menu-text">Bought Together</span></a></li>
                      <li><a href="product-details-360.html"><span class="menu-text">Product 360</span></a></li>
                      <li><a href="product-details-background.html"><span class="menu-text">Product with Background</span></a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="#" class="mega-menu-title"><span class="menu-text">PRODUCT & Other PAGES</span></a>
                    <ul class="sub-menu">
                      <li><a href="shopping-cart.html"><span class="menu-text">Shopping Cart</span></a></li>
                      <li><a href="checkout.html"><span class="menu-text">Checkout</span></a></li>
                      <li><a href="order-tracking.html"><span class="menu-text">Order Tracking</span></a></li>
                      <li><a href="wishlist.html"><span class="menu-text">Wishlist</span></a></li>
                      <li><a href="login-register.html"><span class="menu-text">Customer Login</span></a></li>
                      <li><a href="my-account.html"><span class="menu-text">My Account</span></a></li>
                      <li><a href="lost-password.html"><span class="menu-text">Lost Password</span></a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li><a href="#"><span class="menu-text">Project</span></a>
                <ul class="sub-menu">
                  <li><a href="portfolio-3-columns.html"><span class="menu-text">Portfolio 3 Columns</span></a></li>
                  <li><a href="portfolio-4-columns.html"><span class="menu-text">Portfolio 4 Columns</span></a></li>
                  <li><a href="portfolio-5-columns.html"><span class="menu-text">Portfolio 5 Columns</span></a></li>
                  <li><a href="portfolio-details.html"><span class="menu-text">Portfolio Details</span></a></li>
                </ul>
              </li>
              <li><a href="#"><span class="menu-text">Elements</span></a>
                <ul class="sub-menu">
                  <li>
                    <a href="#" class="mega-menu-title"><span class="menu-text">Column One</span></a>
                    <ul class="sub-menu">
                      <li><a href="elements-products.html"><span class="menu-text">Product Styles</span></a></li>
                      <li><a href="elements-products-tabs.html"><span class="menu-text">Product Tabs</span></a></li>
                      <li><a href="elements-product-sale-banner.html"><span class="menu-text">Product & Sale Banner</span></a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="#" class="mega-menu-title"><span class="menu-text">Column Two</span></a>
                    <ul class="sub-menu">
                      <li><a href="elements-category-banner.html"><span class="menu-text">Category Banner</span></a></li>
                      <li><a href="elements-team.html"><span class="menu-text">Team Member</span></a></li>
                      <li><a href="elements-testimonials.html"><span class="menu-text">Testimonials</span></a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="#" class="mega-menu-title"><span class="menu-text">Column Three</span></a>
                    <ul class="sub-menu">
                      <li><a href="elements-instagram.html"><span class="menu-text">Instagram</span></a></li>
                      <li><a href="elements-map.html"><span class="menu-text">Google Map</span></a></li>
                      <li><a href="elements-icon-box.html"><span class="menu-text">Icon Box</span></a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="#" class="mega-menu-title"><span class="menu-text">Column Four</span></a>
                    <ul class="sub-menu">
                      <li><a href="elements-buttons.html"><span class="menu-text">Buttons</span></a></li>
                      <li><a href="elements-faq.html"><span class="menu-text">FAQs / Toggles</span></a></li>
                      <li><a href="elements-brands.html"><span class="menu-text">Brands</span></a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li><a href="#"><span class="menu-text">Blog</span></a>
                <ul class="sub-menu">
                  <li><a href="#"><span class="menu-text">Standard Layout</span></a>
                    <ul class="sub-menu">
                      <li><a href="blog-right-sidebar.html"><span class="menu-text">Right Sidebar</span></a></li>
                      <li><a href="blog-left-sidebar.html"><span class="menu-text">Left Sidebar</span></a></li>
                      <li><a href="blog-fullwidth.html"><span class="menu-text">Full Width</span></a></li>
                    </ul>
                  </li>
                  <li><a href="#"><span class="menu-text">Grid Layout</span></a>
                    <ul class="sub-menu">
                      <li><a href="blog-grid-right-sidebar.html"><span class="menu-text">Right Sidebar</span></a></li>
                      <li><a href="blog-grid-left-sidebar.html"><span class="menu-text">Left Sidebar</span></a></li>
                      <li><a href="blog-grid-fullwidth.html"><span class="menu-text">Full Width</span></a></li>
                    </ul>
                  </li>
                  <li><a href="#"><span class="menu-text">List Layout</span></a>
                    <ul class="sub-menu">
                      <li><a href="blog-list-right-sidebar.html"><span class="menu-text">Right Sidebar</span></a></li>
                      <li><a href="blog-list-left-sidebar.html"><span class="menu-text">Left Sidebar</span></a></li>
                      <li><a href="blog-list-fullwidth.html"><span class="menu-text">Full Width</span></a></li>
                    </ul>
                  </li>
                  <li><a href="#"><span class="menu-text">Masonry Layout</span></a>
                    <ul class="sub-menu">
                      <li><a href="blog-masonry-right-sidebar.html"><span class="menu-text">Right Sidebar</span></a></li>
                      <li><a href="blog-masonry-left-sidebar.html"><span class="menu-text">Left Sidebar</span></a></li>
                      <li><a href="blog-masonry-fullwidth.html"><span class="menu-text">Full Width</span></a></li>
                    </ul>
                  </li>
                  <li><a href="#"><span class="menu-text">Single Post Layout</span></a>
                    <ul class="sub-menu">
                      <li><a href="blog-details-right-sidebar.html"><span class="menu-text">Right Sidebar</span></a></li>
                      <li><a href="blog-details-left-sidebar.html"><span class="menu-text">Left Sidebar</span></a></li>
                      <li><a href="blog-details-fullwidth.html"><span class="menu-text">Full Width</span></a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li><a href="#"><span class="menu-text">Pages</span></a>
                <ul class="sub-menu">
                  <li><a href="about-us.html"><span class="menu-text">About us</span></a></li>
                  <li><a href="about-us-2.html"><span class="menu-text">About us 02</span></a></li>
                  <li><a href="contact-us.html"><span class="menu-text">Contact us</span></a></li>
                  <li><a href="coming-soon.html"><span class="menu-text">Coming Soon</span></a></li>
                  <li><a href="404.html"><span class="menu-text">Page 404</span></a></li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="offcanvas-buttons">
            <div class="header-tools">
              <div class="header-login">
                <a href="my-account.html"><i class="fal fa-user"></i></a>
              </div>
              <div class="header-wishlist">
                <a href="wishlist.html"><span>3</span><i class="fal fa-heart"></i></a>
              </div>
              <div class="header-cart">
                <a href="shopping-cart.html"><span class="cart-count">3</span><i class="fal fa-shopping-cart"></i></a>
              </div>
            </div>
          </div>
          <div class="offcanvas-social">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>
      {/* <!-- OffCanvas Search End --> */}

      <div class="offcanvas-overlay"></div>

    </>
  )
}