<script>
import { onUnmounted, onMounted, ref, computed } from "vue";
import axios from "axios";
import LoadingPlaceholder from "./LoadingPlaceholder.vue";
import { useCartStore } from "../store/cart";
import { useToast } from "vue-toastification";
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
      if (loadingMore || allDataFetched) return;
      loadingMore = true;

      setTimeout(async () => {
        try {
          const response = await axios.get(
            `${props.baseUlr}?pagination=${pageSize}&page=${currentPage.value}`
          );
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
        } catch (error) {
          console.error(error);
        } finally {
          loadingMore = false;
          loading.value = false;
        }
      }, 1000); // Simulating a 1-second delay
    };

    const handleScroll = () => {
      if (allDataFetched || loadingMore) return;
      if (
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 200
      ) {
        loading.value = true;
        loadMoreProducts();
      }
    };
    onMounted(() => {
      loadMoreProducts();
      scrollObserver.value = document.querySelector("#scrollObserver");
      window.addEventListener("scroll", handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });

    const sortedProducts = computed(() => {
      let sorted = [...products.value];

      if (props.selectedSortOption === "asc") {
        sorted.sort((a, b) => a.name.localeCompare(b.name));
      } else if (props.selectedSortOption === "dsc") {
        sorted.sort((a, b) => b.name.localeCompare(a.name));
      } else if (props.selectedSortOption === "price_high_to_low") {
        sorted.sort((a, b) => b.discounted_price - a.discounted_price);
      } else if (props.selectedSortOption === "price_low_to_high") {
        sorted.sort((a, b) => a.discounted_price - b.discounted_price);
      } else if (props.selectedSortOption === "default") {
        sorted = sorted.sort((a, b) => a.id - b.id);
        sorted.reverse();
      }

      return sorted;
    });
    
    const sanitizeProductName = (name) => {
      return encodeURIComponent(name).replace(/%20/g, '-');
    };

    const cart = useCartStore();

    const addToCart = (product) => {
      const cartItem = {
        product_id: product.id,
        shop_id: product.shop_id,
        name: product.name,
        image: product.images[0],
        price: product.discounted_price,
        quantity: "1",
        total_price: product.discounted_price,
      };

      const shopId = product.shop_id;

      cart.addToCart(shopId, cartItem);

      const toast = useToast();
      toast.success("Items has added into your cart");
    };

    return {
      loading,
      from,
      to,
      total,
      products,
      sortedProducts,
      addToCart,
      sanitizeProductName
    };
  },
  components: { LoadingPlaceholder },
};
</script>

<template>
  <div class="row_item" v-for="product in sortedProducts" :key="product.id">
    <div
      class="position-relative overflow-hidden prd_card br_5 bxy_gl bs_15 tbs_tb_3 hover"
    >
      <router-link  :to="{ path: `/products/${sanitizeProductName(product.name)}/details`, query: { id: product.id } }" class="d-block">
        <div
          class="position-relative d-flex justify-content-center align-items-center img_box"
        >
          <img :src="product.images" alt="thumb" class="w-100" />

          <div
            class="position-absolute sold_smg_box"
            v-if="product.quantity < 1"
          >
            <h4 class="fw_6 fs_20 lh_29 fc_red text-center text-uppercase">
              sold out
            </h4>
          </div>
          <div
            class="position-absolute disc_box bg_red"
            v-if="product.discount !== null"
          >
            <span class="fs_14 lh_20 fc_white">{{ product.discount }}%</span>
            <div class="position-absolute triangle_topleft"></div>
          </div>
        </div>
        <div class="content text-center">
          <h6 class="mb-0 mb-md-3 fw_4 fs_17 lh_22 fc_black">
            {{ product.name }}
          </h6>
          <div class="rate_wrapper">
            <div class="ratings">
              <i :data-star="product.rating"></i>
            </div>
          </div>
          <h5
            class="d-flex justify-content-center align-items-center gap-2 gap-md-4 pt-0 pt-md-3 fs_18 lh_22 fc_black"
          >
          <span class="fc_gl text-decoration-line-through"  v-if="product.discount !== null">BDT {{ product.regular_price }}</span>
            <span>BDT {{ product.discounted_price }}</span>
          </h5>
        </div>
      </router-link>
      <div class="position-absolute d-flex group_buttons br_5">
        <button type="button" @click="addToCart(product)">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <g clip-path="url(#clip0_1293_6366)">
              <path
                d="M7.49935 18.3332C7.95959 18.3332 8.33268 17.9601 8.33268 17.4998C8.33268 17.0396 7.95959 16.6665 7.49935 16.6665C7.03911 16.6665 6.66602 17.0396 6.66602 17.4998C6.66602 17.9601 7.03911 18.3332 7.49935 18.3332Z"
                stroke="#1A1A1A"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.6673 18.3332C17.1276 18.3332 17.5007 17.9601 17.5007 17.4998C17.5007 17.0396 17.1276 16.6665 16.6673 16.6665C16.2071 16.6665 15.834 17.0396 15.834 17.4998C15.834 17.9601 16.2071 18.3332 16.6673 18.3332Z"
                stroke="#1A1A1A"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M0.833984 0.833496H4.16732L6.40065 11.9918C6.47686 12.3755 6.68557 12.7201 6.99027 12.9654C7.29497 13.2107 7.67623 13.341 8.06732 13.3335H16.1673C16.5584 13.341 16.9397 13.2107 17.2444 12.9654C17.5491 12.7201 17.7578 12.3755 17.834 11.9918L19.1673 5.00016H5.00065"
                stroke="#1A1A1A"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_1293_6366">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
        <button type="button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M17.3671 3.84172C16.9415 3.41589 16.4361 3.0781 15.8799 2.84763C15.3237 2.61716 14.7275 2.49854 14.1254 2.49854C13.5234 2.49854 12.9272 2.61716 12.371 2.84763C11.8147 3.0781 11.3094 3.41589 10.8838 3.84172L10.0004 4.72506L9.11709 3.84172C8.25735 2.98198 7.09129 2.49898 5.87542 2.49898C4.65956 2.49898 3.4935 2.98198 2.63376 3.84172C1.77401 4.70147 1.29102 5.86753 1.29102 7.08339C1.29102 8.29925 1.77401 9.46531 2.63376 10.3251L3.51709 11.2084L10.0004 17.6917L16.4838 11.2084L17.3671 10.3251C17.7929 9.89943 18.1307 9.39407 18.3612 8.83785C18.5917 8.28164 18.7103 7.68546 18.7103 7.08339C18.7103 6.48132 18.5917 5.88514 18.3612 5.32893C18.1307 4.77271 17.7929 4.26735 17.3671 3.84172Z"
              stroke="#1A1A1A"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <button
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#quickView"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M0.833008 10.0002C0.833008 10.0002 4.16634 3.3335 9.99967 3.3335C15.833 3.3335 19.1663 10.0002 19.1663 10.0002C19.1663 10.0002 15.833 16.6668 9.99967 16.6668C4.16634 16.6668 0.833008 10.0002 0.833008 10.0002Z"
              stroke="#1A1A1A"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
              stroke="#1A1A1A"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>

  <LoadingPlaceholder v-if="loading"></LoadingPlaceholder>
</template>

