<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';

import { BASE_API_URL } from '../../../config.js';


export default {
  setup() {
    const loading = ref(true); 
    const categories = ref({});
    const filteredData = ref([]);

    onMounted(() => {
      setTimeout(() => {
        axios.get(`${BASE_API_URL}/categories`)
          .then(response => {
            categories.value = response.data.resutls;
            filteredData.value = categories.value.filter(item => item.is_shown_sidebar === 1);
            loading.value = false; 
          })
          .catch(error => {
            console.error(error);
            loading.value = false; 
          });
      }); // 2-second delay
    });


    return {
      loading,
      categories,
      filteredData,

    };
  },
}
</script>

<template>
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

              <div class="catg_item" v-for="category in filteredData" :key="category.id">
                <a href="#" class="d-grid gap-3">
                  <img :src="category.photo" alt="icon">
                  <span class="fs_15 lh_22">{{ category.name }}</span>
                </a>
                <div class="sub_category">
                  <div class="row row-cols-4 gy-3 gy-lg-4 gx-3 gx-lg-4 gx-xl-5">

                    <div class="row_item" v-for="subcategory in category.subcategories" :key="subcategory.id">
                      <a href="#" class="d-grid gap-3">
                        <img :src="subcategory.photo" alt="icon">
                        <span class="fs_15 lh_22">{{ subcategory.name }}</span>
                      </a>
                    </div>
                    
                  </div>
                </div>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

