<script>
import { computed } from "vue";

export default {
  setup() {
    const divCount = computed(() => 5);

    return {
      divCount,
    };
  },
};
</script>

<template>
 <div class="loader-skeleton" v-for="count in divCount" :key="count">
    <!-- Loader skeleton structure -->
    <div class="position-relative overflow-hidden prd_card br_5 bxy_gl bs_15 tbs_tb_3 hover">
      <div class="position-relative d-flex justify-content-center align-items-center img_box">
        <div class="skeleton-img"></div>
      </div>
      <div class="content text-center">
        <div class="skeleton-title"></div>
        <div class="rate_wrapper">
          <div class="skeleton-rating"></div>
        </div>
        <div class="d-flex justify-content-center align-items-center gap-2 gap-md-4 pt-0 pt-md-3 fs_18 lh_22 fc_black">
          <div class="skeleton-price"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.loader-skeleton {
  margin-bottom: 20px;
}

@keyframes loadingAnimation {
  0%, 100% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
}

.skeleton-img {
  width: 100%;
  height: 200px; /* Adjust the height as needed */
  background-color: #f0f0f0;
}

.skeleton-content {
  padding: 20px;
  flex: 1;
}

.skeleton-title {
  width: 80%;
  height: 20px;
  margin-bottom: 10px;
  background-color: #f0f0f0;
}

.skeleton-rating {
  width: 40px;
  height: 10px;
  margin-bottom: 10px;
  background-color: #f0f0f0;
}

.skeleton-price {
  width: 30%;
  height: 20px;
  background-color: #f0f0f0;
}
</style>