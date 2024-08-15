<template>
    <section class="banner-section d-middle w-100 p-10">
      <form>
        <div class="search-input d-middle">
          <input
            type="text"
            :required="true"
          />
          <span>Search movie</span>
        </div>
      </form>
      <div class="container-image-banner">
        <img :src="imageUrl" alt="" />
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  /**Vue imports */
  import { ref } from "vue";
  /**Assets imports */
  import headerImg from "@/assets/images/header-img.svg";
  
  const imageUrl = ref(headerImg);
  </script>
  
  <style scoped lang="scss">
  @import "@/components/banner/banner";
  </style>
  