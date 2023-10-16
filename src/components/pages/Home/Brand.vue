<script>
import { ref } from 'vue'
import SingleBrand from '../../SingleBrand.vue'

export default {
    setup() {
        const brands = ref({});
        return {
            brands
        };
    },
    async created() {
        await fetch(this.BASE_API_URL + "/brands?pagination=12", {
            method: 'GET' //optional
        })
            .then(async (response) => {
            const data = await response.json();
            this.brands = data.resutls.data;
        })
            .catch((error) => { return error; });
    },
    components: { SingleBrand }
}
</script>

<template>
  <section class="our_brands_sc spy">
        <div class="container-fluid container-xxxl">
            <div class="sc_title_wrapper">
                <h1 class="sc_title">Our Brands</h1>
                <router-link to="/all-brands" class="br_5 bg_red btnp_1228 tbg_3 hover">
                    <span class="fw_5 fs_14 lh_20 fc_white text-uppercase">view all</span>
                </router-link>
            </div>
            <div class="row row-cols-3 row-cols-sm-4 row-cols-lg-5 row-cols-xl-6 gx-2 gy-3 gy-md-4 gx-md-5">
                <SingleBrand :brands="brands"></SingleBrand>
            </div>
        </div>
    </section>
</template>