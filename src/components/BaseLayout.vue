<template>
    <header>
        <div class="header_main">
            <div class="container-fluid container-xxxl">
                <div class="row align-items-center">
                    <div class="col-md-4 col-lg-3">
                        <div class="d-flex d-lg-inline align-items-center justify-content-between">
                            <div class="logo_wrapper">
                                <a href="/">
                                    <img src="https://twowheelersbd.com/frontend/assets/images/header-logo.svg" alt="logo">
                                </a>
                            </div>
                            <button class="d-md-none" type="button" data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvasSearch" aria-controls="offcanvasSearch">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none">
                                    <path
                                        d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                                        stroke="#666666" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path d="M21.0004 21.0004L16.6504 16.6504" stroke="#666666" stroke-width="1.5"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="col-md-4 col-lg-6">
                        <div class="offcanvas offcanvas-top offcanvas_search" tabindex="-1" id="offcanvasSearch"
                            aria-labelledby="offcanvasSearchLabel">
                            <div class="offcanvas-header">
                                <div></div>
                                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                                    aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body">
                                <div class="position-relative">
                                    <form action="#">
                                        <div class="input-group">
                                            <input type="text" class="form-control fs_14 fc_black"
                                                placeholder="Search Here..." aria-label="Search Here..."
                                                aria-describedby="header-search">
                                            <span
                                                class="input-group-text bg_red br_5 fw_5 fs_14 fc_white border-0 text-uppercase tbg_3 hover"
                                                id="header-search">search</span>
                                        </div>
                                    </form>
                                    <div class="search_result position-absolute d-none">
                                        <div class="">
                                            <a href="#" class="d-flex align-items-center gap-2 mb-3">
                                                <img src="./assets/images/sr-img.png" alt="thumb">
                                                <p class="fs_14 lh_20 fc_gd">Rubber Step Floor New Vario 125 K60R &
                                                    150 eSP
                                                    K59J
                                                </p>
                                            </a>
                                            <a href="#" class="d-flex align-items-center gap-2 mb-3">
                                                <img src="./assets/images/sr-img.png" alt="thumb">
                                                <p class="fs_14 lh_20 fc_gd">Rubber Step Floor New Vario 125 K60R &
                                                    150 eSP
                                                    K59J
                                                </p>
                                            </a>
                                            <a href="#" class="d-flex align-items-center gap-2 mb-3">
                                                <img src="./assets/images/sr-img.png" alt="thumb">
                                                <p class="fs_14 lh_20 fc_gd">Rubber Step Floor New Vario 125 K60R &
                                                    150 eSP
                                                    K59J
                                                </p>
                                            </a>
                                            <a href="#" class="d-flex align-items-center gap-2 mb-3">
                                                <img src="./assets/images/sr-img.png" alt="thumb">
                                                <p class="fs_14 lh_20 fc_gd">Rubber Step Floor New Vario 125 K60R &
                                                    150 eSP
                                                    K59J
                                                </p>
                                            </a>
                                            <a href="#" class="d-flex align-items-center gap-2 mb-3">
                                                <img src="./assets/images/sr-img.png" alt="thumb">
                                                <p class="fs_14 lh_20 fc_gd">Rubber Step Floor New Vario 125 K60R &
                                                    150 eSP
                                                    K59J
                                                </p>
                                            </a>
                                            <div class="">
                                                <a href="search-result.html"
                                                    class="sr_btn d-flex justify-content-center align-item-center gap-1">
                                                    <span class="fw_5 fs_14 lh_20 fc_red text-uppercase">View all 50
                                                        Products</span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                        viewBox="0 0 20 20" fill="none">
                                                        <path d="M5 12H19" stroke="#DD1E1E" stroke-width="1.5"
                                                            stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M12 5L19 12L12 19" stroke="#DD1E1E" stroke-width="1.5"
                                                            stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-lg-3 d-none d-md-block">
                        <div class="d-flex justify-content-end align-items-center meta_controls">
                            <div class="text-start">
                                <span class="fs_14 lh_20 mb-1">My Account</span>
                                <!-- <p class="fw_6 fs_14 lh_20">
                                    <a href="sign-in.html" class="fc_black">Sign In</a>
                                    <a href="sign-up.html" class="fc_black">/ Sign Up</a>
                                </p> -->
                                <div class="dropdown">
                                    <button class="dropdown-toggle fw_6 fs_14 lh_20 fc_black" type="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        Account Holder
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <a class="d-flex align-items-center gap-3 svg_20"
                                                href="my-profile-info.html">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                    viewBox="0 0 20 20" fill="none">
                                                    <path
                                                        d="M16.6673 17.5V15.8333C16.6673 14.9493 16.3161 14.1014 15.691 13.4763C15.0659 12.8512 14.218 12.5 13.334 12.5H6.66732C5.78326 12.5 4.93542 12.8512 4.31029 13.4763C3.68517 14.1014 3.33398 14.9493 3.33398 15.8333V17.5"
                                                        stroke="#666666" stroke-width="1.5" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                    <path
                                                        d="M9.99935 9.16667C11.8403 9.16667 13.3327 7.67428 13.3327 5.83333C13.3327 3.99238 11.8403 2.5 9.99935 2.5C8.1584 2.5 6.66602 3.99238 6.66602 5.83333C6.66602 7.67428 8.1584 9.16667 9.99935 9.16667Z"
                                                        stroke="#666666" stroke-width="1.5" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                </svg>
                                                <span class="fs_15 lh_20 fc_gd text-capitalize">my profile</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a class="d-flex align-items-center gap-3 svg_20" href="my-wishlist.html">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                    viewBox="0 0 20 20" fill="none">
                                                    <path
                                                        d="M17.3671 3.84319C16.9415 3.41736 16.4361 3.07956 15.8799 2.84909C15.3237 2.61862 14.7275 2.5 14.1254 2.5C13.5234 2.5 12.9272 2.61862 12.371 2.84909C11.8147 3.07956 11.3094 3.41736 10.8838 3.84319L10.0004 4.72652L9.11709 3.84319C8.25735 2.98344 7.09129 2.50045 5.87542 2.50045C4.65956 2.50045 3.4935 2.98344 2.63376 3.84319C1.77401 4.70293 1.29102 5.86899 1.29102 7.08485C1.29102 8.30072 1.77401 9.46678 2.63376 10.3265L3.51709 11.2099L10.0004 17.6932L16.4838 11.2099L17.3671 10.3265C17.7929 9.90089 18.1307 9.39553 18.3612 8.83932C18.5917 8.2831 18.7103 7.68693 18.7103 7.08485C18.7103 6.48278 18.5917 5.88661 18.3612 5.33039C18.1307 4.77418 17.7929 4.26882 17.3671 3.84319Z"
                                                        stroke="#666666" stroke-width="1.5" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                </svg>
                                                <span class="fs_15 lh_20 fc_gd text-capitalize">my wishlist</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a class=" d-flex align-items-center gap-3 svg_20" href="my-orders.html">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                    viewBox="0 0 20 20" fill="none">
                                                    <path d="M17.5 6.66406V17.4974H2.5V6.66406" stroke="#666666"
                                                        stroke-width="1.5" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                    <path d="M19.1673 2.5H0.833984V6.66667H19.1673V2.5Z"
                                                        stroke="#666666" stroke-width="1.5" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                    <path d="M8.33398 10H11.6673" stroke="#666666" stroke-width="1.5"
                                                        stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                                <span class="fs_15 lh_20 fc_gd text-capitalize">my orders</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a class="d-flex align-items-center gap-3 svg_20" href="/">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                    viewBox="0 0 20 20" fill="none">
                                                    <path
                                                        d="M7.5 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H7.5"
                                                        stroke="#666666" stroke-width="1.5" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                    <path d="M13.334 14.1693L17.5007 10.0026L13.334 5.83594"
                                                        stroke="#666666" stroke-width="2" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                    <path d="M17.5 10H7.5" stroke="#666666" stroke-width="1.5"
                                                        stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                                <span class="fs_15 lh_20 fc_gd text-capitalize">sign out</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <a href="compare.html"
                                class="badge_btn position-relative bg_red rounded-circle d-flex justify-content-center align-items-center fs_20">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none">
                                    <path
                                        d="M19.25 7.5C18.388 7.5 17.5614 7.15759 16.9519 6.5481C16.3424 5.9386 16 5.11195 16 4.25C16 3.38805 16.3424 2.5614 16.9519 1.9519C17.5614 1.34241 18.388 1 19.25 1C20.112 1 20.9386 1.34241 21.5481 1.9519C22.1576 2.5614 22.5 3.38805 22.5 4.25C22.5 5.11195 22.1576 5.9386 21.5481 6.5481C20.9386 7.15759 20.112 7.5 19.25 7.5ZM17.5 4.25C17.5001 4.47988 17.5454 4.70749 17.6334 4.91985C17.7215 5.1322 17.8505 5.32514 18.0131 5.48764C18.1757 5.65015 18.3687 5.77903 18.5811 5.86694C18.7935 5.95485 19.0211 6.00007 19.251 6C19.4809 5.99993 19.7085 5.95459 19.9208 5.86656C20.1332 5.77853 20.3261 5.64953 20.4886 5.48694C20.6511 5.32434 20.78 5.13133 20.8679 4.91893C20.9559 4.70652 21.0011 4.47888 21.001 4.249C21.0009 3.78474 20.8163 3.33955 20.4879 3.01136C20.1596 2.68317 19.7143 2.49887 19.25 2.499C18.7857 2.49913 18.3405 2.68369 18.0124 3.01206C17.6842 3.34044 17.4999 3.78574 17.5 4.25Z"
                                        fill="white" />
                                    <path
                                        d="M1.72 10.095C1.86063 9.95455 2.05125 9.87566 2.25 9.87566C2.44875 9.87566 2.63937 9.95455 2.78 10.095L4 11.315V7.25C4 6.25544 4.39509 5.30161 5.09835 4.59835C5.80161 3.89509 6.75544 3.5 7.75 3.5H16.5C16.6989 3.5 16.8897 3.57902 17.0303 3.71967C17.171 3.86032 17.25 4.05109 17.25 4.25C17.25 4.44891 17.171 4.63968 17.0303 4.78033C16.8897 4.92098 16.6989 5 16.5 5H7.75C7.45453 5 7.16194 5.0582 6.88896 5.17127C6.61598 5.28434 6.36794 5.45008 6.15901 5.65901C5.95008 5.86794 5.78434 6.11598 5.67127 6.38896C5.5582 6.66194 5.5 6.95452 5.5 7.25V11.314L6.72 10.094C6.86152 9.95745 7.051 9.88194 7.24765 9.88374C7.4443 9.88554 7.63237 9.96451 7.77136 10.1036C7.91035 10.2428 7.98914 10.4309 7.99076 10.6275C7.99237 10.8242 7.91669 11.0136 7.78 11.155L5.28 13.655C5.13937 13.7955 4.94875 13.8743 4.75 13.8743C4.55125 13.8743 4.36063 13.7955 4.22 13.655L1.72 11.155C1.57955 11.0144 1.50066 10.8238 1.50066 10.625C1.50066 10.4262 1.57955 10.2356 1.72 10.095ZM4.75 16.5C5.61195 16.5 6.4386 16.8424 7.0481 17.4519C7.65759 18.0614 8 18.888 8 19.75C8 20.612 7.65759 21.4386 7.0481 22.0481C6.4386 22.6576 5.61195 23 4.75 23C3.88805 23 3.0614 22.6576 2.4519 22.0481C1.84241 21.4386 1.5 20.612 1.5 19.75C1.5 18.888 1.84241 18.0614 2.4519 17.4519C3.0614 16.8424 3.88805 16.5 4.75 16.5ZM6.5 19.75C6.49987 19.2857 6.31531 18.8405 5.98694 18.5124C5.65856 18.1842 5.21326 17.9999 4.749 18C4.28474 18.0001 3.83954 18.1847 3.51136 18.5131C3.18317 18.8414 2.99887 19.2867 2.999 19.751C2.99907 19.9809 3.04441 20.2085 3.13244 20.4208C3.22047 20.6332 3.34947 20.8261 3.51206 20.9886C3.84044 21.3168 4.28574 21.5011 4.75 21.501C5.21426 21.5009 5.65946 21.3163 5.98764 20.9879C6.31583 20.6596 6.50013 20.2143 6.5 19.75Z"
                                        fill="white" />
                                    <path
                                        d="M22.28 13.905C22.1394 14.0455 21.9488 14.1243 21.75 14.1243C21.5512 14.1243 21.3606 14.0455 21.22 13.905L20 12.685V16.75C20 17.7446 19.6049 18.6984 18.9017 19.4017C18.1984 20.1049 17.2446 20.5 16.25 20.5H7.5C7.30109 20.5 7.11032 20.421 6.96967 20.2803C6.82902 20.1397 6.75 19.9489 6.75 19.75C6.75 19.5511 6.82902 19.3603 6.96967 19.2197C7.11032 19.079 7.30109 19 7.5 19H16.25C16.8467 19 17.419 18.7629 17.841 18.341C18.2629 17.919 18.5 17.3467 18.5 16.75V12.686L17.28 13.906C17.1877 14.0024 17.0714 14.0723 16.943 14.1086C16.8146 14.1448 16.6789 14.1461 16.5498 14.1122C16.4208 14.0784 16.3031 14.0106 16.2091 13.916C16.1151 13.8213 16.048 13.7033 16.015 13.574C15.9814 13.4452 15.9827 13.3098 16.0187 13.1817C16.0548 13.0536 16.1242 12.9374 16.22 12.845L18.72 10.345C18.8606 10.2045 19.0512 10.1257 19.25 10.1257C19.4488 10.1257 19.6394 10.2045 19.78 10.345L22.28 12.845C22.4205 12.9856 22.4993 13.1762 22.4993 13.375C22.4993 13.5738 22.4205 13.7644 22.28 13.905Z"
                                        fill="white" />
                                </svg>
                                <span
                                    class="position-absolute rounded-circle d-flex justify-content-center align-items-center bg_white bxy_gl  fs_14 lh_20 fc_black">0</span>
                            </a>
                            <a href="my-wishlist.html"
                                class="badge_btn position-relative bg_red rounded-circle d-flex justify-content-center align-items-center fs_20">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none">
                                    <path
                                        d="M20.8401 4.60987C20.3294 4.09888 19.7229 3.69352 19.0555 3.41696C18.388 3.14039 17.6726 2.99805 16.9501 2.99805C16.2276 2.99805 15.5122 3.14039 14.8448 3.41696C14.1773 3.69352 13.5709 4.09888 13.0601 4.60987L12.0001 5.66987L10.9401 4.60987C9.90843 3.57818 8.50915 2.99858 7.05012 2.99858C5.59109 2.99858 4.19181 3.57818 3.16012 4.60987C2.12843 5.64156 1.54883 7.04084 1.54883 8.49987C1.54883 9.95891 2.12843 11.3582 3.16012 12.3899L4.22012 13.4499L12.0001 21.2299L19.7801 13.4499L20.8401 12.3899C21.3511 11.8791 21.7565 11.2727 22.033 10.6052C22.3096 9.93777 22.4519 9.22236 22.4519 8.49987C22.4519 7.77738 22.3096 7.06198 22.033 6.39452C21.7565 5.72706 21.3511 5.12063 20.8401 4.60987Z"
                                        stroke="white" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                                <span
                                    class="position-absolute rounded-circle d-flex justify-content-center align-items-center bg_white bxy_gl  fs_14 lh_20 fc_black">0</span>
                            </a>
                            <a href="cart.html"
                                class="badge_btn position-relative bg_red rounded-circle d-flex justify-content-center align-items-center fs_20">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none">
                                    <path
                                        d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z"
                                        stroke="white" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path
                                        d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z"
                                        stroke="white" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path
                                        d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6"
                                        stroke="white" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                                <span
                                    class="position-absolute rounded-circle d-flex justify-content-center align-items-center bg_white bxy_gl  fs_14 lh_20 fc_black">0</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="header_nav bg_red">
            <div class="container-fluid container-xxxl">
                <div class="d-md-none">
                    <div class="d-flex justify-content-between align-items-center">
                        <button class="mt_btn" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNav"
                            aria-controls="offcanvasNav">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none">
                                <g id="bar-chart-2">
                                    <g id="Group 11029">
                                        <path id="Vector" d="M4 18H14" stroke="white" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                        <path id="Vector_2" d="M4 12L20 12" stroke="white" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                        <path id="Vector_3" d="M4 6H10" stroke="white" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                </g>
                            </svg>
                        </button>
                        <nav>
                            <a href="motorbikes.html" class="fw_5 fs_14 lh_20 fc_white text-capitalize">Motorbikes</a>
                            <a href="products.html" class="fw_5 fs_14 lh_20 fc_white text-capitalize">Accessories</a>
                        </nav>
                    </div>
                </div>
                <div class="d-none d-md-block">
                    <div class="d-flex justify-content-between align-items-center">
                        <nav>
                            <a href="/" class="fw_5 fs_14 lh_20 fc_white text-capitalize">Home</a>
                            <a href="motorbikes.html" class="fw_5 fs_14 lh_20 fc_white text-capitalize">Motorbikes</a>
                            <a href="products.html" class="fw_5 fs_14 lh_20 fc_white text-capitalize">Accessories</a>
                            <a href="shop.html" class="fw_5 fs_14 lh_20 fc_white text-capitalize">Apparel & Riding
                                Gear</a>
                            <a href="#" class="fw_5 fs_14 lh_20 fc_white text-capitalize">Helmat</a>
                            <a href="#" class="fw_5 fs_14 lh_20 fc_white text-capitalize">Oil</a>
                            <a href="brands.html" class="fw_5 fs_14 lh_20 fc_white text-capitalize">Our Brands</a>
                            <a href="blogs.html" class="fw_5 fs_14 lh_20 fc_white text-capitalize">Blog</a>
                            <a href="contact-us.html" class="fw_5 fs_14 lh_20 fc_white text-capitalize">Contact</a>
                            <a href="bike-info.html" class="fw_5 fs_14 lh_20 fc_white text-capitalize">Bike Info</a>
                        </nav>
                        <a href="order-tracking.html" class="fw_5 fs_14 lh_20 fc_white text-capitalize">Order
                            Tracking</a>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <!-- small device nav -->
    <div class="offcanvas_nav offcanvas offcanvas-start" tabindex="-1" id="offcanvasNav"
        aria-labelledby="offcanvasNavLabel">
        <div class="offcanvas-header">
            <div></div>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <div class="logo_wrapper">
                <img src="./assets/images/sidenav-logo.svg" alt="logo">
            </div>
            <nav>
                <a href="/" class="active">Home</a>
                <a href="motorbikes.html">Motorbikes</a>
                <a href="products.html">Accessories</a>
                <a href="shop.html">Apparel & Riding Gear</a>
                <a href="#">Helmat</a>
                <a href="#">Oil</a>
                <a href="brands.html">Our Brands</a>
                <a href="blogs.html">Blog</a>
                <a href="contact-us.html">Contact</a>
                <a href="bike-info.html">Bike Info</a>
                <a href="order-tracking.html">Order Tracking</a>
                <a href="compare.html">Compare</a>
            </nav>
        </div>
    </div>

    <!-- fixed nav -->
    <div class="fixed_nav d-md-none">
        <nav>
            <a href="/" class="active">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M9 22V12H15V22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>
                <span>Home</span>
            </a>
            <a href="categories.html" class="">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                    <path d="M10.5 3H3.5V10H10.5V3Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                    <path d="M21.5 3H14.5V10H21.5V3Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                    <path d="M21.5 14H14.5V21H21.5V14Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                    <path d="M10.5 14H3.5V21H10.5V14Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>
                <span>Categories</span>
            </a>
            <a href="/" class="">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                    <path
                        d="M19.25 3H5.75C4.95435 3 4.19129 3.3448 3.62868 3.95856C3.06607 4.57231 2.75 5.40475 2.75 6.27273V14.4545C2.75 15.3225 3.06607 16.155 3.62868 16.7687C4.19129 17.3825 4.95435 17.7273 5.75 17.7273H14L18.5 21V17.7273H19.25C20.0456 17.7273 20.8087 17.3825 21.3713 16.7687C21.9339 16.155 22.25 15.3225 22.25 14.4545V6.27273C22.25 5.40475 21.9339 4.57231 21.3713 3.95856C20.8087 3.3448 20.0456 3 19.25 3Z"
                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path
                        d="M8.75 9.75C8.75 9.94891 8.67098 10.1397 8.53033 10.2803C8.38968 10.421 8.19891 10.5 8 10.5C7.80109 10.5 7.61032 10.421 7.46967 10.2803C7.32902 10.1397 7.25 9.94891 7.25 9.75C7.25 9.55109 7.32902 9.36032 7.46967 9.21967C7.61032 9.07902 7.80109 9 8 9C8.19891 9 8.38968 9.07902 8.53033 9.21967C8.67098 9.36032 8.75 9.55109 8.75 9.75ZM13.25 9.75C13.25 9.94891 13.171 10.1397 13.0303 10.2803C12.8897 10.421 12.6989 10.5 12.5 10.5C12.3011 10.5 12.1103 10.421 11.9697 10.2803C11.829 10.1397 11.75 9.94891 11.75 9.75C11.75 9.55109 11.829 9.36032 11.9697 9.21967C12.1103 9.07902 12.3011 9 12.5 9C12.6989 9 12.8897 9.07902 13.0303 9.21967C13.171 9.36032 13.25 9.55109 13.25 9.75ZM17.75 9.75C17.75 9.94891 17.671 10.1397 17.5303 10.2803C17.3897 10.421 17.1989 10.5 17 10.5C16.8011 10.5 16.6103 10.421 16.4697 10.2803C16.329 10.1397 16.25 9.94891 16.25 9.75C16.25 9.55109 16.329 9.36032 16.4697 9.21967C16.6103 9.07902 16.8011 9 17 9C17.1989 9 17.3897 9.07902 17.5303 9.21967C17.671 9.36032 17.75 9.55109 17.75 9.75Z"
                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <span>Live Chat</span>
            </a>
            <a href="cart.html" class="">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z"
                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path
                        d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z"
                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path
                        d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6"
                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <span>Cart (0)</span>
            </a>
            <a href="my-profile-info.html" class="">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path
                        d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <span>Account</span>
            </a>
        </nav>
    </div>
    <slot></slot>

        <!-- footer -->
        <footer class="spt">
        <div class="container-fluid container-xxxl">
            <div class="row g-4 g-md-5">
                <div class="col-sm-6 col-md-4 col-lg-3">
                    <div class="logo_wrapper mb-4">
                        <img src="./assets/images/footer-logo.svg" alt="logo" class="w-100">
                    </div>
                    <p class="mb-4 fs_15 lh_22 fc_white">Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's standard.</p>
                    <div class="d-flex align-items-center gap-2 mb-3 svg_20">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path
                                d="M17.5 8.3335C17.5 14.1668 10 19.1668 10 19.1668C10 19.1668 2.5 14.1668 2.5 8.3335C2.5 6.34437 3.29018 4.43672 4.6967 3.03019C6.10322 1.62367 8.01088 0.833496 10 0.833496C11.9891 0.833496 13.8968 1.62367 15.3033 3.03019C16.7098 4.43672 17.5 6.34437 17.5 8.3335Z"
                                stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M10 10.8335C11.3807 10.8335 12.5 9.71421 12.5 8.3335C12.5 6.95278 11.3807 5.8335 10 5.8335C8.61929 5.8335 7.5 6.95278 7.5 8.3335C7.5 9.71421 8.61929 10.8335 10 10.8335Z"
                                stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span class="fs_15 lh_22 fc_white">Find Store</span>
                    </div>
                    <div class="d-flex align-items-center gap-2 mb-3 svg_20">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path
                                d="M12.5415 4.16683C13.3555 4.32563 14.1035 4.72371 14.6899 5.31011C15.2763 5.89651 15.6744 6.64455 15.8332 7.4585M12.5415 0.833496C14.2326 1.02136 15.8095 1.77864 17.0134 2.981C18.2173 4.18336 18.9765 5.75934 19.1665 7.45016M18.3332 14.1002V16.6002C18.3341 16.8322 18.2866 17.062 18.1936 17.2746C18.1006 17.4873 17.9643 17.6782 17.7933 17.835C17.6222 17.9919 17.4203 18.1114 17.2005 18.1858C16.9806 18.2601 16.7477 18.2877 16.5165 18.2668C13.9522 17.9882 11.489 17.1119 9.32486 15.7085C7.31139 14.429 5.60431 12.722 4.32486 10.7085C2.91651 8.5345 2.04007 6.05932 1.76653 3.4835C1.7457 3.25305 1.77309 3.0208 1.84695 2.80152C1.9208 2.58224 2.03951 2.38074 2.1955 2.20985C2.3515 2.03896 2.54137 1.90242 2.75302 1.80893C2.96468 1.71544 3.19348 1.66705 3.42486 1.66683H5.92486C6.32928 1.66285 6.72136 1.80606 7.028 2.06977C7.33464 2.33349 7.53493 2.6997 7.59153 3.10016C7.69705 3.90022 7.89274 4.68577 8.17486 5.44183C8.28698 5.7401 8.31125 6.06426 8.24478 6.3759C8.17832 6.68753 8.02392 6.97359 7.79986 7.20016L6.74153 8.2585C7.92783 10.3448 9.65524 12.0722 11.7415 13.2585L12.7999 12.2002C13.0264 11.9761 13.3125 11.8217 13.6241 11.7552C13.9358 11.6888 14.2599 11.713 14.5582 11.8252C15.3143 12.1073 16.0998 12.303 16.8999 12.4085C17.3047 12.4656 17.6744 12.6695 17.9386 12.9814C18.2029 13.2933 18.3433 13.6915 18.3332 14.1002Z"
                                stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span class="fs_15 lh_22 fc_white">+0123456789</span>
                    </div>
                    <div class="d-flex align-items-center gap-2 mb-4 svg_20">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path
                                d="M3.33268 3.3335H16.666C17.5827 3.3335 18.3327 4.0835 18.3327 5.00016V15.0002C18.3327 15.9168 17.5827 16.6668 16.666 16.6668H3.33268C2.41602 16.6668 1.66602 15.9168 1.66602 15.0002V5.00016C1.66602 4.0835 2.41602 3.3335 3.33268 3.3335Z"
                                stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M18.3327 5L9.99935 10.8333L1.66602 5" stroke="white" stroke-width="1.5"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span class="fs_15 lh_22 fc_white">Support@twowheelerbd.com</span>
                    </div>

                    <div class="d-flex align-items-center gap-4 mb-3 mb-md-0">
                        <a href="#" class="pe-1 svg_24">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none">
                                <path
                                    d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z"
                                    fill="white" />
                            </svg>
                        </a>
                        <a href="#" class="pe-2 svg_24">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none">
                                <path
                                    d="M22.4591 6C21.6891 6.35 20.8591 6.58 19.9991 6.69C20.8791 6.16 21.5591 5.32 21.8791 4.31C21.0491 4.81 20.1291 5.16 19.1591 5.36C18.3691 4.5 17.2591 4 15.9991 4C13.6491 4 11.7291 5.92 11.7291 8.29C11.7291 8.63 11.7691 8.96 11.8391 9.27C8.27906 9.09 5.10906 7.38 2.99906 4.79C2.62906 5.42 2.41906 6.16 2.41906 6.94C2.41906 8.43 3.16906 9.75 4.32906 10.5C3.61906 10.5 2.95906 10.3 2.37906 10V10.03C2.37906 12.11 3.85906 13.85 5.81906 14.24C5.18979 14.4122 4.52916 14.4362 3.88906 14.31C4.16067 15.1625 4.6926 15.9084 5.41008 16.4429C6.12756 16.9775 6.99451 17.2737 7.88906 17.29C6.37269 18.4904 4.49306 19.1393 2.55906 19.13C2.21906 19.13 1.87906 19.11 1.53906 19.07C3.43906 20.29 5.69906 21 8.11906 21C15.9991 21 20.3291 14.46 20.3291 8.79C20.3291 8.6 20.3291 8.42 20.3191 8.23C21.1591 7.63 21.8791 6.87 22.4591 6Z"
                                    fill="white" />
                            </svg>
                        </a>
                        <a href="#" class="pe-2 svg_24">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none">
                                <path
                                    d="M10 15L15.19 12L10 9V15ZM21.56 7.17C21.69 7.64 21.78 8.27 21.84 9.07C21.91 9.87 21.94 10.56 21.94 11.16L22 12C22 14.19 21.84 15.8 21.56 16.83C21.31 17.73 20.73 18.31 19.83 18.56C19.36 18.69 18.5 18.78 17.18 18.84C15.88 18.91 14.69 18.94 13.59 18.94L12 19C7.81 19 5.2 18.84 4.17 18.56C3.27 18.31 2.69 17.73 2.44 16.83C2.31 16.36 2.22 15.73 2.16 14.93C2.09 14.13 2.06 13.44 2.06 12.84L2 12C2 9.81 2.16 8.2 2.44 7.17C2.69 6.27 3.27 5.69 4.17 5.44C4.64 5.31 5.5 5.22 6.82 5.16C8.12 5.09 9.31 5.06 10.41 5.06L12 5C16.19 5 18.8 5.16 19.83 5.44C20.73 5.69 21.31 6.27 21.56 7.17Z"
                                    fill="white" />
                            </svg>
                        </a>
                        <a href="#" class=" svg_24">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none">
                                <path
                                    d="M12 8.75C11.138 8.75 10.3114 9.09241 9.7019 9.7019C9.09241 10.3114 8.75 11.138 8.75 12C8.75 12.862 9.09241 13.6886 9.7019 14.2981C10.3114 14.9076 11.138 15.25 12 15.25C12.862 15.25 13.6886 14.9076 14.2981 14.2981C14.9076 13.6886 15.25 12.862 15.25 12C15.25 11.138 14.9076 10.3114 14.2981 9.7019C13.6886 9.09241 12.862 8.75 12 8.75Z"
                                    fill="white" />
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M6.76982 3.08194C10.2458 2.69664 13.7538 2.69664 17.2298 3.08194C19.1288 3.29394 20.6598 4.78894 20.8828 6.69494C21.295 10.2196 21.295 13.7803 20.8828 17.3049C20.6598 19.2109 19.1288 20.7059 17.2308 20.9189C13.7545 21.3043 10.2462 21.3043 6.76982 20.9189C4.87082 20.7059 3.33982 19.2109 3.11682 17.3059C2.70455 13.781 2.70455 10.2199 3.11682 6.69494C3.33982 4.78894 4.87082 3.29394 6.76982 3.08194ZM16.9998 5.99994C16.7346 5.99994 16.4802 6.1053 16.2927 6.29284C16.1052 6.48037 15.9998 6.73473 15.9998 6.99994C15.9998 7.26516 16.1052 7.51951 16.2927 7.70705C16.4802 7.89459 16.7346 7.99994 16.9998 7.99994C17.265 7.99994 17.5194 7.89459 17.7069 7.70705C17.8945 7.51951 17.9998 7.26516 17.9998 6.99994C17.9998 6.73473 17.8945 6.48037 17.7069 6.29284C17.5194 6.1053 17.265 5.99994 16.9998 5.99994ZM7.24982 11.9999C7.24982 10.7402 7.75027 9.53198 8.64106 8.64119C9.53186 7.75039 10.74 7.24994 11.9998 7.24994C13.2596 7.24994 14.4678 7.75039 15.3586 8.64119C16.2494 9.53198 16.7498 10.7402 16.7498 11.9999C16.7498 13.2597 16.2494 14.4679 15.3586 15.3587C14.4678 16.2495 13.2596 16.7499 11.9998 16.7499C10.74 16.7499 9.53186 16.2495 8.64106 15.3587C7.75027 14.4679 7.24982 13.2597 7.24982 11.9999Z"
                                    fill="white" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="col-6 col-md-4 col-lg-2">
                    <h3 class="fw_6 fs_22 lh_32 fc_white text-capitalize mb-4">Links</h3>
                    <a href="#" class="d-block mb-3 fs_15 lh_22 fc_white">All Products</a>
                    <a href="#" class="d-block mb-3 fs_15 lh_22 fc_white">About</a>
                    <a href="#" class="d-block mb-3 fs_15 lh_22 fc_white">Blog</a>
                    <a href="#" class="d-block mb-3 fs_15 lh_22 fc_white">Contact us</a>
                    <a href="#" class="d-block mb-3 fs_15 lh_22 fc_white">FAQ</a>
                    <a href="#" class="d-block mb-3 fs_15 lh_22 fc_white">Location Map</a>
                </div>
                <div class="col-6 col-md-4 col-lg-2">
                    <h3 class="fw_6 fs_22 lh_32 fc_white text-capitalize mb-4">Services</h3>
                    <a href="#" class="d-block mb-3 fs_15 lh_22 fc_white">Order tracking</a>
                    <a href="#" class="d-block mb-3 fs_15 lh_22 fc_white">Wish List</a>
                    <a href="#" class="d-block mb-3 fs_15 lh_22 fc_white">Login</a>
                    <a href="#" class="d-block mb-3 fs_15 lh_22 fc_white">My account</a>
                    <a href="#" class="d-block mb-3 fs_15 lh_22 fc_white">Terms & Conditions</a>
                    <a href="#" class="d-block mb-3 fs_15 lh_22 fc_white">Promotional Offers</a>
                </div>
                <div class="col-sm-6 col-md-6 col-lg-2">
                    <h3 class="fw_6 fs_22 lh_32 fc_white text-capitalize mb-4">Customer Care</h3>
                    <a href="#" class="d-block mb-3 fs_15 lh_22 fc_white">Login</a>
                    <a href="#" class="d-block mb-3 fs_15 lh_22 fc_white">My account</a>
                    <a href="#" class="d-block mb-3 fs_15 lh_22 fc_white">Wish List</a>
                    <a href="#" class="d-block mb-3 fs_15 lh_22 fc_white">Order tracking</a>
                    <a href="#" class="d-block mb-3 fs_15 lh_22 fc_white">FAQ</a>
                    <a href="#" class="d-block mb-3 fs_15 lh_22 fc_white">Contact us</a>
                </div>
                <div class="col-md-6 col-lg-3">
                    <h3 class="fw_6 fs_22 lh_32 fc_white text-capitalize mb-4">Newsletter</h3>
                    <p class="mb-4 fs_15 lh_22 fc_white">Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's standard.</p>
                    <form action="#">
                        <div class="input-group mb-4">
                            <input type="text" class="form-control btnp_1520 fs_14 fc_black"
                                placeholder="Search Here..." aria-label="Search Here..."
                                aria-describedby="header-search">
                            <span
                                class="input-group-text btnp_1520 bg_red br_5 fw_5 fs_14 fc_white border-0 text-uppercase tbg_3 hover svg_24"
                                id="header-search">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none">
                                    <path d="M22 2L11 13" stroke="white" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="white" stroke-width="1.5"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </span>
                        </div>
                    </form>
                    <h3 class="fw_6 fs_22 lh_32 fc_white text-capitalize mb-4">We Accept</h3>
                    <img src="./assets/images/ssl-img.png" alt="thumb" class="w-100">
                </div>
            </div>
            <div class="row g-4 spt">
                <div class="col-12 col-sm-6">
                    <p class="fs_15 lh_22 fc_white text-center text-sm-start">Copyright ©Autixir All Right Reserved.</p>
                </div>
                <div class="col-12 col-sm-6">
                    <div class="d-flex justify-content-center justify-content-sm-end align-items-center gap-4">
                        <a href="terms-conditions.html" class="d-inline-block fs_15 lh_22 fc_white">Terms &
                            Conditions</a>
                        <a href="privacy-policy.html" class="d-inline-block fs_15 lh_22 fc_white">Privacy Policy</a>
                        <a href="return-policy.html" class="d-inline-block fs_15 lh_22 fc_white">Return Policy</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  </template>