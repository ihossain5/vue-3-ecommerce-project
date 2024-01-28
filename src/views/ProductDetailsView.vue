<script>
import { ref, watchEffect, computed } from 'vue'
import { useRoute } from 'vue-router';
import axios from 'axios';
import { BASE_API_URL } from '../config';

export default {
  setup() {
    const product = ref({})
    const route = useRoute();

    
    const plainTextDescription = computed(() => {
      const doc = new DOMParser().parseFromString(product.value.description, 'text/html');
      return doc.body.textContent || '';
    });


    watchEffect(() => {
      const productId = route.query.id;

      if (productId) {
        fetchProductDetails(productId);
      }
    });

    async function fetchProductDetails(productId) {
      try {
        const response = await axios.get(
          `${BASE_API_URL}/products/${productId}/details`
        );

        if (response.data.resutls) {
          product.value = response.data.resutls;
        } else {
          console.error('Invalid API response:', response);
        }
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    }
    

    return {
        product,
        plainTextDescription
    }
  },

}
</script>

<template>
     <!-- breadcrumb -->
     <section class="breadcrum_sc">
        <div class="container-fluid container-xxxl">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <a href="/" class="fs_16 lh_23 fc_red">Home</a>
                    </li>
                    <li class="breadcrumb-item">
                        <router-link to="/products" class="fs_16 lh_23 fc_red">Products</router-link>
                    </li>
                    <li class="breadcrumb-item fs_16 lh_23 fc_black active" aria-current="page">{{ product.name }}</li>
                </ol>
            </nav>
        </div>
    </section>

    <section class="single_product_sc">
        <div class="container-fluid container-xxxl">
            <div class="row gx-xl-5 gy-5">
                <div class="col-12 col-lg-5">
                    <div class="details_slider_content position-relative">

                        <div class="swiper_thumbnail_wrapper">
                            <div class="swiper spThumbSwiper" id="spThumbSwiper">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide">
                                        <div class="video_wrapper position-relative">
                                            <img class="w-100" :src="product.images[0]" />
                                            <!-- <button type="button">
                                                <img src="./assets/icons/play-details-video.svg" alt="icon"
                                                    class="w-100">
                                            </button> -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="swiper-button-next"></div>
                        <div class="swiper-button-prev"></div> -->
                    </div>

                </div>
                <div class="col-12 col-lg-7">
                    <div class="product_details">
                        <p class="fs_24 lh_30">{{ product.name }}</p>
                        <div class="rate_wrapper py-3 py-md-4 m-0">
                            <div class="d-flex align-items-center gap-2 gap-md-3">
                                <div class="ratings">
                                    <i data-star="{{ product.rating }}"></i>
                                </div>
                                <span class="fs_15 lh_22">({{product.total_reviews}} reviews)</span>
                            </div>
                        </div>
                        <h2 class="fw_5 fs_30 lh_32 pb-4">BDT 15,990</h2>
                        <div class="py-4 bt_gl bb_gl">
                            <div class="row gy-4">
                                <div class="col-12 col-md-9">
                                    <table>
                                        <tr>
                                            <td class="fw_5 fs_15 lh_22 py-2 pe-3">Part Code</td>
                                            <td colspan="3" class="fs_17 lh_25 fc_gd py-2">: {{ product.sku }}</td>
                                        </tr>
                                        <tr>
                                            <td class="fw_5 fs_15 lh_22 py-2 pe-3">Category</td>
                                            <td colspan="3" class="fs_17 lh_25 fc_gd py-2">: {{ product.category_name }}</td>
                                        </tr>
                                        <tr v-if=" product.additional_name_1 !== null && product.additional_name_2 !== null && product.additional_name_3 !== null && product.additional_name_4 !== null && product.additional_name_4 !== null">
                                            <td class="fw_5 fs_15 lh_22 py-2 pe-3">Additional Name</td>
                                            <td colspan="3" class="fs_17 lh_25 fc_gd py-2">
                                                <ul>
                                                    <li>: {{ product.additional_name_1 }}</li>
                                                    <li>{{ product.additional_name_2 }}</li>
                                                    <li>{{ product.additional_name_3 }}</li>
                                                    <li>{{ product.additional_name_4 }}</li>
                                                    <li>{{ product.additional_name_5 }}</li>
                                                </ul>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                                <div class="col-12 col-md-3">
                                    <span class="fw_5 fs_15 lh_22 fc_gd">Sold by:</span>
                                    <div
                                        class="d-flex justify-content-between align-items-center align-items-md-start flex-md-column">
                                        <div class="d-flex align-items-center gap-2 pt-0 pb-0 pt-md-2 pb-md-4">
                                            <img :src="product.shop_logo" alt="logo" class="shop_logo">
                                            <span class="fw_5 fs_17 lh_25">{{product.shop}}</span>
                                        </div>
                                        <!-- <a href="#" class="d-inline-block br_5 bxy_red btnp_1530 tbg_3 not_red_fill">
                                            <span class="fw_5 fs_14 lh_20 fc_red text-uppercase tfc_3">Message
                                                Seller</span>
                                        </a> -->
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex align-items-center gap-2 py-4 in_stock" v-if="product.quantity > 0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21"
                                fill="none">
                                <path
                                    d="M18.3337 9.73355V10.5002C18.3326 12.2972 17.7507 14.0458 16.6748 15.4851C15.5988 16.9244 14.0864 17.9773 12.3631 18.4868C10.6399 18.9963 8.79804 18.9351 7.11238 18.3124C5.42673 17.6896 3.98754 16.5386 3.00946 15.0311C2.03138 13.5236 1.56682 11.7403 1.68506 9.94714C1.80329 8.15402 2.498 6.44715 3.66556 5.08111C4.83312 3.71506 6.41098 2.76303 8.16382 2.367C9.91665 1.97097 11.7505 2.15216 13.392 2.88355"
                                    stroke="#1CA841" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path d="M18.3333 3.8335L10 12.1752L7.5 9.67516" stroke="#1CA841" stroke-width="1.5"
                                    stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <p class="fs_17 lh_22 fc_gd"> 
                                <span style="color: #1CA841">In stock </span> (Only {{product.quantity}}
                                left in stock)
                            </p>
                        </div>

                        <div class="d-flex align-items-center gap-2 py-4 in_stock" v-else>
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none" data-arp-injected="true">
                                    <path d="M10.5 18.8337C15.1023 18.8337 18.8333 15.1027 18.8333 10.5003C18.8333 5.89795 15.1023 2.16699 10.5 2.16699C5.89759 2.16699 2.16663 5.89795 2.16663 10.5003C2.16663 15.1027 5.89759 18.8337 10.5 18.8337Z" stroke="#DD1E1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M13 8L8 13" stroke="#DD1E1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 8L13 13" stroke="#DD1E1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            <p class="fs_17 lh_22 fc_gd"> 
                                <span style="color: #DD1E1E">Out of stock </span> (No Product Available Ritght Now)
                            </p>
                        </div>


                        <div class="d-flex flex-wrap align-items-center gap-3 gap-md-5">
                            <div v-if="product.colors && Object.keys(product.colors).length">
                                <span class="pb-2 fs_17 lh_25">Color:</span>
                                <div class="d-flex align-items-center color_inputs gap-1">
                                    <div class="position-relative" v-for="(color, key) in product.colors" :key="key">
                                        <input type="radio" name="colors[]" :id="'colorInput' + key" :checked="key == 1">
                                        <label :for="'colorInput' + key">
                                            <span class="w-100 h-100 rounded-circle"
                                            :style="{ 'background-color': color }"></span>
                                        </label>
                                    </div>
                                    
                                </div>
                            </div>

                            <div  v-if="product.sizes && Object.keys(product.sizes).length">
                                <span class="pb-2 fs_17 lh_25">Size:</span>
                                <div class="d-flex align-items-center size_inputs gap-2">

                                    <div class="position-relative"  v-for="(size, key) in product.sizes" :key="key">
                                        <input type="radio" name="sizes[]" :id="'sizeInput1' + key" :checked="key == 1">
                                        <label :for="'sizeInput1' + key"
                                            class="d-flex justify-content-center align-items-center">
                                            <span class="fs_15 lh_22">{{ size }}</span>
                                        </label>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="py-4">
                            <span class="d-block pb-2 fs_17 lh_25">Quantity:</span>
                            <div class="d-inline-flex br_5 bxy_gl quantity">
                                <div class="d-flex justify-content-between align-items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"
                                        fill="none">
                                        <path
                                            d="M22.1081 12.8667H6.25265C5.95228 12.8667 5.66422 12.986 5.45183 13.1984C5.23944 13.4108 5.12012 13.6989 5.12012 13.9992C5.12012 14.2996 5.23944 14.5877 5.45183 14.8C5.66422 15.0124 5.95228 15.1318 6.25265 15.1318H22.1081C22.4084 15.1318 22.6965 15.0124 22.9089 14.8C23.1213 14.5877 23.2406 14.2996 23.2406 13.9992C23.2406 13.6989 23.1213 13.4108 22.9089 13.1984C22.6965 12.986 22.4084 12.8667 22.1081 12.8667Z"
                                            fill="#999999" />
                                    </svg>
                                </div>
                                <div class="d-flex justify-content-between align-items-center">
                                    <span class="fw_5 fs_17">01</span>
                                </div>
                                <div class="d-flex justify-content-between align-items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"
                                        fill="none">
                                        <path
                                            d="M14.9531 21.9279L14.9531 15.1327L21.7483 15.1327C22.0487 15.1327 22.3368 15.0134 22.5491 14.801C22.7615 14.5886 22.8809 14.3005 22.8809 14.0002C22.8809 13.6998 22.7615 13.4118 22.5491 13.1994C22.3368 12.987 22.0487 12.8677 21.7483 12.8677L14.9531 12.8677L14.9531 6.07247C14.9531 5.7721 14.8338 5.48404 14.6214 5.27165C14.409 5.05926 14.121 4.93994 13.8206 4.93994C13.5203 4.93994 13.2322 5.05926 13.0198 5.27165C12.8074 5.48404 12.6881 5.7721 12.6881 6.07247L12.6881 12.8677L5.89291 12.8677C5.59254 12.8677 5.30448 12.987 5.09209 13.1994C4.8797 13.4118 4.76038 13.6998 4.76038 14.0002C4.76038 14.3005 4.8797 14.5886 5.09209 14.801C5.30448 15.0134 5.59254 15.1327 5.89291 15.1327L12.6881 15.1327L12.6881 21.9279C12.6881 22.2283 12.8074 22.5163 13.0198 22.7287C13.2322 22.9411 13.5203 23.0604 13.8206 23.0604C14.121 23.0604 14.409 22.9411 14.6214 22.7287C14.8338 22.5163 14.9531 22.2283 14.9531 21.9279Z"
                                            fill="#999999" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex flex-wrap align-items-center gap-3 gap-md-5 pt-2 pb-4 bb_gl atc_wish_comp">
                            <div>
                                <button type="button" class="d-inline-block br_5 bg_red btnp_1530 tbg_3 hover"
                                    id="btnAcToast">
                                    <span class="fw_5 fs_14 lh_20 fc_white text-uppercase">Add to Cart</span>
                                </button>
                            </div>

                        </div>
        
                    </div>
                </div>
            </div>



            <!-- nav tabs -->
            <div class="spy">
                <nav class="tab_style_1">
                    <div class="nav nav-tabs" role="tablist">
                        <button class="nav-link active" id="pdesc-tab" data-bs-toggle="tab" data-bs-target="#pdesc"
                            type="button" role="tab" aria-controls="pdesc" aria-selected="true">Description</button>
                        <button class="nav-link " id="pda-into-tab" data-bs-toggle="tab" data-bs-target="#pda-into"
                            type="button" role="tab" aria-controls="pda-into" aria-selected="true">Additional
                            Information</button>
                        <!-- <button class="nav-link " id="pd-review-tab" data-bs-toggle="tab" data-bs-target="#pd-review"
                            type="button" role="tab" aria-controls="pd-review" aria-selected="true">Reviews (2)</button> -->
                    </div>
                </nav>
                <div class="tab-content pt-4 mt-2">
                    <div class="tab-pane fade show active" id="pdesc" role="tabpanel" aria-labelledby="pdesc-tab">
                        <div class="desc_box">
                            <p>{{ plainTextDescription }}</p>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="pda-into" role="tabpanel" aria-labelledby="pda-into-tab">
                        <table>
                            <tbody>
                                <tr v-for="specification in product.specifications" :key="specification.specification_id">
                                    <td class="mb-1 fw_5 fs_15 lh_20">{{specification.name}}</td>
                                    <td class="mb-1 fw_4 fs_16 lh_20 fc_gd">: {{specification.value}}</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                    <!-- <div class="tab-pane fade" id="pd-review" role="tabpanel" aria-labelledby="pd-review-tab">
                        <div class="prd_review">
                            <div class="preview">
                                <div
                                    class="d-flex flex-wrap justify-content-center justify-content-lg-between align-items-end gap-4 gap-md-5">
                                    <div class="flex_item">
                                        <div
                                            class="d-flex flex-wrap justify-content-center justify-content-md-start align-items-center gap-4">
                                            <div class="flex_item">
                                                <h1>{{ product.rating }}<span>/5</span></h1>
                                                <div
                                                    class="d-flex flex-md-column align-items-center align-items-md-start gap-2">
                                                    <div class="rate_wrapper mt-0 mt-md-4 mb-0 mb-md-3">
                                                        <div class="ratings">
                                                            <i data-star="{{ product.rating }}"></i>
                                                        </div>
                                                    </div>
                                                    <span class="fs_17 lh_28 fc_gd">{{ product.total_reviews }} Rating</span>
                                                </div>
                                            </div>
                                            <div class="flex_item">
                                                <div class="d-flex align-items-center gap-3 gap-md-5">
                                                    <div class="rate_wrapper">
                                                        <div class="ratings">
                                                            <i data-star="5"></i>
                                                        </div>
                                                    </div>
                                                    <div class="d-flex align-items-center gap-2 gap-md-3">
                                                        <div class="color_bar">
                                                            <div class="color_bar_inner" style="width: 80%"></div>
                                                        </div>
                                                        <span class="fs_15 lh_22">8 Rating</span>
                                                    </div>
                                                </div>
                                                <div class="d-flex align-items-center gap-3 gap-md-5">
                                                    <div class="rate_wrapper">
                                                        <div class="ratings">
                                                            <i data-star="4"></i>
                                                        </div>
                                                    </div>
                                                    <div class="d-flex align-items-center gap-2 gap-md-3">
                                                        <div class="color_bar">
                                                            <div class="color_bar_inner" style="width: 60%"></div>
                                                        </div>
                                                        <span class="fs_15 lh_22">6 Rating</span>
                                                    </div>
                                                </div>
                                                <div class="d-flex align-items-center gap-3 gap-md-5">
                                                    <div class="rate_wrapper">
                                                        <div class="ratings">
                                                            <i data-star="3"></i>
                                                        </div>
                                                    </div>
                                                    <div class="d-flex align-items-center gap-2 gap-md-3">
                                                        <div class="color_bar">
                                                            <div class="color_bar_inner" style="width: 40%"></div>
                                                        </div>
                                                        <span class="fs_15 lh_22">4 Rating</span>
                                                    </div>
                                                </div>
                                                <div class="d-flex align-items-center gap-3 gap-md-5">
                                                    <div class="rate_wrapper">
                                                        <div class="ratings">
                                                            <i data-star="2"></i>
                                                        </div>
                                                    </div>
                                                    <div class="d-flex align-items-center gap-2 gap-md-3">
                                                        <div class="color_bar">
                                                            <div class="color_bar_inner" style="width: 20%"></div>
                                                        </div>
                                                        <span class="fs_15 lh_22">2 Rating</span>
                                                    </div>
                                                </div>
                                                <div class="d-flex align-items-center gap-3 gap-md-5">
                                                    <div class="rate_wrapper">
                                                        <div class="ratings">
                                                            <i data-star="1"></i>
                                                        </div>
                                                    </div>
                                                    <div class="d-flex align-items-center gap-2 gap-md-3">
                                                        <div class="color_bar">
                                                            <div class="color_bar_inner" style="width: 0%"></div>
                                                        </div>
                                                        <span class="fs_15 lh_22">0 Rating</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex_item">
                                        <button type="button"
                                            class="d-inline-block br_5 bxy_red btnp_1530 tbg_3 not_red_fill"
                                            data-bs-toggle="modal" data-bs-target="#prdReview">
                                            <span class="fw_5 fs_14 lh_20 fc_red text-uppercase tfc_3">WRITE A
                                                REVIEW</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="view_review">
                                <div
                                    class="view_review_head d-flex flex-wrap justify-content-center justify-content-md-between align-items-center gap-3 bt_gl">
                                    <h5 class="fw_4 fs_20 lh_28">Product Reviews</h5>
                                    <div
                                        class="d-flex justify-content-between justify-content-md-end align-items-center gap-3 gap-md-4">
                                        <div class="d-flex align-items-center gap-2 gap-md-3">
                                            <span class="fs_16 lh_23 text-capitalize">Sort By:</span>
                                            <select class="short_by form-select fs_14 lh_20 fc_gd">
                                                <option selected>High to Low</option>
                                                <option value="1">Low to High</option>
                                            </select>
                                        </div>
                                        <div class="d-flex align-items-center gap-2 gap-md-3">
                                            <span class="fs_16 lh_23 text-capitalize">Filter:</span>
                                            <select class="short_by form-select fs_14 lh_20 fc_gd">
                                                <option selected>All star</option>
                                                <option value="1">One start</option>
                                                <option value="2">Two star</option>
                                                <option value="3">Three star</option>
                                                <option value="3">Four star</option>
                                                <option value="3">Five star</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="view_review_item spy_4 by_gl">
                                    <div class="d-flex flex-column flex-md-row gap-3 gap-md-0">
                                        <div
                                            class="d-flex flex-md-column justify-content-between justify-content-md-start align-items-md-center gap-2">
                                            <div class="d-flex flex-md-column align-items-md-center gap-2">
                                                <img src="./assets/images/bcv-user.png" alt="user">
                                                <div class="text-md-center">
                                                    <span class="fw_5 fs_20 lh_29">Rocky Khan</span>
                                                    <div class="rate-wrapper mt-2 mt-md-3">
                                                        <div class="rating rating_16"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <span class="fs_14 lh_28 fc_gd">08 May 2023</span>
                                        </div>
                                        <div class="d-flex flex-column justify-content-between">
                                            <p class="fs_17 lh_28 fc_g3 le_03">Lorem ipsum dolor sit amet consectetur.
                                                Malesuada turpis eget venenatis et enim massa convallis cursus blandit.
                                                Porta aliquam orci pulvinar vitae sed libero sem gravida adipiscing.
                                                Varius diam amet nunc fringilla. Commodo ipsum interdum in lorem.</p>
                                            <div class="mt-4 d-flex align-items-center gap-5">
                                                <div class="d-flex align-items-center gap-3 svg_24">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none">
                                                        <path
                                                            d="M23 10C23 9.46957 22.7893 8.96086 22.4142 8.58579C22.0391 8.21071 21.5304 8 21 8H14.68L15.64 3.43C15.66 3.33 15.67 3.22 15.67 3.11C15.67 2.7 15.5 2.32 15.23 2.05L14.17 1L7.59 7.58C7.22 7.95 7 8.45 7 9V19C7 19.5304 7.21071 20.0391 7.58579 20.4142C7.96086 20.7893 8.46957 21 9 21H18C18.83 21 19.54 20.5 19.84 19.78L22.86 12.73C22.95 12.5 23 12.26 23 12V10ZM1 21H5V9H1V21Z"
                                                            fill="#333333" />
                                                    </svg>
                                                    <span class="fs_15 lh_28">5</span>
                                                </div>
                                                <div class="d-flex align-items-center gap-3 svg_24">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none">
                                                        <path
                                                            d="M1 14C1 14.5304 1.21071 15.0391 1.58579 15.4142C1.96086 15.7893 2.46957 16 3 16H9.32L8.36 20.57C8.34 20.67 8.33 20.78 8.33 20.89C8.33 21.3 8.5 21.68 8.77 21.95L9.83 23L16.41 16.42C16.78 16.05 17 15.55 17 15V5C17 4.46957 16.7893 3.96086 16.4142 3.58579C16.0391 3.21071 15.5304 3 15 3H6C5.17 3 4.46 3.5 4.16 4.22L1.14 11.27C1.05 11.5 1 11.74 1 12V14ZM23 3H19V15H23V3Z"
                                                            fill="#999999" />
                                                    </svg>
                                                    <span class="fs_15 lh_28 fc_g9">0</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="view_review_item spy_4 by_gl">
                                    <div class="d-flex flex-column flex-md-row gap-3 gap-md-0">
                                        <div
                                            class="d-flex flex-md-column justify-content-between justify-content-md-start align-items-md-center gap-2">
                                            <div class="d-flex flex-md-column align-items-md-center gap-2">
                                                <img src="./assets/images/bcv-user.png" alt="user">
                                                <div class="text-md-center">
                                                    <span class="fw_5 fs_20 lh_29">Monjur Alam</span>
                                                    <div class="rate-wrapper mt-2 mt-md-3">
                                                        <div class="rating rating_16"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <span class="fs_14 lh_28 fc_gd">08 May 2023</span>
                                        </div>
                                        <div class="d-flex flex-column justify-content-between">
                                            <p class="fs_17 lh_28 fc_g3 le_03">Lorem ipsum dolor sit amet consectetur.
                                                Malesuada turpis eget venenatis et enim massa convallis cursus blandit.
                                                Porta aliquam orci pulvinar vitae sed libero sem gravida adipiscing.
                                                Varius diam amet nunc fringilla. Commodo ipsum interdum in lorem.</p>
                                            <div class="mt-4 d-flex align-items-center gap-5">
                                                <div class="d-flex align-items-center gap-3 svg_24">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none">
                                                        <path
                                                            d="M23 10C23 9.46957 22.7893 8.96086 22.4142 8.58579C22.0391 8.21071 21.5304 8 21 8H14.68L15.64 3.43C15.66 3.33 15.67 3.22 15.67 3.11C15.67 2.7 15.5 2.32 15.23 2.05L14.17 1L7.59 7.58C7.22 7.95 7 8.45 7 9V19C7 19.5304 7.21071 20.0391 7.58579 20.4142C7.96086 20.7893 8.46957 21 9 21H18C18.83 21 19.54 20.5 19.84 19.78L22.86 12.73C22.95 12.5 23 12.26 23 12V10ZM1 21H5V9H1V21Z"
                                                            fill="#333333" />
                                                    </svg>
                                                    <span class="fs_15 lh_28">5</span>
                                                </div>
                                                <div class="d-flex align-items-center gap-3 svg_24">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none">
                                                        <path
                                                            d="M1 14C1 14.5304 1.21071 15.0391 1.58579 15.4142C1.96086 15.7893 2.46957 16 3 16H9.32L8.36 20.57C8.34 20.67 8.33 20.78 8.33 20.89C8.33 21.3 8.5 21.68 8.77 21.95L9.83 23L16.41 16.42C16.78 16.05 17 15.55 17 15V5C17 4.46957 16.7893 3.96086 16.4142 3.58579C16.0391 3.21071 15.5304 3 15 3H6C5.17 3 4.46 3.5 4.16 4.22L1.14 11.27C1.05 11.5 1 11.74 1 12V14ZM23 3H19V15H23V3Z"
                                                            fill="#999999" />
                                                    </svg>
                                                    <span class="fs_15 lh_28 fc_g9">0</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
    </section>


     <!-- related product -->
     <!-- <section class="spb">
        <div class="container-fluid container-xxxl">
            <h1 class="sc_title_1">Related Products</h1>
            <div class="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 g-2 g-md-4">
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
                                    <div class="ratings">
                                        <i data-star="3.5"></i>
                                    </div>
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
                                    <div class="ratings">
                                        <i data-star="3.5"></i>
                                    </div>
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
                                    <div class="ratings">
                                        <i data-star="3.5"></i>
                                    </div>
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
                                    <div class="ratings">
                                        <i data-star="3.5"></i>
                                    </div>
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
                                    <div class="ratings">
                                        <i data-star="3.5"></i>
                                    </div>
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
    </section> -->
</template>