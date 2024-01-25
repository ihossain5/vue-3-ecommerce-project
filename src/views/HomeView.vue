<script setup>
import TodayDeal from '../components/pages/Home/TodayDeal.vue'
import Category from '../components/pages/Home/Category.vue'
import Brand from '../components/pages/Home/Brand.vue'
import Shop from '../components/pages/Home/Shop.vue'
import Blog from '../components/pages/Home/Blog.vue'
import Accessories from '../components/pages/Home/Accessories.vue'
import Products from '../components/pages/Home/Products.vue'
import Slider from '../components/pages/Home/Slider.vue'

</script>

<template>

  <!-- categories with slider -->
  <Slider></Slider>


  <TodayDeal></TodayDeal>

  <!-- our categories -->
  <Category></Category>

  <!-- our brands -->
  <Brand></Brand>

  <!-- our shop -->
  <Shop></Shop>

  <!-- our bolgs -->
  <Blog></Blog>

  <!-- accessories -->
 <Accessories></Accessories>

  <!-- all products -->
  <Products></Products>

</template>
