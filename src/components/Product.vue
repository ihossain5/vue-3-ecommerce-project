<script>
import { onUnmounted, onMounted, ref, watch, computed } from 'vue'
import axios from 'axios';
import LoadingPlaceholder from './LoadingPlaceholder.vue';
export default {
    props: {
        baseUlr: String, // Define the prop and its type
        selectedSortOption: String, // Define the prop and its type
    },
    setup(props) {
        const loading = ref(true);
        const products = ref([]);
        const from = ref(0);
        const to = ref(0);
        const total = ref(0);
        const currentPage = ref(1);
        const pageSize = 20;
        const scrollObserver = ref(null);
        let loadingMore = false;
        let allDataFetched = false;
        const loadMoreProducts = async () => {
            if (loadingMore || allDataFetched)
                return;
            loadingMore = true;
            try {
                const response = await axios.get(`${props.baseUlr}?pagination=${pageSize}&page=${currentPage.value}`);
                const newProducts = response.data.resutls.data;
                if (newProducts.length === 0) {
                    // If no new data is received, all data has been fetched
                    allDataFetched = true;
                    loading.value = false;
                    return;
                }
                products.value = [...products.value, ...newProducts];
                total.value = response.data.resutls.meta.total;
                from.value = response.data.resutls.meta.from;
                to.value = response.data.resutls.meta.to;
                currentPage.value++;
                loading.value = false;
            }
            catch (error) {
                console.error(error);
            }
            finally {
                loadingMore = false;
                loading.value = false;
            }
        };
        const handleScroll = () => {
            if (allDataFetched || loadingMore)
                return;
            if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 200) {
                loading.value = true;
                loadMoreProducts();
            }
        };
        onMounted(() => {
            loadMoreProducts();
            scrollObserver.value = document.querySelector('#scrollObserver');
            window.addEventListener('scroll', handleScroll);
        });
        onUnmounted(() => {
            window.removeEventListener('scroll', handleScroll);
        });
        // watch(selectedSortOption, () => {
        //     sortProducts();
        // });
        const sortProducts = () => {
            let sorted = [...products.value];
            if (selectedSortOption.value === 'asc') {
                sorted = sorted.sort((a, b) => a.name.localeCompare(b.name));
            }
            else if (selectedSortOption.value === 'dsc') {
                sorted = sorted.sort((a, b) => b.name.localeCompare(a.name));
            }
            else if (selectedSortOption.value === 'price_high_to_low') {
                sorted = sorted.sort((a, b) => b.discounted_price - a.discounted_price);
            }
            else if (selectedSortOption.value === 'price_low_to_high') {
                sorted = sorted.sort((a, b) => a.discounted_price - b.discounted_price);
            }
            else if (selectedSortOption.value === 'default') {
                sorted = sorted.sort((a, b) => a.id - b.id);
                sorted.reverse();
            }
            products.value = sorted;
        };
        const sortedItems = computed(() => {
            return products.value;
        });
        return {
            loading, from, to, total, products, sortProducts, sortedItems
        };
    },
    components: { LoadingPlaceholder }
};
</script>

<template>
<div class="row row-cols-2 row-cols-sm-3 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-2 g-md-4">
    <div class="row_item" v-for="product in products" :key="product.id">
        <div class="position-relative overflow-hidden prd_card br_5 bxy_gl bs_15 tbs_tb_3 hover">
            <a href="#" class="d-block">
                <div class="position-relative d-flex justify-content-center align-items-center img_box">
                    <img :src="product.images" alt="thumb" class="w-100">

                    <div class="position-absolute sold_smg_box" v-if="product.discount !== null">
                        <h4 class="fw_6 fs_20 lh_29 fc_red text-center text-uppercase">sold out</h4>
                    </div>
                    <div class="position-absolute disc_box bg_red" v-if="product.discount !== null">
                        <span class="fs_14 lh_20 fc_white">{{product.discount}}%</span>
                        <div class="position-absolute triangle_topleft"></div>
                    </div>
                </div>
                <div class="content text-center">
                    <h6 class="mb-0 mb-md-3 fw_4 fs_17 lh_22 fc_black">{{ product.name }}</h6>
                    <div class="rate_wrapper">
                        <div class="ratings">
                            <i :data-star="product.rating"></i>
                        </div>
                    </div>
                    <h5
                        class="d-flex justify-content-center align-items-center gap-2 gap-md-4 pt-0 pt-md-3 fs_18 lh_22 fc_black">
                        <span>BDT {{ product.discounted_price }}</span>
                    </h5>
                </div>
            </a>
            <div class="position-absolute d-flex group_buttons br_5">
                <button type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <g clip-path="url(#clip0_1293_6366)">
                            <path
                                d="M7.49935 18.3332C7.95959 18.3332 8.33268 17.9601 8.33268 17.4998C8.33268 17.0396 7.95959 16.6665 7.49935 16.6665C7.03911 16.6665 6.66602 17.0396 6.66602 17.4998C6.66602 17.9601 7.03911 18.3332 7.49935 18.3332Z"
                                stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M16.6673 18.3332C17.1276 18.3332 17.5007 17.9601 17.5007 17.4998C17.5007 17.0396 17.1276 16.6665 16.6673 16.6665C16.2071 16.6665 15.834 17.0396 15.834 17.4998C15.834 17.9601 16.2071 18.3332 16.6673 18.3332Z"
                                stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M0.833984 0.833496H4.16732L6.40065 11.9918C6.47686 12.3755 6.68557 12.7201 6.99027 12.9654C7.29497 13.2107 7.67623 13.341 8.06732 13.3335H16.1673C16.5584 13.341 16.9397 13.2107 17.2444 12.9654C17.5491 12.7201 17.7578 12.3755 17.834 11.9918L19.1673 5.00016H5.00065"
                                stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1293_6366">
                                <rect width="20" height="20" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </button>
                <button type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path
                            d="M17.3671 3.84172C16.9415 3.41589 16.4361 3.0781 15.8799 2.84763C15.3237 2.61716 14.7275 2.49854 14.1254 2.49854C13.5234 2.49854 12.9272 2.61716 12.371 2.84763C11.8147 3.0781 11.3094 3.41589 10.8838 3.84172L10.0004 4.72506L9.11709 3.84172C8.25735 2.98198 7.09129 2.49898 5.87542 2.49898C4.65956 2.49898 3.4935 2.98198 2.63376 3.84172C1.77401 4.70147 1.29102 5.86753 1.29102 7.08339C1.29102 8.29925 1.77401 9.46531 2.63376 10.3251L3.51709 11.2084L10.0004 17.6917L16.4838 11.2084L17.3671 10.3251C17.7929 9.89943 18.1307 9.39407 18.3612 8.83785C18.5917 8.28164 18.7103 7.68546 18.7103 7.08339C18.7103 6.48132 18.5917 5.88514 18.3612 5.32893C18.1307 4.77271 17.7929 4.26735 17.3671 3.84172Z"
                            stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
                <button type="button" data-bs-toggle="modal" data-bs-target="#quickView">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path
                            d="M0.833008 10.0002C0.833008 10.0002 4.16634 3.3335 9.99967 3.3335C15.833 3.3335 19.1663 10.0002 19.1663 10.0002C19.1663 10.0002 15.833 16.6668 9.99967 16.6668C4.16634 16.6668 0.833008 10.0002 0.833008 10.0002Z"
                            stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path
                            d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
                            stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
                <!-- <button type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path
                            d="M16.0413 6.25C15.323 6.25 14.6342 5.96466 14.1263 5.45675C13.6183 4.94884 13.333 4.25996 13.333 3.54167C13.333 2.82337 13.6183 2.1345 14.1263 1.62659C14.6342 1.11867 15.323 0.833334 16.0413 0.833334C16.7596 0.833334 17.4485 1.11867 17.9564 1.62659C18.4643 2.1345 18.7497 2.82337 18.7497 3.54167C18.7497 4.25996 18.4643 4.94884 17.9564 5.45675C17.4485 5.96466 16.7596 6.25 16.0413 6.25ZM14.583 3.54167C14.5831 3.73323 14.6208 3.92291 14.6942 4.09987C14.7676 4.27684 14.8751 4.43762 15.0106 4.57304C15.1461 4.70846 15.3069 4.81586 15.4839 4.88912C15.6609 4.96238 15.8506 5.00005 16.0422 5C16.2337 4.99995 16.4234 4.96216 16.6004 4.8888C16.7773 4.81544 16.9381 4.70794 17.0735 4.57245C17.209 4.43695 17.3164 4.27611 17.3896 4.09911C17.4629 3.9221 17.5006 3.7324 17.5005 3.54083C17.5004 3.15395 17.3466 2.78295 17.073 2.50946C16.7993 2.23597 16.4282 2.08239 16.0413 2.0825C15.6545 2.08261 15.2835 2.23641 15.01 2.51005C14.7365 2.7837 14.5829 3.15478 14.583 3.54167Z"
                            fill="#1A1A1A" />
                        <path
                            d="M1.43333 8.41234C1.55052 8.2953 1.70937 8.22955 1.875 8.22955C2.04063 8.22955 2.19948 8.2953 2.31667 8.41234L3.33333 9.429L3.33333 6.0415C3.33333 5.2127 3.66257 4.41785 4.24862 3.83179C4.83468 3.24574 5.62953 2.9165 6.45833 2.9165H13.75C13.9158 2.9165 14.0747 2.98235 14.1919 3.09956C14.3092 3.21677 14.375 3.37574 14.375 3.5415C14.375 3.70726 14.3092 3.86624 14.1919 3.98345C14.0747 4.10066 13.9158 4.1665 13.75 4.1665H6.45833C6.2121 4.1665 5.96829 4.215 5.7408 4.30923C5.51332 4.40346 5.30662 4.54157 5.13251 4.71568C4.9584 4.88979 4.82029 5.09649 4.72606 5.32397C4.63183 5.55146 4.58333 5.79528 4.58333 6.0415L4.58333 9.42817L5.6 8.4115C5.71793 8.29771 5.87584 8.23479 6.03971 8.23629C6.20358 8.23779 6.36031 8.30359 6.47614 8.41953C6.59196 8.53546 6.65762 8.69225 6.65896 8.85613C6.66031 9.02 6.59724 9.17785 6.48333 9.29567L4.4 11.379C4.28281 11.496 4.12396 11.5618 3.95833 11.5618C3.79271 11.5618 3.63385 11.496 3.51667 11.379L1.43333 9.29567C1.31629 9.17848 1.25055 9.01963 1.25055 8.854C1.25055 8.68838 1.31629 8.52953 1.43333 8.41234ZM3.95833 13.7498C4.67663 13.7498 5.3655 14.0352 5.87341 14.5431C6.38133 15.051 6.66667 15.7399 6.66667 16.4582C6.66667 17.1765 6.38133 17.8653 5.87341 18.3733C5.3655 18.8812 4.67663 19.1665 3.95833 19.1665C3.24004 19.1665 2.55116 18.8812 2.04325 18.3733C1.53534 17.8653 1.25 17.1765 1.25 16.4582C1.25 15.7399 1.53534 15.051 2.04325 14.5431C2.55116 14.0352 3.24004 13.7498 3.95833 13.7498ZM5.41667 16.4582C5.41656 16.0713 5.26276 15.7003 4.98911 15.4268C4.71547 15.1533 4.34438 14.9997 3.9575 14.9998C3.57062 14.9999 3.19962 15.1537 2.92613 15.4274C2.65264 15.701 2.49906 16.0721 2.49917 16.459C2.49922 16.6506 2.53701 16.8402 2.61037 17.0172C2.68373 17.1942 2.79122 17.355 2.92672 17.4904C3.20037 17.7639 3.57145 17.9174 3.95833 17.9173C4.34522 17.9172 4.71621 17.7634 4.9897 17.4898C5.26319 17.2161 5.41678 16.8451 5.41667 16.4582Z"
                            fill="#1A1A1A" />
                        <path
                            d="M18.5667 11.5877C18.4495 11.7047 18.2906 11.7704 18.125 11.7704C17.9594 11.7704 17.8005 11.7047 17.6833 11.5877L16.6667 10.571V13.9585C16.6667 14.7873 16.3374 15.5822 15.7514 16.1682C15.1653 16.7543 14.3705 17.0835 13.5417 17.0835H6.25C6.08424 17.0835 5.92527 17.0176 5.80806 16.9004C5.69085 16.7832 5.625 16.6243 5.625 16.4585C5.625 16.2927 5.69085 16.1338 5.80806 16.0166C5.92527 15.8993 6.08424 15.8335 6.25 15.8335H13.5417C14.0389 15.8335 14.5159 15.636 14.8675 15.2843C15.2191 14.9327 15.4167 14.4558 15.4167 13.9585V10.5718L14.4 11.5885C14.3231 11.6688 14.2262 11.7271 14.1192 11.7573C14.0122 11.7875 13.899 11.7886 13.7915 11.7604C13.684 11.7321 13.5859 11.6757 13.5076 11.5968C13.4292 11.5179 13.3734 11.4195 13.3458 11.3118C13.3179 11.2045 13.3189 11.0917 13.3489 10.9849C13.379 10.8782 13.4369 10.7813 13.5167 10.7043L15.6 8.621C15.7172 8.50395 15.876 8.43821 16.0417 8.43821C16.2073 8.43821 16.3661 8.50395 16.4833 8.621L18.5667 10.7043C18.6837 10.8215 18.7495 10.9804 18.7495 11.146C18.7495 11.3116 18.6837 11.4705 18.5667 11.5877Z"
                            fill="#1A1A1A" />
                    </svg>
                </button> -->
            </div>
        </div>
    </div>
    <div ref="scrollObserver" style="height: 1px;"></div>
    <LoadingPlaceholder v-if="loading"></LoadingPlaceholder>
</div>
</template>