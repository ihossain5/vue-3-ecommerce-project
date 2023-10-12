<script setup>
import AdvanceSearch from '../components/AdvanceSearch.vue'
import TodayDeal from '../components/pages/Home/TodayDeal.vue'
import Category from '../components/pages/Home/Category.vue'


</script>

<template>
<AdvanceSearch></AdvanceSearch>

    <!-- categories with slider -->
    <section class="categories_sc">
        <div class="container-fluid container-xxxl">
            <div class="row">
                <div class="col-md-3 col-lg-2 d-none d-md-block">
                    <div class="categories_wrapper br_5 position-relative">
                        <h4 class="d-flex align-items-center gap-2 bg_black p-3 svg_24">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25"
                                fill="none">
                                <path d="M4 6.5L14 6.5" stroke="white" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path d="M4 12.5L20 12.5" stroke="white" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path d="M4 18.5H10" stroke="white" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                            <span class="fw_5 fs_18 lh_26 fc_white">All Category</span>
                        </h4>
                        <div class="categories">
                            <div class="catg_item">
                                <a href="#" class="d-grid gap-3">
                                    <img src="./assets/icons/home-categories/icon-motobike.svg" alt="icon">
                                    <span class="fs_15 lh_22">Motorcycle</span>
                                </a>
                                <div class="sub_category">
                                    <div class="row row-cols-4 gy-3 gy-lg-4 gx-3 gx-lg-4 gx-xl-5">

                                        <div class="row_item">
                                            <a href="#" class="d-grid gap-3">
                                                <img src="./assets/icons/categories/tools.svg" alt="icon">
                                                <span class="fs_15 lh_22">Tools</span>
                                            </a>
                                        </div>
                                        <div class="row_item">
                                            <a href="#" class="d-grid gap-3">
                                                <img src="./assets/icons/categories/cleaning-products.svg" alt="icon">
                                                <span class="fs_15 lh_22">Cleaning Supplies</span>
                                            </a>
                                        </div>
                                        <div class="row_item">
                                            <a href="#" class="d-grid gap-3">
                                                <img src="./assets/icons/categories/bed-sheets.svg" alt="icon">
                                                <span class="fs_15 lh_22">Cover</span>
                                            </a>
                                        </div>
                                        <div class="row_item">
                                            <a href="#" class="d-grid gap-3">
                                                <img src="./assets/icons/categories/travel-luggage.svg" alt="icon">
                                                <span class="fs_15 lh_22">Luggage & Backpack</span>
                                            </a>
                                        </div>
                                        <div class="row_item">
                                            <a href="#" class="d-grid gap-3">
                                                <img src="./assets/icons/categories/cpu.svg" alt="icon">
                                                <span class="fs_15 lh_22">Electronics & Mounts</span>
                                            </a>
                                        </div>
                                        <div class="row_item">
                                            <a href="#" class="d-grid gap-3">
                                                <img src="./assets/icons/categories/shield.svg" alt="icon">
                                                <span class="fs_15 lh_22">Security</span>
                                            </a>
                                        </div>
                                        <div class="row_item">
                                            <a href="#" class="d-grid gap-3">
                                                <img src="./assets/icons/categories/ramp.svg" alt="icon">
                                                <span class="fs_15 lh_22">Ramps & Stands</span>
                                            </a>
                                        </div>
                                        <div class="row_item">
                                            <a href="#" class="d-grid gap-3">
                                                <img src="./assets/icons/categories/gift-box.svg" alt="icon">
                                                <span class="fs_15 lh_22">Gifts</span>
                                            </a>
                                        </div>
                                        <div class="row_item">
                                            <a href="#" class="d-grid gap-3">
                                                <img src="./assets/icons/categories/tools.svg" alt="icon">
                                                <span class="fs_15 lh_22">Tools</span>
                                            </a>
                                        </div>
                                        <div class="row_item">
                                            <a href="#" class="d-grid gap-3">
                                                <img src="./assets/icons/categories/cleaning-products.svg" alt="icon">
                                                <span class="fs_15 lh_22">Cleaning Supplies</span>
                                            </a>
                                        </div>
                                        <div class="row_item">
                                            <a href="#" class="d-grid gap-3">
                                                <img src="./assets/icons/categories/bed-sheets.svg" alt="icon">
                                                <span class="fs_15 lh_22">Cover</span>
                                            </a>
                                        </div>
                                        <div class="row_item">
                                            <a href="#" class="d-grid gap-3">
                                                <img src="./assets/icons/categories/travel-luggage.svg" alt="icon">
                                                <span class="fs_15 lh_22">Luggage & Backpack</span>
                                            </a>
                                        </div>
                                        <div class="row_item">
                                            <a href="#" class="d-grid gap-3">
                                                <img src="./assets/icons/categories/cpu.svg" alt="icon">
                                                <span class="fs_15 lh_22">Electronics & Mounts</span>
                                            </a>
                                        </div>
                                        <div class="row_item">
                                            <a href="#" class="d-grid gap-3">
                                                <img src="./assets/icons/categories/shield.svg" alt="icon">
                                                <span class="fs_15 lh_22">Security</span>
                                            </a>
                                        </div>
                                        <div class="row_item">
                                            <a href="#" class="d-grid gap-3">
                                                <img src="./assets/icons/categories/ramp.svg" alt="icon">
                                                <span class="fs_15 lh_22">Ramps & Stands</span>
                                            </a>
                                        </div>
                                        <div class="row_item">
                                            <a href="#" class="d-grid gap-3">
                                                <img src="./assets/icons/categories/gift-box.svg" alt="icon">
                                                <span class="fs_15 lh_22">Gifts</span>
                                            </a>
                                        </div>
                                        <div class="row_item">
                                            <a href="#" class="d-grid gap-3">
                                                <img src="./assets/icons/categories/tools.svg" alt="icon">
                                                <span class="fs_15 lh_22">Tools</span>
                                            </a>
                                        </div>
                                        <div class="row_item">
                                            <a href="#" class="d-grid gap-3">
                                                <img src="./assets/icons/categories/cleaning-products.svg" alt="icon">
                                                <span class="fs_15 lh_22">Cleaning Supplies</span>
                                            </a>
                                        </div>
                                        <div class="row_item">
                                            <a href="#" class="d-grid gap-3">
                                                <img src="./assets/icons/categories/bed-sheets.svg" alt="icon">
                                                <span class="fs_15 lh_22">Cover</span>
                                            </a>
                                        </div>
                                        <div class="row_item">
                                            <a href="#" class="d-grid gap-3">
                                                <img src="./assets/icons/categories/travel-luggage.svg" alt="icon">
                                                <span class="fs_15 lh_22">Luggage & Backpack</span>
                                            </a>
                                        </div>
                                        <div class="row_item">
                                            <a href="#" class="d-grid gap-3">
                                                <img src="./assets/icons/categories/cpu.svg" alt="icon">
                                                <span class="fs_15 lh_22">Electronics & Mounts</span>
                                            </a>
                                        </div>
                                        <div class="row_item">
                                            <a href="#" class="d-grid gap-3">
                                                <img src="./assets/icons/categories/shield.svg" alt="icon">
                                                <span class="fs_15 lh_22">Security</span>
                                            </a>
                                        </div>
                                        <div class="row_item">
                                            <a href="#" class="d-grid gap-3">
                                                <img src="./assets/icons/categories/ramp.svg" alt="icon">
                                                <span class="fs_15 lh_22">Ramps & Stands</span>
                                            </a>
                                        </div>
                                        <div class="row_item">
                                            <a href="#" class="d-grid gap-3">
                                                <img src="./assets/icons/categories/gift-box.svg" alt="icon">
                                                <span class="fs_15 lh_22">Gifts</span>
                                            </a>
                                        </div>
                                        <div class="row_item">
                                            <a href="#" class="d-grid gap-3">
                                                <img src="./assets/icons/categories/tools.svg" alt="icon">
                                                <span class="fs_15 lh_22">Tools</span>
                                            </a>
                                        </div>
                                        <div class="row_item">
                                            <a href="#" class="d-grid gap-3">
                                                <img src="./assets/icons/categories/cleaning-products.svg" alt="icon">
                                                <span class="fs_15 lh_22">Cleaning Supplies</span>
                                            </a>
                                        </div>
                                        <div class="row_item">
                                            <a href="#" class="d-grid gap-3">
                                                <img src="./assets/icons/categories/bed-sheets.svg" alt="icon">
                                                <span class="fs_15 lh_22">Cover</span>
                                            </a>
                                        </div>
                                        <div class="row_item">
                                            <a href="#" class="d-grid gap-3">
                                                <img src="./assets/icons/categories/travel-luggage.svg" alt="icon">
                                                <span class="fs_15 lh_22">Luggage & Backpack</span>
                                            </a>
                                        </div>
                                        <div class="row_item">
                                            <a href="#" class="d-grid gap-3">
                                                <img src="./assets/icons/categories/cpu.svg" alt="icon">
                                                <span class="fs_15 lh_22">Electronics & Mounts</span>
                                            </a>
                                        </div>
                                        <div class="row_item">
                                            <a href="#" class="d-grid gap-3">
                                                <img src="./assets/icons/categories/shield.svg" alt="icon">
                                                <span class="fs_15 lh_22">Security</span>
                                            </a>
                                        </div>
                                        <div class="row_item">
                                            <a href="#" class="d-grid gap-3">
                                                <img src="./assets/icons/categories/ramp.svg" alt="icon">
                                                <span class="fs_15 lh_22">Ramps & Stands</span>
                                            </a>
                                        </div>
                                        <div class="row_item">
                                            <a href="#" class="d-grid gap-3">
                                                <img src="./assets/icons/categories/gift-box.svg" alt="icon">
                                                <span class="fs_15 lh_22">Gifts</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="catg_item">
                                <a href="#" class="d-grid gap-3">
                                    <img src="./assets/icons/home-categories/icon-setting.svg" alt="icon">
                                    <span class="fs_15 lh_22">Accessories</span>
                                </a>
                                <div class="sub_category">
                                    <div class="row row-cols-4 gy-3 gy-lg-4 gx-3 gx-lg-4 gx-xl-5">
                                        <div class="row_item">
                                            <a href="#" class="d-grid gap-3">
                                                <img src="./assets/icons/categories/tools.svg" alt="icon">
                                                <span class="fs_15 lh_22">Tools</span>
                                            </a>
                                        </div>
                                        <div class="row_item">
                                            <a href="#" class="d-grid gap-3">
                                                <img src="./assets/icons/categories/cleaning-products.svg" alt="icon">
                                                <span class="fs_15 lh_22">Cleaning Supplies</span>
                                            </a>
                                        </div>
                                        <div class="row_item">
                                            <a href="#" class="d-grid gap-3">
                                                <img src="./assets/icons/categories/bed-sheets.svg" alt="icon">
                                                <span class="fs_15 lh_22">Cover</span>
                                            </a>
                                        </div>
                                        <div class="row_item">
                                            <a href="#" class="d-grid gap-3">
                                                <img src="./assets/icons/categories/travel-luggage.svg" alt="icon">
                                                <span class="fs_15 lh_22">Luggage & Backpack</span>
                                            </a>
                                        </div>
                                        <div class="row_item">
                                            <a href="#" class="d-grid gap-3">
                                                <img src="./assets/icons/categories/cpu.svg" alt="icon">
                                                <span class="fs_15 lh_22">Electronics & Mounts</span>
                                            </a>
                                        </div>
                                        <div class="row_item">
                                            <a href="#" class="d-grid gap-3">
                                                <img src="./assets/icons/categories/shield.svg" alt="icon">
                                                <span class="fs_15 lh_22">Security</span>
                                            </a>
                                        </div>
                                        <div class="row_item">
                                            <a href="#" class="d-grid gap-3">
                                                <img src="./assets/icons/categories/ramp.svg" alt="icon">
                                                <span class="fs_15 lh_22">Ramps & Stands</span>
                                            </a>
                                        </div>
                                        <div class="row_item">
                                            <a href="#" class="d-grid gap-3">
                                                <img src="./assets/icons/categories/gift-box.svg" alt="icon">
                                                <span class="fs_15 lh_22">Gifts</span>
                                            </a>
                                        </div>
                                        <div class="row_item">
                                            <a href="#" class="d-grid gap-3">
                                                <img src="./assets/icons/categories/tools.svg" alt="icon">
                                                <span class="fs_15 lh_22">Tools</span>
                                            </a>
                                        </div>
                                        <div class="row_item">
                                            <a href="#" class="d-grid gap-3">
                                                <img src="./assets/icons/categories/cleaning-products.svg" alt="icon">
                                                <span class="fs_15 lh_22">Cleaning Supplies</span>
                                            </a>
                                        </div>
                                        <div class="row_item">
                                            <a href="#" class="d-grid gap-3">
                                                <img src="./assets/icons/categories/bed-sheets.svg" alt="icon">
                                                <span class="fs_15 lh_22">Cover</span>
                                            </a>
                                        </div>
                                        <div class="row_item">
                                            <a href="#" class="d-grid gap-3">
                                                <img src="./assets/icons/categories/travel-luggage.svg" alt="icon">
                                                <span class="fs_15 lh_22">Luggage & Backpack</span>
                                            </a>
                                        </div>
                                        <div class="row_item">
                                            <a href="#" class="d-grid gap-3">
                                                <img src="./assets/icons/categories/cpu.svg" alt="icon">
                                                <span class="fs_15 lh_22">Electronics & Mounts</span>
                                            </a>
                                        </div>
                                        <div class="row_item">
                                            <a href="#" class="d-grid gap-3">
                                                <img src="./assets/icons/categories/shield.svg" alt="icon">
                                                <span class="fs_15 lh_22">Security</span>
                                            </a>
                                        </div>
                                        <div class="row_item">
                                            <a href="#" class="d-grid gap-3">
                                                <img src="./assets/icons/categories/ramp.svg" alt="icon">
                                                <span class="fs_15 lh_22">Ramps & Stands</span>
                                            </a>
                                        </div>
                                        <div class="row_item">
                                            <a href="#" class="d-grid gap-3">
                                                <img src="./assets/icons/categories/gift-box.svg" alt="icon">
                                                <span class="fs_15 lh_22">Gifts</span>
                                            </a>
                                        </div>
                                        <div class="row_item">
                                            <a href="#" class="d-grid gap-3">
                                                <img src="./assets/icons/categories/tools.svg" alt="icon">
                                                <span class="fs_15 lh_22">Tools</span>
                                            </a>
                                        </div>
                                        <div class="row_item">
                                            <a href="#" class="d-grid gap-3">
                                                <img src="./assets/icons/categories/cleaning-products.svg" alt="icon">
                                                <span class="fs_15 lh_22">Cleaning Supplies</span>
                                            </a>
                                        </div>
                                        <div class="row_item">
                                            <a href="#" class="d-grid gap-3">
                                                <img src="./assets/icons/categories/bed-sheets.svg" alt="icon">
                                                <span class="fs_15 lh_22">Cover</span>
                                            </a>
                                        </div>
                                        <div class="row_item">
                                            <a href="#" class="d-grid gap-3">
                                                <img src="./assets/icons/categories/travel-luggage.svg" alt="icon">
                                                <span class="fs_15 lh_22">Luggage & Backpack</span>
                                            </a>
                                        </div>
                                        <div class="row_item">
                                            <a href="#" class="d-grid gap-3">
                                                <img src="./assets/icons/categories/cpu.svg" alt="icon">
                                                <span class="fs_15 lh_22">Electronics & Mounts</span>
                                            </a>
                                        </div>
                                        <div class="row_item">
                                            <a href="#" class="d-grid gap-3">
                                                <img src="./assets/icons/categories/shield.svg" alt="icon">
                                                <span class="fs_15 lh_22">Security</span>
                                            </a>
                                        </div>
                                        <div class="row_item">
                                            <a href="#" class="d-grid gap-3">
                                                <img src="./assets/icons/categories/ramp.svg" alt="icon">
                                                <span class="fs_15 lh_22">Ramps & Stands</span>
                                            </a>
                                        </div>
                                        <div class="row_item">
                                            <a href="#" class="d-grid gap-3">
                                                <img src="./assets/icons/categories/gift-box.svg" alt="icon">
                                                <span class="fs_15 lh_22">Gifts</span>
                                            </a>
                                        </div>
                                        <div class="row_item">
                                            <a href="#" class="d-grid gap-3">
                                                <img src="./assets/icons/categories/tools.svg" alt="icon">
                                                <span class="fs_15 lh_22">Tools</span>
                                            </a>
                                        </div>
                                        <div class="row_item">
                                            <a href="#" class="d-grid gap-3">
                                                <img src="./assets/icons/categories/cleaning-products.svg" alt="icon">
                                                <span class="fs_15 lh_22">Cleaning Supplies</span>
                                            </a>
                                        </div>
                                        <div class="row_item">
                                            <a href="#" class="d-grid gap-3">
                                                <img src="./assets/icons/categories/bed-sheets.svg" alt="icon">
                                                <span class="fs_15 lh_22">Cover</span>
                                            </a>
                                        </div>
                                        <div class="row_item">
                                            <a href="#" class="d-grid gap-3">
                                                <img src="./assets/icons/categories/travel-luggage.svg" alt="icon">
                                                <span class="fs_15 lh_22">Luggage & Backpack</span>
                                            </a>
                                        </div>
                                        <div class="row_item">
                                            <a href="#" class="d-grid gap-3">
                                                <img src="./assets/icons/categories/cpu.svg" alt="icon">
                                                <span class="fs_15 lh_22">Electronics & Mounts</span>
                                            </a>
                                        </div>
                                        <div class="row_item">
                                            <a href="#" class="d-grid gap-3">
                                                <img src="./assets/icons/categories/shield.svg" alt="icon">
                                                <span class="fs_15 lh_22">Security</span>
                                            </a>
                                        </div>
                                        <div class="row_item">
                                            <a href="#" class="d-grid gap-3">
                                                <img src="./assets/icons/categories/ramp.svg" alt="icon">
                                                <span class="fs_15 lh_22">Ramps & Stands</span>
                                            </a>
                                        </div>
                                        <div class="row_item">
                                            <a href="#" class="d-grid gap-3">
                                                <img src="./assets/icons/categories/gift-box.svg" alt="icon">
                                                <span class="fs_15 lh_22">Gifts</span>
                                            </a>
                                        </div>
                                        <div class="row_item">
                                            <a href="#" class="d-grid gap-3">
                                                <img src="./assets/icons/categories/tools.svg" alt="icon">
                                                <span class="fs_15 lh_22">Tools</span>
                                            </a>
                                        </div>
                                        <div class="row_item">
                                            <a href="#" class="d-grid gap-3">
                                                <img src="./assets/icons/categories/cleaning-products.svg" alt="icon">
                                                <span class="fs_15 lh_22">Cleaning Supplies</span>
                                            </a>
                                        </div>
                                        <div class="row_item">
                                            <a href="#" class="d-grid gap-3">
                                                <img src="./assets/icons/categories/bed-sheets.svg" alt="icon">
                                                <span class="fs_15 lh_22">Cover</span>
                                            </a>
                                        </div>
                                        <div class="row_item">
                                            <a href="#" class="d-grid gap-3">
                                                <img src="./assets/icons/categories/travel-luggage.svg" alt="icon">
                                                <span class="fs_15 lh_22">Luggage & Backpack</span>
                                            </a>
                                        </div>
                                        <div class="row_item">
                                            <a href="#" class="d-grid gap-3">
                                                <img src="./assets/icons/categories/cpu.svg" alt="icon">
                                                <span class="fs_15 lh_22">Electronics & Mounts</span>
                                            </a>
                                        </div>
                                        <div class="row_item">
                                            <a href="#" class="d-grid gap-3">
                                                <img src="./assets/icons/categories/shield.svg" alt="icon">
                                                <span class="fs_15 lh_22">Security</span>
                                            </a>
                                        </div>
                                        <div class="row_item">
                                            <a href="#" class="d-grid gap-3">
                                                <img src="./assets/icons/categories/ramp.svg" alt="icon">
                                                <span class="fs_15 lh_22">Ramps & Stands</span>
                                            </a>
                                        </div>
                                        <div class="row_item">
                                            <a href="#" class="d-grid gap-3">
                                                <img src="./assets/icons/categories/gift-box.svg" alt="icon">
                                                <span class="fs_15 lh_22">Gifts</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="catg_item">
                                <a href="#" class="d-grid gap-3">
                                    <img src="./assets/icons/home-categories/icon-spart.svg" alt="icon">
                                    <span class="fs_15 lh_22">Spare Parts</span>
                                </a>
                            </div>
                            <div class="catg_item">
                                <a href="#" class="d-grid gap-3">
                                    <img src="./assets/icons/home-categories/icon-helmet.svg" alt="icon">
                                    <span class="fs_15 lh_22">Helmet</span>
                                </a>
                            </div>
                            <div class="catg_item">
                                <a href="#" class="d-grid gap-3">
                                    <img src="./assets/icons/home-categories/icon-apparel.svg" alt="icon">
                                    <span class="fs_15 lh_22">Apparel</span>
                                </a>
                            </div>
                            <div class="catg_item">
                                <a href="#" class="d-grid gap-3">
                                    <img src="./assets/icons/home-categories/icon-eoil.svg" alt="icon">
                                    <span class="fs_15 lh_22">Engine Oil</span>
                                </a>
                            </div>
                            <div class="catg_item">
                                <a href="#" class="d-grid gap-3">
                                    <img src="./assets/icons/home-categories/icon-smeter.svg" alt="icon">
                                    <span class="fs_15 lh_22">Speedometer</span>
                                </a>
                            </div>
                            <div class="catg_item">
                                <a href="#" class="d-grid gap-3">
                                    <img src="./assets/icons/home-categories/icon-apparel.svg" alt="icon">
                                    <span class="fs_15 lh_22">Jacket and Vests</span>
                                </a>
                            </div>
                            <div class="catg_item">
                                <a href="#" class="d-grid gap-3">
                                    <img src="./assets/icons/home-categories/icon-gloves.svg" alt="icon">
                                    <span class="fs_15 lh_22">Gloves</span>
                                </a>
                            </div>
                            <div class="catg_item">
                                <a href="#" class="d-grid gap-3">
                                    <img src="./assets/icons/home-categories/icon-tyre.svg" alt="icon">
                                    <span class="fs_15 lh_22">Tyre</span>
                                </a>
                            </div>
                            <div class="catg_item">
                                <a href="#" class="d-grid gap-3">
                                    <img src="./assets/icons/home-categories/icon-stckers.svg" alt="icon">
                                    <span class="fs_15 lh_22">Stickers</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-9 col-lg-10">
                    <div class="category_slider br_5 overflow-hidden">
                        <div class="owl-carousel owl-theme">
                            <div class="item">
                                <img src="./assets/images/cs-img-1.png" alt="slider-images">
                            </div>
                            <div class="item">
                                <img src="/assets/images/cs-img-1.png" alt="slider-images">
                            </div>
                            <div class="item">
                                <img src="/assets/images/cs-img-1.png" alt="slider-images">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

<TodayDeal></TodayDeal>

  <!-- our categories -->
 <Category></Category>

    <!-- our brands -->
<Category></Category>
    <section class="our_brands_sc spy">
        <div class="container-fluid container-xxxl">
            <div class="sc_title_wrapper">
                <h1 class="sc_title">Our Brands</h1>
                <a href="#" class="br_5 bg_red btnp_1228 tbg_3 hover">
                    <span class="fw_5 fs_14 lh_20 fc_white text-uppercase">view all</span>
                </a>
            </div>
            <div class="row row-cols-3 row-cols-sm-4 row-cols-lg-5 row-cols-xl-6 gx-2 gy-3 gy-md-4 gx-md-5">
                <div class="row_item">
                    <a href="single-brand.html"
                        class="d-flex justify-content-center align-items-center brand_card bg_white br_5 bxy_gl bs_15 tbs_tb_3 hover">
                        <img src="./assets/images/brand-image.png" alt="logo" class="w-100">
                    </a>
                </div>
                <div class="row_item">
                    <a href="single-brand.html"
                        class="d-flex justify-content-center align-items-center brand_card bg_white br_5 bxy_gl bs_15 tbs_tb_3 hover">
                        <img src="./assets/images/brand-image.png" alt="logo" class="w-100">
                    </a>
                </div>
                <div class="row_item">
                    <a href="single-brand.html"
                        class="d-flex justify-content-center align-items-center brand_card bg_white br_5 bxy_gl bs_15 tbs_tb_3 hover">
                        <img src="./assets/images/brand-image.png" alt="logo" class="w-100">
                    </a>
                </div>
                <div class="row_item">
                    <a href="single-brand.html"
                        class="d-flex justify-content-center align-items-center brand_card bg_white br_5 bxy_gl bs_15 tbs_tb_3 hover">
                        <img src="./assets/images/brand-image.png" alt="logo" class="w-100">
                    </a>
                </div>
                <div class="row_item">
                    <a href="single-brand.html"
                        class="d-flex justify-content-center align-items-center brand_card bg_white br_5 bxy_gl bs_15 tbs_tb_3 hover">
                        <img src="./assets/images/brand-image.png" alt="logo" class="w-100">
                    </a>
                </div>
                <div class="row_item">
                    <a href="single-brand.html"
                        class="d-flex justify-content-center align-items-center brand_card bg_white br_5 bxy_gl bs_15 tbs_tb_3 hover">
                        <img src="./assets/images/brand-image.png" alt="logo" class="w-100">
                    </a>
                </div>
                <div class="row_item">
                    <a href="single-brand.html"
                        class="d-flex justify-content-center align-items-center brand_card bg_white br_5 bxy_gl bs_15 tbs_tb_3 hover">
                        <img src="./assets/images/brand-image.png" alt="logo" class="w-100">
                    </a>
                </div>
                <div class="row_item">
                    <a href="single-brand.html"
                        class="d-flex justify-content-center align-items-center brand_card bg_white br_5 bxy_gl bs_15 tbs_tb_3 hover">
                        <img src="./assets/images/brand-image.png" alt="logo" class="w-100">
                    </a>
                </div>
                <div class="row_item">
                    <a href="single-brand.html"
                        class="d-flex justify-content-center align-items-center brand_card bg_white br_5 bxy_gl bs_15 tbs_tb_3 hover">
                        <img src="./assets/images/brand-image.png" alt="logo" class="w-100">
                    </a>
                </div>
                <div class="row_item">
                    <a href="single-brand.html"
                        class="d-flex justify-content-center align-items-center brand_card bg_white br_5 bxy_gl bs_15 tbs_tb_3 hover">
                        <img src="./assets/images/brand-image.png" alt="logo" class="w-100">
                    </a>
                </div>
                <div class="row_item">
                    <a href="single-brand.html"
                        class="d-flex justify-content-center align-items-center brand_card bg_white br_5 bxy_gl bs_15 tbs_tb_3 hover">
                        <img src="./assets/images/brand-image.png" alt="logo" class="w-100">
                    </a>
                </div>
                <div class="row_item">
                    <a href="single-brand.html"
                        class="d-flex justify-content-center align-items-center brand_card bg_white br_5 bxy_gl bs_15 tbs_tb_3 hover">
                        <img src="./assets/images/brand-image.png" alt="logo" class="w-100">
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- our shop -->
    <section class="our_shop_sc spy">
        <div class="container-fluid container-xxxl">
            <div class="sc_title_wrapper">
                <h1 class="sc_title">our shop</h1>
                <a href="#" class="br_5 bg_red btnp_1228 tbg_3 hover">
                    <span class="fw_5 fs_14 lh_20 fc_white text-uppercase">view all</span>
                </a>
            </div>
            <div class="row row-cols-2 row-cols-lg-3 g-2 g-sm-3 g-xl-5">
                <div class="row_item">
                    <div
                        class="d-flex flex-wrap flex-lg-nowrap gap-2 gap-md-3 gap-lg-4 shop_card br_5 bxy_gl bs_15 tbs_tb_3 hover">
                        <div>
                            <div class="img_box">
                                <img src="./assets/images/os-img-1.png" alt="thumb" class="w-100">
                            </div>
                        </div>
                        <div>
                            <div
                                class="h-100 d-flex flex-column justify-content-between align-items-center align-items-md-start gap-2">
                                <div class="text-center text-md-start">
                                    <h4 class="mb-md-2 fw_5 fs_20 lh_29">Bike Parts Center Bike Parts Center Bike Parts
                                        Center Bike Parts Center</h4>
                                    <div class="rate_wrapper">
                                        <div class="rating rating_16" data-rateyo-read-only="true"></div>
                                    </div>
                                    <p class="pt-md-3 fs_15 lh_22 fc_gd">Dhaka 1207</p>
                                </div>
                                <div>
                                    <a href="#" class="d-inline-block br_5 bg_red btnp_1530 tbg_3 hover">
                                        <span class="fw_5 fs_14 lh_20 fc_white text-uppercase">view all</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row_item">
                    <div
                        class="d-flex flex-wrap flex-lg-nowrap gap-2 gap-md-3 gap-lg-4 shop_card br_5 bxy_gl bs_15 tbs_tb_3 hover">
                        <div>
                            <div class="img_box">
                                <img src="./assets/images/os-img-2.png" alt="thumb" class="w-100">
                            </div>
                        </div>
                        <div>
                            <div
                                class="h-100 d-flex flex-column justify-content-between align-items-center align-items-md-start gap-2">
                                <div class="text-center text-md-start">
                                    <h4 class="mb-md-2 fw_5 fs_20 lh_29">Moto Max</h4>
                                    <div class="rate_wrapper">
                                        <div class="rating rating_16"></div>
                                    </div>
                                    <p class="pt-md-3 fs_15 lh_22 fc_gd">Dhaka 1100</p>
                                </div>
                                <div>
                                    <a href="#" class="d-inline-block br_5 bg_red btnp_1530 tbg_3 hover">
                                        <span class="fw_5 fs_14 lh_20 fc_white text-uppercase">view all</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row_item">
                    <div
                        class="d-flex flex-wrap flex-lg-nowrap gap-2 gap-md-3 gap-lg-4 shop_card br_5 bxy_gl bs_15 tbs_tb_3 hover">
                        <div>
                            <div class="img_box">
                                <img src="./assets/images/os-img-3.png" alt="thumb" class="w-100">
                            </div>
                        </div>
                        <div>
                            <div
                                class="h-100 d-flex flex-column justify-content-between align-items-center align-items-md-start gap-2">
                                <div class="text-center text-md-start">
                                    <h4 class="mb-md-2 fw_5 fs_20 lh_29">AUTO FAIR Mirpur-10</h4>
                                    <div class="rate_wrapper">
                                        <div class="rating rating_16"></div>
                                    </div>
                                    <p class="pt-md-3 fs_15 lh_22 fc_gd">Dhaka 1216</p>
                                </div>
                                <div>
                                    <a href="#" class="d-inline-block br_5 bg_red btnp_1530 tbg_3 hover">
                                        <span class="fw_5 fs_14 lh_20 fc_white text-uppercase">view all</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row_item">
                    <div
                        class="d-flex flex-wrap flex-lg-nowrap gap-2 gap-md-3 gap-lg-4 shop_card br_5 bxy_gl bs_15 tbs_tb_3 hover">
                        <div>
                            <div class="img_box">
                                <img src="./assets/images/os-img-1.png" alt="thumb" class="w-100">
                            </div>
                        </div>
                        <div>
                            <div
                                class="h-100 d-flex flex-column justify-content-between align-items-center align-items-md-start gap-2">
                                <div class="text-center text-md-start">
                                    <h4 class="mb-md-2 fw_5 fs_20 lh_29">Wheels</h4>
                                    <div class="rate_wrapper">
                                        <div class="rating rating_16"></div>
                                    </div>
                                    <p class="pt-md-3 fs_15 lh_22 fc_gd">Dhaka 1100</p>
                                </div>
                                <div>
                                    <a href="#" class="d-inline-block br_5 bg_red btnp_1530 tbg_3 hover">
                                        <span class="fw_5 fs_14 lh_20 fc_white text-uppercase">view all</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row_item">
                    <div
                        class="d-flex flex-wrap flex-lg-nowrap gap-2 gap-md-3 gap-lg-4 shop_card br_5 bxy_gl bs_15 tbs_tb_3 hover">
                        <div>
                            <div class="img_box">
                                <img src="./assets/images/os-img-3.png" alt="thumb" class="w-100">
                            </div>
                        </div>
                        <div>
                            <div
                                class="h-100 d-flex flex-column justify-content-between align-items-center align-items-md-start gap-2">
                                <div class="text-center text-md-start">
                                    <h4 class="mb-md-2 fw_5 fs_20 lh_29">AUTO FAIR Mirpur-10</h4>
                                    <div class="rate_wrapper">
                                        <div class="rating rating_16"></div>
                                    </div>
                                    <p class="pt-md-3 fs_15 lh_22 fc_gd">Dhaka 1216</p>
                                </div>
                                <div>
                                    <a href="#" class="d-inline-block br_5 bg_red btnp_1530 tbg_3 hover">
                                        <span class="fw_5 fs_14 lh_20 fc_white text-uppercase">view all</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row_item">
                    <div
                        class="d-flex flex-wrap flex-lg-nowrap gap-2 gap-md-3 gap-lg-4 shop_card br_5 bxy_gl bs_15 tbs_tb_3 hover">
                        <div>
                            <div class="img_box">
                                <img src="./assets/images/os-img-1.png" alt="thumb" class="w-100">
                            </div>
                        </div>
                        <div>
                            <div
                                class="h-100 d-flex flex-column justify-content-between align-items-center align-items-md-start gap-2">
                                <div class="text-center text-md-start">
                                    <h4 class="mb-md-2 fw_5 fs_20 lh_29">Bike Parts Center</h4>
                                    <div class="rate_wrapper">
                                        <div class="rating rating_16"></div>
                                    </div>
                                    <p class=" pt-md-3 fs_15 lh_22 fc_gd">Dhaka 1207</p>
                                </div>
                                <div>
                                    <a href="#" class="d-inline-block br_5 bg_red btnp_1530 tbg_3 hover">
                                        <span class="fw_5 fs_14 lh_20 fc_white text-uppercase">view all</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- our bolgs -->
    <section class="our_blog_sc spy">
        <div class="container-fluid container-xxxl">
            <div class="sc_title_wrapper">
                <h1 class="sc_title">our blogs</h1>
                <a href="#" class="br_5 bg_red btnp_1228 tbg_3 hover">
                    <span class="fw_5 fs_14 lh_20 fc_white text-uppercase">view all</span>
                </a>
            </div>
            <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-2 g-md-3 g-lg-4">
                <div class="row_item">
                    <div class="overflow-hidden blog_card br_5 bxy_gl bs_15 tbs_tb_3 hover">
                        <img src="/assets/images/hob-img-1.png" alt="thumb" class="w-100">
                        <div class="content">
                            <div class="d-flex align-items-center gap-2 svg_20">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <path
                                        d="M16.6663 17.5V15.8333C16.6663 14.9493 16.3152 14.1014 15.69 13.4763C15.0649 12.8512 14.2171 12.5 13.333 12.5H6.66634C5.78229 12.5 4.93444 12.8512 4.30932 13.4763C3.6842 14.1014 3.33301 14.9493 3.33301 15.8333V17.5"
                                        stroke="#DD1E1E" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path
                                        d="M10.0003 9.16667C11.8413 9.16667 13.3337 7.67428 13.3337 5.83333C13.3337 3.99238 11.8413 2.5 10.0003 2.5C8.15938 2.5 6.66699 3.99238 6.66699 5.83333C6.66699 7.67428 8.15938 9.16667 10.0003 9.16667Z"
                                        stroke="#DD1E1E" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                                <span class="fw_5 fs_15 lh_22">By: Rikkert Fajardo</span>
                            </div>
                            <h4 class="fw_6 fs_20 lh_29">10 Best Beginner Motorcycles</h4>
                            <div
                                class="d-flex flex-wrap justify-content-between align-items-center pt-2 pt-md-3 bt_gl gap-2">
                                <div class="d-flex align-items-center gap-2 svg_20">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                        fill="none">
                                        <path
                                            d="M15.8333 3.3335H4.16667C3.24619 3.3335 2.5 4.07969 2.5 5.00016V16.6668C2.5 17.5873 3.24619 18.3335 4.16667 18.3335H15.8333C16.7538 18.3335 17.5 17.5873 17.5 16.6668V5.00016C17.5 4.07969 16.7538 3.3335 15.8333 3.3335Z"
                                            stroke="#DD1E1E" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path d="M13.333 1.6665V4.99984" stroke="#DD1E1E" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M6.66699 1.6665V4.99984" stroke="#DD1E1E" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M2.5 8.3335H17.5" stroke="#DD1E1E" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span class="fw_5 fs_15 lh_22">April 25, 2023</span>
                                </div>
                                <a href="#"
                                    class="ob_rm_btn fw_5 fs_15 lh_22 fc_red text-capitalize text-decoration-underline">read
                                    more</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row_item">
                    <div class="overflow-hidden blog_card br_5 bxy_gl bs_15 tbs_tb_3 hover">
                        <img src="/assets/images/hob-img-2.png" alt="thumb" class="w-100">
                        <div class="content">
                            <div class="d-flex align-items-center gap-2 svg_20">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <path
                                        d="M16.6663 17.5V15.8333C16.6663 14.9493 16.3152 14.1014 15.69 13.4763C15.0649 12.8512 14.2171 12.5 13.333 12.5H6.66634C5.78229 12.5 4.93444 12.8512 4.30932 13.4763C3.6842 14.1014 3.33301 14.9493 3.33301 15.8333V17.5"
                                        stroke="#DD1E1E" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path
                                        d="M10.0003 9.16667C11.8413 9.16667 13.3337 7.67428 13.3337 5.83333C13.3337 3.99238 11.8413 2.5 10.0003 2.5C8.15938 2.5 6.66699 3.99238 6.66699 5.83333C6.66699 7.67428 8.15938 9.16667 10.0003 9.16667Z"
                                        stroke="#DD1E1E" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                                <span class="fw_5 fs_15 lh_22">By: Rikkert Fajardo</span>
                            </div>
                            <h4 class="fw_6 fs_20 lh_29">Can you get motorcycle insurance without a license</h4>
                            <div
                                class="d-flex flex-wrap justify-content-between align-items-center pt-2 pt-md-3 bt_gl gap-2">
                                <div class="d-flex align-items-center gap-2 svg_20">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                        fill="none">
                                        <path
                                            d="M15.8333 3.3335H4.16667C3.24619 3.3335 2.5 4.07969 2.5 5.00016V16.6668C2.5 17.5873 3.24619 18.3335 4.16667 18.3335H15.8333C16.7538 18.3335 17.5 17.5873 17.5 16.6668V5.00016C17.5 4.07969 16.7538 3.3335 15.8333 3.3335Z"
                                            stroke="#DD1E1E" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path d="M13.333 1.6665V4.99984" stroke="#DD1E1E" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M6.66699 1.6665V4.99984" stroke="#DD1E1E" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M2.5 8.3335H17.5" stroke="#DD1E1E" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span class="fw_5 fs_15 lh_22">April 25, 2023</span>
                                </div>
                                <a href="#"
                                    class="ob_rm_btn fw_5 fs_15 lh_22 fc_red text-capitalize text-decoration-underline">read
                                    more</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row_item">
                    <div class="overflow-hidden blog_card br_5 bxy_gl bs_15 tbs_tb_3 hover">
                        <img src="/assets/images/hob-img-1.png" alt="thumb" class="w-100">
                        <div class="content">
                            <div class="d-flex align-items-center gap-2 svg_20">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <path
                                        d="M16.6663 17.5V15.8333C16.6663 14.9493 16.3152 14.1014 15.69 13.4763C15.0649 12.8512 14.2171 12.5 13.333 12.5H6.66634C5.78229 12.5 4.93444 12.8512 4.30932 13.4763C3.6842 14.1014 3.33301 14.9493 3.33301 15.8333V17.5"
                                        stroke="#DD1E1E" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path
                                        d="M10.0003 9.16667C11.8413 9.16667 13.3337 7.67428 13.3337 5.83333C13.3337 3.99238 11.8413 2.5 10.0003 2.5C8.15938 2.5 6.66699 3.99238 6.66699 5.83333C6.66699 7.67428 8.15938 9.16667 10.0003 9.16667Z"
                                        stroke="#DD1E1E" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                                <span class="fw_5 fs_15 lh_22">By: Rikkert Fajardo</span>
                            </div>
                            <h4 class="fw_6 fs_20 lh_29">10 Best Beginner Motorcycles</h4>
                            <div
                                class="d-flex flex-wrap justify-content-between align-items-center pt-2 pt-md-3 bt_gl gap-2">
                                <div class="d-flex align-items-center gap-2 svg_20">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                        fill="none">
                                        <path
                                            d="M15.8333 3.3335H4.16667C3.24619 3.3335 2.5 4.07969 2.5 5.00016V16.6668C2.5 17.5873 3.24619 18.3335 4.16667 18.3335H15.8333C16.7538 18.3335 17.5 17.5873 17.5 16.6668V5.00016C17.5 4.07969 16.7538 3.3335 15.8333 3.3335Z"
                                            stroke="#DD1E1E" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path d="M13.333 1.6665V4.99984" stroke="#DD1E1E" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M6.66699 1.6665V4.99984" stroke="#DD1E1E" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M2.5 8.3335H17.5" stroke="#DD1E1E" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span class="fw_5 fs_15 lh_22">April 25, 2023</span>
                                </div>
                                <a href="#"
                                    class="ob_rm_btn fw_5 fs_15 lh_22 fc_red text-capitalize text-decoration-underline">read
                                    more</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row_item">
                    <div class="overflow-hidden blog_card br_5 bxy_gl bs_15 tbs_tb_3 hover">
                        <img src="/assets/images/hob-img-3.png" alt="thumb" class="w-100">
                        <div class="content">
                            <div class="d-flex align-items-center gap-2 svg_20">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <path
                                        d="M16.6663 17.5V15.8333C16.6663 14.9493 16.3152 14.1014 15.69 13.4763C15.0649 12.8512 14.2171 12.5 13.333 12.5H6.66634C5.78229 12.5 4.93444 12.8512 4.30932 13.4763C3.6842 14.1014 3.33301 14.9493 3.33301 15.8333V17.5"
                                        stroke="#DD1E1E" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path
                                        d="M10.0003 9.16667C11.8413 9.16667 13.3337 7.67428 13.3337 5.83333C13.3337 3.99238 11.8413 2.5 10.0003 2.5C8.15938 2.5 6.66699 3.99238 6.66699 5.83333C6.66699 7.67428 8.15938 9.16667 10.0003 9.16667Z"
                                        stroke="#DD1E1E" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                                <span class="fw_5 fs_15 lh_22">By: Rikkert Fajardo</span>
                            </div>
                            <h4 class="fw_6 fs_20 lh_29">Guide To The Best Motorcycle Insurance For Young Riders</h4>
                            <div
                                class="d-flex flex-wrap justify-content-between align-items-center pt-2 pt-md-3 bt_gl gap-2">
                                <div class="d-flex align-items-center gap-2 svg_20">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                        fill="none">
                                        <path
                                            d="M15.8333 3.3335H4.16667C3.24619 3.3335 2.5 4.07969 2.5 5.00016V16.6668C2.5 17.5873 3.24619 18.3335 4.16667 18.3335H15.8333C16.7538 18.3335 17.5 17.5873 17.5 16.6668V5.00016C17.5 4.07969 16.7538 3.3335 15.8333 3.3335Z"
                                            stroke="#DD1E1E" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path d="M13.333 1.6665V4.99984" stroke="#DD1E1E" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M6.66699 1.6665V4.99984" stroke="#DD1E1E" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M2.5 8.3335H17.5" stroke="#DD1E1E" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span class="fw_5 fs_15 lh_22">April 25, 2023</span>
                                </div>
                                <a href="#"
                                    class="ob_rm_btn fw_5 fs_15 lh_22 fc_red text-capitalize text-decoration-underline">read
                                    more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- accessories -->
    <section class="accessories_sc spy">
        <div class="container-fluid container-xxxl">
            <div class="sc_title_wrapper">
                <h1 class="sc_title">Accessories</h1>
                <a href="#" class="br_5 bg_red btnp_1228 tbg_3 hover">
                    <span class="fw_5 fs_14 lh_20 fc_white text-uppercase">view all</span>
                </a>
            </div>
            <div class="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 g-2 g-md-4">
                <div class="row_item">
                    <div class="position-relative overflow-hidden prd_card br_5 bxy_gl bs_15 tbs_tb_3 hover">
                        <a href="#" class="d-block">
                            <div class="position-relative d-flex justify-content-center align-items-center img_box">
                                <img src="./assets/images/details-img-1.png" alt="thumb" class="w-100">
                                <div class="position-absolute sold_smg_box d-none">
                                    <h4 class="fw_6 fs_20 lh_29 fc_red text-center text-uppercase">sold out</h4>
                                </div>
                                <div class="position-absolute disc_box bg_red d-none">
                                    <span class="fs_14 lh_20 fc_white">25%</span>
                                    <div class="position-absolute triangle_topleft"></div>
                                </div>
                            </div>
                            <div class="content text-center">
                                <h6 class="mb-0 mb-md-3 fw_4 fs_17 lh_22 fc_black">Paket Aksesoris Resmi New Honda CB
                                    150R
                                    StreetFire – Red</h6>
                                <div class="rate_wrapper">
                                    <div class="rating rating_16"></div>
                                </div>
                                <h5
                                    class="d-flex justify-content-center align-items-center gap-2 gap-md-4 pt-0 pt-md-3 fs_18 lh_22 fc_black">
                                    <span>BDT 2,175</span>
                                </h5>
                            </div>
                        </a>
                        <div class="position-absolute d-flex group_buttons br_5">
                            <button type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <g clip-path="url(#clip0_1293_6366)">
                                        <path
                                            d="M7.49935 18.3332C7.95959 18.3332 8.33268 17.9601 8.33268 17.4998C8.33268 17.0396 7.95959 16.6665 7.49935 16.6665C7.03911 16.6665 6.66602 17.0396 6.66602 17.4998C6.66602 17.9601 7.03911 18.3332 7.49935 18.3332Z"
                                            stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path
                                            d="M16.6673 18.3332C17.1276 18.3332 17.5007 17.9601 17.5007 17.4998C17.5007 17.0396 17.1276 16.6665 16.6673 16.6665C16.2071 16.6665 15.834 17.0396 15.834 17.4998C15.834 17.9601 16.2071 18.3332 16.6673 18.3332Z"
                                            stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path
                                            d="M0.833984 0.833496H4.16732L6.40065 11.9918C6.47686 12.3755 6.68557 12.7201 6.99027 12.9654C7.29497 13.2107 7.67623 13.341 8.06732 13.3335H16.1673C16.5584 13.341 16.9397 13.2107 17.2444 12.9654C17.5491 12.7201 17.7578 12.3755 17.834 11.9918L19.1673 5.00016H5.00065"
                                            stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1293_6366">
                                            <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </button>
                            <button type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <path
                                        d="M17.3671 3.84172C16.9415 3.41589 16.4361 3.0781 15.8799 2.84763C15.3237 2.61716 14.7275 2.49854 14.1254 2.49854C13.5234 2.49854 12.9272 2.61716 12.371 2.84763C11.8147 3.0781 11.3094 3.41589 10.8838 3.84172L10.0004 4.72506L9.11709 3.84172C8.25735 2.98198 7.09129 2.49898 5.87542 2.49898C4.65956 2.49898 3.4935 2.98198 2.63376 3.84172C1.77401 4.70147 1.29102 5.86753 1.29102 7.08339C1.29102 8.29925 1.77401 9.46531 2.63376 10.3251L3.51709 11.2084L10.0004 17.6917L16.4838 11.2084L17.3671 10.3251C17.7929 9.89943 18.1307 9.39407 18.3612 8.83785C18.5917 8.28164 18.7103 7.68546 18.7103 7.08339C18.7103 6.48132 18.5917 5.88514 18.3612 5.32893C18.1307 4.77271 17.7929 4.26735 17.3671 3.84172Z"
                                        stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </button>
                            <button type="button" data-bs-toggle="modal" data-bs-target="#quickView">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <path
                                        d="M0.833008 10.0002C0.833008 10.0002 4.16634 3.3335 9.99967 3.3335C15.833 3.3335 19.1663 10.0002 19.1663 10.0002C19.1663 10.0002 15.833 16.6668 9.99967 16.6668C4.16634 16.6668 0.833008 10.0002 0.833008 10.0002Z"
                                        stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path
                                        d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
                                        stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </button>
                            <button type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <path
                                        d="M16.0413 6.25C15.323 6.25 14.6342 5.96466 14.1263 5.45675C13.6183 4.94884 13.333 4.25996 13.333 3.54167C13.333 2.82337 13.6183 2.1345 14.1263 1.62659C14.6342 1.11867 15.323 0.833334 16.0413 0.833334C16.7596 0.833334 17.4485 1.11867 17.9564 1.62659C18.4643 2.1345 18.7497 2.82337 18.7497 3.54167C18.7497 4.25996 18.4643 4.94884 17.9564 5.45675C17.4485 5.96466 16.7596 6.25 16.0413 6.25ZM14.583 3.54167C14.5831 3.73323 14.6208 3.92291 14.6942 4.09987C14.7676 4.27684 14.8751 4.43762 15.0106 4.57304C15.1461 4.70846 15.3069 4.81586 15.4839 4.88912C15.6609 4.96238 15.8506 5.00005 16.0422 5C16.2337 4.99995 16.4234 4.96216 16.6004 4.8888C16.7773 4.81544 16.9381 4.70794 17.0735 4.57245C17.209 4.43695 17.3164 4.27611 17.3896 4.09911C17.4629 3.9221 17.5006 3.7324 17.5005 3.54083C17.5004 3.15395 17.3466 2.78295 17.073 2.50946C16.7993 2.23597 16.4282 2.08239 16.0413 2.0825C15.6545 2.08261 15.2835 2.23641 15.01 2.51005C14.7365 2.7837 14.5829 3.15478 14.583 3.54167Z"
                                        fill="#1A1A1A" />
                                    <path
                                        d="M1.43333 8.41234C1.55052 8.2953 1.70937 8.22955 1.875 8.22955C2.04063 8.22955 2.19948 8.2953 2.31667 8.41234L3.33333 9.429L3.33333 6.0415C3.33333 5.2127 3.66257 4.41785 4.24862 3.83179C4.83468 3.24574 5.62953 2.9165 6.45833 2.9165H13.75C13.9158 2.9165 14.0747 2.98235 14.1919 3.09956C14.3092 3.21677 14.375 3.37574 14.375 3.5415C14.375 3.70726 14.3092 3.86624 14.1919 3.98345C14.0747 4.10066 13.9158 4.1665 13.75 4.1665H6.45833C6.2121 4.1665 5.96829 4.215 5.7408 4.30923C5.51332 4.40346 5.30662 4.54157 5.13251 4.71568C4.9584 4.88979 4.82029 5.09649 4.72606 5.32397C4.63183 5.55146 4.58333 5.79528 4.58333 6.0415L4.58333 9.42817L5.6 8.4115C5.71793 8.29771 5.87584 8.23479 6.03971 8.23629C6.20358 8.23779 6.36031 8.30359 6.47614 8.41953C6.59196 8.53546 6.65762 8.69225 6.65896 8.85613C6.66031 9.02 6.59724 9.17785 6.48333 9.29567L4.4 11.379C4.28281 11.496 4.12396 11.5618 3.95833 11.5618C3.79271 11.5618 3.63385 11.496 3.51667 11.379L1.43333 9.29567C1.31629 9.17848 1.25055 9.01963 1.25055 8.854C1.25055 8.68838 1.31629 8.52953 1.43333 8.41234ZM3.95833 13.7498C4.67663 13.7498 5.3655 14.0352 5.87341 14.5431C6.38133 15.051 6.66667 15.7399 6.66667 16.4582C6.66667 17.1765 6.38133 17.8653 5.87341 18.3733C5.3655 18.8812 4.67663 19.1665 3.95833 19.1665C3.24004 19.1665 2.55116 18.8812 2.04325 18.3733C1.53534 17.8653 1.25 17.1765 1.25 16.4582C1.25 15.7399 1.53534 15.051 2.04325 14.5431C2.55116 14.0352 3.24004 13.7498 3.95833 13.7498ZM5.41667 16.4582C5.41656 16.0713 5.26276 15.7003 4.98911 15.4268C4.71547 15.1533 4.34438 14.9997 3.9575 14.9998C3.57062 14.9999 3.19962 15.1537 2.92613 15.4274C2.65264 15.701 2.49906 16.0721 2.49917 16.459C2.49922 16.6506 2.53701 16.8402 2.61037 17.0172C2.68373 17.1942 2.79122 17.355 2.92672 17.4904C3.20037 17.7639 3.57145 17.9174 3.95833 17.9173C4.34522 17.9172 4.71621 17.7634 4.9897 17.4898C5.26319 17.2161 5.41678 16.8451 5.41667 16.4582Z"
                                        fill="#1A1A1A" />
                                    <path
                                        d="M18.5667 11.5877C18.4495 11.7047 18.2906 11.7704 18.125 11.7704C17.9594 11.7704 17.8005 11.7047 17.6833 11.5877L16.6667 10.571V13.9585C16.6667 14.7873 16.3374 15.5822 15.7514 16.1682C15.1653 16.7543 14.3705 17.0835 13.5417 17.0835H6.25C6.08424 17.0835 5.92527 17.0176 5.80806 16.9004C5.69085 16.7832 5.625 16.6243 5.625 16.4585C5.625 16.2927 5.69085 16.1338 5.80806 16.0166C5.92527 15.8993 6.08424 15.8335 6.25 15.8335H13.5417C14.0389 15.8335 14.5159 15.636 14.8675 15.2843C15.2191 14.9327 15.4167 14.4558 15.4167 13.9585V10.5718L14.4 11.5885C14.3231 11.6688 14.2262 11.7271 14.1192 11.7573C14.0122 11.7875 13.899 11.7886 13.7915 11.7604C13.684 11.7321 13.5859 11.6757 13.5076 11.5968C13.4292 11.5179 13.3734 11.4195 13.3458 11.3118C13.3179 11.2045 13.3189 11.0917 13.3489 10.9849C13.379 10.8782 13.4369 10.7813 13.5167 10.7043L15.6 8.621C15.7172 8.50395 15.876 8.43821 16.0417 8.43821C16.2073 8.43821 16.3661 8.50395 16.4833 8.621L18.5667 10.7043C18.6837 10.8215 18.7495 10.9804 18.7495 11.146C18.7495 11.3116 18.6837 11.4705 18.5667 11.5877Z"
                                        fill="#1A1A1A" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="row_item">
                    <div class="position-relative overflow-hidden prd_card br_5 bxy_gl bs_15 tbs_tb_3 hover">
                        <a href="#" class="d-block">
                            <div class="position-relative d-flex justify-content-center align-items-center img_box">
                                <img src="./assets/images/details-img-2.png" alt="thumb" class="w-100">
                                <div class="position-absolute sold_smg_box d-none">
                                    <h4 class="fw_6 fs_20 lh_29 fc_red text-center text-uppercase">sold out</h4>
                                </div>
                                <div class="position-absolute disc_box bg_red">
                                    <span class="fs_14 lh_20 fc_white">25%</span>
                                    <div class="position-absolute triangle_topleft"></div>
                                </div>
                            </div>
                            <div class="content text-center">
                                <h6 class="mb-0 mb-md-3 fw_4 fs_17 lh_22 fc_black">Paket Aksesoris Resmi New Honda CB
                                    150R
                                    StreetFire – Red</h6>
                                <div class="rate_wrapper">
                                    <div class="rating rating_16"></div>
                                </div>
                                <h5
                                    class="d-flex justify-content-center align-items-center gap-2 gap-md-4 pt-0 pt-md-3 fs_18 lh_22 fc_black">
                                    <span class="fc_gl text-decoration-line-through">BDT 2,900</span>
                                    <span>BDT 2,175</span>
                                </h5>
                            </div>
                        </a>
                        <div class="position-absolute d-flex group_buttons br_5">
                            <button type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <g clip-path="url(#clip0_1293_6366)">
                                        <path
                                            d="M7.49935 18.3332C7.95959 18.3332 8.33268 17.9601 8.33268 17.4998C8.33268 17.0396 7.95959 16.6665 7.49935 16.6665C7.03911 16.6665 6.66602 17.0396 6.66602 17.4998C6.66602 17.9601 7.03911 18.3332 7.49935 18.3332Z"
                                            stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path
                                            d="M16.6673 18.3332C17.1276 18.3332 17.5007 17.9601 17.5007 17.4998C17.5007 17.0396 17.1276 16.6665 16.6673 16.6665C16.2071 16.6665 15.834 17.0396 15.834 17.4998C15.834 17.9601 16.2071 18.3332 16.6673 18.3332Z"
                                            stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path
                                            d="M0.833984 0.833496H4.16732L6.40065 11.9918C6.47686 12.3755 6.68557 12.7201 6.99027 12.9654C7.29497 13.2107 7.67623 13.341 8.06732 13.3335H16.1673C16.5584 13.341 16.9397 13.2107 17.2444 12.9654C17.5491 12.7201 17.7578 12.3755 17.834 11.9918L19.1673 5.00016H5.00065"
                                            stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1293_6366">
                                            <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </button>
                            <button type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <path
                                        d="M17.3671 3.84172C16.9415 3.41589 16.4361 3.0781 15.8799 2.84763C15.3237 2.61716 14.7275 2.49854 14.1254 2.49854C13.5234 2.49854 12.9272 2.61716 12.371 2.84763C11.8147 3.0781 11.3094 3.41589 10.8838 3.84172L10.0004 4.72506L9.11709 3.84172C8.25735 2.98198 7.09129 2.49898 5.87542 2.49898C4.65956 2.49898 3.4935 2.98198 2.63376 3.84172C1.77401 4.70147 1.29102 5.86753 1.29102 7.08339C1.29102 8.29925 1.77401 9.46531 2.63376 10.3251L3.51709 11.2084L10.0004 17.6917L16.4838 11.2084L17.3671 10.3251C17.7929 9.89943 18.1307 9.39407 18.3612 8.83785C18.5917 8.28164 18.7103 7.68546 18.7103 7.08339C18.7103 6.48132 18.5917 5.88514 18.3612 5.32893C18.1307 4.77271 17.7929 4.26735 17.3671 3.84172Z"
                                        stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </button>
                            <button type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <path
                                        d="M0.833008 10.0002C0.833008 10.0002 4.16634 3.3335 9.99967 3.3335C15.833 3.3335 19.1663 10.0002 19.1663 10.0002C19.1663 10.0002 15.833 16.6668 9.99967 16.6668C4.16634 16.6668 0.833008 10.0002 0.833008 10.0002Z"
                                        stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path
                                        d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
                                        stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </button>
                            <button type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <path
                                        d="M16.0413 6.25C15.323 6.25 14.6342 5.96466 14.1263 5.45675C13.6183 4.94884 13.333 4.25996 13.333 3.54167C13.333 2.82337 13.6183 2.1345 14.1263 1.62659C14.6342 1.11867 15.323 0.833334 16.0413 0.833334C16.7596 0.833334 17.4485 1.11867 17.9564 1.62659C18.4643 2.1345 18.7497 2.82337 18.7497 3.54167C18.7497 4.25996 18.4643 4.94884 17.9564 5.45675C17.4485 5.96466 16.7596 6.25 16.0413 6.25ZM14.583 3.54167C14.5831 3.73323 14.6208 3.92291 14.6942 4.09987C14.7676 4.27684 14.8751 4.43762 15.0106 4.57304C15.1461 4.70846 15.3069 4.81586 15.4839 4.88912C15.6609 4.96238 15.8506 5.00005 16.0422 5C16.2337 4.99995 16.4234 4.96216 16.6004 4.8888C16.7773 4.81544 16.9381 4.70794 17.0735 4.57245C17.209 4.43695 17.3164 4.27611 17.3896 4.09911C17.4629 3.9221 17.5006 3.7324 17.5005 3.54083C17.5004 3.15395 17.3466 2.78295 17.073 2.50946C16.7993 2.23597 16.4282 2.08239 16.0413 2.0825C15.6545 2.08261 15.2835 2.23641 15.01 2.51005C14.7365 2.7837 14.5829 3.15478 14.583 3.54167Z"
                                        fill="#1A1A1A" />
                                    <path
                                        d="M1.43333 8.41234C1.55052 8.2953 1.70937 8.22955 1.875 8.22955C2.04063 8.22955 2.19948 8.2953 2.31667 8.41234L3.33333 9.429L3.33333 6.0415C3.33333 5.2127 3.66257 4.41785 4.24862 3.83179C4.83468 3.24574 5.62953 2.9165 6.45833 2.9165H13.75C13.9158 2.9165 14.0747 2.98235 14.1919 3.09956C14.3092 3.21677 14.375 3.37574 14.375 3.5415C14.375 3.70726 14.3092 3.86624 14.1919 3.98345C14.0747 4.10066 13.9158 4.1665 13.75 4.1665H6.45833C6.2121 4.1665 5.96829 4.215 5.7408 4.30923C5.51332 4.40346 5.30662 4.54157 5.13251 4.71568C4.9584 4.88979 4.82029 5.09649 4.72606 5.32397C4.63183 5.55146 4.58333 5.79528 4.58333 6.0415L4.58333 9.42817L5.6 8.4115C5.71793 8.29771 5.87584 8.23479 6.03971 8.23629C6.20358 8.23779 6.36031 8.30359 6.47614 8.41953C6.59196 8.53546 6.65762 8.69225 6.65896 8.85613C6.66031 9.02 6.59724 9.17785 6.48333 9.29567L4.4 11.379C4.28281 11.496 4.12396 11.5618 3.95833 11.5618C3.79271 11.5618 3.63385 11.496 3.51667 11.379L1.43333 9.29567C1.31629 9.17848 1.25055 9.01963 1.25055 8.854C1.25055 8.68838 1.31629 8.52953 1.43333 8.41234ZM3.95833 13.7498C4.67663 13.7498 5.3655 14.0352 5.87341 14.5431C6.38133 15.051 6.66667 15.7399 6.66667 16.4582C6.66667 17.1765 6.38133 17.8653 5.87341 18.3733C5.3655 18.8812 4.67663 19.1665 3.95833 19.1665C3.24004 19.1665 2.55116 18.8812 2.04325 18.3733C1.53534 17.8653 1.25 17.1765 1.25 16.4582C1.25 15.7399 1.53534 15.051 2.04325 14.5431C2.55116 14.0352 3.24004 13.7498 3.95833 13.7498ZM5.41667 16.4582C5.41656 16.0713 5.26276 15.7003 4.98911 15.4268C4.71547 15.1533 4.34438 14.9997 3.9575 14.9998C3.57062 14.9999 3.19962 15.1537 2.92613 15.4274C2.65264 15.701 2.49906 16.0721 2.49917 16.459C2.49922 16.6506 2.53701 16.8402 2.61037 17.0172C2.68373 17.1942 2.79122 17.355 2.92672 17.4904C3.20037 17.7639 3.57145 17.9174 3.95833 17.9173C4.34522 17.9172 4.71621 17.7634 4.9897 17.4898C5.26319 17.2161 5.41678 16.8451 5.41667 16.4582Z"
                                        fill="#1A1A1A" />
                                    <path
                                        d="M18.5667 11.5877C18.4495 11.7047 18.2906 11.7704 18.125 11.7704C17.9594 11.7704 17.8005 11.7047 17.6833 11.5877L16.6667 10.571V13.9585C16.6667 14.7873 16.3374 15.5822 15.7514 16.1682C15.1653 16.7543 14.3705 17.0835 13.5417 17.0835H6.25C6.08424 17.0835 5.92527 17.0176 5.80806 16.9004C5.69085 16.7832 5.625 16.6243 5.625 16.4585C5.625 16.2927 5.69085 16.1338 5.80806 16.0166C5.92527 15.8993 6.08424 15.8335 6.25 15.8335H13.5417C14.0389 15.8335 14.5159 15.636 14.8675 15.2843C15.2191 14.9327 15.4167 14.4558 15.4167 13.9585V10.5718L14.4 11.5885C14.3231 11.6688 14.2262 11.7271 14.1192 11.7573C14.0122 11.7875 13.899 11.7886 13.7915 11.7604C13.684 11.7321 13.5859 11.6757 13.5076 11.5968C13.4292 11.5179 13.3734 11.4195 13.3458 11.3118C13.3179 11.2045 13.3189 11.0917 13.3489 10.9849C13.379 10.8782 13.4369 10.7813 13.5167 10.7043L15.6 8.621C15.7172 8.50395 15.876 8.43821 16.0417 8.43821C16.2073 8.43821 16.3661 8.50395 16.4833 8.621L18.5667 10.7043C18.6837 10.8215 18.7495 10.9804 18.7495 11.146C18.7495 11.3116 18.6837 11.4705 18.5667 11.5877Z"
                                        fill="#1A1A1A" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="row_item">
                    <div class="position-relative overflow-hidden prd_card br_5 bxy_gl bs_15 tbs_tb_3 hover">
                        <a href="#" class="d-block">
                            <div class="position-relative d-flex justify-content-center align-items-center img_box">
                                <img src="./assets/images/prd-img-3.png" alt="thumb" class="w-100">
                                <div class="position-absolute sold_smg_box d-none">
                                    <h4 class="fw_6 fs_20 lh_29 fc_red text-center text-uppercase">sold out</h4>
                                </div>
                                <div class="position-absolute disc_box bg_red d-none">
                                    <span class="fs_14 lh_20 fc_white">25%</span>
                                    <div class="position-absolute triangle_topleft"></div>
                                </div>
                            </div>
                            <div class="content text-center">
                                <h6 class="mb-0 mb-md-3 fw_4 fs_17 lh_22 fc_black">Rubber Step Floor New Vario 125 K60R
                                    & 150
                                    eSP K59J</h6>
                                <div class="rate_wrapper">
                                    <div class="rating rating_16"></div>
                                </div>
                                <h5
                                    class="d-flex justify-content-center align-items-center gap-2 gap-md-4 pt-0 pt-md-3 fs_18 lh_22 fc_black">
                                    <span>BDT 2,175</span>
                                </h5>
                            </div>
                        </a>
                        <div class="position-absolute d-flex group_buttons br_5">
                            <button type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <g clip-path="url(#clip0_1293_6366)">
                                        <path
                                            d="M7.49935 18.3332C7.95959 18.3332 8.33268 17.9601 8.33268 17.4998C8.33268 17.0396 7.95959 16.6665 7.49935 16.6665C7.03911 16.6665 6.66602 17.0396 6.66602 17.4998C6.66602 17.9601 7.03911 18.3332 7.49935 18.3332Z"
                                            stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path
                                            d="M16.6673 18.3332C17.1276 18.3332 17.5007 17.9601 17.5007 17.4998C17.5007 17.0396 17.1276 16.6665 16.6673 16.6665C16.2071 16.6665 15.834 17.0396 15.834 17.4998C15.834 17.9601 16.2071 18.3332 16.6673 18.3332Z"
                                            stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path
                                            d="M0.833984 0.833496H4.16732L6.40065 11.9918C6.47686 12.3755 6.68557 12.7201 6.99027 12.9654C7.29497 13.2107 7.67623 13.341 8.06732 13.3335H16.1673C16.5584 13.341 16.9397 13.2107 17.2444 12.9654C17.5491 12.7201 17.7578 12.3755 17.834 11.9918L19.1673 5.00016H5.00065"
                                            stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1293_6366">
                                            <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </button>
                            <button type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <path
                                        d="M17.3671 3.84172C16.9415 3.41589 16.4361 3.0781 15.8799 2.84763C15.3237 2.61716 14.7275 2.49854 14.1254 2.49854C13.5234 2.49854 12.9272 2.61716 12.371 2.84763C11.8147 3.0781 11.3094 3.41589 10.8838 3.84172L10.0004 4.72506L9.11709 3.84172C8.25735 2.98198 7.09129 2.49898 5.87542 2.49898C4.65956 2.49898 3.4935 2.98198 2.63376 3.84172C1.77401 4.70147 1.29102 5.86753 1.29102 7.08339C1.29102 8.29925 1.77401 9.46531 2.63376 10.3251L3.51709 11.2084L10.0004 17.6917L16.4838 11.2084L17.3671 10.3251C17.7929 9.89943 18.1307 9.39407 18.3612 8.83785C18.5917 8.28164 18.7103 7.68546 18.7103 7.08339C18.7103 6.48132 18.5917 5.88514 18.3612 5.32893C18.1307 4.77271 17.7929 4.26735 17.3671 3.84172Z"
                                        stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </button>
                            <button type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <path
                                        d="M0.833008 10.0002C0.833008 10.0002 4.16634 3.3335 9.99967 3.3335C15.833 3.3335 19.1663 10.0002 19.1663 10.0002C19.1663 10.0002 15.833 16.6668 9.99967 16.6668C4.16634 16.6668 0.833008 10.0002 0.833008 10.0002Z"
                                        stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path
                                        d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
                                        stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </button>
                            <button type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <path
                                        d="M16.0413 6.25C15.323 6.25 14.6342 5.96466 14.1263 5.45675C13.6183 4.94884 13.333 4.25996 13.333 3.54167C13.333 2.82337 13.6183 2.1345 14.1263 1.62659C14.6342 1.11867 15.323 0.833334 16.0413 0.833334C16.7596 0.833334 17.4485 1.11867 17.9564 1.62659C18.4643 2.1345 18.7497 2.82337 18.7497 3.54167C18.7497 4.25996 18.4643 4.94884 17.9564 5.45675C17.4485 5.96466 16.7596 6.25 16.0413 6.25ZM14.583 3.54167C14.5831 3.73323 14.6208 3.92291 14.6942 4.09987C14.7676 4.27684 14.8751 4.43762 15.0106 4.57304C15.1461 4.70846 15.3069 4.81586 15.4839 4.88912C15.6609 4.96238 15.8506 5.00005 16.0422 5C16.2337 4.99995 16.4234 4.96216 16.6004 4.8888C16.7773 4.81544 16.9381 4.70794 17.0735 4.57245C17.209 4.43695 17.3164 4.27611 17.3896 4.09911C17.4629 3.9221 17.5006 3.7324 17.5005 3.54083C17.5004 3.15395 17.3466 2.78295 17.073 2.50946C16.7993 2.23597 16.4282 2.08239 16.0413 2.0825C15.6545 2.08261 15.2835 2.23641 15.01 2.51005C14.7365 2.7837 14.5829 3.15478 14.583 3.54167Z"
                                        fill="#1A1A1A" />
                                    <path
                                        d="M1.43333 8.41234C1.55052 8.2953 1.70937 8.22955 1.875 8.22955C2.04063 8.22955 2.19948 8.2953 2.31667 8.41234L3.33333 9.429L3.33333 6.0415C3.33333 5.2127 3.66257 4.41785 4.24862 3.83179C4.83468 3.24574 5.62953 2.9165 6.45833 2.9165H13.75C13.9158 2.9165 14.0747 2.98235 14.1919 3.09956C14.3092 3.21677 14.375 3.37574 14.375 3.5415C14.375 3.70726 14.3092 3.86624 14.1919 3.98345C14.0747 4.10066 13.9158 4.1665 13.75 4.1665H6.45833C6.2121 4.1665 5.96829 4.215 5.7408 4.30923C5.51332 4.40346 5.30662 4.54157 5.13251 4.71568C4.9584 4.88979 4.82029 5.09649 4.72606 5.32397C4.63183 5.55146 4.58333 5.79528 4.58333 6.0415L4.58333 9.42817L5.6 8.4115C5.71793 8.29771 5.87584 8.23479 6.03971 8.23629C6.20358 8.23779 6.36031 8.30359 6.47614 8.41953C6.59196 8.53546 6.65762 8.69225 6.65896 8.85613C6.66031 9.02 6.59724 9.17785 6.48333 9.29567L4.4 11.379C4.28281 11.496 4.12396 11.5618 3.95833 11.5618C3.79271 11.5618 3.63385 11.496 3.51667 11.379L1.43333 9.29567C1.31629 9.17848 1.25055 9.01963 1.25055 8.854C1.25055 8.68838 1.31629 8.52953 1.43333 8.41234ZM3.95833 13.7498C4.67663 13.7498 5.3655 14.0352 5.87341 14.5431C6.38133 15.051 6.66667 15.7399 6.66667 16.4582C6.66667 17.1765 6.38133 17.8653 5.87341 18.3733C5.3655 18.8812 4.67663 19.1665 3.95833 19.1665C3.24004 19.1665 2.55116 18.8812 2.04325 18.3733C1.53534 17.8653 1.25 17.1765 1.25 16.4582C1.25 15.7399 1.53534 15.051 2.04325 14.5431C2.55116 14.0352 3.24004 13.7498 3.95833 13.7498ZM5.41667 16.4582C5.41656 16.0713 5.26276 15.7003 4.98911 15.4268C4.71547 15.1533 4.34438 14.9997 3.9575 14.9998C3.57062 14.9999 3.19962 15.1537 2.92613 15.4274C2.65264 15.701 2.49906 16.0721 2.49917 16.459C2.49922 16.6506 2.53701 16.8402 2.61037 17.0172C2.68373 17.1942 2.79122 17.355 2.92672 17.4904C3.20037 17.7639 3.57145 17.9174 3.95833 17.9173C4.34522 17.9172 4.71621 17.7634 4.9897 17.4898C5.26319 17.2161 5.41678 16.8451 5.41667 16.4582Z"
                                        fill="#1A1A1A" />
                                    <path
                                        d="M18.5667 11.5877C18.4495 11.7047 18.2906 11.7704 18.125 11.7704C17.9594 11.7704 17.8005 11.7047 17.6833 11.5877L16.6667 10.571V13.9585C16.6667 14.7873 16.3374 15.5822 15.7514 16.1682C15.1653 16.7543 14.3705 17.0835 13.5417 17.0835H6.25C6.08424 17.0835 5.92527 17.0176 5.80806 16.9004C5.69085 16.7832 5.625 16.6243 5.625 16.4585C5.625 16.2927 5.69085 16.1338 5.80806 16.0166C5.92527 15.8993 6.08424 15.8335 6.25 15.8335H13.5417C14.0389 15.8335 14.5159 15.636 14.8675 15.2843C15.2191 14.9327 15.4167 14.4558 15.4167 13.9585V10.5718L14.4 11.5885C14.3231 11.6688 14.2262 11.7271 14.1192 11.7573C14.0122 11.7875 13.899 11.7886 13.7915 11.7604C13.684 11.7321 13.5859 11.6757 13.5076 11.5968C13.4292 11.5179 13.3734 11.4195 13.3458 11.3118C13.3179 11.2045 13.3189 11.0917 13.3489 10.9849C13.379 10.8782 13.4369 10.7813 13.5167 10.7043L15.6 8.621C15.7172 8.50395 15.876 8.43821 16.0417 8.43821C16.2073 8.43821 16.3661 8.50395 16.4833 8.621L18.5667 10.7043C18.6837 10.8215 18.7495 10.9804 18.7495 11.146C18.7495 11.3116 18.6837 11.4705 18.5667 11.5877Z"
                                        fill="#1A1A1A" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="row_item">
                    <div class="position-relative overflow-hidden prd_card br_5 bxy_gl bs_15 tbs_tb_3 hover">
                        <a href="#" class="d-block">
                            <div class="position-relative d-flex justify-content-center align-items-center img_box">
                                <img src="./assets/images/prd-img-1.png" alt="thumb" class="w-100">
                                <div class="position-absolute sold_smg_box d-none">
                                    <h4 class="fw_6 fs_20 lh_29 fc_red text-center text-uppercase">sold out</h4>
                                </div>
                                <div class="position-absolute disc_box bg_red d-none">
                                    <span class="fs_14 lh_20 fc_white">25%</span>
                                    <div class="position-absolute triangle_topleft"></div>
                                </div>
                            </div>
                            <div class="content text-center">
                                <h6 class="mb-0 mb-md-3 fw_4 fs_17 lh_22 fc_black">Paket Aksesoris Resmi New Honda CB
                                    150R
                                    StreetFire – Red</h6>
                                <div class="rate_wrapper">
                                    <div class="rating rating_16"></div>
                                </div>
                                <h5
                                    class="d-flex justify-content-center align-items-center gap-2 gap-md-4 pt-0 pt-md-3 fs_18 lh_22 fc_black">
                                    <span class="fc_gl text-decoration-line-through">BDT 2,900</span>
                                    <span>BDT 2,175</span>
                                </h5>
                            </div>
                        </a>
                        <div class="position-absolute d-flex group_buttons br_5">
                            <button type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <g clip-path="url(#clip0_1293_6366)">
                                        <path
                                            d="M7.49935 18.3332C7.95959 18.3332 8.33268 17.9601 8.33268 17.4998C8.33268 17.0396 7.95959 16.6665 7.49935 16.6665C7.03911 16.6665 6.66602 17.0396 6.66602 17.4998C6.66602 17.9601 7.03911 18.3332 7.49935 18.3332Z"
                                            stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path
                                            d="M16.6673 18.3332C17.1276 18.3332 17.5007 17.9601 17.5007 17.4998C17.5007 17.0396 17.1276 16.6665 16.6673 16.6665C16.2071 16.6665 15.834 17.0396 15.834 17.4998C15.834 17.9601 16.2071 18.3332 16.6673 18.3332Z"
                                            stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path
                                            d="M0.833984 0.833496H4.16732L6.40065 11.9918C6.47686 12.3755 6.68557 12.7201 6.99027 12.9654C7.29497 13.2107 7.67623 13.341 8.06732 13.3335H16.1673C16.5584 13.341 16.9397 13.2107 17.2444 12.9654C17.5491 12.7201 17.7578 12.3755 17.834 11.9918L19.1673 5.00016H5.00065"
                                            stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1293_6366">
                                            <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </button>
                            <button type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <path
                                        d="M17.3671 3.84172C16.9415 3.41589 16.4361 3.0781 15.8799 2.84763C15.3237 2.61716 14.7275 2.49854 14.1254 2.49854C13.5234 2.49854 12.9272 2.61716 12.371 2.84763C11.8147 3.0781 11.3094 3.41589 10.8838 3.84172L10.0004 4.72506L9.11709 3.84172C8.25735 2.98198 7.09129 2.49898 5.87542 2.49898C4.65956 2.49898 3.4935 2.98198 2.63376 3.84172C1.77401 4.70147 1.29102 5.86753 1.29102 7.08339C1.29102 8.29925 1.77401 9.46531 2.63376 10.3251L3.51709 11.2084L10.0004 17.6917L16.4838 11.2084L17.3671 10.3251C17.7929 9.89943 18.1307 9.39407 18.3612 8.83785C18.5917 8.28164 18.7103 7.68546 18.7103 7.08339C18.7103 6.48132 18.5917 5.88514 18.3612 5.32893C18.1307 4.77271 17.7929 4.26735 17.3671 3.84172Z"
                                        stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </button>
                            <button type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <path
                                        d="M0.833008 10.0002C0.833008 10.0002 4.16634 3.3335 9.99967 3.3335C15.833 3.3335 19.1663 10.0002 19.1663 10.0002C19.1663 10.0002 15.833 16.6668 9.99967 16.6668C4.16634 16.6668 0.833008 10.0002 0.833008 10.0002Z"
                                        stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path
                                        d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
                                        stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </button>
                            <button type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <path
                                        d="M16.0413 6.25C15.323 6.25 14.6342 5.96466 14.1263 5.45675C13.6183 4.94884 13.333 4.25996 13.333 3.54167C13.333 2.82337 13.6183 2.1345 14.1263 1.62659C14.6342 1.11867 15.323 0.833334 16.0413 0.833334C16.7596 0.833334 17.4485 1.11867 17.9564 1.62659C18.4643 2.1345 18.7497 2.82337 18.7497 3.54167C18.7497 4.25996 18.4643 4.94884 17.9564 5.45675C17.4485 5.96466 16.7596 6.25 16.0413 6.25ZM14.583 3.54167C14.5831 3.73323 14.6208 3.92291 14.6942 4.09987C14.7676 4.27684 14.8751 4.43762 15.0106 4.57304C15.1461 4.70846 15.3069 4.81586 15.4839 4.88912C15.6609 4.96238 15.8506 5.00005 16.0422 5C16.2337 4.99995 16.4234 4.96216 16.6004 4.8888C16.7773 4.81544 16.9381 4.70794 17.0735 4.57245C17.209 4.43695 17.3164 4.27611 17.3896 4.09911C17.4629 3.9221 17.5006 3.7324 17.5005 3.54083C17.5004 3.15395 17.3466 2.78295 17.073 2.50946C16.7993 2.23597 16.4282 2.08239 16.0413 2.0825C15.6545 2.08261 15.2835 2.23641 15.01 2.51005C14.7365 2.7837 14.5829 3.15478 14.583 3.54167Z"
                                        fill="#1A1A1A" />
                                    <path
                                        d="M1.43333 8.41234C1.55052 8.2953 1.70937 8.22955 1.875 8.22955C2.04063 8.22955 2.19948 8.2953 2.31667 8.41234L3.33333 9.429L3.33333 6.0415C3.33333 5.2127 3.66257 4.41785 4.24862 3.83179C4.83468 3.24574 5.62953 2.9165 6.45833 2.9165H13.75C13.9158 2.9165 14.0747 2.98235 14.1919 3.09956C14.3092 3.21677 14.375 3.37574 14.375 3.5415C14.375 3.70726 14.3092 3.86624 14.1919 3.98345C14.0747 4.10066 13.9158 4.1665 13.75 4.1665H6.45833C6.2121 4.1665 5.96829 4.215 5.7408 4.30923C5.51332 4.40346 5.30662 4.54157 5.13251 4.71568C4.9584 4.88979 4.82029 5.09649 4.72606 5.32397C4.63183 5.55146 4.58333 5.79528 4.58333 6.0415L4.58333 9.42817L5.6 8.4115C5.71793 8.29771 5.87584 8.23479 6.03971 8.23629C6.20358 8.23779 6.36031 8.30359 6.47614 8.41953C6.59196 8.53546 6.65762 8.69225 6.65896 8.85613C6.66031 9.02 6.59724 9.17785 6.48333 9.29567L4.4 11.379C4.28281 11.496 4.12396 11.5618 3.95833 11.5618C3.79271 11.5618 3.63385 11.496 3.51667 11.379L1.43333 9.29567C1.31629 9.17848 1.25055 9.01963 1.25055 8.854C1.25055 8.68838 1.31629 8.52953 1.43333 8.41234ZM3.95833 13.7498C4.67663 13.7498 5.3655 14.0352 5.87341 14.5431C6.38133 15.051 6.66667 15.7399 6.66667 16.4582C6.66667 17.1765 6.38133 17.8653 5.87341 18.3733C5.3655 18.8812 4.67663 19.1665 3.95833 19.1665C3.24004 19.1665 2.55116 18.8812 2.04325 18.3733C1.53534 17.8653 1.25 17.1765 1.25 16.4582C1.25 15.7399 1.53534 15.051 2.04325 14.5431C2.55116 14.0352 3.24004 13.7498 3.95833 13.7498ZM5.41667 16.4582C5.41656 16.0713 5.26276 15.7003 4.98911 15.4268C4.71547 15.1533 4.34438 14.9997 3.9575 14.9998C3.57062 14.9999 3.19962 15.1537 2.92613 15.4274C2.65264 15.701 2.49906 16.0721 2.49917 16.459C2.49922 16.6506 2.53701 16.8402 2.61037 17.0172C2.68373 17.1942 2.79122 17.355 2.92672 17.4904C3.20037 17.7639 3.57145 17.9174 3.95833 17.9173C4.34522 17.9172 4.71621 17.7634 4.9897 17.4898C5.26319 17.2161 5.41678 16.8451 5.41667 16.4582Z"
                                        fill="#1A1A1A" />
                                    <path
                                        d="M18.5667 11.5877C18.4495 11.7047 18.2906 11.7704 18.125 11.7704C17.9594 11.7704 17.8005 11.7047 17.6833 11.5877L16.6667 10.571V13.9585C16.6667 14.7873 16.3374 15.5822 15.7514 16.1682C15.1653 16.7543 14.3705 17.0835 13.5417 17.0835H6.25C6.08424 17.0835 5.92527 17.0176 5.80806 16.9004C5.69085 16.7832 5.625 16.6243 5.625 16.4585C5.625 16.2927 5.69085 16.1338 5.80806 16.0166C5.92527 15.8993 6.08424 15.8335 6.25 15.8335H13.5417C14.0389 15.8335 14.5159 15.636 14.8675 15.2843C15.2191 14.9327 15.4167 14.4558 15.4167 13.9585V10.5718L14.4 11.5885C14.3231 11.6688 14.2262 11.7271 14.1192 11.7573C14.0122 11.7875 13.899 11.7886 13.7915 11.7604C13.684 11.7321 13.5859 11.6757 13.5076 11.5968C13.4292 11.5179 13.3734 11.4195 13.3458 11.3118C13.3179 11.2045 13.3189 11.0917 13.3489 10.9849C13.379 10.8782 13.4369 10.7813 13.5167 10.7043L15.6 8.621C15.7172 8.50395 15.876 8.43821 16.0417 8.43821C16.2073 8.43821 16.3661 8.50395 16.4833 8.621L18.5667 10.7043C18.6837 10.8215 18.7495 10.9804 18.7495 11.146C18.7495 11.3116 18.6837 11.4705 18.5667 11.5877Z"
                                        fill="#1A1A1A" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="row_item">
                    <div class="position-relative overflow-hidden prd_card br_5 bxy_gl bs_15 tbs_tb_3 hover">
                        <a href="#" class="d-block">
                            <div class="position-relative d-flex justify-content-center align-items-center img_box">
                                <img src="./assets/images/prd-img-2.png" alt="thumb" class="w-100">
                                <div class="position-absolute sold_smg_box d-none">
                                    <h4 class="fw_6 fs_20 lh_29 fc_red text-center text-uppercase">sold out</h4>
                                </div>
                                <div class="position-absolute disc_box bg_red d-none">
                                    <span class="fs_14 lh_20 fc_white">25%</span>
                                    <div class="position-absolute triangle_topleft"></div>
                                </div>
                            </div>
                            <div class="content text-center">
                                <h6 class="mb-0 mb-md-3 fw_4 fs_17 lh_22 fc_black">Paket Aksesoris Resmi New Honda CB
                                    150R
                                    StreetFire – Red</h6>
                                <div class="rate_wrapper">
                                    <div class="rating rating_16"></div>
                                </div>
                                <h5
                                    class="d-flex justify-content-center align-items-center gap-2 gap-md-4 pt-0 pt-md-3 fs_18 lh_22 fc_black">
                                    <span>BDT 2,175</span>
                                </h5>
                            </div>
                        </a>
                        <div class="position-absolute d-flex group_buttons br_5">
                            <button type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <g clip-path="url(#clip0_1293_6366)">
                                        <path
                                            d="M7.49935 18.3332C7.95959 18.3332 8.33268 17.9601 8.33268 17.4998C8.33268 17.0396 7.95959 16.6665 7.49935 16.6665C7.03911 16.6665 6.66602 17.0396 6.66602 17.4998C6.66602 17.9601 7.03911 18.3332 7.49935 18.3332Z"
                                            stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path
                                            d="M16.6673 18.3332C17.1276 18.3332 17.5007 17.9601 17.5007 17.4998C17.5007 17.0396 17.1276 16.6665 16.6673 16.6665C16.2071 16.6665 15.834 17.0396 15.834 17.4998C15.834 17.9601 16.2071 18.3332 16.6673 18.3332Z"
                                            stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path
                                            d="M0.833984 0.833496H4.16732L6.40065 11.9918C6.47686 12.3755 6.68557 12.7201 6.99027 12.9654C7.29497 13.2107 7.67623 13.341 8.06732 13.3335H16.1673C16.5584 13.341 16.9397 13.2107 17.2444 12.9654C17.5491 12.7201 17.7578 12.3755 17.834 11.9918L19.1673 5.00016H5.00065"
                                            stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1293_6366">
                                            <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </button>
                            <button type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <path
                                        d="M17.3671 3.84172C16.9415 3.41589 16.4361 3.0781 15.8799 2.84763C15.3237 2.61716 14.7275 2.49854 14.1254 2.49854C13.5234 2.49854 12.9272 2.61716 12.371 2.84763C11.8147 3.0781 11.3094 3.41589 10.8838 3.84172L10.0004 4.72506L9.11709 3.84172C8.25735 2.98198 7.09129 2.49898 5.87542 2.49898C4.65956 2.49898 3.4935 2.98198 2.63376 3.84172C1.77401 4.70147 1.29102 5.86753 1.29102 7.08339C1.29102 8.29925 1.77401 9.46531 2.63376 10.3251L3.51709 11.2084L10.0004 17.6917L16.4838 11.2084L17.3671 10.3251C17.7929 9.89943 18.1307 9.39407 18.3612 8.83785C18.5917 8.28164 18.7103 7.68546 18.7103 7.08339C18.7103 6.48132 18.5917 5.88514 18.3612 5.32893C18.1307 4.77271 17.7929 4.26735 17.3671 3.84172Z"
                                        stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </button>
                            <button type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <path
                                        d="M0.833008 10.0002C0.833008 10.0002 4.16634 3.3335 9.99967 3.3335C15.833 3.3335 19.1663 10.0002 19.1663 10.0002C19.1663 10.0002 15.833 16.6668 9.99967 16.6668C4.16634 16.6668 0.833008 10.0002 0.833008 10.0002Z"
                                        stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path
                                        d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
                                        stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </button>
                            <button type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <path
                                        d="M16.0413 6.25C15.323 6.25 14.6342 5.96466 14.1263 5.45675C13.6183 4.94884 13.333 4.25996 13.333 3.54167C13.333 2.82337 13.6183 2.1345 14.1263 1.62659C14.6342 1.11867 15.323 0.833334 16.0413 0.833334C16.7596 0.833334 17.4485 1.11867 17.9564 1.62659C18.4643 2.1345 18.7497 2.82337 18.7497 3.54167C18.7497 4.25996 18.4643 4.94884 17.9564 5.45675C17.4485 5.96466 16.7596 6.25 16.0413 6.25ZM14.583 3.54167C14.5831 3.73323 14.6208 3.92291 14.6942 4.09987C14.7676 4.27684 14.8751 4.43762 15.0106 4.57304C15.1461 4.70846 15.3069 4.81586 15.4839 4.88912C15.6609 4.96238 15.8506 5.00005 16.0422 5C16.2337 4.99995 16.4234 4.96216 16.6004 4.8888C16.7773 4.81544 16.9381 4.70794 17.0735 4.57245C17.209 4.43695 17.3164 4.27611 17.3896 4.09911C17.4629 3.9221 17.5006 3.7324 17.5005 3.54083C17.5004 3.15395 17.3466 2.78295 17.073 2.50946C16.7993 2.23597 16.4282 2.08239 16.0413 2.0825C15.6545 2.08261 15.2835 2.23641 15.01 2.51005C14.7365 2.7837 14.5829 3.15478 14.583 3.54167Z"
                                        fill="#1A1A1A" />
                                    <path
                                        d="M1.43333 8.41234C1.55052 8.2953 1.70937 8.22955 1.875 8.22955C2.04063 8.22955 2.19948 8.2953 2.31667 8.41234L3.33333 9.429L3.33333 6.0415C3.33333 5.2127 3.66257 4.41785 4.24862 3.83179C4.83468 3.24574 5.62953 2.9165 6.45833 2.9165H13.75C13.9158 2.9165 14.0747 2.98235 14.1919 3.09956C14.3092 3.21677 14.375 3.37574 14.375 3.5415C14.375 3.70726 14.3092 3.86624 14.1919 3.98345C14.0747 4.10066 13.9158 4.1665 13.75 4.1665H6.45833C6.2121 4.1665 5.96829 4.215 5.7408 4.30923C5.51332 4.40346 5.30662 4.54157 5.13251 4.71568C4.9584 4.88979 4.82029 5.09649 4.72606 5.32397C4.63183 5.55146 4.58333 5.79528 4.58333 6.0415L4.58333 9.42817L5.6 8.4115C5.71793 8.29771 5.87584 8.23479 6.03971 8.23629C6.20358 8.23779 6.36031 8.30359 6.47614 8.41953C6.59196 8.53546 6.65762 8.69225 6.65896 8.85613C6.66031 9.02 6.59724 9.17785 6.48333 9.29567L4.4 11.379C4.28281 11.496 4.12396 11.5618 3.95833 11.5618C3.79271 11.5618 3.63385 11.496 3.51667 11.379L1.43333 9.29567C1.31629 9.17848 1.25055 9.01963 1.25055 8.854C1.25055 8.68838 1.31629 8.52953 1.43333 8.41234ZM3.95833 13.7498C4.67663 13.7498 5.3655 14.0352 5.87341 14.5431C6.38133 15.051 6.66667 15.7399 6.66667 16.4582C6.66667 17.1765 6.38133 17.8653 5.87341 18.3733C5.3655 18.8812 4.67663 19.1665 3.95833 19.1665C3.24004 19.1665 2.55116 18.8812 2.04325 18.3733C1.53534 17.8653 1.25 17.1765 1.25 16.4582C1.25 15.7399 1.53534 15.051 2.04325 14.5431C2.55116 14.0352 3.24004 13.7498 3.95833 13.7498ZM5.41667 16.4582C5.41656 16.0713 5.26276 15.7003 4.98911 15.4268C4.71547 15.1533 4.34438 14.9997 3.9575 14.9998C3.57062 14.9999 3.19962 15.1537 2.92613 15.4274C2.65264 15.701 2.49906 16.0721 2.49917 16.459C2.49922 16.6506 2.53701 16.8402 2.61037 17.0172C2.68373 17.1942 2.79122 17.355 2.92672 17.4904C3.20037 17.7639 3.57145 17.9174 3.95833 17.9173C4.34522 17.9172 4.71621 17.7634 4.9897 17.4898C5.26319 17.2161 5.41678 16.8451 5.41667 16.4582Z"
                                        fill="#1A1A1A" />
                                    <path
                                        d="M18.5667 11.5877C18.4495 11.7047 18.2906 11.7704 18.125 11.7704C17.9594 11.7704 17.8005 11.7047 17.6833 11.5877L16.6667 10.571V13.9585C16.6667 14.7873 16.3374 15.5822 15.7514 16.1682C15.1653 16.7543 14.3705 17.0835 13.5417 17.0835H6.25C6.08424 17.0835 5.92527 17.0176 5.80806 16.9004C5.69085 16.7832 5.625 16.6243 5.625 16.4585C5.625 16.2927 5.69085 16.1338 5.80806 16.0166C5.92527 15.8993 6.08424 15.8335 6.25 15.8335H13.5417C14.0389 15.8335 14.5159 15.636 14.8675 15.2843C15.2191 14.9327 15.4167 14.4558 15.4167 13.9585V10.5718L14.4 11.5885C14.3231 11.6688 14.2262 11.7271 14.1192 11.7573C14.0122 11.7875 13.899 11.7886 13.7915 11.7604C13.684 11.7321 13.5859 11.6757 13.5076 11.5968C13.4292 11.5179 13.3734 11.4195 13.3458 11.3118C13.3179 11.2045 13.3189 11.0917 13.3489 10.9849C13.379 10.8782 13.4369 10.7813 13.5167 10.7043L15.6 8.621C15.7172 8.50395 15.876 8.43821 16.0417 8.43821C16.2073 8.43821 16.3661 8.50395 16.4833 8.621L18.5667 10.7043C18.6837 10.8215 18.7495 10.9804 18.7495 11.146C18.7495 11.3116 18.6837 11.4705 18.5667 11.5877Z"
                                        fill="#1A1A1A" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- all products -->
    <section class="all_product_sc spy">
        <div class="container-fluid container-xxxl">
            <div class="sc_title_wrapper">
                <h1 class="sc_title">All Products</h1>
                <a href="#" class="br_5 bg_red btnp_1228 tbg_3 hover">
                    <span class="fw_5 fs_14 lh_20 fc_white text-uppercase">view all</span>
                </a>
            </div>

            <div class="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 g-2 g-md-4">
                <div class="row_item">
                    <div class="position-relative overflow-hidden prd_card br_5 bxy_gl bs_15 tbs_tb_3 hover">
                        <a href="#" class="d-block">
                            <div class="position-relative d-flex justify-content-center align-items-center img_box">
                                <img src="./assets/images/details-img-1.png" alt="thumb" class="w-100">
                                <div class="position-absolute sold_smg_box d-none">
                                    <h4 class="fw_6 fs_20 lh_29 fc_red text-center text-uppercase">sold out</h4>
                                </div>
                                <div class="position-absolute disc_box bg_red d-none">
                                    <span class="fs_14 lh_20 fc_white">25%</span>
                                    <div class="position-absolute triangle_topleft"></div>
                                </div>
                            </div>
                            <div class="content text-center">
                                <h6 class="mb-0 mb-md-3 fw_4 fs_17 lh_22 fc_black">Paket Aksesoris d</h6>
                                <div class="rate_wrapper">
                                    <div class="rating rating_16"></div>
                                </div>
                                <!-- <div class="rate_wrapper">
                                        <div class="rating rating_16"></div>
                                    </div> -->
                                <h5
                                    class="d-flex justify-content-center align-items-center gap-2 gap-md-4 pt-0 pt-md-3 fs_18 lh_22 fc_black">
                                    <span>BDT 2,175</span>
                                </h5>
                            </div>
                        </a>
                        <div class="position-absolute d-flex group_buttons br_5">
                            <button type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <g clip-path="url(#clip0_1293_6366)">
                                        <path
                                            d="M7.49935 18.3332C7.95959 18.3332 8.33268 17.9601 8.33268 17.4998C8.33268 17.0396 7.95959 16.6665 7.49935 16.6665C7.03911 16.6665 6.66602 17.0396 6.66602 17.4998C6.66602 17.9601 7.03911 18.3332 7.49935 18.3332Z"
                                            stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path
                                            d="M16.6673 18.3332C17.1276 18.3332 17.5007 17.9601 17.5007 17.4998C17.5007 17.0396 17.1276 16.6665 16.6673 16.6665C16.2071 16.6665 15.834 17.0396 15.834 17.4998C15.834 17.9601 16.2071 18.3332 16.6673 18.3332Z"
                                            stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path
                                            d="M0.833984 0.833496H4.16732L6.40065 11.9918C6.47686 12.3755 6.68557 12.7201 6.99027 12.9654C7.29497 13.2107 7.67623 13.341 8.06732 13.3335H16.1673C16.5584 13.341 16.9397 13.2107 17.2444 12.9654C17.5491 12.7201 17.7578 12.3755 17.834 11.9918L19.1673 5.00016H5.00065"
                                            stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1293_6366">
                                            <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </button>
                            <button type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <path
                                        d="M17.3671 3.84172C16.9415 3.41589 16.4361 3.0781 15.8799 2.84763C15.3237 2.61716 14.7275 2.49854 14.1254 2.49854C13.5234 2.49854 12.9272 2.61716 12.371 2.84763C11.8147 3.0781 11.3094 3.41589 10.8838 3.84172L10.0004 4.72506L9.11709 3.84172C8.25735 2.98198 7.09129 2.49898 5.87542 2.49898C4.65956 2.49898 3.4935 2.98198 2.63376 3.84172C1.77401 4.70147 1.29102 5.86753 1.29102 7.08339C1.29102 8.29925 1.77401 9.46531 2.63376 10.3251L3.51709 11.2084L10.0004 17.6917L16.4838 11.2084L17.3671 10.3251C17.7929 9.89943 18.1307 9.39407 18.3612 8.83785C18.5917 8.28164 18.7103 7.68546 18.7103 7.08339C18.7103 6.48132 18.5917 5.88514 18.3612 5.32893C18.1307 4.77271 17.7929 4.26735 17.3671 3.84172Z"
                                        stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </button>
                            <button type="button" data-bs-toggle="modal" data-bs-target="#quickView">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <path
                                        d="M0.833008 10.0002C0.833008 10.0002 4.16634 3.3335 9.99967 3.3335C15.833 3.3335 19.1663 10.0002 19.1663 10.0002C19.1663 10.0002 15.833 16.6668 9.99967 16.6668C4.16634 16.6668 0.833008 10.0002 0.833008 10.0002Z"
                                        stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path
                                        d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
                                        stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </button>
                            <button type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <path
                                        d="M16.0413 6.25C15.323 6.25 14.6342 5.96466 14.1263 5.45675C13.6183 4.94884 13.333 4.25996 13.333 3.54167C13.333 2.82337 13.6183 2.1345 14.1263 1.62659C14.6342 1.11867 15.323 0.833334 16.0413 0.833334C16.7596 0.833334 17.4485 1.11867 17.9564 1.62659C18.4643 2.1345 18.7497 2.82337 18.7497 3.54167C18.7497 4.25996 18.4643 4.94884 17.9564 5.45675C17.4485 5.96466 16.7596 6.25 16.0413 6.25ZM14.583 3.54167C14.5831 3.73323 14.6208 3.92291 14.6942 4.09987C14.7676 4.27684 14.8751 4.43762 15.0106 4.57304C15.1461 4.70846 15.3069 4.81586 15.4839 4.88912C15.6609 4.96238 15.8506 5.00005 16.0422 5C16.2337 4.99995 16.4234 4.96216 16.6004 4.8888C16.7773 4.81544 16.9381 4.70794 17.0735 4.57245C17.209 4.43695 17.3164 4.27611 17.3896 4.09911C17.4629 3.9221 17.5006 3.7324 17.5005 3.54083C17.5004 3.15395 17.3466 2.78295 17.073 2.50946C16.7993 2.23597 16.4282 2.08239 16.0413 2.0825C15.6545 2.08261 15.2835 2.23641 15.01 2.51005C14.7365 2.7837 14.5829 3.15478 14.583 3.54167Z"
                                        fill="#1A1A1A" />
                                    <path
                                        d="M1.43333 8.41234C1.55052 8.2953 1.70937 8.22955 1.875 8.22955C2.04063 8.22955 2.19948 8.2953 2.31667 8.41234L3.33333 9.429L3.33333 6.0415C3.33333 5.2127 3.66257 4.41785 4.24862 3.83179C4.83468 3.24574 5.62953 2.9165 6.45833 2.9165H13.75C13.9158 2.9165 14.0747 2.98235 14.1919 3.09956C14.3092 3.21677 14.375 3.37574 14.375 3.5415C14.375 3.70726 14.3092 3.86624 14.1919 3.98345C14.0747 4.10066 13.9158 4.1665 13.75 4.1665H6.45833C6.2121 4.1665 5.96829 4.215 5.7408 4.30923C5.51332 4.40346 5.30662 4.54157 5.13251 4.71568C4.9584 4.88979 4.82029 5.09649 4.72606 5.32397C4.63183 5.55146 4.58333 5.79528 4.58333 6.0415L4.58333 9.42817L5.6 8.4115C5.71793 8.29771 5.87584 8.23479 6.03971 8.23629C6.20358 8.23779 6.36031 8.30359 6.47614 8.41953C6.59196 8.53546 6.65762 8.69225 6.65896 8.85613C6.66031 9.02 6.59724 9.17785 6.48333 9.29567L4.4 11.379C4.28281 11.496 4.12396 11.5618 3.95833 11.5618C3.79271 11.5618 3.63385 11.496 3.51667 11.379L1.43333 9.29567C1.31629 9.17848 1.25055 9.01963 1.25055 8.854C1.25055 8.68838 1.31629 8.52953 1.43333 8.41234ZM3.95833 13.7498C4.67663 13.7498 5.3655 14.0352 5.87341 14.5431C6.38133 15.051 6.66667 15.7399 6.66667 16.4582C6.66667 17.1765 6.38133 17.8653 5.87341 18.3733C5.3655 18.8812 4.67663 19.1665 3.95833 19.1665C3.24004 19.1665 2.55116 18.8812 2.04325 18.3733C1.53534 17.8653 1.25 17.1765 1.25 16.4582C1.25 15.7399 1.53534 15.051 2.04325 14.5431C2.55116 14.0352 3.24004 13.7498 3.95833 13.7498ZM5.41667 16.4582C5.41656 16.0713 5.26276 15.7003 4.98911 15.4268C4.71547 15.1533 4.34438 14.9997 3.9575 14.9998C3.57062 14.9999 3.19962 15.1537 2.92613 15.4274C2.65264 15.701 2.49906 16.0721 2.49917 16.459C2.49922 16.6506 2.53701 16.8402 2.61037 17.0172C2.68373 17.1942 2.79122 17.355 2.92672 17.4904C3.20037 17.7639 3.57145 17.9174 3.95833 17.9173C4.34522 17.9172 4.71621 17.7634 4.9897 17.4898C5.26319 17.2161 5.41678 16.8451 5.41667 16.4582Z"
                                        fill="#1A1A1A" />
                                    <path
                                        d="M18.5667 11.5877C18.4495 11.7047 18.2906 11.7704 18.125 11.7704C17.9594 11.7704 17.8005 11.7047 17.6833 11.5877L16.6667 10.571V13.9585C16.6667 14.7873 16.3374 15.5822 15.7514 16.1682C15.1653 16.7543 14.3705 17.0835 13.5417 17.0835H6.25C6.08424 17.0835 5.92527 17.0176 5.80806 16.9004C5.69085 16.7832 5.625 16.6243 5.625 16.4585C5.625 16.2927 5.69085 16.1338 5.80806 16.0166C5.92527 15.8993 6.08424 15.8335 6.25 15.8335H13.5417C14.0389 15.8335 14.5159 15.636 14.8675 15.2843C15.2191 14.9327 15.4167 14.4558 15.4167 13.9585V10.5718L14.4 11.5885C14.3231 11.6688 14.2262 11.7271 14.1192 11.7573C14.0122 11.7875 13.899 11.7886 13.7915 11.7604C13.684 11.7321 13.5859 11.6757 13.5076 11.5968C13.4292 11.5179 13.3734 11.4195 13.3458 11.3118C13.3179 11.2045 13.3189 11.0917 13.3489 10.9849C13.379 10.8782 13.4369 10.7813 13.5167 10.7043L15.6 8.621C15.7172 8.50395 15.876 8.43821 16.0417 8.43821C16.2073 8.43821 16.3661 8.50395 16.4833 8.621L18.5667 10.7043C18.6837 10.8215 18.7495 10.9804 18.7495 11.146C18.7495 11.3116 18.6837 11.4705 18.5667 11.5877Z"
                                        fill="#1A1A1A" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="row_item">
                    <div class="position-relative overflow-hidden prd_card br_5 bxy_gl bs_15 tbs_tb_3 hover">
                        <a href="#" class="d-block">
                            <div class="position-relative d-flex justify-content-center align-items-center img_box">
                                <img src="./assets/images/prd-img-2.png" alt="thumb" class="w-100">
                                <div class="position-absolute sold_smg_box d-none">
                                    <h4 class="fw_6 fs_20 lh_29 fc_red text-center text-uppercase">sold out</h4>
                                </div>
                                <div class="position-absolute disc_box bg_red">
                                    <span class="fs_14 lh_20 fc_white">25%</span>
                                    <div class="position-absolute triangle_topleft"></div>
                                </div>
                            </div>
                            <div class="content text-center">
                                <h6 class="mb-0 mb-md-3 fw_4 fs_17 lh_22 fc_black">Paket Aksesoris Resmi New Honda CB
                                    150R
                                    StreetFire – Red</h6>
                                <div class="rate_wrapper">
                                    <div class="rating rating_16"></div>
                                </div>
                                <h5
                                    class="d-flex justify-content-center align-items-center gap-2 gap-md-4 pt-0 pt-md-3 fs_18 lh_22 fc_black">
                                    <span class="fc_gl text-decoration-line-through">BDT 2,900</span>
                                    <span>BDT 2,175</span>
                                </h5>
                            </div>
                        </a>
                        <div class="position-absolute d-flex group_buttons br_5">
                            <button type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <g clip-path="url(#clip0_1293_6366)">
                                        <path
                                            d="M7.49935 18.3332C7.95959 18.3332 8.33268 17.9601 8.33268 17.4998C8.33268 17.0396 7.95959 16.6665 7.49935 16.6665C7.03911 16.6665 6.66602 17.0396 6.66602 17.4998C6.66602 17.9601 7.03911 18.3332 7.49935 18.3332Z"
                                            stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path
                                            d="M16.6673 18.3332C17.1276 18.3332 17.5007 17.9601 17.5007 17.4998C17.5007 17.0396 17.1276 16.6665 16.6673 16.6665C16.2071 16.6665 15.834 17.0396 15.834 17.4998C15.834 17.9601 16.2071 18.3332 16.6673 18.3332Z"
                                            stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path
                                            d="M0.833984 0.833496H4.16732L6.40065 11.9918C6.47686 12.3755 6.68557 12.7201 6.99027 12.9654C7.29497 13.2107 7.67623 13.341 8.06732 13.3335H16.1673C16.5584 13.341 16.9397 13.2107 17.2444 12.9654C17.5491 12.7201 17.7578 12.3755 17.834 11.9918L19.1673 5.00016H5.00065"
                                            stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1293_6366">
                                            <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </button>
                            <button type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <path
                                        d="M17.3671 3.84172C16.9415 3.41589 16.4361 3.0781 15.8799 2.84763C15.3237 2.61716 14.7275 2.49854 14.1254 2.49854C13.5234 2.49854 12.9272 2.61716 12.371 2.84763C11.8147 3.0781 11.3094 3.41589 10.8838 3.84172L10.0004 4.72506L9.11709 3.84172C8.25735 2.98198 7.09129 2.49898 5.87542 2.49898C4.65956 2.49898 3.4935 2.98198 2.63376 3.84172C1.77401 4.70147 1.29102 5.86753 1.29102 7.08339C1.29102 8.29925 1.77401 9.46531 2.63376 10.3251L3.51709 11.2084L10.0004 17.6917L16.4838 11.2084L17.3671 10.3251C17.7929 9.89943 18.1307 9.39407 18.3612 8.83785C18.5917 8.28164 18.7103 7.68546 18.7103 7.08339C18.7103 6.48132 18.5917 5.88514 18.3612 5.32893C18.1307 4.77271 17.7929 4.26735 17.3671 3.84172Z"
                                        stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </button>
                            <button type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <path
                                        d="M0.833008 10.0002C0.833008 10.0002 4.16634 3.3335 9.99967 3.3335C15.833 3.3335 19.1663 10.0002 19.1663 10.0002C19.1663 10.0002 15.833 16.6668 9.99967 16.6668C4.16634 16.6668 0.833008 10.0002 0.833008 10.0002Z"
                                        stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path
                                        d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
                                        stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </button>
                            <button type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <path
                                        d="M16.0413 6.25C15.323 6.25 14.6342 5.96466 14.1263 5.45675C13.6183 4.94884 13.333 4.25996 13.333 3.54167C13.333 2.82337 13.6183 2.1345 14.1263 1.62659C14.6342 1.11867 15.323 0.833334 16.0413 0.833334C16.7596 0.833334 17.4485 1.11867 17.9564 1.62659C18.4643 2.1345 18.7497 2.82337 18.7497 3.54167C18.7497 4.25996 18.4643 4.94884 17.9564 5.45675C17.4485 5.96466 16.7596 6.25 16.0413 6.25ZM14.583 3.54167C14.5831 3.73323 14.6208 3.92291 14.6942 4.09987C14.7676 4.27684 14.8751 4.43762 15.0106 4.57304C15.1461 4.70846 15.3069 4.81586 15.4839 4.88912C15.6609 4.96238 15.8506 5.00005 16.0422 5C16.2337 4.99995 16.4234 4.96216 16.6004 4.8888C16.7773 4.81544 16.9381 4.70794 17.0735 4.57245C17.209 4.43695 17.3164 4.27611 17.3896 4.09911C17.4629 3.9221 17.5006 3.7324 17.5005 3.54083C17.5004 3.15395 17.3466 2.78295 17.073 2.50946C16.7993 2.23597 16.4282 2.08239 16.0413 2.0825C15.6545 2.08261 15.2835 2.23641 15.01 2.51005C14.7365 2.7837 14.5829 3.15478 14.583 3.54167Z"
                                        fill="#1A1A1A" />
                                    <path
                                        d="M1.43333 8.41234C1.55052 8.2953 1.70937 8.22955 1.875 8.22955C2.04063 8.22955 2.19948 8.2953 2.31667 8.41234L3.33333 9.429L3.33333 6.0415C3.33333 5.2127 3.66257 4.41785 4.24862 3.83179C4.83468 3.24574 5.62953 2.9165 6.45833 2.9165H13.75C13.9158 2.9165 14.0747 2.98235 14.1919 3.09956C14.3092 3.21677 14.375 3.37574 14.375 3.5415C14.375 3.70726 14.3092 3.86624 14.1919 3.98345C14.0747 4.10066 13.9158 4.1665 13.75 4.1665H6.45833C6.2121 4.1665 5.96829 4.215 5.7408 4.30923C5.51332 4.40346 5.30662 4.54157 5.13251 4.71568C4.9584 4.88979 4.82029 5.09649 4.72606 5.32397C4.63183 5.55146 4.58333 5.79528 4.58333 6.0415L4.58333 9.42817L5.6 8.4115C5.71793 8.29771 5.87584 8.23479 6.03971 8.23629C6.20358 8.23779 6.36031 8.30359 6.47614 8.41953C6.59196 8.53546 6.65762 8.69225 6.65896 8.85613C6.66031 9.02 6.59724 9.17785 6.48333 9.29567L4.4 11.379C4.28281 11.496 4.12396 11.5618 3.95833 11.5618C3.79271 11.5618 3.63385 11.496 3.51667 11.379L1.43333 9.29567C1.31629 9.17848 1.25055 9.01963 1.25055 8.854C1.25055 8.68838 1.31629 8.52953 1.43333 8.41234ZM3.95833 13.7498C4.67663 13.7498 5.3655 14.0352 5.87341 14.5431C6.38133 15.051 6.66667 15.7399 6.66667 16.4582C6.66667 17.1765 6.38133 17.8653 5.87341 18.3733C5.3655 18.8812 4.67663 19.1665 3.95833 19.1665C3.24004 19.1665 2.55116 18.8812 2.04325 18.3733C1.53534 17.8653 1.25 17.1765 1.25 16.4582C1.25 15.7399 1.53534 15.051 2.04325 14.5431C2.55116 14.0352 3.24004 13.7498 3.95833 13.7498ZM5.41667 16.4582C5.41656 16.0713 5.26276 15.7003 4.98911 15.4268C4.71547 15.1533 4.34438 14.9997 3.9575 14.9998C3.57062 14.9999 3.19962 15.1537 2.92613 15.4274C2.65264 15.701 2.49906 16.0721 2.49917 16.459C2.49922 16.6506 2.53701 16.8402 2.61037 17.0172C2.68373 17.1942 2.79122 17.355 2.92672 17.4904C3.20037 17.7639 3.57145 17.9174 3.95833 17.9173C4.34522 17.9172 4.71621 17.7634 4.9897 17.4898C5.26319 17.2161 5.41678 16.8451 5.41667 16.4582Z"
                                        fill="#1A1A1A" />
                                    <path
                                        d="M18.5667 11.5877C18.4495 11.7047 18.2906 11.7704 18.125 11.7704C17.9594 11.7704 17.8005 11.7047 17.6833 11.5877L16.6667 10.571V13.9585C16.6667 14.7873 16.3374 15.5822 15.7514 16.1682C15.1653 16.7543 14.3705 17.0835 13.5417 17.0835H6.25C6.08424 17.0835 5.92527 17.0176 5.80806 16.9004C5.69085 16.7832 5.625 16.6243 5.625 16.4585C5.625 16.2927 5.69085 16.1338 5.80806 16.0166C5.92527 15.8993 6.08424 15.8335 6.25 15.8335H13.5417C14.0389 15.8335 14.5159 15.636 14.8675 15.2843C15.2191 14.9327 15.4167 14.4558 15.4167 13.9585V10.5718L14.4 11.5885C14.3231 11.6688 14.2262 11.7271 14.1192 11.7573C14.0122 11.7875 13.899 11.7886 13.7915 11.7604C13.684 11.7321 13.5859 11.6757 13.5076 11.5968C13.4292 11.5179 13.3734 11.4195 13.3458 11.3118C13.3179 11.2045 13.3189 11.0917 13.3489 10.9849C13.379 10.8782 13.4369 10.7813 13.5167 10.7043L15.6 8.621C15.7172 8.50395 15.876 8.43821 16.0417 8.43821C16.2073 8.43821 16.3661 8.50395 16.4833 8.621L18.5667 10.7043C18.6837 10.8215 18.7495 10.9804 18.7495 11.146C18.7495 11.3116 18.6837 11.4705 18.5667 11.5877Z"
                                        fill="#1A1A1A" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="row_item">
                    <div class="position-relative overflow-hidden prd_card br_5 bxy_gl bs_15 tbs_tb_3 hover">
                        <a href="#" class="d-block">
                            <div class="position-relative d-flex justify-content-center align-items-center img_box">
                                <img src="./assets/images/prd-img-3.png" alt="thumb" class="w-100">
                                <div class="position-absolute sold_smg_box d-none">
                                    <h4 class="fw_6 fs_20 lh_29 fc_red text-center text-uppercase">sold out</h4>
                                </div>
                                <div class="position-absolute disc_box bg_red d-none">
                                    <span class="fs_14 lh_20 fc_white">25%</span>
                                    <div class="position-absolute triangle_topleft"></div>
                                </div>
                            </div>
                            <div class="content text-center">
                                <h6 class="mb-0 mb-md-3 fw_4 fs_17 lh_22 fc_black">Rubber Step Floor New Vario 125 K60R
                                    & 150
                                    eSP K59J</h6>
                                <div class="rate_wrapper">
                                    <div class="rating rating_16"></div>
                                </div>
                                <h5
                                    class="d-flex justify-content-center align-items-center gap-2 gap-md-4 pt-0 pt-md-3 fs_18 lh_22 fc_black">
                                    <span>BDT 2,175</span>
                                </h5>
                            </div>
                        </a>
                        <div class="position-absolute d-flex group_buttons br_5">
                            <button type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <g clip-path="url(#clip0_1293_6366)">
                                        <path
                                            d="M7.49935 18.3332C7.95959 18.3332 8.33268 17.9601 8.33268 17.4998C8.33268 17.0396 7.95959 16.6665 7.49935 16.6665C7.03911 16.6665 6.66602 17.0396 6.66602 17.4998C6.66602 17.9601 7.03911 18.3332 7.49935 18.3332Z"
                                            stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path
                                            d="M16.6673 18.3332C17.1276 18.3332 17.5007 17.9601 17.5007 17.4998C17.5007 17.0396 17.1276 16.6665 16.6673 16.6665C16.2071 16.6665 15.834 17.0396 15.834 17.4998C15.834 17.9601 16.2071 18.3332 16.6673 18.3332Z"
                                            stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path
                                            d="M0.833984 0.833496H4.16732L6.40065 11.9918C6.47686 12.3755 6.68557 12.7201 6.99027 12.9654C7.29497 13.2107 7.67623 13.341 8.06732 13.3335H16.1673C16.5584 13.341 16.9397 13.2107 17.2444 12.9654C17.5491 12.7201 17.7578 12.3755 17.834 11.9918L19.1673 5.00016H5.00065"
                                            stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1293_6366">
                                            <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </button>
                            <button type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <path
                                        d="M17.3671 3.84172C16.9415 3.41589 16.4361 3.0781 15.8799 2.84763C15.3237 2.61716 14.7275 2.49854 14.1254 2.49854C13.5234 2.49854 12.9272 2.61716 12.371 2.84763C11.8147 3.0781 11.3094 3.41589 10.8838 3.84172L10.0004 4.72506L9.11709 3.84172C8.25735 2.98198 7.09129 2.49898 5.87542 2.49898C4.65956 2.49898 3.4935 2.98198 2.63376 3.84172C1.77401 4.70147 1.29102 5.86753 1.29102 7.08339C1.29102 8.29925 1.77401 9.46531 2.63376 10.3251L3.51709 11.2084L10.0004 17.6917L16.4838 11.2084L17.3671 10.3251C17.7929 9.89943 18.1307 9.39407 18.3612 8.83785C18.5917 8.28164 18.7103 7.68546 18.7103 7.08339C18.7103 6.48132 18.5917 5.88514 18.3612 5.32893C18.1307 4.77271 17.7929 4.26735 17.3671 3.84172Z"
                                        stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </button>
                            <button type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <path
                                        d="M0.833008 10.0002C0.833008 10.0002 4.16634 3.3335 9.99967 3.3335C15.833 3.3335 19.1663 10.0002 19.1663 10.0002C19.1663 10.0002 15.833 16.6668 9.99967 16.6668C4.16634 16.6668 0.833008 10.0002 0.833008 10.0002Z"
                                        stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path
                                        d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
                                        stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </button>
                            <button type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <path
                                        d="M16.0413 6.25C15.323 6.25 14.6342 5.96466 14.1263 5.45675C13.6183 4.94884 13.333 4.25996 13.333 3.54167C13.333 2.82337 13.6183 2.1345 14.1263 1.62659C14.6342 1.11867 15.323 0.833334 16.0413 0.833334C16.7596 0.833334 17.4485 1.11867 17.9564 1.62659C18.4643 2.1345 18.7497 2.82337 18.7497 3.54167C18.7497 4.25996 18.4643 4.94884 17.9564 5.45675C17.4485 5.96466 16.7596 6.25 16.0413 6.25ZM14.583 3.54167C14.5831 3.73323 14.6208 3.92291 14.6942 4.09987C14.7676 4.27684 14.8751 4.43762 15.0106 4.57304C15.1461 4.70846 15.3069 4.81586 15.4839 4.88912C15.6609 4.96238 15.8506 5.00005 16.0422 5C16.2337 4.99995 16.4234 4.96216 16.6004 4.8888C16.7773 4.81544 16.9381 4.70794 17.0735 4.57245C17.209 4.43695 17.3164 4.27611 17.3896 4.09911C17.4629 3.9221 17.5006 3.7324 17.5005 3.54083C17.5004 3.15395 17.3466 2.78295 17.073 2.50946C16.7993 2.23597 16.4282 2.08239 16.0413 2.0825C15.6545 2.08261 15.2835 2.23641 15.01 2.51005C14.7365 2.7837 14.5829 3.15478 14.583 3.54167Z"
                                        fill="#1A1A1A" />
                                    <path
                                        d="M1.43333 8.41234C1.55052 8.2953 1.70937 8.22955 1.875 8.22955C2.04063 8.22955 2.19948 8.2953 2.31667 8.41234L3.33333 9.429L3.33333 6.0415C3.33333 5.2127 3.66257 4.41785 4.24862 3.83179C4.83468 3.24574 5.62953 2.9165 6.45833 2.9165H13.75C13.9158 2.9165 14.0747 2.98235 14.1919 3.09956C14.3092 3.21677 14.375 3.37574 14.375 3.5415C14.375 3.70726 14.3092 3.86624 14.1919 3.98345C14.0747 4.10066 13.9158 4.1665 13.75 4.1665H6.45833C6.2121 4.1665 5.96829 4.215 5.7408 4.30923C5.51332 4.40346 5.30662 4.54157 5.13251 4.71568C4.9584 4.88979 4.82029 5.09649 4.72606 5.32397C4.63183 5.55146 4.58333 5.79528 4.58333 6.0415L4.58333 9.42817L5.6 8.4115C5.71793 8.29771 5.87584 8.23479 6.03971 8.23629C6.20358 8.23779 6.36031 8.30359 6.47614 8.41953C6.59196 8.53546 6.65762 8.69225 6.65896 8.85613C6.66031 9.02 6.59724 9.17785 6.48333 9.29567L4.4 11.379C4.28281 11.496 4.12396 11.5618 3.95833 11.5618C3.79271 11.5618 3.63385 11.496 3.51667 11.379L1.43333 9.29567C1.31629 9.17848 1.25055 9.01963 1.25055 8.854C1.25055 8.68838 1.31629 8.52953 1.43333 8.41234ZM3.95833 13.7498C4.67663 13.7498 5.3655 14.0352 5.87341 14.5431C6.38133 15.051 6.66667 15.7399 6.66667 16.4582C6.66667 17.1765 6.38133 17.8653 5.87341 18.3733C5.3655 18.8812 4.67663 19.1665 3.95833 19.1665C3.24004 19.1665 2.55116 18.8812 2.04325 18.3733C1.53534 17.8653 1.25 17.1765 1.25 16.4582C1.25 15.7399 1.53534 15.051 2.04325 14.5431C2.55116 14.0352 3.24004 13.7498 3.95833 13.7498ZM5.41667 16.4582C5.41656 16.0713 5.26276 15.7003 4.98911 15.4268C4.71547 15.1533 4.34438 14.9997 3.9575 14.9998C3.57062 14.9999 3.19962 15.1537 2.92613 15.4274C2.65264 15.701 2.49906 16.0721 2.49917 16.459C2.49922 16.6506 2.53701 16.8402 2.61037 17.0172C2.68373 17.1942 2.79122 17.355 2.92672 17.4904C3.20037 17.7639 3.57145 17.9174 3.95833 17.9173C4.34522 17.9172 4.71621 17.7634 4.9897 17.4898C5.26319 17.2161 5.41678 16.8451 5.41667 16.4582Z"
                                        fill="#1A1A1A" />
                                    <path
                                        d="M18.5667 11.5877C18.4495 11.7047 18.2906 11.7704 18.125 11.7704C17.9594 11.7704 17.8005 11.7047 17.6833 11.5877L16.6667 10.571V13.9585C16.6667 14.7873 16.3374 15.5822 15.7514 16.1682C15.1653 16.7543 14.3705 17.0835 13.5417 17.0835H6.25C6.08424 17.0835 5.92527 17.0176 5.80806 16.9004C5.69085 16.7832 5.625 16.6243 5.625 16.4585C5.625 16.2927 5.69085 16.1338 5.80806 16.0166C5.92527 15.8993 6.08424 15.8335 6.25 15.8335H13.5417C14.0389 15.8335 14.5159 15.636 14.8675 15.2843C15.2191 14.9327 15.4167 14.4558 15.4167 13.9585V10.5718L14.4 11.5885C14.3231 11.6688 14.2262 11.7271 14.1192 11.7573C14.0122 11.7875 13.899 11.7886 13.7915 11.7604C13.684 11.7321 13.5859 11.6757 13.5076 11.5968C13.4292 11.5179 13.3734 11.4195 13.3458 11.3118C13.3179 11.2045 13.3189 11.0917 13.3489 10.9849C13.379 10.8782 13.4369 10.7813 13.5167 10.7043L15.6 8.621C15.7172 8.50395 15.876 8.43821 16.0417 8.43821C16.2073 8.43821 16.3661 8.50395 16.4833 8.621L18.5667 10.7043C18.6837 10.8215 18.7495 10.9804 18.7495 11.146C18.7495 11.3116 18.6837 11.4705 18.5667 11.5877Z"
                                        fill="#1A1A1A" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="row_item">
                    <div class="position-relative overflow-hidden prd_card br_5 bxy_gl bs_15 tbs_tb_3 hover">
                        <a href="#" class="d-block">
                            <div class="position-relative d-flex justify-content-center align-items-center img_box">
                                <img src="./assets/images/prd-img-1.png" alt="thumb" class="w-100">
                                <div class="position-absolute sold_smg_box d-none">
                                    <h4 class="fw_6 fs_20 lh_29 fc_red text-center text-uppercase">sold out</h4>
                                </div>
                                <div class="position-absolute disc_box bg_red d-none">
                                    <span class="fs_14 lh_20 fc_white">25%</span>
                                    <div class="position-absolute triangle_topleft"></div>
                                </div>
                            </div>
                            <div class="content text-center">
                                <h6 class="mb-0 mb-md-3 fw_4 fs_17 lh_22 fc_black">Paket Aksesoris Resmi New Honda CB
                                    150R
                                    StreetFire – Red</h6>
                                <div class="rate_wrapper">
                                    <div class="rating rating_16"></div>
                                </div>
                                <h5
                                    class="d-flex justify-content-center align-items-center gap-2 gap-md-4 pt-0 pt-md-3 fs_18 lh_22 fc_black">
                                    <span class="fc_gl text-decoration-line-through">BDT 2,900</span>
                                    <span>BDT 2,175</span>
                                </h5>
                            </div>
                        </a>
                        <div class="position-absolute d-flex group_buttons br_5">
                            <button type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <g clip-path="url(#clip0_1293_6366)">
                                        <path
                                            d="M7.49935 18.3332C7.95959 18.3332 8.33268 17.9601 8.33268 17.4998C8.33268 17.0396 7.95959 16.6665 7.49935 16.6665C7.03911 16.6665 6.66602 17.0396 6.66602 17.4998C6.66602 17.9601 7.03911 18.3332 7.49935 18.3332Z"
                                            stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path
                                            d="M16.6673 18.3332C17.1276 18.3332 17.5007 17.9601 17.5007 17.4998C17.5007 17.0396 17.1276 16.6665 16.6673 16.6665C16.2071 16.6665 15.834 17.0396 15.834 17.4998C15.834 17.9601 16.2071 18.3332 16.6673 18.3332Z"
                                            stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path
                                            d="M0.833984 0.833496H4.16732L6.40065 11.9918C6.47686 12.3755 6.68557 12.7201 6.99027 12.9654C7.29497 13.2107 7.67623 13.341 8.06732 13.3335H16.1673C16.5584 13.341 16.9397 13.2107 17.2444 12.9654C17.5491 12.7201 17.7578 12.3755 17.834 11.9918L19.1673 5.00016H5.00065"
                                            stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1293_6366">
                                            <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </button>
                            <button type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <path
                                        d="M17.3671 3.84172C16.9415 3.41589 16.4361 3.0781 15.8799 2.84763C15.3237 2.61716 14.7275 2.49854 14.1254 2.49854C13.5234 2.49854 12.9272 2.61716 12.371 2.84763C11.8147 3.0781 11.3094 3.41589 10.8838 3.84172L10.0004 4.72506L9.11709 3.84172C8.25735 2.98198 7.09129 2.49898 5.87542 2.49898C4.65956 2.49898 3.4935 2.98198 2.63376 3.84172C1.77401 4.70147 1.29102 5.86753 1.29102 7.08339C1.29102 8.29925 1.77401 9.46531 2.63376 10.3251L3.51709 11.2084L10.0004 17.6917L16.4838 11.2084L17.3671 10.3251C17.7929 9.89943 18.1307 9.39407 18.3612 8.83785C18.5917 8.28164 18.7103 7.68546 18.7103 7.08339C18.7103 6.48132 18.5917 5.88514 18.3612 5.32893C18.1307 4.77271 17.7929 4.26735 17.3671 3.84172Z"
                                        stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </button>
                            <button type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <path
                                        d="M0.833008 10.0002C0.833008 10.0002 4.16634 3.3335 9.99967 3.3335C15.833 3.3335 19.1663 10.0002 19.1663 10.0002C19.1663 10.0002 15.833 16.6668 9.99967 16.6668C4.16634 16.6668 0.833008 10.0002 0.833008 10.0002Z"
                                        stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path
                                        d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
                                        stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </button>
                            <button type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <path
                                        d="M16.0413 6.25C15.323 6.25 14.6342 5.96466 14.1263 5.45675C13.6183 4.94884 13.333 4.25996 13.333 3.54167C13.333 2.82337 13.6183 2.1345 14.1263 1.62659C14.6342 1.11867 15.323 0.833334 16.0413 0.833334C16.7596 0.833334 17.4485 1.11867 17.9564 1.62659C18.4643 2.1345 18.7497 2.82337 18.7497 3.54167C18.7497 4.25996 18.4643 4.94884 17.9564 5.45675C17.4485 5.96466 16.7596 6.25 16.0413 6.25ZM14.583 3.54167C14.5831 3.73323 14.6208 3.92291 14.6942 4.09987C14.7676 4.27684 14.8751 4.43762 15.0106 4.57304C15.1461 4.70846 15.3069 4.81586 15.4839 4.88912C15.6609 4.96238 15.8506 5.00005 16.0422 5C16.2337 4.99995 16.4234 4.96216 16.6004 4.8888C16.7773 4.81544 16.9381 4.70794 17.0735 4.57245C17.209 4.43695 17.3164 4.27611 17.3896 4.09911C17.4629 3.9221 17.5006 3.7324 17.5005 3.54083C17.5004 3.15395 17.3466 2.78295 17.073 2.50946C16.7993 2.23597 16.4282 2.08239 16.0413 2.0825C15.6545 2.08261 15.2835 2.23641 15.01 2.51005C14.7365 2.7837 14.5829 3.15478 14.583 3.54167Z"
                                        fill="#1A1A1A" />
                                    <path
                                        d="M1.43333 8.41234C1.55052 8.2953 1.70937 8.22955 1.875 8.22955C2.04063 8.22955 2.19948 8.2953 2.31667 8.41234L3.33333 9.429L3.33333 6.0415C3.33333 5.2127 3.66257 4.41785 4.24862 3.83179C4.83468 3.24574 5.62953 2.9165 6.45833 2.9165H13.75C13.9158 2.9165 14.0747 2.98235 14.1919 3.09956C14.3092 3.21677 14.375 3.37574 14.375 3.5415C14.375 3.70726 14.3092 3.86624 14.1919 3.98345C14.0747 4.10066 13.9158 4.1665 13.75 4.1665H6.45833C6.2121 4.1665 5.96829 4.215 5.7408 4.30923C5.51332 4.40346 5.30662 4.54157 5.13251 4.71568C4.9584 4.88979 4.82029 5.09649 4.72606 5.32397C4.63183 5.55146 4.58333 5.79528 4.58333 6.0415L4.58333 9.42817L5.6 8.4115C5.71793 8.29771 5.87584 8.23479 6.03971 8.23629C6.20358 8.23779 6.36031 8.30359 6.47614 8.41953C6.59196 8.53546 6.65762 8.69225 6.65896 8.85613C6.66031 9.02 6.59724 9.17785 6.48333 9.29567L4.4 11.379C4.28281 11.496 4.12396 11.5618 3.95833 11.5618C3.79271 11.5618 3.63385 11.496 3.51667 11.379L1.43333 9.29567C1.31629 9.17848 1.25055 9.01963 1.25055 8.854C1.25055 8.68838 1.31629 8.52953 1.43333 8.41234ZM3.95833 13.7498C4.67663 13.7498 5.3655 14.0352 5.87341 14.5431C6.38133 15.051 6.66667 15.7399 6.66667 16.4582C6.66667 17.1765 6.38133 17.8653 5.87341 18.3733C5.3655 18.8812 4.67663 19.1665 3.95833 19.1665C3.24004 19.1665 2.55116 18.8812 2.04325 18.3733C1.53534 17.8653 1.25 17.1765 1.25 16.4582C1.25 15.7399 1.53534 15.051 2.04325 14.5431C2.55116 14.0352 3.24004 13.7498 3.95833 13.7498ZM5.41667 16.4582C5.41656 16.0713 5.26276 15.7003 4.98911 15.4268C4.71547 15.1533 4.34438 14.9997 3.9575 14.9998C3.57062 14.9999 3.19962 15.1537 2.92613 15.4274C2.65264 15.701 2.49906 16.0721 2.49917 16.459C2.49922 16.6506 2.53701 16.8402 2.61037 17.0172C2.68373 17.1942 2.79122 17.355 2.92672 17.4904C3.20037 17.7639 3.57145 17.9174 3.95833 17.9173C4.34522 17.9172 4.71621 17.7634 4.9897 17.4898C5.26319 17.2161 5.41678 16.8451 5.41667 16.4582Z"
                                        fill="#1A1A1A" />
                                    <path
                                        d="M18.5667 11.5877C18.4495 11.7047 18.2906 11.7704 18.125 11.7704C17.9594 11.7704 17.8005 11.7047 17.6833 11.5877L16.6667 10.571V13.9585C16.6667 14.7873 16.3374 15.5822 15.7514 16.1682C15.1653 16.7543 14.3705 17.0835 13.5417 17.0835H6.25C6.08424 17.0835 5.92527 17.0176 5.80806 16.9004C5.69085 16.7832 5.625 16.6243 5.625 16.4585C5.625 16.2927 5.69085 16.1338 5.80806 16.0166C5.92527 15.8993 6.08424 15.8335 6.25 15.8335H13.5417C14.0389 15.8335 14.5159 15.636 14.8675 15.2843C15.2191 14.9327 15.4167 14.4558 15.4167 13.9585V10.5718L14.4 11.5885C14.3231 11.6688 14.2262 11.7271 14.1192 11.7573C14.0122 11.7875 13.899 11.7886 13.7915 11.7604C13.684 11.7321 13.5859 11.6757 13.5076 11.5968C13.4292 11.5179 13.3734 11.4195 13.3458 11.3118C13.3179 11.2045 13.3189 11.0917 13.3489 10.9849C13.379 10.8782 13.4369 10.7813 13.5167 10.7043L15.6 8.621C15.7172 8.50395 15.876 8.43821 16.0417 8.43821C16.2073 8.43821 16.3661 8.50395 16.4833 8.621L18.5667 10.7043C18.6837 10.8215 18.7495 10.9804 18.7495 11.146C18.7495 11.3116 18.6837 11.4705 18.5667 11.5877Z"
                                        fill="#1A1A1A" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="row_item">
                    <div class="position-relative overflow-hidden prd_card br_5 bxy_gl bs_15 tbs_tb_3 hover">
                        <a href="#" class="d-block">
                            <div class="position-relative d-flex justify-content-center align-items-center img_box">
                                <img src="./assets/images/prd-img-2.png" alt="thumb" class="w-100">
                                <div class="position-absolute sold_smg_box d-none">
                                    <h4 class="fw_6 fs_20 lh_29 fc_red text-center text-uppercase">sold out</h4>
                                </div>
                                <div class="position-absolute disc_box bg_red d-none">
                                    <span class="fs_14 lh_20 fc_white">25%</span>
                                    <div class="position-absolute triangle_topleft"></div>
                                </div>
                            </div>
                            <div class="content text-center">
                                <h6 class="mb-0 mb-md-3 fw_4 fs_17 lh_22 fc_black">Paket Aksesoris Resmi New Honda CB
                                    150R
                                    StreetFire – Red</h6>
                                <div class="rate_wrapper">
                                    <div class="rating rating_16"></div>
                                </div>
                                <h5
                                    class="d-flex justify-content-center align-items-center gap-2 gap-md-4 pt-0 pt-md-3 fs_18 lh_22 fc_black">
                                    <span>BDT 2,175</span>
                                </h5>
                            </div>
                        </a>
                        <div class="position-absolute d-flex group_buttons br_5">
                            <button type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <g clip-path="url(#clip0_1293_6366)">
                                        <path
                                            d="M7.49935 18.3332C7.95959 18.3332 8.33268 17.9601 8.33268 17.4998C8.33268 17.0396 7.95959 16.6665 7.49935 16.6665C7.03911 16.6665 6.66602 17.0396 6.66602 17.4998C6.66602 17.9601 7.03911 18.3332 7.49935 18.3332Z"
                                            stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path
                                            d="M16.6673 18.3332C17.1276 18.3332 17.5007 17.9601 17.5007 17.4998C17.5007 17.0396 17.1276 16.6665 16.6673 16.6665C16.2071 16.6665 15.834 17.0396 15.834 17.4998C15.834 17.9601 16.2071 18.3332 16.6673 18.3332Z"
                                            stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path
                                            d="M0.833984 0.833496H4.16732L6.40065 11.9918C6.47686 12.3755 6.68557 12.7201 6.99027 12.9654C7.29497 13.2107 7.67623 13.341 8.06732 13.3335H16.1673C16.5584 13.341 16.9397 13.2107 17.2444 12.9654C17.5491 12.7201 17.7578 12.3755 17.834 11.9918L19.1673 5.00016H5.00065"
                                            stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1293_6366">
                                            <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </button>
                            <button type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <path
                                        d="M17.3671 3.84172C16.9415 3.41589 16.4361 3.0781 15.8799 2.84763C15.3237 2.61716 14.7275 2.49854 14.1254 2.49854C13.5234 2.49854 12.9272 2.61716 12.371 2.84763C11.8147 3.0781 11.3094 3.41589 10.8838 3.84172L10.0004 4.72506L9.11709 3.84172C8.25735 2.98198 7.09129 2.49898 5.87542 2.49898C4.65956 2.49898 3.4935 2.98198 2.63376 3.84172C1.77401 4.70147 1.29102 5.86753 1.29102 7.08339C1.29102 8.29925 1.77401 9.46531 2.63376 10.3251L3.51709 11.2084L10.0004 17.6917L16.4838 11.2084L17.3671 10.3251C17.7929 9.89943 18.1307 9.39407 18.3612 8.83785C18.5917 8.28164 18.7103 7.68546 18.7103 7.08339C18.7103 6.48132 18.5917 5.88514 18.3612 5.32893C18.1307 4.77271 17.7929 4.26735 17.3671 3.84172Z"
                                        stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </button>
                            <button type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <path
                                        d="M0.833008 10.0002C0.833008 10.0002 4.16634 3.3335 9.99967 3.3335C15.833 3.3335 19.1663 10.0002 19.1663 10.0002C19.1663 10.0002 15.833 16.6668 9.99967 16.6668C4.16634 16.6668 0.833008 10.0002 0.833008 10.0002Z"
                                        stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path
                                        d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
                                        stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </button>
                            <button type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <path
                                        d="M16.0413 6.25C15.323 6.25 14.6342 5.96466 14.1263 5.45675C13.6183 4.94884 13.333 4.25996 13.333 3.54167C13.333 2.82337 13.6183 2.1345 14.1263 1.62659C14.6342 1.11867 15.323 0.833334 16.0413 0.833334C16.7596 0.833334 17.4485 1.11867 17.9564 1.62659C18.4643 2.1345 18.7497 2.82337 18.7497 3.54167C18.7497 4.25996 18.4643 4.94884 17.9564 5.45675C17.4485 5.96466 16.7596 6.25 16.0413 6.25ZM14.583 3.54167C14.5831 3.73323 14.6208 3.92291 14.6942 4.09987C14.7676 4.27684 14.8751 4.43762 15.0106 4.57304C15.1461 4.70846 15.3069 4.81586 15.4839 4.88912C15.6609 4.96238 15.8506 5.00005 16.0422 5C16.2337 4.99995 16.4234 4.96216 16.6004 4.8888C16.7773 4.81544 16.9381 4.70794 17.0735 4.57245C17.209 4.43695 17.3164 4.27611 17.3896 4.09911C17.4629 3.9221 17.5006 3.7324 17.5005 3.54083C17.5004 3.15395 17.3466 2.78295 17.073 2.50946C16.7993 2.23597 16.4282 2.08239 16.0413 2.0825C15.6545 2.08261 15.2835 2.23641 15.01 2.51005C14.7365 2.7837 14.5829 3.15478 14.583 3.54167Z"
                                        fill="#1A1A1A" />
                                    <path
                                        d="M1.43333 8.41234C1.55052 8.2953 1.70937 8.22955 1.875 8.22955C2.04063 8.22955 2.19948 8.2953 2.31667 8.41234L3.33333 9.429L3.33333 6.0415C3.33333 5.2127 3.66257 4.41785 4.24862 3.83179C4.83468 3.24574 5.62953 2.9165 6.45833 2.9165H13.75C13.9158 2.9165 14.0747 2.98235 14.1919 3.09956C14.3092 3.21677 14.375 3.37574 14.375 3.5415C14.375 3.70726 14.3092 3.86624 14.1919 3.98345C14.0747 4.10066 13.9158 4.1665 13.75 4.1665H6.45833C6.2121 4.1665 5.96829 4.215 5.7408 4.30923C5.51332 4.40346 5.30662 4.54157 5.13251 4.71568C4.9584 4.88979 4.82029 5.09649 4.72606 5.32397C4.63183 5.55146 4.58333 5.79528 4.58333 6.0415L4.58333 9.42817L5.6 8.4115C5.71793 8.29771 5.87584 8.23479 6.03971 8.23629C6.20358 8.23779 6.36031 8.30359 6.47614 8.41953C6.59196 8.53546 6.65762 8.69225 6.65896 8.85613C6.66031 9.02 6.59724 9.17785 6.48333 9.29567L4.4 11.379C4.28281 11.496 4.12396 11.5618 3.95833 11.5618C3.79271 11.5618 3.63385 11.496 3.51667 11.379L1.43333 9.29567C1.31629 9.17848 1.25055 9.01963 1.25055 8.854C1.25055 8.68838 1.31629 8.52953 1.43333 8.41234ZM3.95833 13.7498C4.67663 13.7498 5.3655 14.0352 5.87341 14.5431C6.38133 15.051 6.66667 15.7399 6.66667 16.4582C6.66667 17.1765 6.38133 17.8653 5.87341 18.3733C5.3655 18.8812 4.67663 19.1665 3.95833 19.1665C3.24004 19.1665 2.55116 18.8812 2.04325 18.3733C1.53534 17.8653 1.25 17.1765 1.25 16.4582C1.25 15.7399 1.53534 15.051 2.04325 14.5431C2.55116 14.0352 3.24004 13.7498 3.95833 13.7498ZM5.41667 16.4582C5.41656 16.0713 5.26276 15.7003 4.98911 15.4268C4.71547 15.1533 4.34438 14.9997 3.9575 14.9998C3.57062 14.9999 3.19962 15.1537 2.92613 15.4274C2.65264 15.701 2.49906 16.0721 2.49917 16.459C2.49922 16.6506 2.53701 16.8402 2.61037 17.0172C2.68373 17.1942 2.79122 17.355 2.92672 17.4904C3.20037 17.7639 3.57145 17.9174 3.95833 17.9173C4.34522 17.9172 4.71621 17.7634 4.9897 17.4898C5.26319 17.2161 5.41678 16.8451 5.41667 16.4582Z"
                                        fill="#1A1A1A" />
                                    <path
                                        d="M18.5667 11.5877C18.4495 11.7047 18.2906 11.7704 18.125 11.7704C17.9594 11.7704 17.8005 11.7047 17.6833 11.5877L16.6667 10.571V13.9585C16.6667 14.7873 16.3374 15.5822 15.7514 16.1682C15.1653 16.7543 14.3705 17.0835 13.5417 17.0835H6.25C6.08424 17.0835 5.92527 17.0176 5.80806 16.9004C5.69085 16.7832 5.625 16.6243 5.625 16.4585C5.625 16.2927 5.69085 16.1338 5.80806 16.0166C5.92527 15.8993 6.08424 15.8335 6.25 15.8335H13.5417C14.0389 15.8335 14.5159 15.636 14.8675 15.2843C15.2191 14.9327 15.4167 14.4558 15.4167 13.9585V10.5718L14.4 11.5885C14.3231 11.6688 14.2262 11.7271 14.1192 11.7573C14.0122 11.7875 13.899 11.7886 13.7915 11.7604C13.684 11.7321 13.5859 11.6757 13.5076 11.5968C13.4292 11.5179 13.3734 11.4195 13.3458 11.3118C13.3179 11.2045 13.3189 11.0917 13.3489 10.9849C13.379 10.8782 13.4369 10.7813 13.5167 10.7043L15.6 8.621C15.7172 8.50395 15.876 8.43821 16.0417 8.43821C16.2073 8.43821 16.3661 8.50395 16.4833 8.621L18.5667 10.7043C18.6837 10.8215 18.7495 10.9804 18.7495 11.146C18.7495 11.3116 18.6837 11.4705 18.5667 11.5877Z"
                                        fill="#1A1A1A" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="row_item">
                    <div class="position-relative overflow-hidden prd_card br_5 bxy_gl bs_15 tbs_tb_3 hover">
                        <a href="#" class="d-block">
                            <div class="position-relative d-flex justify-content-center align-items-center img_box">
                                <img src="./assets/images/prd-img-1.png" alt="thumb" class="w-100">
                                <div class="position-absolute sold_smg_box d-none">
                                    <h4 class="fw_6 fs_20 lh_29 fc_red text-center text-uppercase">sold out</h4>
                                </div>
                                <div class="position-absolute disc_box bg_red d-none">
                                    <span class="fs_14 lh_20 fc_white">25%</span>
                                    <div class="position-absolute triangle_topleft"></div>
                                </div>
                            </div>
                            <div class="content text-center">
                                <h6 class="mb-0 mb-md-3 fw_4 fs_17 lh_22 fc_black">Paket Aksesoris Resmi New Honda CB
                                    150R
                                    StreetFire – Red</h6>
                                <div class="rate_wrapper">
                                    <div class="rating rating_16"></div>
                                </div>
                                <h5
                                    class="d-flex justify-content-center align-items-center gap-2 gap-md-4 pt-0 pt-md-3 fs_18 lh_22 fc_black">
                                    <span>BDT 2,175</span>
                                </h5>
                            </div>
                        </a>
                        <div class="position-absolute d-flex group_buttons br_5">
                            <button type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <g clip-path="url(#clip0_1293_6366)">
                                        <path
                                            d="M7.49935 18.3332C7.95959 18.3332 8.33268 17.9601 8.33268 17.4998C8.33268 17.0396 7.95959 16.6665 7.49935 16.6665C7.03911 16.6665 6.66602 17.0396 6.66602 17.4998C6.66602 17.9601 7.03911 18.3332 7.49935 18.3332Z"
                                            stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path
                                            d="M16.6673 18.3332C17.1276 18.3332 17.5007 17.9601 17.5007 17.4998C17.5007 17.0396 17.1276 16.6665 16.6673 16.6665C16.2071 16.6665 15.834 17.0396 15.834 17.4998C15.834 17.9601 16.2071 18.3332 16.6673 18.3332Z"
                                            stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path
                                            d="M0.833984 0.833496H4.16732L6.40065 11.9918C6.47686 12.3755 6.68557 12.7201 6.99027 12.9654C7.29497 13.2107 7.67623 13.341 8.06732 13.3335H16.1673C16.5584 13.341 16.9397 13.2107 17.2444 12.9654C17.5491 12.7201 17.7578 12.3755 17.834 11.9918L19.1673 5.00016H5.00065"
                                            stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1293_6366">
                                            <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </button>
                            <button type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <path
                                        d="M17.3671 3.84172C16.9415 3.41589 16.4361 3.0781 15.8799 2.84763C15.3237 2.61716 14.7275 2.49854 14.1254 2.49854C13.5234 2.49854 12.9272 2.61716 12.371 2.84763C11.8147 3.0781 11.3094 3.41589 10.8838 3.84172L10.0004 4.72506L9.11709 3.84172C8.25735 2.98198 7.09129 2.49898 5.87542 2.49898C4.65956 2.49898 3.4935 2.98198 2.63376 3.84172C1.77401 4.70147 1.29102 5.86753 1.29102 7.08339C1.29102 8.29925 1.77401 9.46531 2.63376 10.3251L3.51709 11.2084L10.0004 17.6917L16.4838 11.2084L17.3671 10.3251C17.7929 9.89943 18.1307 9.39407 18.3612 8.83785C18.5917 8.28164 18.7103 7.68546 18.7103 7.08339C18.7103 6.48132 18.5917 5.88514 18.3612 5.32893C18.1307 4.77271 17.7929 4.26735 17.3671 3.84172Z"
                                        stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </button>
                            <button type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <path
                                        d="M0.833008 10.0002C0.833008 10.0002 4.16634 3.3335 9.99967 3.3335C15.833 3.3335 19.1663 10.0002 19.1663 10.0002C19.1663 10.0002 15.833 16.6668 9.99967 16.6668C4.16634 16.6668 0.833008 10.0002 0.833008 10.0002Z"
                                        stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path
                                        d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
                                        stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </button>
                            <button type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <path
                                        d="M16.0413 6.25C15.323 6.25 14.6342 5.96466 14.1263 5.45675C13.6183 4.94884 13.333 4.25996 13.333 3.54167C13.333 2.82337 13.6183 2.1345 14.1263 1.62659C14.6342 1.11867 15.323 0.833334 16.0413 0.833334C16.7596 0.833334 17.4485 1.11867 17.9564 1.62659C18.4643 2.1345 18.7497 2.82337 18.7497 3.54167C18.7497 4.25996 18.4643 4.94884 17.9564 5.45675C17.4485 5.96466 16.7596 6.25 16.0413 6.25ZM14.583 3.54167C14.5831 3.73323 14.6208 3.92291 14.6942 4.09987C14.7676 4.27684 14.8751 4.43762 15.0106 4.57304C15.1461 4.70846 15.3069 4.81586 15.4839 4.88912C15.6609 4.96238 15.8506 5.00005 16.0422 5C16.2337 4.99995 16.4234 4.96216 16.6004 4.8888C16.7773 4.81544 16.9381 4.70794 17.0735 4.57245C17.209 4.43695 17.3164 4.27611 17.3896 4.09911C17.4629 3.9221 17.5006 3.7324 17.5005 3.54083C17.5004 3.15395 17.3466 2.78295 17.073 2.50946C16.7993 2.23597 16.4282 2.08239 16.0413 2.0825C15.6545 2.08261 15.2835 2.23641 15.01 2.51005C14.7365 2.7837 14.5829 3.15478 14.583 3.54167Z"
                                        fill="#1A1A1A" />
                                    <path
                                        d="M1.43333 8.41234C1.55052 8.2953 1.70937 8.22955 1.875 8.22955C2.04063 8.22955 2.19948 8.2953 2.31667 8.41234L3.33333 9.429L3.33333 6.0415C3.33333 5.2127 3.66257 4.41785 4.24862 3.83179C4.83468 3.24574 5.62953 2.9165 6.45833 2.9165H13.75C13.9158 2.9165 14.0747 2.98235 14.1919 3.09956C14.3092 3.21677 14.375 3.37574 14.375 3.5415C14.375 3.70726 14.3092 3.86624 14.1919 3.98345C14.0747 4.10066 13.9158 4.1665 13.75 4.1665H6.45833C6.2121 4.1665 5.96829 4.215 5.7408 4.30923C5.51332 4.40346 5.30662 4.54157 5.13251 4.71568C4.9584 4.88979 4.82029 5.09649 4.72606 5.32397C4.63183 5.55146 4.58333 5.79528 4.58333 6.0415L4.58333 9.42817L5.6 8.4115C5.71793 8.29771 5.87584 8.23479 6.03971 8.23629C6.20358 8.23779 6.36031 8.30359 6.47614 8.41953C6.59196 8.53546 6.65762 8.69225 6.65896 8.85613C6.66031 9.02 6.59724 9.17785 6.48333 9.29567L4.4 11.379C4.28281 11.496 4.12396 11.5618 3.95833 11.5618C3.79271 11.5618 3.63385 11.496 3.51667 11.379L1.43333 9.29567C1.31629 9.17848 1.25055 9.01963 1.25055 8.854C1.25055 8.68838 1.31629 8.52953 1.43333 8.41234ZM3.95833 13.7498C4.67663 13.7498 5.3655 14.0352 5.87341 14.5431C6.38133 15.051 6.66667 15.7399 6.66667 16.4582C6.66667 17.1765 6.38133 17.8653 5.87341 18.3733C5.3655 18.8812 4.67663 19.1665 3.95833 19.1665C3.24004 19.1665 2.55116 18.8812 2.04325 18.3733C1.53534 17.8653 1.25 17.1765 1.25 16.4582C1.25 15.7399 1.53534 15.051 2.04325 14.5431C2.55116 14.0352 3.24004 13.7498 3.95833 13.7498ZM5.41667 16.4582C5.41656 16.0713 5.26276 15.7003 4.98911 15.4268C4.71547 15.1533 4.34438 14.9997 3.9575 14.9998C3.57062 14.9999 3.19962 15.1537 2.92613 15.4274C2.65264 15.701 2.49906 16.0721 2.49917 16.459C2.49922 16.6506 2.53701 16.8402 2.61037 17.0172C2.68373 17.1942 2.79122 17.355 2.92672 17.4904C3.20037 17.7639 3.57145 17.9174 3.95833 17.9173C4.34522 17.9172 4.71621 17.7634 4.9897 17.4898C5.26319 17.2161 5.41678 16.8451 5.41667 16.4582Z"
                                        fill="#1A1A1A" />
                                    <path
                                        d="M18.5667 11.5877C18.4495 11.7047 18.2906 11.7704 18.125 11.7704C17.9594 11.7704 17.8005 11.7047 17.6833 11.5877L16.6667 10.571V13.9585C16.6667 14.7873 16.3374 15.5822 15.7514 16.1682C15.1653 16.7543 14.3705 17.0835 13.5417 17.0835H6.25C6.08424 17.0835 5.92527 17.0176 5.80806 16.9004C5.69085 16.7832 5.625 16.6243 5.625 16.4585C5.625 16.2927 5.69085 16.1338 5.80806 16.0166C5.92527 15.8993 6.08424 15.8335 6.25 15.8335H13.5417C14.0389 15.8335 14.5159 15.636 14.8675 15.2843C15.2191 14.9327 15.4167 14.4558 15.4167 13.9585V10.5718L14.4 11.5885C14.3231 11.6688 14.2262 11.7271 14.1192 11.7573C14.0122 11.7875 13.899 11.7886 13.7915 11.7604C13.684 11.7321 13.5859 11.6757 13.5076 11.5968C13.4292 11.5179 13.3734 11.4195 13.3458 11.3118C13.3179 11.2045 13.3189 11.0917 13.3489 10.9849C13.379 10.8782 13.4369 10.7813 13.5167 10.7043L15.6 8.621C15.7172 8.50395 15.876 8.43821 16.0417 8.43821C16.2073 8.43821 16.3661 8.50395 16.4833 8.621L18.5667 10.7043C18.6837 10.8215 18.7495 10.9804 18.7495 11.146C18.7495 11.3116 18.6837 11.4705 18.5667 11.5877Z"
                                        fill="#1A1A1A" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="row_item">
                    <div class="position-relative overflow-hidden prd_card br_5 bxy_gl bs_15 tbs_tb_3 hover">
                        <a href="#" class="d-block">
                            <div class="position-relative d-flex justify-content-center align-items-center img_box">
                                <img src="./assets/images/prd-img-2.png" alt="thumb" class="w-100">
                                <div class="position-absolute sold_smg_box d-none">
                                    <h4 class="fw_6 fs_20 lh_29 fc_red text-center text-uppercase">sold out</h4>
                                </div>
                                <div class="position-absolute disc_box bg_red">
                                    <span class="fs_14 lh_20 fc_white">25%</span>
                                    <div class="position-absolute triangle_topleft"></div>
                                </div>
                            </div>
                            <div class="content text-center">
                                <h6 class="mb-0 mb-md-3 fw_4 fs_17 lh_22 fc_black">Paket Aksesoris Resmi New Honda CB
                                    150R
                                    StreetFire – Red</h6>
                                <div class="rate_wrapper">
                                    <div class="rating rating_16"></div>
                                </div>
                                <h5
                                    class="d-flex justify-content-center align-items-center gap-2 gap-md-4 pt-0 pt-md-3 fs_18 lh_22 fc_black">
                                    <span class="fc_gl text-decoration-line-through">BDT 2,900</span>
                                    <span>BDT 2,175</span>
                                </h5>
                            </div>
                        </a>
                        <div class="position-absolute d-flex group_buttons br_5">
                            <button type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <g clip-path="url(#clip0_1293_6366)">
                                        <path
                                            d="M7.49935 18.3332C7.95959 18.3332 8.33268 17.9601 8.33268 17.4998C8.33268 17.0396 7.95959 16.6665 7.49935 16.6665C7.03911 16.6665 6.66602 17.0396 6.66602 17.4998C6.66602 17.9601 7.03911 18.3332 7.49935 18.3332Z"
                                            stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path
                                            d="M16.6673 18.3332C17.1276 18.3332 17.5007 17.9601 17.5007 17.4998C17.5007 17.0396 17.1276 16.6665 16.6673 16.6665C16.2071 16.6665 15.834 17.0396 15.834 17.4998C15.834 17.9601 16.2071 18.3332 16.6673 18.3332Z"
                                            stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path
                                            d="M0.833984 0.833496H4.16732L6.40065 11.9918C6.47686 12.3755 6.68557 12.7201 6.99027 12.9654C7.29497 13.2107 7.67623 13.341 8.06732 13.3335H16.1673C16.5584 13.341 16.9397 13.2107 17.2444 12.9654C17.5491 12.7201 17.7578 12.3755 17.834 11.9918L19.1673 5.00016H5.00065"
                                            stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1293_6366">
                                            <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </button>
                            <button type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <path
                                        d="M17.3671 3.84172C16.9415 3.41589 16.4361 3.0781 15.8799 2.84763C15.3237 2.61716 14.7275 2.49854 14.1254 2.49854C13.5234 2.49854 12.9272 2.61716 12.371 2.84763C11.8147 3.0781 11.3094 3.41589 10.8838 3.84172L10.0004 4.72506L9.11709 3.84172C8.25735 2.98198 7.09129 2.49898 5.87542 2.49898C4.65956 2.49898 3.4935 2.98198 2.63376 3.84172C1.77401 4.70147 1.29102 5.86753 1.29102 7.08339C1.29102 8.29925 1.77401 9.46531 2.63376 10.3251L3.51709 11.2084L10.0004 17.6917L16.4838 11.2084L17.3671 10.3251C17.7929 9.89943 18.1307 9.39407 18.3612 8.83785C18.5917 8.28164 18.7103 7.68546 18.7103 7.08339C18.7103 6.48132 18.5917 5.88514 18.3612 5.32893C18.1307 4.77271 17.7929 4.26735 17.3671 3.84172Z"
                                        stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </button>
                            <button type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <path
                                        d="M0.833008 10.0002C0.833008 10.0002 4.16634 3.3335 9.99967 3.3335C15.833 3.3335 19.1663 10.0002 19.1663 10.0002C19.1663 10.0002 15.833 16.6668 9.99967 16.6668C4.16634 16.6668 0.833008 10.0002 0.833008 10.0002Z"
                                        stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path
                                        d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
                                        stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </button>
                            <button type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <path
                                        d="M16.0413 6.25C15.323 6.25 14.6342 5.96466 14.1263 5.45675C13.6183 4.94884 13.333 4.25996 13.333 3.54167C13.333 2.82337 13.6183 2.1345 14.1263 1.62659C14.6342 1.11867 15.323 0.833334 16.0413 0.833334C16.7596 0.833334 17.4485 1.11867 17.9564 1.62659C18.4643 2.1345 18.7497 2.82337 18.7497 3.54167C18.7497 4.25996 18.4643 4.94884 17.9564 5.45675C17.4485 5.96466 16.7596 6.25 16.0413 6.25ZM14.583 3.54167C14.5831 3.73323 14.6208 3.92291 14.6942 4.09987C14.7676 4.27684 14.8751 4.43762 15.0106 4.57304C15.1461 4.70846 15.3069 4.81586 15.4839 4.88912C15.6609 4.96238 15.8506 5.00005 16.0422 5C16.2337 4.99995 16.4234 4.96216 16.6004 4.8888C16.7773 4.81544 16.9381 4.70794 17.0735 4.57245C17.209 4.43695 17.3164 4.27611 17.3896 4.09911C17.4629 3.9221 17.5006 3.7324 17.5005 3.54083C17.5004 3.15395 17.3466 2.78295 17.073 2.50946C16.7993 2.23597 16.4282 2.08239 16.0413 2.0825C15.6545 2.08261 15.2835 2.23641 15.01 2.51005C14.7365 2.7837 14.5829 3.15478 14.583 3.54167Z"
                                        fill="#1A1A1A" />
                                    <path
                                        d="M1.43333 8.41234C1.55052 8.2953 1.70937 8.22955 1.875 8.22955C2.04063 8.22955 2.19948 8.2953 2.31667 8.41234L3.33333 9.429L3.33333 6.0415C3.33333 5.2127 3.66257 4.41785 4.24862 3.83179C4.83468 3.24574 5.62953 2.9165 6.45833 2.9165H13.75C13.9158 2.9165 14.0747 2.98235 14.1919 3.09956C14.3092 3.21677 14.375 3.37574 14.375 3.5415C14.375 3.70726 14.3092 3.86624 14.1919 3.98345C14.0747 4.10066 13.9158 4.1665 13.75 4.1665H6.45833C6.2121 4.1665 5.96829 4.215 5.7408 4.30923C5.51332 4.40346 5.30662 4.54157 5.13251 4.71568C4.9584 4.88979 4.82029 5.09649 4.72606 5.32397C4.63183 5.55146 4.58333 5.79528 4.58333 6.0415L4.58333 9.42817L5.6 8.4115C5.71793 8.29771 5.87584 8.23479 6.03971 8.23629C6.20358 8.23779 6.36031 8.30359 6.47614 8.41953C6.59196 8.53546 6.65762 8.69225 6.65896 8.85613C6.66031 9.02 6.59724 9.17785 6.48333 9.29567L4.4 11.379C4.28281 11.496 4.12396 11.5618 3.95833 11.5618C3.79271 11.5618 3.63385 11.496 3.51667 11.379L1.43333 9.29567C1.31629 9.17848 1.25055 9.01963 1.25055 8.854C1.25055 8.68838 1.31629 8.52953 1.43333 8.41234ZM3.95833 13.7498C4.67663 13.7498 5.3655 14.0352 5.87341 14.5431C6.38133 15.051 6.66667 15.7399 6.66667 16.4582C6.66667 17.1765 6.38133 17.8653 5.87341 18.3733C5.3655 18.8812 4.67663 19.1665 3.95833 19.1665C3.24004 19.1665 2.55116 18.8812 2.04325 18.3733C1.53534 17.8653 1.25 17.1765 1.25 16.4582C1.25 15.7399 1.53534 15.051 2.04325 14.5431C2.55116 14.0352 3.24004 13.7498 3.95833 13.7498ZM5.41667 16.4582C5.41656 16.0713 5.26276 15.7003 4.98911 15.4268C4.71547 15.1533 4.34438 14.9997 3.9575 14.9998C3.57062 14.9999 3.19962 15.1537 2.92613 15.4274C2.65264 15.701 2.49906 16.0721 2.49917 16.459C2.49922 16.6506 2.53701 16.8402 2.61037 17.0172C2.68373 17.1942 2.79122 17.355 2.92672 17.4904C3.20037 17.7639 3.57145 17.9174 3.95833 17.9173C4.34522 17.9172 4.71621 17.7634 4.9897 17.4898C5.26319 17.2161 5.41678 16.8451 5.41667 16.4582Z"
                                        fill="#1A1A1A" />
                                    <path
                                        d="M18.5667 11.5877C18.4495 11.7047 18.2906 11.7704 18.125 11.7704C17.9594 11.7704 17.8005 11.7047 17.6833 11.5877L16.6667 10.571V13.9585C16.6667 14.7873 16.3374 15.5822 15.7514 16.1682C15.1653 16.7543 14.3705 17.0835 13.5417 17.0835H6.25C6.08424 17.0835 5.92527 17.0176 5.80806 16.9004C5.69085 16.7832 5.625 16.6243 5.625 16.4585C5.625 16.2927 5.69085 16.1338 5.80806 16.0166C5.92527 15.8993 6.08424 15.8335 6.25 15.8335H13.5417C14.0389 15.8335 14.5159 15.636 14.8675 15.2843C15.2191 14.9327 15.4167 14.4558 15.4167 13.9585V10.5718L14.4 11.5885C14.3231 11.6688 14.2262 11.7271 14.1192 11.7573C14.0122 11.7875 13.899 11.7886 13.7915 11.7604C13.684 11.7321 13.5859 11.6757 13.5076 11.5968C13.4292 11.5179 13.3734 11.4195 13.3458 11.3118C13.3179 11.2045 13.3189 11.0917 13.3489 10.9849C13.379 10.8782 13.4369 10.7813 13.5167 10.7043L15.6 8.621C15.7172 8.50395 15.876 8.43821 16.0417 8.43821C16.2073 8.43821 16.3661 8.50395 16.4833 8.621L18.5667 10.7043C18.6837 10.8215 18.7495 10.9804 18.7495 11.146C18.7495 11.3116 18.6837 11.4705 18.5667 11.5877Z"
                                        fill="#1A1A1A" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="row_item">
                    <div class="position-relative overflow-hidden prd_card br_5 bxy_gl bs_15 tbs_tb_3 hover">
                        <a href="#" class="d-block">
                            <div class="position-relative d-flex justify-content-center align-items-center img_box">
                                <img src="./assets/images/prd-img-3.png" alt="thumb" class="w-100">
                                <div class="position-absolute sold_smg_box d-none">
                                    <h4 class="fw_6 fs_20 lh_29 fc_red text-center text-uppercase">sold out</h4>
                                </div>
                                <div class="position-absolute disc_box bg_red d-none">
                                    <span class="fs_14 lh_20 fc_white">25%</span>
                                    <div class="position-absolute triangle_topleft"></div>
                                </div>
                            </div>
                            <div class="content text-center">
                                <h6 class="mb-0 mb-md-3 fw_4 fs_17 lh_22 fc_black">Rubber Step Floor New Vario 125 K60R
                                    & 150
                                    eSP K59J</h6>
                                <div class="rate_wrapper">
                                    <div class="rating rating_16"></div>
                                </div>
                                <h5
                                    class="d-flex justify-content-center align-items-center gap-2 gap-md-4 pt-0 pt-md-3 fs_18 lh_22 fc_black">
                                    <span>BDT 2,175</span>
                                </h5>
                            </div>
                        </a>
                        <div class="position-absolute d-flex group_buttons br_5">
                            <button type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <g clip-path="url(#clip0_1293_6366)">
                                        <path
                                            d="M7.49935 18.3332C7.95959 18.3332 8.33268 17.9601 8.33268 17.4998C8.33268 17.0396 7.95959 16.6665 7.49935 16.6665C7.03911 16.6665 6.66602 17.0396 6.66602 17.4998C6.66602 17.9601 7.03911 18.3332 7.49935 18.3332Z"
                                            stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path
                                            d="M16.6673 18.3332C17.1276 18.3332 17.5007 17.9601 17.5007 17.4998C17.5007 17.0396 17.1276 16.6665 16.6673 16.6665C16.2071 16.6665 15.834 17.0396 15.834 17.4998C15.834 17.9601 16.2071 18.3332 16.6673 18.3332Z"
                                            stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path
                                            d="M0.833984 0.833496H4.16732L6.40065 11.9918C6.47686 12.3755 6.68557 12.7201 6.99027 12.9654C7.29497 13.2107 7.67623 13.341 8.06732 13.3335H16.1673C16.5584 13.341 16.9397 13.2107 17.2444 12.9654C17.5491 12.7201 17.7578 12.3755 17.834 11.9918L19.1673 5.00016H5.00065"
                                            stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1293_6366">
                                            <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </button>
                            <button type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <path
                                        d="M17.3671 3.84172C16.9415 3.41589 16.4361 3.0781 15.8799 2.84763C15.3237 2.61716 14.7275 2.49854 14.1254 2.49854C13.5234 2.49854 12.9272 2.61716 12.371 2.84763C11.8147 3.0781 11.3094 3.41589 10.8838 3.84172L10.0004 4.72506L9.11709 3.84172C8.25735 2.98198 7.09129 2.49898 5.87542 2.49898C4.65956 2.49898 3.4935 2.98198 2.63376 3.84172C1.77401 4.70147 1.29102 5.86753 1.29102 7.08339C1.29102 8.29925 1.77401 9.46531 2.63376 10.3251L3.51709 11.2084L10.0004 17.6917L16.4838 11.2084L17.3671 10.3251C17.7929 9.89943 18.1307 9.39407 18.3612 8.83785C18.5917 8.28164 18.7103 7.68546 18.7103 7.08339C18.7103 6.48132 18.5917 5.88514 18.3612 5.32893C18.1307 4.77271 17.7929 4.26735 17.3671 3.84172Z"
                                        stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </button>
                            <button type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <path
                                        d="M0.833008 10.0002C0.833008 10.0002 4.16634 3.3335 9.99967 3.3335C15.833 3.3335 19.1663 10.0002 19.1663 10.0002C19.1663 10.0002 15.833 16.6668 9.99967 16.6668C4.16634 16.6668 0.833008 10.0002 0.833008 10.0002Z"
                                        stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path
                                        d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
                                        stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </button>
                            <button type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <path
                                        d="M16.0413 6.25C15.323 6.25 14.6342 5.96466 14.1263 5.45675C13.6183 4.94884 13.333 4.25996 13.333 3.54167C13.333 2.82337 13.6183 2.1345 14.1263 1.62659C14.6342 1.11867 15.323 0.833334 16.0413 0.833334C16.7596 0.833334 17.4485 1.11867 17.9564 1.62659C18.4643 2.1345 18.7497 2.82337 18.7497 3.54167C18.7497 4.25996 18.4643 4.94884 17.9564 5.45675C17.4485 5.96466 16.7596 6.25 16.0413 6.25ZM14.583 3.54167C14.5831 3.73323 14.6208 3.92291 14.6942 4.09987C14.7676 4.27684 14.8751 4.43762 15.0106 4.57304C15.1461 4.70846 15.3069 4.81586 15.4839 4.88912C15.6609 4.96238 15.8506 5.00005 16.0422 5C16.2337 4.99995 16.4234 4.96216 16.6004 4.8888C16.7773 4.81544 16.9381 4.70794 17.0735 4.57245C17.209 4.43695 17.3164 4.27611 17.3896 4.09911C17.4629 3.9221 17.5006 3.7324 17.5005 3.54083C17.5004 3.15395 17.3466 2.78295 17.073 2.50946C16.7993 2.23597 16.4282 2.08239 16.0413 2.0825C15.6545 2.08261 15.2835 2.23641 15.01 2.51005C14.7365 2.7837 14.5829 3.15478 14.583 3.54167Z"
                                        fill="#1A1A1A" />
                                    <path
                                        d="M1.43333 8.41234C1.55052 8.2953 1.70937 8.22955 1.875 8.22955C2.04063 8.22955 2.19948 8.2953 2.31667 8.41234L3.33333 9.429L3.33333 6.0415C3.33333 5.2127 3.66257 4.41785 4.24862 3.83179C4.83468 3.24574 5.62953 2.9165 6.45833 2.9165H13.75C13.9158 2.9165 14.0747 2.98235 14.1919 3.09956C14.3092 3.21677 14.375 3.37574 14.375 3.5415C14.375 3.70726 14.3092 3.86624 14.1919 3.98345C14.0747 4.10066 13.9158 4.1665 13.75 4.1665H6.45833C6.2121 4.1665 5.96829 4.215 5.7408 4.30923C5.51332 4.40346 5.30662 4.54157 5.13251 4.71568C4.9584 4.88979 4.82029 5.09649 4.72606 5.32397C4.63183 5.55146 4.58333 5.79528 4.58333 6.0415L4.58333 9.42817L5.6 8.4115C5.71793 8.29771 5.87584 8.23479 6.03971 8.23629C6.20358 8.23779 6.36031 8.30359 6.47614 8.41953C6.59196 8.53546 6.65762 8.69225 6.65896 8.85613C6.66031 9.02 6.59724 9.17785 6.48333 9.29567L4.4 11.379C4.28281 11.496 4.12396 11.5618 3.95833 11.5618C3.79271 11.5618 3.63385 11.496 3.51667 11.379L1.43333 9.29567C1.31629 9.17848 1.25055 9.01963 1.25055 8.854C1.25055 8.68838 1.31629 8.52953 1.43333 8.41234ZM3.95833 13.7498C4.67663 13.7498 5.3655 14.0352 5.87341 14.5431C6.38133 15.051 6.66667 15.7399 6.66667 16.4582C6.66667 17.1765 6.38133 17.8653 5.87341 18.3733C5.3655 18.8812 4.67663 19.1665 3.95833 19.1665C3.24004 19.1665 2.55116 18.8812 2.04325 18.3733C1.53534 17.8653 1.25 17.1765 1.25 16.4582C1.25 15.7399 1.53534 15.051 2.04325 14.5431C2.55116 14.0352 3.24004 13.7498 3.95833 13.7498ZM5.41667 16.4582C5.41656 16.0713 5.26276 15.7003 4.98911 15.4268C4.71547 15.1533 4.34438 14.9997 3.9575 14.9998C3.57062 14.9999 3.19962 15.1537 2.92613 15.4274C2.65264 15.701 2.49906 16.0721 2.49917 16.459C2.49922 16.6506 2.53701 16.8402 2.61037 17.0172C2.68373 17.1942 2.79122 17.355 2.92672 17.4904C3.20037 17.7639 3.57145 17.9174 3.95833 17.9173C4.34522 17.9172 4.71621 17.7634 4.9897 17.4898C5.26319 17.2161 5.41678 16.8451 5.41667 16.4582Z"
                                        fill="#1A1A1A" />
                                    <path
                                        d="M18.5667 11.5877C18.4495 11.7047 18.2906 11.7704 18.125 11.7704C17.9594 11.7704 17.8005 11.7047 17.6833 11.5877L16.6667 10.571V13.9585C16.6667 14.7873 16.3374 15.5822 15.7514 16.1682C15.1653 16.7543 14.3705 17.0835 13.5417 17.0835H6.25C6.08424 17.0835 5.92527 17.0176 5.80806 16.9004C5.69085 16.7832 5.625 16.6243 5.625 16.4585C5.625 16.2927 5.69085 16.1338 5.80806 16.0166C5.92527 15.8993 6.08424 15.8335 6.25 15.8335H13.5417C14.0389 15.8335 14.5159 15.636 14.8675 15.2843C15.2191 14.9327 15.4167 14.4558 15.4167 13.9585V10.5718L14.4 11.5885C14.3231 11.6688 14.2262 11.7271 14.1192 11.7573C14.0122 11.7875 13.899 11.7886 13.7915 11.7604C13.684 11.7321 13.5859 11.6757 13.5076 11.5968C13.4292 11.5179 13.3734 11.4195 13.3458 11.3118C13.3179 11.2045 13.3189 11.0917 13.3489 10.9849C13.379 10.8782 13.4369 10.7813 13.5167 10.7043L15.6 8.621C15.7172 8.50395 15.876 8.43821 16.0417 8.43821C16.2073 8.43821 16.3661 8.50395 16.4833 8.621L18.5667 10.7043C18.6837 10.8215 18.7495 10.9804 18.7495 11.146C18.7495 11.3116 18.6837 11.4705 18.5667 11.5877Z"
                                        fill="#1A1A1A" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="row_item">
                    <div class="position-relative overflow-hidden prd_card br_5 bxy_gl bs_15 tbs_tb_3 hover">
                        <a href="#" class="d-block">
                            <div class="position-relative d-flex justify-content-center align-items-center img_box">
                                <img src="./assets/images/prd-img-1.png" alt="thumb" class="w-100">
                                <div class="position-absolute sold_smg_box d-none">
                                    <h4 class="fw_6 fs_20 lh_29 fc_red text-center text-uppercase">sold out</h4>
                                </div>
                                <div class="position-absolute disc_box bg_red d-none">
                                    <span class="fs_14 lh_20 fc_white">25%</span>
                                    <div class="position-absolute triangle_topleft"></div>
                                </div>
                            </div>
                            <div class="content text-center">
                                <h6 class="mb-0 mb-md-3 fw_4 fs_17 lh_22 fc_black">Paket Aksesoris Resmi New Honda CB
                                    150R
                                    StreetFire – Red</h6>
                                <div class="rate_wrapper">
                                    <div class="rating rating_16"></div>
                                </div>
                                <h5
                                    class="d-flex justify-content-center align-items-center gap-2 gap-md-4 pt-0 pt-md-3 fs_18 lh_22 fc_black">
                                    <span class="fc_gl text-decoration-line-through">BDT 2,900</span>
                                    <span>BDT 2,175</span>
                                </h5>
                            </div>
                        </a>
                        <div class="position-absolute d-flex group_buttons br_5">
                            <button type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <g clip-path="url(#clip0_1293_6366)">
                                        <path
                                            d="M7.49935 18.3332C7.95959 18.3332 8.33268 17.9601 8.33268 17.4998C8.33268 17.0396 7.95959 16.6665 7.49935 16.6665C7.03911 16.6665 6.66602 17.0396 6.66602 17.4998C6.66602 17.9601 7.03911 18.3332 7.49935 18.3332Z"
                                            stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path
                                            d="M16.6673 18.3332C17.1276 18.3332 17.5007 17.9601 17.5007 17.4998C17.5007 17.0396 17.1276 16.6665 16.6673 16.6665C16.2071 16.6665 15.834 17.0396 15.834 17.4998C15.834 17.9601 16.2071 18.3332 16.6673 18.3332Z"
                                            stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path
                                            d="M0.833984 0.833496H4.16732L6.40065 11.9918C6.47686 12.3755 6.68557 12.7201 6.99027 12.9654C7.29497 13.2107 7.67623 13.341 8.06732 13.3335H16.1673C16.5584 13.341 16.9397 13.2107 17.2444 12.9654C17.5491 12.7201 17.7578 12.3755 17.834 11.9918L19.1673 5.00016H5.00065"
                                            stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1293_6366">
                                            <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </button>
                            <button type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <path
                                        d="M17.3671 3.84172C16.9415 3.41589 16.4361 3.0781 15.8799 2.84763C15.3237 2.61716 14.7275 2.49854 14.1254 2.49854C13.5234 2.49854 12.9272 2.61716 12.371 2.84763C11.8147 3.0781 11.3094 3.41589 10.8838 3.84172L10.0004 4.72506L9.11709 3.84172C8.25735 2.98198 7.09129 2.49898 5.87542 2.49898C4.65956 2.49898 3.4935 2.98198 2.63376 3.84172C1.77401 4.70147 1.29102 5.86753 1.29102 7.08339C1.29102 8.29925 1.77401 9.46531 2.63376 10.3251L3.51709 11.2084L10.0004 17.6917L16.4838 11.2084L17.3671 10.3251C17.7929 9.89943 18.1307 9.39407 18.3612 8.83785C18.5917 8.28164 18.7103 7.68546 18.7103 7.08339C18.7103 6.48132 18.5917 5.88514 18.3612 5.32893C18.1307 4.77271 17.7929 4.26735 17.3671 3.84172Z"
                                        stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </button>
                            <button type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <path
                                        d="M0.833008 10.0002C0.833008 10.0002 4.16634 3.3335 9.99967 3.3335C15.833 3.3335 19.1663 10.0002 19.1663 10.0002C19.1663 10.0002 15.833 16.6668 9.99967 16.6668C4.16634 16.6668 0.833008 10.0002 0.833008 10.0002Z"
                                        stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path
                                        d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
                                        stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </button>
                            <button type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <path
                                        d="M16.0413 6.25C15.323 6.25 14.6342 5.96466 14.1263 5.45675C13.6183 4.94884 13.333 4.25996 13.333 3.54167C13.333 2.82337 13.6183 2.1345 14.1263 1.62659C14.6342 1.11867 15.323 0.833334 16.0413 0.833334C16.7596 0.833334 17.4485 1.11867 17.9564 1.62659C18.4643 2.1345 18.7497 2.82337 18.7497 3.54167C18.7497 4.25996 18.4643 4.94884 17.9564 5.45675C17.4485 5.96466 16.7596 6.25 16.0413 6.25ZM14.583 3.54167C14.5831 3.73323 14.6208 3.92291 14.6942 4.09987C14.7676 4.27684 14.8751 4.43762 15.0106 4.57304C15.1461 4.70846 15.3069 4.81586 15.4839 4.88912C15.6609 4.96238 15.8506 5.00005 16.0422 5C16.2337 4.99995 16.4234 4.96216 16.6004 4.8888C16.7773 4.81544 16.9381 4.70794 17.0735 4.57245C17.209 4.43695 17.3164 4.27611 17.3896 4.09911C17.4629 3.9221 17.5006 3.7324 17.5005 3.54083C17.5004 3.15395 17.3466 2.78295 17.073 2.50946C16.7993 2.23597 16.4282 2.08239 16.0413 2.0825C15.6545 2.08261 15.2835 2.23641 15.01 2.51005C14.7365 2.7837 14.5829 3.15478 14.583 3.54167Z"
                                        fill="#1A1A1A" />
                                    <path
                                        d="M1.43333 8.41234C1.55052 8.2953 1.70937 8.22955 1.875 8.22955C2.04063 8.22955 2.19948 8.2953 2.31667 8.41234L3.33333 9.429L3.33333 6.0415C3.33333 5.2127 3.66257 4.41785 4.24862 3.83179C4.83468 3.24574 5.62953 2.9165 6.45833 2.9165H13.75C13.9158 2.9165 14.0747 2.98235 14.1919 3.09956C14.3092 3.21677 14.375 3.37574 14.375 3.5415C14.375 3.70726 14.3092 3.86624 14.1919 3.98345C14.0747 4.10066 13.9158 4.1665 13.75 4.1665H6.45833C6.2121 4.1665 5.96829 4.215 5.7408 4.30923C5.51332 4.40346 5.30662 4.54157 5.13251 4.71568C4.9584 4.88979 4.82029 5.09649 4.72606 5.32397C4.63183 5.55146 4.58333 5.79528 4.58333 6.0415L4.58333 9.42817L5.6 8.4115C5.71793 8.29771 5.87584 8.23479 6.03971 8.23629C6.20358 8.23779 6.36031 8.30359 6.47614 8.41953C6.59196 8.53546 6.65762 8.69225 6.65896 8.85613C6.66031 9.02 6.59724 9.17785 6.48333 9.29567L4.4 11.379C4.28281 11.496 4.12396 11.5618 3.95833 11.5618C3.79271 11.5618 3.63385 11.496 3.51667 11.379L1.43333 9.29567C1.31629 9.17848 1.25055 9.01963 1.25055 8.854C1.25055 8.68838 1.31629 8.52953 1.43333 8.41234ZM3.95833 13.7498C4.67663 13.7498 5.3655 14.0352 5.87341 14.5431C6.38133 15.051 6.66667 15.7399 6.66667 16.4582C6.66667 17.1765 6.38133 17.8653 5.87341 18.3733C5.3655 18.8812 4.67663 19.1665 3.95833 19.1665C3.24004 19.1665 2.55116 18.8812 2.04325 18.3733C1.53534 17.8653 1.25 17.1765 1.25 16.4582C1.25 15.7399 1.53534 15.051 2.04325 14.5431C2.55116 14.0352 3.24004 13.7498 3.95833 13.7498ZM5.41667 16.4582C5.41656 16.0713 5.26276 15.7003 4.98911 15.4268C4.71547 15.1533 4.34438 14.9997 3.9575 14.9998C3.57062 14.9999 3.19962 15.1537 2.92613 15.4274C2.65264 15.701 2.49906 16.0721 2.49917 16.459C2.49922 16.6506 2.53701 16.8402 2.61037 17.0172C2.68373 17.1942 2.79122 17.355 2.92672 17.4904C3.20037 17.7639 3.57145 17.9174 3.95833 17.9173C4.34522 17.9172 4.71621 17.7634 4.9897 17.4898C5.26319 17.2161 5.41678 16.8451 5.41667 16.4582Z"
                                        fill="#1A1A1A" />
                                    <path
                                        d="M18.5667 11.5877C18.4495 11.7047 18.2906 11.7704 18.125 11.7704C17.9594 11.7704 17.8005 11.7047 17.6833 11.5877L16.6667 10.571V13.9585C16.6667 14.7873 16.3374 15.5822 15.7514 16.1682C15.1653 16.7543 14.3705 17.0835 13.5417 17.0835H6.25C6.08424 17.0835 5.92527 17.0176 5.80806 16.9004C5.69085 16.7832 5.625 16.6243 5.625 16.4585C5.625 16.2927 5.69085 16.1338 5.80806 16.0166C5.92527 15.8993 6.08424 15.8335 6.25 15.8335H13.5417C14.0389 15.8335 14.5159 15.636 14.8675 15.2843C15.2191 14.9327 15.4167 14.4558 15.4167 13.9585V10.5718L14.4 11.5885C14.3231 11.6688 14.2262 11.7271 14.1192 11.7573C14.0122 11.7875 13.899 11.7886 13.7915 11.7604C13.684 11.7321 13.5859 11.6757 13.5076 11.5968C13.4292 11.5179 13.3734 11.4195 13.3458 11.3118C13.3179 11.2045 13.3189 11.0917 13.3489 10.9849C13.379 10.8782 13.4369 10.7813 13.5167 10.7043L15.6 8.621C15.7172 8.50395 15.876 8.43821 16.0417 8.43821C16.2073 8.43821 16.3661 8.50395 16.4833 8.621L18.5667 10.7043C18.6837 10.8215 18.7495 10.9804 18.7495 11.146C18.7495 11.3116 18.6837 11.4705 18.5667 11.5877Z"
                                        fill="#1A1A1A" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="row_item">
                    <div class="position-relative overflow-hidden prd_card br_5 bxy_gl bs_15 tbs_tb_3 hover">
                        <a href="#" class="d-block">
                            <div class="position-relative d-flex justify-content-center align-items-center img_box">
                                <img src="./assets/images/prd-img-2.png" alt="thumb" class="w-100">
                                <div class="position-absolute sold_smg_box d-none">
                                    <h4 class="fw_6 fs_20 lh_29 fc_red text-center text-uppercase">sold out</h4>
                                </div>
                                <div class="position-absolute disc_box bg_red d-none">
                                    <span class="fs_14 lh_20 fc_white">25%</span>
                                    <div class="position-absolute triangle_topleft"></div>
                                </div>
                            </div>
                            <div class="content text-center">
                                <h6 class="mb-0 mb-md-3 fw_4 fs_17 lh_22 fc_black">Paket Aksesoris Resmi New Honda CB
                                    150R
                                    StreetFire – Red</h6>
                                <div class="rate_wrapper">
                                    <div class="rating rating_16"></div>
                                </div>
                                <h5
                                    class="d-flex justify-content-center align-items-center gap-2 gap-md-4 pt-0 pt-md-3 fs_18 lh_22 fc_black">
                                    <span>BDT 2,175</span>
                                </h5>
                            </div>
                        </a>
                        <div class="position-absolute d-flex group_buttons br_5">
                            <button type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <g clip-path="url(#clip0_1293_6366)">
                                        <path
                                            d="M7.49935 18.3332C7.95959 18.3332 8.33268 17.9601 8.33268 17.4998C8.33268 17.0396 7.95959 16.6665 7.49935 16.6665C7.03911 16.6665 6.66602 17.0396 6.66602 17.4998C6.66602 17.9601 7.03911 18.3332 7.49935 18.3332Z"
                                            stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path
                                            d="M16.6673 18.3332C17.1276 18.3332 17.5007 17.9601 17.5007 17.4998C17.5007 17.0396 17.1276 16.6665 16.6673 16.6665C16.2071 16.6665 15.834 17.0396 15.834 17.4998C15.834 17.9601 16.2071 18.3332 16.6673 18.3332Z"
                                            stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path
                                            d="M0.833984 0.833496H4.16732L6.40065 11.9918C6.47686 12.3755 6.68557 12.7201 6.99027 12.9654C7.29497 13.2107 7.67623 13.341 8.06732 13.3335H16.1673C16.5584 13.341 16.9397 13.2107 17.2444 12.9654C17.5491 12.7201 17.7578 12.3755 17.834 11.9918L19.1673 5.00016H5.00065"
                                            stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1293_6366">
                                            <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </button>
                            <button type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <path
                                        d="M17.3671 3.84172C16.9415 3.41589 16.4361 3.0781 15.8799 2.84763C15.3237 2.61716 14.7275 2.49854 14.1254 2.49854C13.5234 2.49854 12.9272 2.61716 12.371 2.84763C11.8147 3.0781 11.3094 3.41589 10.8838 3.84172L10.0004 4.72506L9.11709 3.84172C8.25735 2.98198 7.09129 2.49898 5.87542 2.49898C4.65956 2.49898 3.4935 2.98198 2.63376 3.84172C1.77401 4.70147 1.29102 5.86753 1.29102 7.08339C1.29102 8.29925 1.77401 9.46531 2.63376 10.3251L3.51709 11.2084L10.0004 17.6917L16.4838 11.2084L17.3671 10.3251C17.7929 9.89943 18.1307 9.39407 18.3612 8.83785C18.5917 8.28164 18.7103 7.68546 18.7103 7.08339C18.7103 6.48132 18.5917 5.88514 18.3612 5.32893C18.1307 4.77271 17.7929 4.26735 17.3671 3.84172Z"
                                        stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </button>
                            <button type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <path
                                        d="M0.833008 10.0002C0.833008 10.0002 4.16634 3.3335 9.99967 3.3335C15.833 3.3335 19.1663 10.0002 19.1663 10.0002C19.1663 10.0002 15.833 16.6668 9.99967 16.6668C4.16634 16.6668 0.833008 10.0002 0.833008 10.0002Z"
                                        stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path
                                        d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
                                        stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </button>
                            <button type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <path
                                        d="M16.0413 6.25C15.323 6.25 14.6342 5.96466 14.1263 5.45675C13.6183 4.94884 13.333 4.25996 13.333 3.54167C13.333 2.82337 13.6183 2.1345 14.1263 1.62659C14.6342 1.11867 15.323 0.833334 16.0413 0.833334C16.7596 0.833334 17.4485 1.11867 17.9564 1.62659C18.4643 2.1345 18.7497 2.82337 18.7497 3.54167C18.7497 4.25996 18.4643 4.94884 17.9564 5.45675C17.4485 5.96466 16.7596 6.25 16.0413 6.25ZM14.583 3.54167C14.5831 3.73323 14.6208 3.92291 14.6942 4.09987C14.7676 4.27684 14.8751 4.43762 15.0106 4.57304C15.1461 4.70846 15.3069 4.81586 15.4839 4.88912C15.6609 4.96238 15.8506 5.00005 16.0422 5C16.2337 4.99995 16.4234 4.96216 16.6004 4.8888C16.7773 4.81544 16.9381 4.70794 17.0735 4.57245C17.209 4.43695 17.3164 4.27611 17.3896 4.09911C17.4629 3.9221 17.5006 3.7324 17.5005 3.54083C17.5004 3.15395 17.3466 2.78295 17.073 2.50946C16.7993 2.23597 16.4282 2.08239 16.0413 2.0825C15.6545 2.08261 15.2835 2.23641 15.01 2.51005C14.7365 2.7837 14.5829 3.15478 14.583 3.54167Z"
                                        fill="#1A1A1A" />
                                    <path
                                        d="M1.43333 8.41234C1.55052 8.2953 1.70937 8.22955 1.875 8.22955C2.04063 8.22955 2.19948 8.2953 2.31667 8.41234L3.33333 9.429L3.33333 6.0415C3.33333 5.2127 3.66257 4.41785 4.24862 3.83179C4.83468 3.24574 5.62953 2.9165 6.45833 2.9165H13.75C13.9158 2.9165 14.0747 2.98235 14.1919 3.09956C14.3092 3.21677 14.375 3.37574 14.375 3.5415C14.375 3.70726 14.3092 3.86624 14.1919 3.98345C14.0747 4.10066 13.9158 4.1665 13.75 4.1665H6.45833C6.2121 4.1665 5.96829 4.215 5.7408 4.30923C5.51332 4.40346 5.30662 4.54157 5.13251 4.71568C4.9584 4.88979 4.82029 5.09649 4.72606 5.32397C4.63183 5.55146 4.58333 5.79528 4.58333 6.0415L4.58333 9.42817L5.6 8.4115C5.71793 8.29771 5.87584 8.23479 6.03971 8.23629C6.20358 8.23779 6.36031 8.30359 6.47614 8.41953C6.59196 8.53546 6.65762 8.69225 6.65896 8.85613C6.66031 9.02 6.59724 9.17785 6.48333 9.29567L4.4 11.379C4.28281 11.496 4.12396 11.5618 3.95833 11.5618C3.79271 11.5618 3.63385 11.496 3.51667 11.379L1.43333 9.29567C1.31629 9.17848 1.25055 9.01963 1.25055 8.854C1.25055 8.68838 1.31629 8.52953 1.43333 8.41234ZM3.95833 13.7498C4.67663 13.7498 5.3655 14.0352 5.87341 14.5431C6.38133 15.051 6.66667 15.7399 6.66667 16.4582C6.66667 17.1765 6.38133 17.8653 5.87341 18.3733C5.3655 18.8812 4.67663 19.1665 3.95833 19.1665C3.24004 19.1665 2.55116 18.8812 2.04325 18.3733C1.53534 17.8653 1.25 17.1765 1.25 16.4582C1.25 15.7399 1.53534 15.051 2.04325 14.5431C2.55116 14.0352 3.24004 13.7498 3.95833 13.7498ZM5.41667 16.4582C5.41656 16.0713 5.26276 15.7003 4.98911 15.4268C4.71547 15.1533 4.34438 14.9997 3.9575 14.9998C3.57062 14.9999 3.19962 15.1537 2.92613 15.4274C2.65264 15.701 2.49906 16.0721 2.49917 16.459C2.49922 16.6506 2.53701 16.8402 2.61037 17.0172C2.68373 17.1942 2.79122 17.355 2.92672 17.4904C3.20037 17.7639 3.57145 17.9174 3.95833 17.9173C4.34522 17.9172 4.71621 17.7634 4.9897 17.4898C5.26319 17.2161 5.41678 16.8451 5.41667 16.4582Z"
                                        fill="#1A1A1A" />
                                    <path
                                        d="M18.5667 11.5877C18.4495 11.7047 18.2906 11.7704 18.125 11.7704C17.9594 11.7704 17.8005 11.7047 17.6833 11.5877L16.6667 10.571V13.9585C16.6667 14.7873 16.3374 15.5822 15.7514 16.1682C15.1653 16.7543 14.3705 17.0835 13.5417 17.0835H6.25C6.08424 17.0835 5.92527 17.0176 5.80806 16.9004C5.69085 16.7832 5.625 16.6243 5.625 16.4585C5.625 16.2927 5.69085 16.1338 5.80806 16.0166C5.92527 15.8993 6.08424 15.8335 6.25 15.8335H13.5417C14.0389 15.8335 14.5159 15.636 14.8675 15.2843C15.2191 14.9327 15.4167 14.4558 15.4167 13.9585V10.5718L14.4 11.5885C14.3231 11.6688 14.2262 11.7271 14.1192 11.7573C14.0122 11.7875 13.899 11.7886 13.7915 11.7604C13.684 11.7321 13.5859 11.6757 13.5076 11.5968C13.4292 11.5179 13.3734 11.4195 13.3458 11.3118C13.3179 11.2045 13.3189 11.0917 13.3489 10.9849C13.379 10.8782 13.4369 10.7813 13.5167 10.7043L15.6 8.621C15.7172 8.50395 15.876 8.43821 16.0417 8.43821C16.2073 8.43821 16.3661 8.50395 16.4833 8.621L18.5667 10.7043C18.6837 10.8215 18.7495 10.9804 18.7495 11.146C18.7495 11.3116 18.6837 11.4705 18.5667 11.5877Z"
                                        fill="#1A1A1A" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="load_more_wrapper mt-5 pt-3 text-center">
                <a href="#" class="d-inline-block btn_load_more br_5 bg_red btnp_1228 tbg_3 hover">
                    <span class="fw_5 fs_14 lh_20 fc_white text-uppercase">
                        <img src="./assets/icons/load-more.gif" alt="gif">
                        Loading...</span>
                    <!-- <span class="fw_5 fs_14 lh_20 fc_white text-uppercase">load more</span> -->
                </a>
            </div>
        </div>
    </section>
</template>
