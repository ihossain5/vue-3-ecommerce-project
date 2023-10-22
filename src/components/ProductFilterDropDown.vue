<template>
    <div class="flex_item d-flex justify-content-end align-items-center gap-3">
        <span class="fs_16 lh_23 text-capitalize">Sort By:</span>
        <select class="short_by form-select fs_14 lh_20 fc_gd" :value="selectedSortOption" @input="updateSortOption">
            <option value="default">Default</option>
            <option value="asc">Name (A-z)</option>
            <option value="dsc">Name (Z-a)</option>
            <option value="price_high_to_low">Price (High To Low)</option>
            <option value="price_low_to_high">Price (Low To High)</option>
        </select>
    </div>
</template>
  
<script>
export default {
    props: {
        selectedSortOption: String,
    },
    methods: {
        updateSortOption(event) {
            this.$emit('update:selectedSortOption', event.target.value);
        },
    },
};
</script>
  