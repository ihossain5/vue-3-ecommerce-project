<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';

import { BASE_API_URL } from '../config.js';


export default {
  setup() {
    const loading = ref(true); 
    const categories = ref({});
    const filteredData = ref([]);

    onMounted(() => {
      setTimeout(() => {
        axios.get(`${BASE_API_URL}/categories`)
          .then(response => {
            categories.value = response.data.resutls;
            filteredData.value = categories.value.filter(item => item.is_shown_navbar === 1);
            loading.value = false; 
          })
          .catch(error => {
            console.error(error);
            loading.value = false; 
          });
      }); // 2-second delay
    });


    return {
      loading,
      categories,
      filteredData,

    };
  },
}
</script>

<template>
    <header>
        <div class="header_main">
            <div class="container-fluid container-xxxl">
                <div class="row align-items-center">
                    <div class="col-md-4 col-lg-3">
                        <div class="d-flex d-lg-inline align-items-center justify-content-between">
                            <div class="logo_wrapper">
                                <router-link to="/">
                                    <img src="https://twowheelersbd.com/frontend/assets/images/header-logo.svg" alt="logo">
                                </router-link>
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
                                <p class="fw_6 fs_14 lh_20">
                                    <router-link to="sign-in" class="fc_black">Sign In</router-link>
                                    <router-link to="sign-up" class="fc_black">/ Sign Up</router-link>
                                </p>
                                <!-- <span class="fs_14 lh_20 mb-1">My Account</span>
                                <div class="dropdown">
                                    <button class="dropdown-toggle fw_6 fs_14 lh_20 fc_black" type="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        Account Holder
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <a class="d-flex align-items-center gap-3 svg_20" href="my-profile-info.html">
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
                                                        stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M19.1673 2.5H0.833984V6.66667H19.1673V2.5Z" stroke="#666666"
                                                        stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
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
                                </div> -->
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
                                        stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
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
                                        stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path
                                        d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z"
                                        stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path
                                        d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6"
                                        stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
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
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
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
                            <router-link class="fw_5 fs_14 lh_20 fc_white text-capitalize" v-for="category in filteredData" :key="category.id"  :to="category.id === 8 ? '/all-accessories' : '/' " >{{ category.name }}</router-link>
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
                <a href="/" class="active"  v-for="category in filteredData" :key="category.id">{{ category.name }}</a>
            </nav>
        </div>
    </div>
</template>