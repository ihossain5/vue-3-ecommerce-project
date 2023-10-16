<script>
export default {
  props: {
    brands: Object, // Define the prop and its type
  },
};
</script>
<template>
    <div class="row_item" v-for="brand in brands" :key="brand.id">
        <a
            class="d-flex justify-content-center align-items-center brand_card bg_white br_5 bxy_gl bs_15 tbs_tb_3 hover">
            <img :src="brand.photo" alt="logo" class="w-100">
        </a>
    </div>
</template>