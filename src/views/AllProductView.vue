<script>
import { ref } from 'vue'
import Product from '../components/Product.vue'

export default {
  components: { Product },
  setup() {
    const products = ref({})
    const from = ref(0)
    const to = ref(0)
    const total = ref(0)
    return {
        products,
        from,
        total,
        to
    }
  },
  async created() {
    await fetch(this.BASE_API_URL+"/products?pagination=20", {
        method: 'GET' //optional
    })
      .then(async (response) => {
        const data = await response.json()

        this.products = data.resutls.data
        this.total = data.resutls.meta.total
        this.from = data.resutls.meta.from
        this.to = data.resutls.meta.to
      })
      .catch((error) => {return error})
  },
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
                    <div class="filter_wrapper br_5 overflow-hidden">
                        <div class="d-flex justify-content-between align-items-center filter_header bg_black">
                            <h4 class="fw_5 fs_20 lh_32 fc_white text-uppercase">filter</h4>
                            <button class="fw_5 fs_14 lh_20 fc_white text-uppercase">clear all</button>
                        </div>
                        <div class="filter_body">
                            <div class="filter_item">
                                <h5 class=" pb-2 fw_5 fs_17 lh_25 bb_gl  text-uppercase">MAIN CATEGORY</h5>
                                <div>
                                    <div class="d-flex gap-2 mt-3 pt-1">
                                        <input type="radio" name="mainCtg" checked>
                                        <label class="fs_15 lh_25">All Items</label>
                                    </div>
                                    <div class="d-flex gap-2 mt-3">
                                        <input type="radio" name="mainCtg">
                                        <label class="fs_15 lh_25">Honda Motorcycle Official Accessories</label>
                                    </div>
                                    <div class="d-flex gap-2 mt-3">
                                        <input type="radio" name="mainCtg">
                                        <label class="fs_15 lh_25">Helmet</label>
                                    </div>
                                    <div class="d-flex gap-2 mt-3">
                                        <input type="radio" name="mainCtg">
                                        <label class="fs_15 lh_25">Honda Motorcycles</label>
                                    </div>
                                    <div class="d-flex gap-2 mt-3">
                                        <input type="radio" name="mainCtg">
                                        <label class="fs_15 lh_25">Oil</label>
                                    </div>
                                    <div class="d-flex gap-2 mt-3">
                                        <input type="radio" name="mainCtg">
                                        <label class="fs_15 lh_25">Apparel</label>
                                    </div>
                                    <div class="d-flex gap-2 mt-3">
                                        <input type="radio" name="mainCtg">
                                        <label class="fs_15 lh_25">Honda Motorcycle Authorized Parts</label>
                                    </div>
                                </div>
                            </div>
                            <div class="filter_item accordion" id="accordionExample">
                                <div class="accordion-item">
                                    <div class="accordion-header" id="headingOne">
                                        <button class="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseOne"
                                            aria-expanded="false" aria-controls="collapseOne">brand</button>
                                    </div>
                                    <div id="collapseOne" class="accordion-collapse collapse"
                                        aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <div class="d-flex gap-2 mt-3 pt-1">
                                                <input type="checkbox">
                                                <label class="fs_15 lh_25">yahama</label>
                                            </div>
                                            <div class="d-flex gap-2 mt-3">
                                                <input type="checkbox">
                                                <label class="fs_15 lh_25">Bajaj</label>
                                            </div>
                                            <div class="d-flex gap-2 mt-3">
                                                <input type="checkbox">
                                                <label class="fs_15 lh_25">BMW</label>
                                            </div>
                                            <div class="d-flex gap-2 mt-3">
                                                <input type="checkbox">
                                                <label class="fs_15 lh_25">KTM</label>
                                            </div>
                                            <div class="d-flex gap-2 mt-3">
                                                <input type="checkbox">
                                                <label class="fs_15 lh_25">Runner</label>
                                            </div>
                                            <div class="d-flex gap-2 mt-3">
                                                <input type="checkbox">
                                                <label class="fs_15 lh_25">Suzuki</label>
                                            </div>
                                            <div class="d-flex gap-2 mt-3">
                                                <input type="checkbox">
                                                <label class="fs_15 lh_25">Hero</label>
                                            </div>
                                            <div class="d-flex gap-2 mt-3">
                                                <input type="checkbox">
                                                <label class="fs_15 lh_25">TVS</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="filter_item accordion">
                                    <div class="accordion-item">
                                        <div class="accordion-header" id="headingTwo">
                                            <button class="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                                aria-expanded="false" aria-controls="collapseTwo">motor</button>
                                        </div>
                                        <div id="collapseTwo" class="accordion-collapse collapse"
                                            aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                                <div class="d-flex gap-2 mt-3 pt-1">
                                                    <input type="checkbox">
                                                    <label class="fs_15 lh_25">ADV 150 (2019 - 2022)</label>
                                                </div>
                                                <div class="d-flex gap-2 mt-3">
                                                    <input type="checkbox">
                                                    <label class="fs_15 lh_25">ADV 160 (2022 - Sekarang)</label>
                                                </div>
                                                <div class="d-flex align-items-start gap-2 mt-3">
                                                    <input type="checkbox">
                                                    <label class="fs_15 lh_25">BeAT dan BeAT Street K1A (2020 -
                                                        Sekarang)</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-9 col-xxl-10">

                    <div class="prd_page_header pb-3">
                        <div class="row align-items-end gy-4 gy-md-0">
                            <div class="col-12 col-md-6 text-center text-md-start">
                                <h1 class="fw_6 fs_30 lh_43 pb-2 pb-md-3 pb-lg-4">Products</h1>
                                <span class="fs_16 lh_23 pb-3 pb-md-0">Showing {{ from }} to {{to}} of {{total}}</span>
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
                                    <div class="flex_item d-flex justify-content-end align-items-center gap-3">
                                        <span class="fs_16 lh_23 text-capitalize">Sort By:</span>
                                        <select class="short_by form-select fs_14 lh_20 fc_gd">
                                            <option selected>Default</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
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
                            <Product :products="products"></Product>
                        </div>
                    </div>

                    <!-- pagination -->
                  
                </div>
            </div>
        </div>
    </section>
</template>