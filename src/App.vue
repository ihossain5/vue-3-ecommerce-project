<script setup>
import { RouterLink, RouterView } from 'vue-router'

import BaseLayout from './components/BaseLayout.vue'
import HomeView from './views/HomeView.vue'

</script>

<template>

<BaseLayout>
    <HomeView></HomeView>
</BaseLayout>

</template>

<style>
@import 'assets/main.css';
</style>
