import { SideNav } from '../SideNav';
import './header.css';

export const Header = () => {
    return (
        <>

            {/* <!-- Header Section Start --> */}
            <div class="header-section section section-fluid bg-white d-none d-xl-block">
                <div class="container">
                    <div class="row align-items-center desktopHeaderContainer">

                        {/* <!-- Header Logo Start --> */}
                        <div class="col-auto">
                            <div class="header-logo">
                                <a href="/home">
                                    <img src="assets/images/logo/logo-nsh.png" class="img-fluid" alt="NewsourceHub" />
                                </a>
                            </div>
                        </div>
                        {/* <!-- Header Logo End --> */}

                        {/* <!-- Search Start --> */}

                        {/* <!-- Search End --> */}

                        {/* <!-- Search Start --> */}
                        <div class="col-auto d-none d-xl-block">
                            <div class="header2-search">
                                <form action="#">
                                    <input type="text" placeholder="Search..." />
                                    <button class="btn"><i class="far fa-search"></i></button>
                                </form>
                            </div>
                        </div>
                        {/* <!-- Search End --> */}

                        {/* <!-- Header Tools Start --> */}
                        <div class="col-auto">
                            <div class="header-tools justify-content-end">
                                <div class="header-login d-none d-sm-block">
                                    <a href="my-account.html"><i class="fal fa-user defaultFontSize"></i></a>
                                </div>
                                <div class="header-search d-none d-sm-block d-xl-none">
                                    <a href="#offcanvas-search" class="offcanvas-toggle"><i class="fal fa-search"></i></a>
                                </div>
                                <div class="header-wishlist d-none d-sm-block">
                                    <a href="#offcanvas-wishlist" class="offcanvas-toggle"><span class="wishlist-count">3</span><i class="fal fa-heart defaultFontSize"></i></a>
                                </div>
                                <div class="header-cart">
                                    <a href="#offcanvas-cart" class="offcanvas-toggle"><span class="cart-count">3</span><i class="fal fa-shopping-cart defaultFontSize"></i></a>
                                </div>
                                <div class="mobile-menu-toggle d-xl-none">
                                    <a href="#" class="offcanvas-toggle">
                                        <svg viewBox="0 0 800 600">
                                            <path d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200" class="top"></path>
                                            <path d="M300,320 L540,320" class="middle"></path>
                                            <path d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190" class="bottom" transform="translate(480, 320) scale(1, -1) translate(-480, -318) "></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--Header Section End-- > */}

            {/* < !--Header Section Start-- > */}
            <div class="sticky-header section bg-white  d-none d-xl-block">
                <div class="section-fluid">
                    <div class="row align-items-center desktopHeaderContainer">

                        {/* <!-- Header Logo Start --> */}
                        <div class="col-auto">
                            <div class="header-logo">
                                <a href="https://newsourcehub.com/home">
                                    <img src="assets/images/logo/logo-nsh.png" class="img-fluid" alt="NewsourceHub" />
                                </a>
                            </div>
                        </div>
                        {/* <!-- Header Logo End --> */}
                        {/* <!-- Search Start --> */}
                        {/* <!-- Search End --> */}

                        {/* <!-- Search Start --> */}
                        <div class="col-auto d-none d-xl-block">
                            <div class="header2-search">
                                <form action="#">
                                    <input type="text" placeholder="Search..." />
                                    <button class="btn"><i class="far fa-search"></i></button>
                                </form>
                            </div>
                        </div>
                        {/* <!-- Search End --> */}

                        {/* <!-- Header Tools Start --> */}
                        <div class="col-auto">
                            <div class="header-tools justify-content-end">
                                <div class="header-login d-none d-sm-block">
                                    <a href="my-account.html"><i class="fal fa-user defaultFontSize"></i></a>
                                </div>
                                <div class="header-search d-none d-sm-block d-xl-none">
                                    <a href="#offcanvas-search" class="offcanvas-toggle"><i class="fal fa-search"></i></a>
                                </div>
                                <div class="header-wishlist d-none d-sm-block">
                                    <a href="#offcanvas-wishlist" class="offcanvas-toggle"><span class="wishlist-count">3</span><i class="fal fa-heart defaultFontSize"></i></a>
                                </div>
                                <div class="header-cart">
                                    <a href="#offcanvas-cart" class="offcanvas-toggle"><span class="cart-count">3</span><i class="fal fa-shopping-cart defaultFontSize"></i></a>
                                </div>
                                <div class="mobile-menu-toggle d-xl-none">
                                    <a href="#" class="offcanvas-toggle">
                                        <svg viewBox="0 0 800 600">
                                            <path d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200" class="top"></path>
                                            <path d="M300,320 L540,320" class="middle"></path>
                                            <path d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190" class="bottom" transform="translate(480, 320) scale(1, -1) translate(-480, -318) "></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Header Tools End --> */}

                    </div>
                </div>
                <div class="row-2">
                    <div class="header-section section section-fluid bg-white d-none d-d-block desktopStickyContainer">
                        <div class="container">
                            <div class="row align-items-center">
                                <div class="col-auto me-auto paddingLeft13">
                                    <nav class="site-main-menu site-main-menu-left menu-height-100 justify-content-center">
                                        <ul>
                                            <li class=""><a href="#"><span class="menu-text">ELECTRONICS</span></a>
                                            </li>
                                            <li class="has-children"><a href="#"><span class="menu-text">APPAREL</span></a>
                                                <ul class="sub-menu mega-menu fontSize16" >
                                                    <li>
                                                        <a href="#" class="mega-menu-title"><span class="menu-text"><h6 class="desktopMenuTitleStyle" >Clothing & Accessories</h6></span></a>
                                                        <ul>
                                                            <li><a href="elements-products.html"><span class="menu-text">Jackets</span></a></li>
                                                            <li><a href="elements-products-tabs.html"><span class="menu-text">Shirts</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">T-Shirts</span></a></li>
                                                            <li><a href="elements-products.html"><span class="menu-text">Sweatshirt</span></a></li>
                                                            <li><a href="elements-products-tabs.html"><span class="menu-text">Tracksuit</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Face Mask</span></a></li>
                                                            <li><a href="elements-products.html"><span class="menu-text">Watch</span></a></li>
                                                            <li><a href="elements-products-tabs.html"><span class="menu-text">Brand</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Belt</span></a></li>
                                                            <li><a href="elements-products.html"><span class="menu-text">Sunglass</span></a></li>
                                                            <li><a href="elements-products-tabs.html"><span class="menu-text">Trck Tops</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Jacket</span></a></li>
                                                            <li><a href="elements-products.html"><span class="menu-text">Pant</span></a></li>
                                                            <li><a href="elements-products-tabs.html"><span class="menu-text">Dry Fit Polo T-Shirts</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Cotton Polo T-Shirts </span></a></li>
                                                            <li><a href="elements-products.html"><span class="menu-text">3 Striped Cotton Round T-Shirts</span></a></li>
                                                            <li><a href="elements-products-tabs.html"><span class="menu-text">Round Neck Dry Fit Tshirts </span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Caps</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Football</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Dufflebags</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Sippers</span></a></li>

                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <ul>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Shoes</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Wristband</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">T-shirt</span></a></li>
                                                            <a href="#" class="mega-menu-title"><span class="menu-text"><h6 class="desktopMenuTitleStyle" >Luggage,Travel Gear& Bags</h6></span></a>
                                                            <li><a href="elements-category-banner.html"><span class="menu-text">Bags&Travel</span></a></li>
                                                            <a href="#" class="mega-menu-title"><span class="menu-text"><h6 class="desktopMenuTitleStyle" >Electronics Gadgets</h6></span></a>
                                                            <li><a href="elements-team.html"><span class="menu-text">Wired Ear Phone</span></a></li>
                                                            <li><a href="elements-testimonials.html"><span class="menu-text">Wearables</span></a></li>
                                                            <li><a href="elements-products.html"><span class="menu-text">Speakers</span></a></li>
                                                            <li><a href="elements-products-tabs.html"><span class="menu-text">Camera</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Lamp </span></a></li>
                                                            <li><a href="elements-products.html"><span class="menu-text">Appliances</span></a></li>
                                                            <li><a href="elements-products-tabs.html"><span class="menu-text">Device </span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Grooming</span></a></li>
                                                            <li><a href="elements-products.html"><span class="menu-text">Tws Earbuds</span></a></li>
                                                            <li><a href="elements-products-tabs.html"><span class="menu-text">Wireless Headset</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Headphone</span></a></li>
                                                            <li><a href="elements-products.html"><span class="menu-text">Portable Speakers</span></a></li>
                                                            <li><a href="elements-products-tabs.html"><span class="menu-text">Party Speakers</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Power Adapter</span></a></li>
                                                            <li><a href="elements-products.html"><span class="menu-text">Wireless Keyboards & Mouse</span></a></li>
                                                            <li><a href="elements-products-tabs.html"><span class="menu-text">Car Accessories</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Laptop Stands</span></a></li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <ul>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Mobile Stands</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Cables</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Innovative Products </span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Usb Hubs</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Lcd Writing Pads</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Projectors</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Charging Cable</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Travel Adaptor </span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text"> Computer</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Radio</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Calculators</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Smart Watch</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text"> Strap</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Wireless Earbuds</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Bluetooth Device</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Portronics </span></a></li>
                                                            <a href="#" class="mega-menu-title"><span class="menu-text"><h6 class="desktopMenuTitleStyle" >Mobile & Accessories</h6></span></a>
                                                            <li><a href="elements-buttons.html"><span class="menu-text">Earbuds</span></a></li>
                                                            <li><a href="elements-faq.html"><span class="menu-text">Power Bank </span></a></li>
                                                            <li><a href="elements-brands.html"><span class="menu-text">Brands</span></a></li>
                                                            <a href="#" class="mega-menu-title"><span class="menu-text"><h6 class="desktopMenuTitleStyle" >Drinkware</h6></span></a>
                                                            <li><a href="elements-buttons.html"><span class="menu-text">Water Bottles & Flasks </span></a></li>
                                                            <li><a href="elements-faq.html"><span class="menu-text">Jars & Purifiers</span></a></li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <ul>
                                                            <a href="#" class="mega-menu-title"><span class="menu-text"><h6 class="desktopMenuTitleStyle" >General Household</h6></span></a>
                                                            <li><a href="elements-products.html"><span class="menu-text">Home Essentials</span></a></li>
                                                            <li><a href="elements-products-tabs.html"><span class="menu-text">Bathroom Essential</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Lifestyle Product </span></a></li>
                                                            <li><a href="elements-products.html"><span class="menu-text">Tool Sets</span></a></li>
                                                            <li><a href="elements-products-tabs.html"><span class="menu-text">Key -Chains</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Ladies Utility</span></a></li>
                                                            <li><a href="elements-products.html"><span class="menu-text">Wall Clocks</span></a></li>
                                                            <a href="#" class="mega-menu-title"><span class="menu-text"><h6 class="desktopMenuTitleStyle" >Kitchen Storage & Container</h6></span></a>
                                                            <li><a href="elements-products-tabs.html"><span class="menu-text">Thermos & Water Bottles</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Tiffins</span></a></li>
                                                            <li><a href="elements-products.html"><span class="menu-text">Jugs</span></a></li>
                                                            <li><a href="elements-products-tabs.html"><span class="menu-text">Softline Tiffens</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Steel Thermoware</span></a></li>
                                                            <li><a href="elements-products.html"><span class="menu-text">Casserole</span></a></li>
                                                            <li><a href="elements-products-tabs.html"><span class="menu-text">Lunchboxes</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text"> Water Jugs</span></a></li>
                                                            <li><a href="elements-products.html"><span class="menu-text">Water Filters</span></a></li>
                                                            <li><a href="elements-products-tabs.html"><span class="menu-text">Vaccum Flask</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Euroline</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Househo Ld Items</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Commerce</span></a></li>

                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <ul>
                                                            <a href="#" class="mega-menu-title"><span class="menu-text"><h6 class="desktopMenuTitleStyle" >Wallets & Purses</h6></span></a>
                                                            <li><a href="elements-products.html"><span class="menu-text">Wallet</span></a></li>
                                                            <a href="#" class="mega-menu-title"><span class="menu-text"><h6 class="desktopMenuTitleStyle" >Luggage & Bags</h6></span></a>
                                                            <li><a href="elements-products-tabs.html"><span class="menu-text">Alpha</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Bravo</span></a></li>
                                                            <li><a href="elements-products.html"><span class="menu-text">California</span></a></li>
                                                            <li><a href="elements-products-tabs.html"><span class="menu-text">Dayton Club</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Dazzle Lite Ultra</span></a></li>
                                                            <li><a href="elements-products.html"><span class="menu-text">Gamma</span></a></li>
                                                            <li><a href="elements-products-tabs.html"><span class="menu-text">Graphite - B</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Phoenix</span></a></li>
                                                            <li><a href="elements-products.html"><span class="menu-text">Scoutt Club</span></a></li>
                                                            <li><a href="elements-products-tabs.html"><span class="menu-text">Seattle</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Thames Plus</span></a></li>
                                                            <li><a href="elements-products.html"><span class="menu-text">Triton Plus</span></a></li>
                                                            <li><a href="elements-products-tabs.html"><span class="menu-text">Twins</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Twins Plus</span></a></li>
                                                            <li><a href="elements-products.html"><span class="menu-text">Wimbledon Plus</span></a></li>
                                                            <li><a href="elements-products-tabs.html"><span class="menu-text">Wimbledon Pro</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Duffle Travells</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Luggage</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Backpacks </span></a></li>

                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <ul>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Duffles</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Techpack&Rucksacks</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">WILDCRAFT</span></a></li>
                                                            <a href="#" class="mega-menu-title"><span class="menu-text"><h6 class="desktopMenuTitleStyle" >Handicraft & Brass</h6></span></a>
                                                            <li><a href="elements-products.html"><span class="menu-text">Wall Decor</span></a></li>
                                                            <li><a href="elements-products-tabs.html"><span class="menu-text">Animal Figurines</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Human Figures </span></a></li>
                                                            <li><a href="elements-products.html"><span class="menu-text">Table Decor</span></a></li>
                                                            <li><a href="elements-products-tabs.html"><span class="menu-text">Bull & Horse Cart</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Urli-Pot & Planters</span></a></li>
                                                            <li><a href="elements-products.html"><span class="menu-text">Fengshui Products</span></a></li>
                                                            <li><a href="elements-products-tabs.html"><span class="menu-text">Furuiture</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Religious Idols </span></a></li>
                                                            <a href="#" class="mega-menu-title"><span class="menu-text"><h6 class="desktopMenuTitleStyle" >Office & Desktop Gifts</h6></span></a>
                                                            <li><a href="elements-products.html"><span class="menu-text">Lights</span></a></li>
                                                            <li><a href="elements-products-tabs.html"><span class="menu-text">Excutive Metal Pen</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Promotional Pens </span></a></li>
                                                            <li><a href="elements-products.html"><span class="menu-text">Desktop Gifts</span></a></li>
                                                            <li><a href="elements-products-tabs.html"><span class="menu-text">Mobile Accessories</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Utility Key Chains & Tool Kit</span></a></li>
                                                            <li><a href="elements-products.html"><span class="menu-text">Table Clocks</span></a></li>
                                                            <li><a href="elements-products-tabs.html"><span class="menu-text">Office / Stationa</span></a></li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <ul>
                                                            <a href="#" class="mega-menu-title"><span class="menu-text"><h6 class="desktopMenuTitleStyle" >Notepads & Diares</h6></span></a>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Premimum Notebook</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Book With Pen Holer </span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Vintage Style</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Hard Bond</span></a></li>
                                                            <li><a href="elements-products.html"><span class="menu-text">Organizer Diaries</span></a></li>
                                                            <li><a href="elements-products-tabs.html"><span class="menu-text">Power Bank Diary</span></a></li>
                                                            <a href="#" class="mega-menu-title"><span class="menu-text"><h6 class="desktopMenuTitleStyle" >Food Storage</h6></span></a>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Jars & Containers</span></a></li>
                                                            <a href="#" class="mega-menu-title"><span class="menu-text"><h6 class="desktopMenuTitleStyle" >Photo Frames</h6></span></a>
                                                            <li><a href="elements-products.html"><span class="menu-text">Photo Frames </span></a></li>
                                                            <a href="#" class="mega-menu-title"><span class="menu-text"><h6 class="desktopMenuTitleStyle" >Trophies & Awards</h6></span></a>
                                                            <li><a href="elements-products-tabs.html"><span class="menu-text">Trophies & Awards</span></a></li>
                                                            <a href="#" class="mega-menu-title"><span class="menu-text"><h6 class="desktopMenuTitleStyle" >Pens</h6></span></a>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Pens</span></a></li>
                                                            <a href="#" class="mega-menu-title"><span class="menu-text"><h6 class="desktopMenuTitleStyle" >Covid Essential</h6></span></a>
                                                            <li><a href="elements-products.html"><span class="menu-text">Doctor'S Utility</span></a></li>
                                                            <li><a href="elements-products-tabs.html"><span class="menu-text">Mask </span></a></li>


                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <ul>
                                                            <a href="#" class="mega-menu-title"><span class="menu-text"><h6 class="desktopMenuTitleStyle" >Kids Range</h6></span></a>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Childrenâ€™ S Utility </span></a></li>
                                                            <a href="#" class="mega-menu-title"><span class="menu-text"><h6 class="desktopMenuTitleStyle" >Gift Box,Hampers &Sets</h6></span></a>
                                                            <li><a href="elements-products.html"><span class="menu-text">Gift Box</span></a></li>
                                                            <a href="#" class="mega-menu-title"><span class="menu-text"><h6 class="desktopMenuTitleStyle" >Sweets</h6></span></a>
                                                            <li><a href="elements-products-tabs.html"><span class="menu-text">Sweets</span></a></li>
                                                            <a href="#" class="mega-menu-title"><span class="menu-text"><h6 class="desktopMenuTitleStyle" >Watches</h6></span></a>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Wrist Watches</span></a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class=""><a href="#"><span class="menu-text">BAGS</span></a> </li>
                                            <li class=""><a href="#"><span class="menu-text">HOME ANG LIVING</span></a> </li>
                                            <li class=""><a href="#"><span class="menu-text">FASHION</span></a></li>
                                            <li class=""><a href="/download-catalogue"><span class="menu-text">DOWNLOAD CATALOGUE</span></a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--Header Section End-- > */}

            {/* < !--Mobile Header Section Start-- > */}
            <div class="mobile-header bg-white section d-xl-none">
                <div class="container">
                    <div class="row align-items-center">

                        {/* <!-- Header Logo Start --> */}
                        <div class="col">
                            <div class="header-logo">
                                <a href="index.html"><img src="assets/images/logo/logo-nsh.png" alt="NewsourceHub" /></a>
                            </div>
                        </div>
                        {/* <!-- Header Logo End --> */}

                        {/* <!-- Header Tools Start --> */}
                        <div class="col-auto">
                            <div class="header-tools justify-content-end">
                                <div class="header-login d-none d-sm-block">
                                    <a href="my-account.html"><i class="fal fa-user"></i></a>
                                </div>
                                <div class="header-search d-none d-sm-block">
                                    <a href="#offcanvas-search" class="offcanvas-toggle"><i class="fal fa-search"></i></a>
                                </div>
                                <div class="header-wishlist d-none d-sm-block">
                                    <a href="#offcanvas-wishlist" class="offcanvas-toggle"><span class="wishlist-count">3</span><i class="fal fa-heart"></i></a>
                                </div>
                                <div class="header-cart">
                                    <a href="#offcanvas-cart" class="offcanvas-toggle"><span class="cart-count">3</span><i class="fal fa-shopping-cart"></i></a>
                                </div>
                                <div class="mobile-menu-toggle">
                                    <a href="#offcanvas-mobile-menu" class="offcanvas-toggle">
                                        <svg viewBox="0 0 800 600">
                                            <path d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200" class="top"></path>
                                            <path d="M300,320 L540,320" class="middle"></path>
                                            <path d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190" class="bottom" transform="translate(480, 320) scale(1, -1) translate(-480, -318) "></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Header Tools End --> */}

                    </div>
                </div>
            </div>
            <div class="row-3">
                <div class="header-section section section-fluid bg-white d-none d-d-block desktopStickyContainer">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-auto me-auto paddingLeft13">
                                <nav class="site-main-menu site-main-menu-left menu-height-100 justify-content-center">
                                    <ul>
                                        <li class=""><a href="#"><span class="menu-text">ELECTRONICS</span></a>
                                        </li>
                                        <li class="has-children"><a href="#"><span class="menu-text">APPAREL</span></a>
                                            <ul class="sub-menu mega-menu fontSize16">
                                                <li>
                                                    <a href="#" class="mega-menu-title"><span class="menu-text"><h6 class="desktopMenuTitleStyle" >Clothing & Accessories</h6></span></a>
                                                    <ul>
                                                        <li><a href="elements-products.html"><span class="menu-text">Jackets</span></a></li>
                                                        <li><a href="elements-products-tabs.html"><span class="menu-text">Shirts</span></a></li>
                                                        <li><a href="elements-product-sale-banner.html"><span class="menu-text">T-Shirts</span></a></li>
                                                        <li><a href="elements-products.html"><span class="menu-text">Sweatshirt</span></a></li>
                                                        <li><a href="elements-products-tabs.html"><span class="menu-text">Tracksuit</span></a></li>
                                                        <li><a href="elements-product-sale-banner.html"><span class="menu-text">Face Mask</span></a></li>
                                                        <li><a href="elements-products.html"><span class="menu-text">Watch</span></a></li>
                                                        <li><a href="elements-products-tabs.html"><span class="menu-text">Brand</span></a></li>
                                                        <li><a href="elements-product-sale-banner.html"><span class="menu-text">Belt</span></a></li>
                                                        <li><a href="elements-products.html"><span class="menu-text">Sunglass</span></a></li>
                                                        <li><a href="elements-products-tabs.html"><span class="menu-text">Trck Tops</span></a></li>
                                                        <li><a href="elements-product-sale-banner.html"><span class="menu-text">Jacket</span></a></li>
                                                        <li><a href="elements-products.html"><span class="menu-text">Pant</span></a></li>
                                                        <li><a href="elements-products-tabs.html"><span class="menu-text">Dry Fit Polo T-Shirts</span></a></li>
                                                        <li><a href="elements-product-sale-banner.html"><span class="menu-text">Cotton Polo T-Shirts </span></a></li>
                                                        <li><a href="elements-products.html"><span class="menu-text">3 Striped Cotton Round T-Shirts</span></a></li>
                                                        <li><a href="elements-products-tabs.html"><span class="menu-text">Round Neck Dry Fit Tshirts </span></a></li>
                                                        <li><a href="elements-product-sale-banner.html"><span class="menu-text">Caps</span></a></li>
                                                        <li><a href="elements-product-sale-banner.html"><span class="menu-text">Football</span></a></li>
                                                        <li><a href="elements-product-sale-banner.html"><span class="menu-text">Dufflebags</span></a></li>
                                                        <li><a href="elements-product-sale-banner.html"><span class="menu-text">Sippers</span></a></li>

                                                    </ul>
                                                </li>
                                                <li>
                                                    <ul>
                                                        <li><a href="elements-product-sale-banner.html"><span class="menu-text">Shoes</span></a></li>
                                                        <li><a href="elements-product-sale-banner.html"><span class="menu-text">Wristband</span></a></li>
                                                        <li><a href="elements-product-sale-banner.html"><span class="menu-text">T-shirt</span></a></li>
                                                        <a href="#" class="mega-menu-title"><span class="menu-text"><h6 class="desktopMenuTitleStyle" >Luggage,Travel Gear& Bags</h6></span></a>
                                                        <li><a href="elements-category-banner.html"><span class="menu-text">Bags&Travel</span></a></li>
                                                        <a href="#" class="mega-menu-title"><span class="menu-text"><h6 class="desktopMenuTitleStyle" >Electronics Gadgets</h6></span></a>
                                                        <li><a href="elements-team.html"><span class="menu-text">Wired Ear Phone</span></a></li>
                                                        <li><a href="elements-testimonials.html"><span class="menu-text">Wearables</span></a></li>
                                                        <li><a href="elements-products.html"><span class="menu-text">Speakers</span></a></li>
                                                        <li><a href="elements-products-tabs.html"><span class="menu-text">Camera</span></a></li>
                                                        <li><a href="elements-product-sale-banner.html"><span class="menu-text">Lamp </span></a></li>
                                                        <li><a href="elements-products.html"><span class="menu-text">Appliances</span></a></li>
                                                        <li><a href="elements-products-tabs.html"><span class="menu-text">Device </span></a></li>
                                                        <li><a href="elements-product-sale-banner.html"><span class="menu-text">Grooming</span></a></li>
                                                        <li><a href="elements-products.html"><span class="menu-text">Tws Earbuds</span></a></li>
                                                        <li><a href="elements-products-tabs.html"><span class="menu-text">Wireless Headset</span></a></li>
                                                        <li><a href="elements-product-sale-banner.html"><span class="menu-text">Headphone</span></a></li>
                                                        <li><a href="elements-products.html"><span class="menu-text">Portable Speakers</span></a></li>
                                                        <li><a href="elements-products-tabs.html"><span class="menu-text">Party Speakers</span></a></li>
                                                        <li><a href="elements-product-sale-banner.html"><span class="menu-text">Power Adapter</span></a></li>
                                                        <li><a href="elements-products.html"><span class="menu-text">Wireless Keyboards & Mouse</span></a></li>
                                                        <li><a href="elements-products-tabs.html"><span class="menu-text">Car Accessories</span></a></li>
                                                        <li><a href="elements-product-sale-banner.html"><span class="menu-text">Laptop Stands</span></a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <ul>
                                                        <li><a href="elements-product-sale-banner.html"><span class="menu-text">Mobile Stands</span></a></li>
                                                        <li><a href="elements-product-sale-banner.html"><span class="menu-text">Cables</span></a></li>
                                                        <li><a href="elements-product-sale-banner.html"><span class="menu-text">Innovative Products </span></a></li>
                                                        <li><a href="elements-product-sale-banner.html"><span class="menu-text">Usb Hubs</span></a></li>
                                                        <li><a href="elements-product-sale-banner.html"><span class="menu-text">Lcd Writing Pads</span></a></li>
                                                        <li><a href="elements-product-sale-banner.html"><span class="menu-text">Projectors</span></a></li>
                                                        <li><a href="elements-product-sale-banner.html"><span class="menu-text">Charging Cable</span></a></li>
                                                        <li><a href="elements-product-sale-banner.html"><span class="menu-text">Travel Adaptor </span></a></li>
                                                        <li><a href="elements-product-sale-banner.html"><span class="menu-text"> Computer</span></a></li>
                                                        <li><a href="elements-product-sale-banner.html"><span class="menu-text">Radio</span></a></li>
                                                        <li><a href="elements-product-sale-banner.html"><span class="menu-text">Calculators</span></a></li>
                                                        <li><a href="elements-product-sale-banner.html"><span class="menu-text">Smart Watch</span></a></li>
                                                        <li><a href="elements-product-sale-banner.html"><span class="menu-text"> Strap</span></a></li>
                                                        <li><a href="elements-product-sale-banner.html"><span class="menu-text">Wireless Earbuds</span></a></li>
                                                        <li><a href="elements-product-sale-banner.html"><span class="menu-text">Bluetooth Device</span></a></li>
                                                        <li><a href="elements-product-sale-banner.html"><span class="menu-text">Portronics </span></a></li>
                                                        <a href="#" class="mega-menu-title"><span class="menu-text"><h6 class="desktopMenuTitleStyle" >Mobile & Accessories</h6></span></a>
                                                        <li><a href="elements-buttons.html"><span class="menu-text">Earbuds</span></a></li>
                                                        <li><a href="elements-faq.html"><span class="menu-text">Power Bank </span></a></li>
                                                        <li><a href="elements-brands.html"><span class="menu-text">Brands</span></a></li>
                                                        <a href="#" class="mega-menu-title"><span class="menu-text"><h6 class="desktopMenuTitleStyle" >Drinkware</h6></span></a>
                                                        <li><a href="elements-buttons.html"><span class="menu-text">Water Bottles & Flasks </span></a></li>
                                                        <li><a href="elements-faq.html"><span class="menu-text">Jars & Purifiers</span></a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <ul>
                                                        <a href="#" class="mega-menu-title"><span class="menu-text"><h6 class="desktopMenuTitleStyle" >General Household</h6></span></a>
                                                        <li><a href="elements-products.html"><span class="menu-text">Home Essentials</span></a></li>
                                                        <li><a href="elements-products-tabs.html"><span class="menu-text">Bathroom Essential</span></a></li>
                                                        <li><a href="elements-product-sale-banner.html"><span class="menu-text">Lifestyle Product </span></a></li>
                                                        <li><a href="elements-products.html"><span class="menu-text">Tool Sets</span></a></li>
                                                        <li><a href="elements-products-tabs.html"><span class="menu-text">Key -Chains</span></a></li>
                                                        <li><a href="elements-product-sale-banner.html"><span class="menu-text">Ladies Utility</span></a></li>
                                                        <li><a href="elements-products.html"><span class="menu-text">Wall Clocks</span></a></li>
                                                        <a href="#" class="mega-menu-title"><span class="menu-text"><h6 class="desktopMenuTitleStyle" >Kitchen Storage & Container</h6></span></a>
                                                        <li><a href="elements-products-tabs.html"><span class="menu-text">Thermos & Water Bottles</span></a></li>
                                                        <li><a href="elements-product-sale-banner.html"><span class="menu-text">Tiffins</span></a></li>
                                                        <li><a href="elements-products.html"><span class="menu-text">Jugs</span></a></li>
                                                        <li><a href="elements-products-tabs.html"><span class="menu-text">Softline Tiffens</span></a></li>
                                                        <li><a href="elements-product-sale-banner.html"><span class="menu-text">Steel Thermoware</span></a></li>
                                                        <li><a href="elements-products.html"><span class="menu-text">Casserole</span></a></li>
                                                        <li><a href="elements-products-tabs.html"><span class="menu-text">Lunchboxes</span></a></li>
                                                        <li><a href="elements-product-sale-banner.html"><span class="menu-text"> Water Jugs</span></a></li>
                                                        <li><a href="elements-products.html"><span class="menu-text">Water Filters</span></a></li>
                                                        <li><a href="elements-products-tabs.html"><span class="menu-text">Vaccum Flask</span></a></li>
                                                        <li><a href="elements-product-sale-banner.html"><span class="menu-text">Euroline</span></a></li>
                                                        <li><a href="elements-product-sale-banner.html"><span class="menu-text">Househo Ld Items</span></a></li>
                                                        <li><a href="elements-product-sale-banner.html"><span class="menu-text">Commerce</span></a></li>

                                                    </ul>
                                                </li>
                                                <li>
                                                    <ul>
                                                        <a href="#" class="mega-menu-title"><span class="menu-text"><h6 class="desktopMenuTitleStyle" >Wallets & Purses</h6></span></a>
                                                        <li><a href="elements-products.html"><span class="menu-text">Wallet</span></a></li>
                                                        <a href="#" class="mega-menu-title"><span class="menu-text"><h6 class="desktopMenuTitleStyle" >Luggage & Bags</h6></span></a>
                                                        <li><a href="elements-products-tabs.html"><span class="menu-text">Alpha</span></a></li>
                                                        <li><a href="elements-product-sale-banner.html"><span class="menu-text">Bravo</span></a></li>
                                                        <li><a href="elements-products.html"><span class="menu-text">California</span></a></li>
                                                        <li><a href="elements-products-tabs.html"><span class="menu-text">Dayton Club</span></a></li>
                                                        <li><a href="elements-product-sale-banner.html"><span class="menu-text">Dazzle Lite Ultra</span></a></li>
                                                        <li><a href="elements-products.html"><span class="menu-text">Gamma</span></a></li>
                                                        <li><a href="elements-products-tabs.html"><span class="menu-text">Graphite - B</span></a></li>
                                                        <li><a href="elements-product-sale-banner.html"><span class="menu-text">Phoenix</span></a></li>
                                                        <li><a href="elements-products.html"><span class="menu-text">Scoutt Club</span></a></li>
                                                        <li><a href="elements-products-tabs.html"><span class="menu-text">Seattle</span></a></li>
                                                        <li><a href="elements-product-sale-banner.html"><span class="menu-text">Thames Plus</span></a></li>
                                                        <li><a href="elements-products.html"><span class="menu-text">Triton Plus</span></a></li>
                                                        <li><a href="elements-products-tabs.html"><span class="menu-text">Twins</span></a></li>
                                                        <li><a href="elements-product-sale-banner.html"><span class="menu-text">Twins Plus</span></a></li>
                                                        <li><a href="elements-products.html"><span class="menu-text">Wimbledon Plus</span></a></li>
                                                        <li><a href="elements-products-tabs.html"><span class="menu-text">Wimbledon Pro</span></a></li>
                                                        <li><a href="elements-product-sale-banner.html"><span class="menu-text">Duffle Travells</span></a></li>
                                                        <li><a href="elements-product-sale-banner.html"><span class="menu-text">Luggage</span></a></li>
                                                        <li><a href="elements-product-sale-banner.html"><span class="menu-text">Backpacks </span></a></li>

                                                    </ul>
                                                </li>
                                                <li>
                                                    <ul>
                                                        <li><a href="elements-product-sale-banner.html"><span class="menu-text">Duffles</span></a></li>
                                                        <li><a href="elements-product-sale-banner.html"><span class="menu-text">Techpack&Rucksacks</span></a></li>
                                                        <li><a href="elements-product-sale-banner.html"><span class="menu-text">WILDCRAFT</span></a></li>
                                                        <a href="#" class="mega-menu-title"><span class="menu-text"><h6 class="desktopMenuTitleStyle" >Handicraft & Brass</h6></span></a>
                                                        <li><a href="elements-products.html"><span class="menu-text">Wall Decor</span></a></li>
                                                        <li><a href="elements-products-tabs.html"><span class="menu-text">Animal Figurines</span></a></li>
                                                        <li><a href="elements-product-sale-banner.html"><span class="menu-text">Human Figures </span></a></li>
                                                        <li><a href="elements-products.html"><span class="menu-text">Table Decor</span></a></li>
                                                        <li><a href="elements-products-tabs.html"><span class="menu-text">Bull & Horse Cart</span></a></li>
                                                        <li><a href="elements-product-sale-banner.html"><span class="menu-text">Urli-Pot & Planters</span></a></li>
                                                        <li><a href="elements-products.html"><span class="menu-text">Fengshui Products</span></a></li>
                                                        <li><a href="elements-products-tabs.html"><span class="menu-text">Furuiture</span></a></li>
                                                        <li><a href="elements-product-sale-banner.html"><span class="menu-text">Religious Idols </span></a></li>
                                                        <a href="#" class="mega-menu-title"><span class="menu-text"><h6 class="desktopMenuTitleStyle" >Office & Desktop Gifts</h6></span></a>
                                                        <li><a href="elements-products.html"><span class="menu-text">Lights</span></a></li>
                                                        <li><a href="elements-products-tabs.html"><span class="menu-text">Excutive Metal Pen</span></a></li>
                                                        <li><a href="elements-product-sale-banner.html"><span class="menu-text">Promotional Pens </span></a></li>
                                                        <li><a href="elements-products.html"><span class="menu-text">Desktop Gifts</span></a></li>
                                                        <li><a href="elements-products-tabs.html"><span class="menu-text">Mobile Accessories</span></a></li>
                                                        <li><a href="elements-product-sale-banner.html"><span class="menu-text">Utility Key Chains & Tool Kit</span></a></li>
                                                        <li><a href="elements-products.html"><span class="menu-text">Table Clocks</span></a></li>
                                                        <li><a href="elements-products-tabs.html"><span class="menu-text">Office / Stationa</span></a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <ul>
                                                        <a href="#" class="mega-menu-title"><span class="menu-text"><h6 class="desktopMenuTitleStyle" >Notepads & Diares</h6></span></a>
                                                        <li><a href="elements-product-sale-banner.html"><span class="menu-text">Premimum Notebook</span></a></li>
                                                        <li><a href="elements-product-sale-banner.html"><span class="menu-text">Book With Pen Holer </span></a></li>
                                                        <li><a href="elements-product-sale-banner.html"><span class="menu-text">Vintage Style</span></a></li>
                                                        <li><a href="elements-product-sale-banner.html"><span class="menu-text">Hard Bond</span></a></li>
                                                        <li><a href="elements-products.html"><span class="menu-text">Organizer Diaries</span></a></li>
                                                        <li><a href="elements-products-tabs.html"><span class="menu-text">Power Bank Diary</span></a></li>
                                                        <a href="#" class="mega-menu-title"><span class="menu-text"><h6 class="desktopMenuTitleStyle" >Food Storage</h6></span></a>
                                                        <li><a href="elements-product-sale-banner.html"><span class="menu-text">Jars & Containers</span></a></li>
                                                        <a href="#" class="mega-menu-title"><span class="menu-text"><h6 class="desktopMenuTitleStyle" >Photo Frames</h6></span></a>
                                                        <li><a href="elements-products.html"><span class="menu-text">Photo Frames </span></a></li>
                                                        <a href="#" class="mega-menu-title"><span class="menu-text"><h6 class="desktopMenuTitleStyle" >Trophies & Awards</h6></span></a>
                                                        <li><a href="elements-products-tabs.html"><span class="menu-text">Trophies & Awards</span></a></li>
                                                        <a href="#" class="mega-menu-title"><span class="menu-text"><h6 class="desktopMenuTitleStyle" >Pens</h6></span></a>
                                                        <li><a href="elements-product-sale-banner.html"><span class="menu-text">Pens</span></a></li>
                                                        <a href="#" class="mega-menu-title"><span class="menu-text"><h6 class="desktopMenuTitleStyle" >Covid Essential</h6></span></a>
                                                        <li><a href="elements-products.html"><span class="menu-text">Doctor'S Utility</span></a></li>
                                                        <li><a href="elements-products-tabs.html"><span class="menu-text">Mask </span></a></li>


                                                    </ul>
                                                </li>
                                                <li>
                                                    <ul>
                                                        <a href="#" class="mega-menu-title"><span class="menu-text"><h6 class="desktopMenuTitleStyle" >Kids Range</h6></span></a>
                                                        <li><a href="elements-product-sale-banner.html"><span class="menu-text">Childrenâ€™ S Utility </span></a></li>
                                                        <a href="#" class="mega-menu-title"><span class="menu-text"><h6 class="desktopMenuTitleStyle" >Gift Box,Hampers &Sets</h6></span></a>
                                                        <li><a href="elements-products.html"><span class="menu-text">Gift Box</span></a></li>
                                                        <a href="#" class="mega-menu-title"><span class="menu-text"><h6 class="desktopMenuTitleStyle" >Sweets</h6></span></a>
                                                        <li><a href="elements-products-tabs.html"><span class="menu-text">Sweets</span></a></li>
                                                        <a href="#" class="mega-menu-title"><span class="menu-text"><h6 class="desktopMenuTitleStyle" >Watches</h6></span></a>
                                                        <li><a href="elements-product-sale-banner.html"><span class="menu-text">Wrist Watches</span></a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class=""><a href="#"><span class="menu-text">BAGS</span></a> </li>
                                        <li class=""><a href="#"><span class="menu-text">HOME ANG LIVING</span></a> </li>
                                        <li class=""><a href="#"><span class="menu-text">FASHION</span></a></li>
                                        <li class=""><a href="/download-catalogue"><span class="menu-text">DOWNLOAD CATALOGUE</span></a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--Mobile Header Section End-- > */}

            {/* < !--Mobile Header Section Start-- > */}
            <div class="mobile-header sticky-header bg-white section d-xl-none">
                <div class="container">
                    <div class="row align-items-center">

                        {/* <!-- Header Logo Start --> */}
                        <div class="col">
                            <div class="header-logo">
                                <a href="index.html"><img src="assets/images/logo/logo-nsh.png" alt="NewsourceHub" /></a>
                            </div>
                        </div>
                        {/* <!-- Header Logo End --> */}

                        {/* <!-- Header Tools Start --> */}
                        <div class="col-auto">
                            <div class="header-tools justify-content-end">
                                <div class="header-login d-none d-sm-block">
                                    <a href="my-account.html"><i class="fal fa-user"></i></a>
                                </div>
                                <div class="header-search d-none d-sm-block">
                                    <a href="#offcanvas-search" class="offcanvas-toggle"><i class="fal fa-search"></i></a>
                                </div>
                                <div class="header-wishlist d-none d-sm-block">
                                    <a href="#offcanvas-wishlist" class="offcanvas-toggle"><span class="wishlist-count">3</span><i class="fal fa-heart"></i></a>
                                </div>
                                <div class="header-cart">
                                    <a href="#offcanvas-cart" class="offcanvas-toggle"><span class="cart-count">3</span><i class="fal fa-shopping-cart"></i></a>
                                </div>
                                <div class="mobile-menu-toggle">
                                    <a href="#offcanvas-mobile-menu" class="offcanvas-toggle">
                                        <svg viewBox="0 0 800 600">
                                            <path d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200" class="top"></path>
                                            <path d="M300,320 L540,320" class="middle"></path>
                                            <path d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190" class="bottom" transform="translate(480, 320) scale(1, -1) translate(-480, -318) "></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Header Tools End --> */}

                    </div>
                </div>
                <div class="row-3">
                    <div class="header-section section section-fluid bg-white d-none d-d-block desktopStickyContainer">
                        <div class="container">
                            <div class="row align-items-center">
                                <div class="col-auto me-auto paddingLeft13">
                                    <nav class="site-main-menu site-main-menu-left menu-height-100 justify-content-center">
                                        <ul>
                                            <li class=""><a href="#"><span class="menu-text">ELECTRONICS</span></a>
                                            </li>
                                            <li class="has-children"><a href="#"><span class="menu-text">APPAREL</span></a>
                                                <ul class="sub-menu mega-menu fontSize16">
                                                    <li>
                                                        <a href="#" class="mega-menu-title"><span class="menu-text"><h6 class="desktopMenuTitleStyle" >Clothing & Accessories</h6></span></a>
                                                        <ul>
                                                            <li><a href="elements-products.html"><span class="menu-text">Jackets</span></a></li>
                                                            <li><a href="elements-products-tabs.html"><span class="menu-text">Shirts</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">T-Shirts</span></a></li>
                                                            <li><a href="elements-products.html"><span class="menu-text">Sweatshirt</span></a></li>
                                                            <li><a href="elements-products-tabs.html"><span class="menu-text">Tracksuit</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Face Mask</span></a></li>
                                                            <li><a href="elements-products.html"><span class="menu-text">Watch</span></a></li>
                                                            <li><a href="elements-products-tabs.html"><span class="menu-text">Brand</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Belt</span></a></li>
                                                            <li><a href="elements-products.html"><span class="menu-text">Sunglass</span></a></li>
                                                            <li><a href="elements-products-tabs.html"><span class="menu-text">Trck Tops</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Jacket</span></a></li>
                                                            <li><a href="elements-products.html"><span class="menu-text">Pant</span></a></li>
                                                            <li><a href="elements-products-tabs.html"><span class="menu-text">Dry Fit Polo T-Shirts</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Cotton Polo T-Shirts </span></a></li>
                                                            <li><a href="elements-products.html"><span class="menu-text">3 Striped Cotton Round T-Shirts</span></a></li>
                                                            <li><a href="elements-products-tabs.html"><span class="menu-text">Round Neck Dry Fit Tshirts </span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Caps</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Football</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Dufflebags</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Sippers</span></a></li>

                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <ul>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Shoes</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Wristband</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">T-shirt</span></a></li>
                                                            <a href="#" class="mega-menu-title"><span class="menu-text"><h6 class="desktopMenuTitleStyle" >Luggage,Travel Gear& Bags</h6></span></a>
                                                            <li><a href="elements-category-banner.html"><span class="menu-text">Bags&Travel</span></a></li>
                                                            <a href="#" class="mega-menu-title"><span class="menu-text"><h6 class="desktopMenuTitleStyle" >Electronics Gadgets</h6></span></a>
                                                            <li><a href="elements-team.html"><span class="menu-text">Wired Ear Phone</span></a></li>
                                                            <li><a href="elements-testimonials.html"><span class="menu-text">Wearables</span></a></li>
                                                            <li><a href="elements-products.html"><span class="menu-text">Speakers</span></a></li>
                                                            <li><a href="elements-products-tabs.html"><span class="menu-text">Camera</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Lamp </span></a></li>
                                                            <li><a href="elements-products.html"><span class="menu-text">Appliances</span></a></li>
                                                            <li><a href="elements-products-tabs.html"><span class="menu-text">Device </span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Grooming</span></a></li>
                                                            <li><a href="elements-products.html"><span class="menu-text">Tws Earbuds</span></a></li>
                                                            <li><a href="elements-products-tabs.html"><span class="menu-text">Wireless Headset</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Headphone</span></a></li>
                                                            <li><a href="elements-products.html"><span class="menu-text">Portable Speakers</span></a></li>
                                                            <li><a href="elements-products-tabs.html"><span class="menu-text">Party Speakers</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Power Adapter</span></a></li>
                                                            <li><a href="elements-products.html"><span class="menu-text">Wireless Keyboards & Mouse</span></a></li>
                                                            <li><a href="elements-products-tabs.html"><span class="menu-text">Car Accessories</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Laptop Stands</span></a></li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <ul>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Mobile Stands</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Cables</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Innovative Products </span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Usb Hubs</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Lcd Writing Pads</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Projectors</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Charging Cable</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Travel Adaptor </span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text"> Computer</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Radio</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Calculators</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Smart Watch</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text"> Strap</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Wireless Earbuds</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Bluetooth Device</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Portronics </span></a></li>
                                                            <a href="#" class="mega-menu-title"><span class="menu-text"><h6 class="desktopMenuTitleStyle" >Mobile & Accessories</h6></span></a>
                                                            <li><a href="elements-buttons.html"><span class="menu-text">Earbuds</span></a></li>
                                                            <li><a href="elements-faq.html"><span class="menu-text">Power Bank </span></a></li>
                                                            <li><a href="elements-brands.html"><span class="menu-text">Brands</span></a></li>
                                                            <a href="#" class="mega-menu-title"><span class="menu-text"><h6 class="desktopMenuTitleStyle" >Drinkware</h6></span></a>
                                                            <li><a href="elements-buttons.html"><span class="menu-text">Water Bottles & Flasks </span></a></li>
                                                            <li><a href="elements-faq.html"><span class="menu-text">Jars & Purifiers</span></a></li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <ul>
                                                            <a href="#" class="mega-menu-title"><span class="menu-text"><h6 class="desktopMenuTitleStyle" >General Household</h6></span></a>
                                                            <li><a href="elements-products.html"><span class="menu-text">Home Essentials</span></a></li>
                                                            <li><a href="elements-products-tabs.html"><span class="menu-text">Bathroom Essential</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Lifestyle Product </span></a></li>
                                                            <li><a href="elements-products.html"><span class="menu-text">Tool Sets</span></a></li>
                                                            <li><a href="elements-products-tabs.html"><span class="menu-text">Key -Chains</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Ladies Utility</span></a></li>
                                                            <li><a href="elements-products.html"><span class="menu-text">Wall Clocks</span></a></li>
                                                            <a href="#" class="mega-menu-title"><span class="menu-text"><h6 class="desktopMenuTitleStyle" >Kitchen Storage & Container</h6></span></a>
                                                            <li><a href="elements-products-tabs.html"><span class="menu-text">Thermos & Water Bottles</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Tiffins</span></a></li>
                                                            <li><a href="elements-products.html"><span class="menu-text">Jugs</span></a></li>
                                                            <li><a href="elements-products-tabs.html"><span class="menu-text">Softline Tiffens</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Steel Thermoware</span></a></li>
                                                            <li><a href="elements-products.html"><span class="menu-text">Casserole</span></a></li>
                                                            <li><a href="elements-products-tabs.html"><span class="menu-text">Lunchboxes</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text"> Water Jugs</span></a></li>
                                                            <li><a href="elements-products.html"><span class="menu-text">Water Filters</span></a></li>
                                                            <li><a href="elements-products-tabs.html"><span class="menu-text">Vaccum Flask</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Euroline</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Househo Ld Items</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Commerce</span></a></li>

                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <ul>
                                                            <a href="#" class="mega-menu-title"><span class="menu-text"><h6 class="desktopMenuTitleStyle" >Wallets & Purses</h6></span></a>
                                                            <li><a href="elements-products.html"><span class="menu-text">Wallet</span></a></li>
                                                            <a href="#" class="mega-menu-title"><span class="menu-text"><h6 class="desktopMenuTitleStyle" >Luggage & Bags</h6></span></a>
                                                            <li><a href="elements-products-tabs.html"><span class="menu-text">Alpha</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Bravo</span></a></li>
                                                            <li><a href="elements-products.html"><span class="menu-text">California</span></a></li>
                                                            <li><a href="elements-products-tabs.html"><span class="menu-text">Dayton Club</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Dazzle Lite Ultra</span></a></li>
                                                            <li><a href="elements-products.html"><span class="menu-text">Gamma</span></a></li>
                                                            <li><a href="elements-products-tabs.html"><span class="menu-text">Graphite - B</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Phoenix</span></a></li>
                                                            <li><a href="elements-products.html"><span class="menu-text">Scoutt Club</span></a></li>
                                                            <li><a href="elements-products-tabs.html"><span class="menu-text">Seattle</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Thames Plus</span></a></li>
                                                            <li><a href="elements-products.html"><span class="menu-text">Triton Plus</span></a></li>
                                                            <li><a href="elements-products-tabs.html"><span class="menu-text">Twins</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Twins Plus</span></a></li>
                                                            <li><a href="elements-products.html"><span class="menu-text">Wimbledon Plus</span></a></li>
                                                            <li><a href="elements-products-tabs.html"><span class="menu-text">Wimbledon Pro</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Duffle Travells</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Luggage</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Backpacks </span></a></li>

                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <ul>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Duffles</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Techpack&Rucksacks</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">WILDCRAFT</span></a></li>
                                                            <a href="#" class="mega-menu-title"><span class="menu-text"><h6 class="desktopMenuTitleStyle" >Handicraft & Brass</h6></span></a>
                                                            <li><a href="elements-products.html"><span class="menu-text">Wall Decor</span></a></li>
                                                            <li><a href="elements-products-tabs.html"><span class="menu-text">Animal Figurines</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Human Figures </span></a></li>
                                                            <li><a href="elements-products.html"><span class="menu-text">Table Decor</span></a></li>
                                                            <li><a href="elements-products-tabs.html"><span class="menu-text">Bull & Horse Cart</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Urli-Pot & Planters</span></a></li>
                                                            <li><a href="elements-products.html"><span class="menu-text">Fengshui Products</span></a></li>
                                                            <li><a href="elements-products-tabs.html"><span class="menu-text">Furuiture</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Religious Idols </span></a></li>
                                                            <a href="#" class="mega-menu-title"><span class="menu-text"><h6 class="desktopMenuTitleStyle" >Office & Desktop Gifts</h6></span></a>
                                                            <li><a href="elements-products.html"><span class="menu-text">Lights</span></a></li>
                                                            <li><a href="elements-products-tabs.html"><span class="menu-text">Excutive Metal Pen</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Promotional Pens </span></a></li>
                                                            <li><a href="elements-products.html"><span class="menu-text">Desktop Gifts</span></a></li>
                                                            <li><a href="elements-products-tabs.html"><span class="menu-text">Mobile Accessories</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Utility Key Chains & Tool Kit</span></a></li>
                                                            <li><a href="elements-products.html"><span class="menu-text">Table Clocks</span></a></li>
                                                            <li><a href="elements-products-tabs.html"><span class="menu-text">Office / Stationa</span></a></li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <ul>
                                                            <a href="#" class="mega-menu-title"><span class="menu-text"><h6 class="desktopMenuTitleStyle" >Notepads & Diares</h6></span></a>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Premimum Notebook</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Book With Pen Holer </span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Vintage Style</span></a></li>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Hard Bond</span></a></li>
                                                            <li><a href="elements-products.html"><span class="menu-text">Organizer Diaries</span></a></li>
                                                            <li><a href="elements-products-tabs.html"><span class="menu-text">Power Bank Diary</span></a></li>
                                                            <a href="#" class="mega-menu-title"><span class="menu-text"><h6 class="desktopMenuTitleStyle" >Food Storage</h6></span></a>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Jars & Containers</span></a></li>
                                                            <a href="#" class="mega-menu-title"><span class="menu-text"><h6 class="desktopMenuTitleStyle" >Photo Frames</h6></span></a>
                                                            <li><a href="elements-products.html"><span class="menu-text">Photo Frames </span></a></li>
                                                            <a href="#" class="mega-menu-title"><span class="menu-text"><h6 class="desktopMenuTitleStyle" >Trophies & Awards</h6></span></a>
                                                            <li><a href="elements-products-tabs.html"><span class="menu-text">Trophies & Awards</span></a></li>
                                                            <a href="#" class="mega-menu-title"><span class="menu-text"><h6 class="desktopMenuTitleStyle" >Pens</h6></span></a>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Pens</span></a></li>
                                                            <a href="#" class="mega-menu-title"><span class="menu-text"><h6 class="desktopMenuTitleStyle" >Covid Essential</h6></span></a>
                                                            <li><a href="elements-products.html"><span class="menu-text">Doctor'S Utility</span></a></li>
                                                            <li><a href="elements-products-tabs.html"><span class="menu-text">Mask </span></a></li>


                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <ul>
                                                            <a href="#" class="mega-menu-title"><span class="menu-text"><h6 class="desktopMenuTitleStyle" >Kids Range</h6></span></a>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Childrenâ€™ S Utility </span></a></li>
                                                            <a href="#" class="mega-menu-title"><span class="menu-text"><h6 class="desktopMenuTitleStyle" >Gift Box,Hampers &Sets</h6></span></a>
                                                            <li><a href="elements-products.html"><span class="menu-text">Gift Box</span></a></li>
                                                            <a href="#" class="mega-menu-title"><span class="menu-text"><h6 class="desktopMenuTitleStyle" >Sweets</h6></span></a>
                                                            <li><a href="elements-products-tabs.html"><span class="menu-text">Sweets</span></a></li>
                                                            <a href="#" class="mega-menu-title"><span class="menu-text"><h6 class="desktopMenuTitleStyle" >Watches</h6></span></a>
                                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Wrist Watches</span></a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class=""><a href="#"><span class="menu-text">BAGS</span></a> </li>
                                            <li class=""><a href="#"><span class="menu-text">HOME ANG LIVING</span></a> </li>
                                            <li class=""><a href="#"><span class="menu-text">FASHION</span></a></li>
                                            <li class=""><a href="/download-catalogue"><span class="menu-text">DOWNLOAD CATALOGUE</span></a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--Mobile Header Section End-- > */}


            <SideNav />

        </>
    )
}