<template>
    <div class="col-md-4 col-lg-6">
        <div class="offcanvas offcanvas-top offcanvas_search" tabindex="-1" id="offcanvasSearch"
            aria-labelledby="offcanvasSearchLabel">
            <div class="offcanvas-header">
                <div></div>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <div class="position-relative">
                    <form @submit.prevent="search">
                        <div class="input-group">
                            <input v-model="searchQuery" type="text" class="form-control fs_14 fc_black"
                                placeholder="Search Here..." aria-label="Search Here..." aria-describedby="header-search">
                            <span @click="search"
                                class="input-group-text bg_red br_5 fw_5 fs_14 fc_white border-0 text-uppercase tbg_3 hover"
                                id="header-search">search</span>
                        </div>
                    </form>
                    <div class="search_result position-absolute" v-if="searchResults.length > 0">
                        <div class="">
                            <!-- Display search results here -->
                            <a v-for="result in searchResults" :key="result.id" href="#"
                                class="d-flex align-items-center gap-2 mb-3">
                                <img :src="result.images[0]" alt="thumb">
                                <p class="fs_14 lh_20 fc_gd">{{ result.name }}</p>
                            </a>
                            <div class="">
                                <a href="search-result.html"
                                    class="sr_btn d-flex justify-content-center align-item-center gap-1">
                                    <span class="fw_5 fs_14 lh_20 fc_red text-uppercase">View all {{ totalProducts }}
                                        Products</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                        fill="none">
                                        <path d="M5 12H19" stroke="#DD1E1E" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path d="M12 5L19 12L12 19" stroke="#DD1E1E" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>     
                    <div class="search_result position-absolute" v-if="notfound">
                        <div class="">
                            <!-- Display search results here -->
                            <p> Product not found with keyword "{{ searchQuery }}"</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import { ref, watch } from 'vue';
import axios from 'axios';
import { BASE_API_URL } from '../config';
import _ from 'lodash';

export default {
    setup() {
        const searchQuery = ref('');
        const searchResults = ref([]);
        const notfound = ref(false);
        const totalProducts = ref(0);

           // Debounce the search function to avoid rapid API requests
           const debouncedSearch = _.debounce(async () => {
            await fetchSearchResults(searchQuery.value);
        }, 300); // Adjust the debounce delay as needed


        const fetchSearchResults = async (search) => {
            try {
                if (searchQuery.value !== '') {
                    const response = await axios.get(`${BASE_API_URL}/search-products`, {
                        params: { 
                            search,
                            pagination:5
                         },
                    });

                    if (response.data && response.data.resutls) {
                        notfound.value = false
                        searchResults.value = response.data.resutls.data;
                        totalProducts.value = response.data.resutls.meta.total
                    } else {
                        console.error('Invalid API response format:', response);
                    }
                }else{
                    searchResults.value = [];
                }

            } catch (error) {
                searchResults.value = [];
                notfound.value = true
            }
        };

        const search = async () => {
            // await fetchSearchResults(searchQuery.value);
            debouncedSearch();
        };

        // Watch for changes in searchQuery and trigger the search function
        watch(searchQuery, search, { immediate: true });

        return {
            searchQuery,
            searchResults,
            search,
            notfound,
            totalProducts
        };
    },
};
</script>
  