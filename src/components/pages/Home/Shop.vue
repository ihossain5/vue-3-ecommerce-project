<script>
import { ref } from 'vue'

export default {
  setup() {
    const shops = ref({})
    return {
        shops
    }
  },
  async created() {
    await fetch(this.BASE_API_URL+"/shops", {
        method: 'GET' //optional
    })
      .then(async (response) => {
        const data = await response.json()

        this.shops = data.resutls.data
      })
      .catch((error) => {return error})
  },
}
</script>

<template>
    <section class="our_shop_sc spy">
        <div class="container-fluid container-xxxl">
            <div class="sc_title_wrapper">
                <h1 class="sc_title">our shop</h1>
                <!-- <a href="#" class="br_5 bg_red btnp_1228 tbg_3 hover">
                    <span class="fw_5 fs_14 lh_20 fc_white text-uppercase">view all</span>
                </a> -->
            </div>
            <div class="row row-cols-2 row-cols-lg-3 g-2 g-sm-3 g-xl-5">
                <div class="row_item" v-for="shop in shops" :key="shop.id">
                    <div
                        class="d-flex flex-wrap flex-lg-nowrap gap-2 gap-md-3 gap-lg-4 shop_card br_5 bxy_gl bs_15 tbs_tb_3 hover">
                        <div>
                            <div class="img_box">
                                <img :src="shop.logo" alt="thumb" class="w-100">
                            </div>
                        </div>
                        <div>
                            <div
                                class="h-100 d-flex flex-column justify-content-between align-items-center align-items-md-start gap-2">
                                <div class="text-center text-md-start">
                                    <h4 class="mb-md-2 fw_5 fs_20 lh_29">{{ shop.name }}</h4>
                                    <div class="rate_wrapper">
                                        <div class="ratings">
                                            <i :data-star="shop.rating ?? 0"></i>
                                        </div>
                                    </div>
                                    <p class="pt-md-3 fs_15 lh_22 fc_gd">{{ shop.division }}</p>
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
</template>