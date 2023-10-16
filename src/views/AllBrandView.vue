<script>
import { ref } from 'vue'
import SingleBrand from '../components/SingleBrand.vue'

export default {
    setup() {
        const brands = ref({});
        return {
            brands
        };
    },
    async created() {
        await fetch(this.BASE_API_URL + "/all-brands", {
            method: 'GET' //optional
        })
            .then(async (response) => {
                const data = await response.json();
                this.brands = data.resutls;
            })
            .catch((error) => { return error; });
    },
    components: { SingleBrand }
}
</script>

<template>
    <section class="breadcrum_sc">
        <div class="container-fluid container-xxxl">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <router-link to="/" class="fs_16 lh_23 fc_red">Home</router-link>
                    </li>
                    <li class="breadcrumb-item fs_16 lh_23 fc_black active" aria-current="page">Our Brands</li>
                </ol>
            </nav>
        </div>
    </section>
    <section class="bg-transparent our_brands_sc spb">
        <div class="container-fluid container-xxxl">
            <h1 class="sc_title_1">our brands</h1>
            <div class="row row-cols-3 row-cols-sm-4 row-cols-lg-5 row-cols-xl-6 gx-2 gx-md-5 gy-3 gy-md-4 gy-lg-5">
                <SingleBrand :brands="brands"></SingleBrand>
            </div>
        </div>
    </section>
</template>