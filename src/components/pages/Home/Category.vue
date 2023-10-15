<script>
import { ref } from 'vue'

export default {
  setup() {
    const categories = ref({})
    return {
        categories
    }
  },
  async created() {
    await fetch(this.BASE_API_URL+"/categories", {
        method: 'GET' //optional
    })
      .then(async (response) => {
        const data = await response.json()

        this.categories = data.resutls
      })
      .catch((error) => {return error})
  },
}
</script>

<template>
    <section class="our_category_sc spb">
        <div class="container-fluid container-xxxl">
            <div class="sc_title_wrapper">
                <h1 class="sc_title">Our Categories</h1>
                <a href="categories.html" class="br_5 bg_red btnp_1228 tbg_3 hover">
                    <span class="fw_5 fs_14 lh_20 fc_white text-uppercase">view all</span>
                </a>
            </div>
            <div
                class="row row-cols-3 row-cols-sm-4 row-cols-lg-5 row-cols-xl-6 gx-2 gx-md-3 gx-lg-4 gy-3 gy-md-4 gy-lg-5 justify-content-center">

                <div class="row_item" v-for="category in categories" :key="category.id">
                    <a href="#" class="d-block category_card bxy_gl br_5 text-center hover tb_3">
                        <div class="img_box d-flex justify-content-center align-items-center">
                            <img :src="category.photo" alt="logo" class="w-100">
                        </div>
                        <div class="content">
                            <h4 class="mb-1 fs_20 lh_29 fc_black">{{category.name}}</h4>
                            <p class="fs_15 lh_22 fc_g9">30 products</p>
                        </div>
                    </a>
                </div>
                
            </div>
        </div>
    </section>
</template>