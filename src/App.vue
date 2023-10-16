<script setup>
import { RouterView } from 'vue-router'
import BaseLayout from './components/BaseLayout.vue';
</script>

<template>
    <BaseLayout>
        <RouterView></RouterView>
    </BaseLayout>
</template>

<style>
@import 'assets/main.css';
</style>
