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
   <!-- breadcrumb -->
   <section class="breadcrum_sc">
        <div class="container-fluid container-xxxl">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <router-link to="/" class="fs_16 lh_23 fc_red">Home</router-link>
                    </li>
                    <li class="breadcrumb-item fs_16 lh_23 fc_black active" aria-current="page">Blogs</li>
                </ol>
            </nav>
        </div>
    </section>

    <section class="blogs spb">
        <div class="container-fluid container-xxxl">
            <div class="sc_title_1_wrapper">
                <h1 class="sc_title_1">blogs</h1>
            </div>

            <div class="d-grid blog_card_1" v-for="blog in blogs" :key="blog.id">
                <div class="grid_item">
                    <img :src="blog.photo" alt="thumb" class="w-100">
                </div>
                <div class="grid_item"  >
                    <div class="pb-3 d-flex align-items-center gap-3">
                        <div class="d-flex align-items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                fill="none">
                                <path
                                    d="M15.8333 3.33301H4.16667C3.24619 3.33301 2.5 4.0792 2.5 4.99967V16.6663C2.5 17.5868 3.24619 18.333 4.16667 18.333H15.8333C16.7538 18.333 17.5 17.5868 17.5 16.6663V4.99967C17.5 4.0792 16.7538 3.33301 15.8333 3.33301Z"
                                    stroke="#DD1E1E" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path d="M13.333 1.66699V5.00033" stroke="#DD1E1E" stroke-width="1.5"
                                    stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M6.66699 1.66699V5.00033" stroke="#DD1E1E" stroke-width="1.5"
                                    stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M2.5 8.33301H17.5" stroke="#DD1E1E" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                            <span class="fw_5 fs_15 lh_22">{{ blog.date }}</span>
                        </div>
                        <div class="d-flex align-items-center gap-2">
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
                            <span class="fw_5 fs_15 lh_22">By: {{ blog.created_by}}</span>
                        </div>
                    </div>
                    <h2 class="pb-3 fw_6 fs_25 lh_36 le_03">{{blog.title}}</h2>
                    <p class="mb-3 mb-md-4 fs_17 lh_28">{{ blog.description.replace(/<\/?[^>]+(>|$)/g, "") }}</p>
                    <a href=""
                        class="fw_5 fs_15 lh_22 fc_red text-capitalize text-decoration-underline">read more</a>
                </div>
            </div>

        </div>
    </section>
</template>