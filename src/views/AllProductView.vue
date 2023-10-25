<script>
import {ref} from 'vue'
import Product from '../components/Product.vue'
import { BASE_API_URL } from '../config';
import LoadingPlaceholder from '../components/LoadingPlaceholder.vue';
import ProductFilterDropDown from '../components/ProductFilterDropDown.vue';
import ProductFilter from '../components/ProductFilter.vue';

export default {
    setup() {
        const Base_Url = `${BASE_API_URL}/products`

        const selectedSortOption = ref('default');
        const selectedCategoryCheckbox = ref('all');

        return {
            selectedSortOption, Base_Url, selectedCategoryCheckbox
        };
    },
    components: { Product, LoadingPlaceholder, ProductFilterDropDown, ProductFilter }
}
</script>

<template>
    <section class="breadcrum_sc">
        <div class="container-fluid container-xxxl">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <router-link to="/" class="fs_16 lh_23 fc_red">Home</router-link>
                    </li>
                    <li class="breadcrumb-item fs_16 lh_23 fc_black active" aria-current="page">All Products</li>
                </ol>
            </nav>
        </div>
    </section>

    <!-- all products -->
    <section class="products_sc spb">
        <div class="container-fluid container-xxxl">
            <div class="row">

                <div class="col-12 col-lg-3 col-xxl-2 offcanvas offcanvas-start" id="offcanvasCategory">
                    <ProductFilter></ProductFilter>
                </div>

                <div class="col-12 col-lg-9 col-xxl-10">

                    <div class="prd_page_header pb-3">
                        <div class="row align-items-end gy-4 gy-md-0">
                            <div class="col-12 col-md-6 text-center text-md-start">
                                <h1 class="fw_6 fs_30 lh_43 pb-2 pb-md-3 pb-lg-4">Products</h1>
                                <!-- <span class="fs_16 lh_23 pb-3 pb-md-0">Showing {{ from }} to {{ to }} of {{ total }}</span> -->
                            </div>
                            <div class="col-12 col-md-6">
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="flex_item">
                                        <button type="button"
                                            class="d-flex align-items-center gap-2 btn_filter_toggle d-md-none"
                                            data-bs-toggle="offcanvas" data-bs-target="#offcanvasCategory">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none">
                                                <path d="M22 3H2L10 12.46V19L14 21V12.46L22 3Z" stroke="#1A1A1A"
                                                    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            Filter
                                        </button>
                                    </div>
                                    <ProductFilterDropDown :selectedSortOption="selectedSortOption" @update:selectedSortOption="selectedSortOption = $event"></ProductFilterDropDown>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="row align-items-end gy-4 gy-md-0">
                         <div class="col-12 col-md-6 text-center text-md-start">
                             <span class="fs_16 lh_23 pb-3 pb-md-0">Product not found</span>
                         </div>
                     </div> -->


                    <!-- products -->
                    <div class="pt-4 products_wrapper spb">
                        <div class="row row-cols-2 row-cols-sm-3 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-2 g-md-4">
                            <Product :baseUlr="Base_Url" :selectedSortOption="selectedSortOption" ></Product>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>