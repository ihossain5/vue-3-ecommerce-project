<script setup>
import AdvanceSearch from '../components/AdvanceSearch.vue'
import TodayDeal from '../components/pages/Home/TodayDeal.vue'
import Category from '../components/pages/Home/Category.vue'
import Brand from '../components/pages/Home/Brand.vue'
import Shop from '../components/pages/Home/Shop.vue'
import Blog from '../components/pages/Home/Blog.vue'
import Accessories from '../components/pages/Home/Accessories.vue'
import Products from '../components/pages/Home/Products.vue'


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
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                <path d="M4 6.5L14 6.5" stroke="white" stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round" />
                <path d="M4 12.5L20 12.5" stroke="white" stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round" />
                <path d="M4 18.5H10" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
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
  <Brand></Brand>

  <!-- our shop -->
  <Shop></Shop>

  <!-- our bolgs -->
  <Blog></Blog>

  <!-- accessories -->
 <Accessories></Accessories>

  <!-- all products -->
  <Products></Products>
 
</template>
