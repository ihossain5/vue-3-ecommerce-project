<script>
import { ref, onMounted, watch  } from 'vue';
import axios from 'axios';

import { BASE_API_URL } from '../config.js';


export default {
    // props:{
    //     selectedCategoryCheckbox: String
    // },
    setup() {
        const loading = ref(true);
        const categories = ref({});
        const allItemsSelected = ref('all');
        const selectedCategoryCheckbox = ref(null);

        onMounted(() => {
            setTimeout(() => {
                axios.get(`${BASE_API_URL}/all-categories`)
                    .then(response => {
                        categories.value = response.data.resutls;
                        loading.value = false;
                    })
                    .catch(error => {
                        console.error(error);
                        loading.value = false;
                    });
            }); // 2-second delay
        });

    watch(selectedCategoryCheckbox, (newVal, oldVal) => {
      console.log('Selected Category Changed:', newVal);
    });

        return {
            loading,
            categories,
            selectedCategoryCheckbox,
            allItemsSelected
        };
    },
}
</script>

<template>
    <div class="filter_wrapper br_5 overflow-hidden">
        <div class="d-flex justify-content-between align-items-center filter_header bg_black">
            <h4 class="fw_5 fs_20 lh_32 fc_white text-uppercase">filter</h4>
            <button class="fw_5 fs_14 lh_20 fc_white text-uppercase">clear all</button>
        </div>
        <div class="filter_body">
            <div class="filter_item">
                <h5 class=" pb-2 fw_5 fs_17 lh_25 bb_gl  text-uppercase">MAIN CATEGORY</h5>
                <div>
                    <div class="d-flex gap-2 mt-3 pt-1">
                        <input type="radio" name="mainCtg" :id="'category-all'" v-model="allItemsSelected" value="all">
                        <label class="fs_15 lh_25" :for="'category-all'">All Items</label>
                    </div>

                    <div class="d-flex gap-2 mt-3" v-for="category in categories" :key="category.id">
                        <input type="radio" name="mainCtg" :id="'category-' + category.id"
                            v-model="selectedCategoryCheckbox" :value="category.id">
                        <label class="fs_15 lh_25" :for="'category-' + category.id">{{ category.name }}</label>
                    </div>

                </div>
            </div>
            <div class="filter_item accordion" id="accordionExample">
                <div class="accordion-item">
                    <div class="accordion-header" id="headingOne">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">brand</button>
                    </div>
                    <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <div class="d-flex gap-2 mt-3 pt-1">
                                <input type="checkbox">
                                <label class="fs_15 lh_25">yahama</label>
                            </div>
                            <div class="d-flex gap-2 mt-3">
                                <input type="checkbox">
                                <label class="fs_15 lh_25">Bajaj</label>
                            </div>
                            <div class="d-flex gap-2 mt-3">
                                <input type="checkbox">
                                <label class="fs_15 lh_25">BMW</label>
                            </div>
                            <div class="d-flex gap-2 mt-3">
                                <input type="checkbox">
                                <label class="fs_15 lh_25">KTM</label>
                            </div>
                            <div class="d-flex gap-2 mt-3">
                                <input type="checkbox">
                                <label class="fs_15 lh_25">Runner</label>
                            </div>
                            <div class="d-flex gap-2 mt-3">
                                <input type="checkbox">
                                <label class="fs_15 lh_25">Suzuki</label>
                            </div>
                            <div class="d-flex gap-2 mt-3">
                                <input type="checkbox">
                                <label class="fs_15 lh_25">Hero</label>
                            </div>
                            <div class="d-flex gap-2 mt-3">
                                <input type="checkbox">
                                <label class="fs_15 lh_25">TVS</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="filter_item accordion">
                    <div class="accordion-item">
                        <div class="accordion-header" id="headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo" aria-expanded="false"
                                aria-controls="collapseTwo">motor</button>
                        </div>
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                            data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <div class="d-flex gap-2 mt-3 pt-1">
                                    <input type="checkbox">
                                    <label class="fs_15 lh_25">ADV 150 (2019 - 2022)</label>
                                </div>
                                <div class="d-flex gap-2 mt-3">
                                    <input type="checkbox">
                                    <label class="fs_15 lh_25">ADV 160 (2022 - Sekarang)</label>
                                </div>
                                <div class="d-flex align-items-start gap-2 mt-3">
                                    <input type="checkbox">
                                    <label class="fs_15 lh_25">BeAT dan BeAT Street K1A (2020 -
                                        Sekarang)</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>