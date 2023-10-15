<script>
import { ref } from 'vue'
import Product from '../../Product.vue'

export default {
    setup() {
        const accessories = ref({});
        return {
            accessories
        };
    },
    async created() {
        await fetch("https://api.twowheelersbd.com/api/accessories", {
            method: 'GET' //optional
        })
            .then(async (response) => {
            const data = await response.json();
            this.accessories = data.resutls.data;
        })
            .catch((error) => { return error; });
    },
    components: { Product }
}
</script>

<template>

  <section class="accessories_sc spy">
    <div class="container-fluid container-xxxl">
      <div class="sc_title_wrapper">
        <h1 class="sc_title">Accessories</h1>
        <a href="#" class="br_5 bg_red btnp_1228 tbg_3 hover">
          <span class="fw_5 fs_14 lh_20 fc_white text-uppercase">view all</span>
        </a>
      </div>
      <div class="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 g-2 g-md-4">

        <Product :products="accessories"></Product>
        
      </div>
    </div>
  </section>
</template>