<script>
import { ref } from 'vue'

export default {
  setup() {
    const deals = ref({})
    return {
        deals
    }
  },
  async created() {
    await fetch(this.BASE_API_URL+"/hot-deals", {
        method: 'GET'
    })
      .then(async (response) => {
        const data = await response.json()

        this.deals = data.resutls.data
      })
      .catch((error) => {return error})
  },
}
</script>

<template>
        <!-- today's deal -->
        <section class="todays_deal_sc spy">
        <div class="container-fluid container-xxxl">
            <div class="sc_title_wrapper">
                <h1 class="sc_title">Today's Deal</h1>
                <!-- <a href="#" class="br_5 bg_red btnp_1228 tbg_3 hover">
                    <span class="fw_5 fs_14 lh_20 fc_white text-uppercase">view all</span>
                </a> -->
            </div>
            <div class="row row-cols-md-2 g-3 g-md-4">
                <div class="row_item" v-for="deal in deals" :key="deal.id">
                    <div class="position-relative">
                        <img :src="deal.banner " alt="thumb" class="w-100 br_5">
                        <div class="abs_content text-center">
                            <img :src="deal.shop_logo" alt="logo">
                            <span class="fw_5 fs_14 lh_20 fc_white text-uppercase mt-2">{{ deal.shop_name }}</span>
                        </div>
                        <p class="fw-5 fs_15 lh_22 fc_white">{{ deal.title }}</p>
                    </div>
                </div>


            </div>
        </div>
    </section>
</template>