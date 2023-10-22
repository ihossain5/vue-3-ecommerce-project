<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import Product from '../../Product.vue'
import LoadingPlaceholder from '../../LoadingPlaceholder.vue'

import { BASE_API_URL } from '../../../config.js';
import AccessoryProduct from './AccessoryProduct.vue';


export default {
  setup() {
    const loading = ref(true); 
    const accessories = ref({});

    onMounted(() => {
      setTimeout(() => {
        axios.get(`${BASE_API_URL}/accessories`)
          .then(response => {
            accessories.value = response.data.resutls.data;
            loading.value = false; 
          })
          .catch(error => {
            console.error(error);
            loading.value = false; 
          });
      }, 2000); // 2-second delay
    });

    return {
      loading,
      accessories,
    };
  },
  components: { Product, LoadingPlaceholder, AccessoryProduct }
}
</script>

<template>
  <section class="accessories_sc spy">
    <div class="container-fluid container-xxxl">
      <div class="sc_title_wrapper">
        <h1 class="sc_title">Accessories</h1>
        <router-link to="/all-accessories" class="br_5 bg_red btnp_1228 tbg_3 hover">
          <span class="fw_5 fs_14 lh_20 fc_white text-uppercase">view all</span>
        </router-link>
      </div>
      <div class="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 g-2 g-md-4">
        <!-- Display a loading indicator or skeleton screen -->
        <LoadingPlaceholder v-if="loading"></LoadingPlaceholder>

        <AccessoryProduct :products="accessories"></AccessoryProduct>

      </div>
    </div>
  </section>
</template>

