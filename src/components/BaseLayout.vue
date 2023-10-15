<script>
import Navbar from './Navbar.vue';

export default {
    components: { Navbar }
}
</script>

<template>
    
<Navbar></Navbar>

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
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z"
                                    fill="white" />
                            </svg>
                        </a>
                        <a href="#" class="pe-2 svg_24">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M22.4591 6C21.6891 6.35 20.8591 6.58 19.9991 6.69C20.8791 6.16 21.5591 5.32 21.8791 4.31C21.0491 4.81 20.1291 5.16 19.1591 5.36C18.3691 4.5 17.2591 4 15.9991 4C13.6491 4 11.7291 5.92 11.7291 8.29C11.7291 8.63 11.7691 8.96 11.8391 9.27C8.27906 9.09 5.10906 7.38 2.99906 4.79C2.62906 5.42 2.41906 6.16 2.41906 6.94C2.41906 8.43 3.16906 9.75 4.32906 10.5C3.61906 10.5 2.95906 10.3 2.37906 10V10.03C2.37906 12.11 3.85906 13.85 5.81906 14.24C5.18979 14.4122 4.52916 14.4362 3.88906 14.31C4.16067 15.1625 4.6926 15.9084 5.41008 16.4429C6.12756 16.9775 6.99451 17.2737 7.88906 17.29C6.37269 18.4904 4.49306 19.1393 2.55906 19.13C2.21906 19.13 1.87906 19.11 1.53906 19.07C3.43906 20.29 5.69906 21 8.11906 21C15.9991 21 20.3291 14.46 20.3291 8.79C20.3291 8.6 20.3291 8.42 20.3191 8.23C21.1591 7.63 21.8791 6.87 22.4591 6Z"
                                    fill="white" />
                            </svg>
                        </a>
                        <a href="#" class="pe-2 svg_24">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M10 15L15.19 12L10 9V15ZM21.56 7.17C21.69 7.64 21.78 8.27 21.84 9.07C21.91 9.87 21.94 10.56 21.94 11.16L22 12C22 14.19 21.84 15.8 21.56 16.83C21.31 17.73 20.73 18.31 19.83 18.56C19.36 18.69 18.5 18.78 17.18 18.84C15.88 18.91 14.69 18.94 13.59 18.94L12 19C7.81 19 5.2 18.84 4.17 18.56C3.27 18.31 2.69 17.73 2.44 16.83C2.31 16.36 2.22 15.73 2.16 14.93C2.09 14.13 2.06 13.44 2.06 12.84L2 12C2 9.81 2.16 8.2 2.44 7.17C2.69 6.27 3.27 5.69 4.17 5.44C4.64 5.31 5.5 5.22 6.82 5.16C8.12 5.09 9.31 5.06 10.41 5.06L12 5C16.19 5 18.8 5.16 19.83 5.44C20.73 5.69 21.31 6.27 21.56 7.17Z"
                                    fill="white" />
                            </svg>
                        </a>
                        <a href="#" class=" svg_24">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
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
                            <input type="text" class="form-control btnp_1520 fs_14 fc_black" placeholder="Search Here..."
                                aria-label="Search Here..." aria-describedby="header-search">
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