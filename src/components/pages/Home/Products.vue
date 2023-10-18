<script>
import { ref,onMounted } from 'vue'
import Product from '../../Product.vue'
import axios from 'axios';
import LoadingPlaceholder from '../../LoadingPlaceholder.vue'
import { BASE_API_URL } from '../../../config.js';

export default {
    setup() {
    const loading = ref(true); 
    const products = ref({});

    onMounted(() => {
      setTimeout(() => {
        axios.get(`${BASE_API_URL}/products`)
          .then(response => {
            products.value = response.data.resutls.data;
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
      products,
    };
  },
  components: { Product, LoadingPlaceholder }
}



</script>

<template>
  <section class="all_product_sc spy">
    <div class="container-fluid container-xxxl">
      <div class="sc_title_wrapper">
        <h1 class="sc_title">All Products</h1>
        <router-link to="/all-products" class="br_5 bg_red btnp_1228 tbg_3 hover">
          <span class="fw_5 fs_14 lh_20 fc_white text-uppercase">view all</span>
        </router-link>
      </div>

      <div class="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 g-2 g-md-4">
         <LoadingPlaceholder v-if="loading"></LoadingPlaceholder>
         <Product :products="products"></Product>
        
      </div>

      <!-- <div class="load_more_wrapper mt-5 pt-3 text-center">
        <a href="#" class="d-inline-block btn_load_more br_5 bg_red btnp_1228 tbg_3 hover">
          <span class="fw_5 fs_14 lh_20 fc_white text-uppercase">
            <img src="./assets/icons/load-more.gif" alt="gif">
            Loading...</span>
        </a>
      </div> -->

    </div>
  </section>
</template>