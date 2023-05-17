import { useEffect } from 'react';

import _ from 'lodash';

import { SideNav } from '../SideNav';

import { useStoreActions, useStoreState } from '../../store/hooks';

import './header.css';

export const Header = () => {

    let headerStore = useStoreState(state => state.headerInfo);

    const menuList = headerStore.data.menuList;

    let fetchMenuInfo = useStoreActions(action => action.headerInfo.fetchMenuInfo);

    useEffect(() => {

        _.isEmpty(menuList) && fetchMenuInfo()

    }, [menuList])

    const renderMenu = () => {
        return <ul>
            {menuList.map(item => <li class="has-children"><a href="#"><span class="menu-text">{item.menuName}</span></a>
                <ul class="sub-menu mega-menu fontSize16">
                    {_.get(item, 'subSectionInfo', []).map(list => <li>
                        <a href="/products" class="mega-menu-title"><span class="menu-text"><h6 class="desktopMenuTitleStyle" >{list.primaryCategoryName}</h6></span></a>
                        <ul>
                            {
                                _.get(list, 'subSection', []).map(entry => <li>
                                    <a href="/products">
                                        <span class="menu-text">
                                            {entry.subCategoryName}
                                        </span>
                                    </a>
                                </li>
                                )
                            }
                        </ul>
                    </li>
                    )
                    }
                </ul>
            </li>)
            }
            <li class=""><a href="/download-catalogue"><span class="menu-text">DOWNLOAD CATALOGUE</span></a></li>
        </ul>
    }

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
                                        {renderMenu()}
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
                                    {renderMenu()}
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
                                        {renderMenu()}
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