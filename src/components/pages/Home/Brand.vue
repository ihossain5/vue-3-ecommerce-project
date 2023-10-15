<script>
import { ref } from 'vue'

export default {
  setup() {
    const brands = ref({})
    return {
        brands
    }
  },
  async created() {
    await fetch(this.BASE_API_URL+"/brands", {
        method: 'GET' //optional
    })
      .then(async (response) => {
        const data = await response.json()

        this.brands = data.resutls.data
      })
      .catch((error) => {return error})
  },
}
</script>

<template>
  <section class="our_brands_sc spy">
        <div class="container-fluid container-xxxl">
            <div class="sc_title_wrapper">
                <h1 class="sc_title">Our Brands</h1>
                <a href="#" class="br_5 bg_red btnp_1228 tbg_3 hover">
                    <span class="fw_5 fs_14 lh_20 fc_white text-uppercase">view all</span>
                </a>
            </div>
            <div class="row row-cols-3 row-cols-sm-4 row-cols-lg-5 row-cols-xl-6 gx-2 gy-3 gy-md-4 gx-md-5">
                
                <div class="row_item" v-for="brand in brands" :key="brand.id">
                    <a href="single-brand.html"
                        class="d-flex justify-content-center align-items-center brand_card bg_white br_5 bxy_gl bs_15 tbs_tb_3 hover">
                        <img :src="brand.photo" alt="logo" class="w-100">
                    </a>
                </div>

               
            </div>
        </div>
    </section>
</template>