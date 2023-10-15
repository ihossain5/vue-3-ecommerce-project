<script>
import { ref } from 'vue'

export default {
  setup() {
    const blogs = ref({})
    return {
        blogs
    }
  },
  async created() {
    await fetch(this.BASE_API_URL+"/blogs", {
        method: 'GET' //optional
    })
      .then(async (response) => {
        const data = await response.json()

        this.blogs = data.resutls.data
      })
      .catch((error) => {return error})
  },
}
</script>

<template>
  <section class="our_blog_sc spy">
    <div class="container-fluid container-xxxl">
      <div class="sc_title_wrapper">
        <h1 class="sc_title">our blogs</h1>
        <a href="#" class="br_5 bg_red btnp_1228 tbg_3 hover">
          <span class="fw_5 fs_14 lh_20 fc_white text-uppercase">view all</span>
        </a>
      </div>
      <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-2 g-md-3 g-lg-4">

        <div class="row_item" v-for="blog in blogs" :key="blog.id">
          <div class="overflow-hidden blog_card br_5 bxy_gl bs_15 tbs_tb_3 hover">
            <img :src="blog.photo" alt="thumb" class="w-100">
            <div class="content">
              <div class="d-flex align-items-center gap-2 svg_20">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M16.6663 17.5V15.8333C16.6663 14.9493 16.3152 14.1014 15.69 13.4763C15.0649 12.8512 14.2171 12.5 13.333 12.5H6.66634C5.78229 12.5 4.93444 12.8512 4.30932 13.4763C3.6842 14.1014 3.33301 14.9493 3.33301 15.8333V17.5"
                    stroke="#DD1E1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M10.0003 9.16667C11.8413 9.16667 13.3337 7.67428 13.3337 5.83333C13.3337 3.99238 11.8413 2.5 10.0003 2.5C8.15938 2.5 6.66699 3.99238 6.66699 5.83333C6.66699 7.67428 8.15938 9.16667 10.0003 9.16667Z"
                    stroke="#DD1E1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <span class="fw_5 fs_15 lh_22">By: {{ blog.created_by }}</span>
              </div>
              <h4 class="fw_6 fs_20 lh_29">{{ blog.title }}</h4>
              <div class="d-flex flex-wrap justify-content-between align-items-center pt-2 pt-md-3 bt_gl gap-2">
                <div class="d-flex align-items-center gap-2 svg_20">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M15.8333 3.3335H4.16667C3.24619 3.3335 2.5 4.07969 2.5 5.00016V16.6668C2.5 17.5873 3.24619 18.3335 4.16667 18.3335H15.8333C16.7538 18.3335 17.5 17.5873 17.5 16.6668V5.00016C17.5 4.07969 16.7538 3.3335 15.8333 3.3335Z"
                      stroke="#DD1E1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M13.333 1.6665V4.99984" stroke="#DD1E1E" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M6.66699 1.6665V4.99984" stroke="#DD1E1E" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M2.5 8.3335H17.5" stroke="#DD1E1E" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                  </svg>
                  <span class="fw_5 fs_15 lh_22">{{ blog.date }}</span>
                </div>
                <a href="#" class="ob_rm_btn fw_5 fs_15 lh_22 fc_red text-capitalize text-decoration-underline">read
                  more</a>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </section>
</template>