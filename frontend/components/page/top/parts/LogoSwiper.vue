<script setup lang="ts">
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

const modules = [Navigation, Pagination, Scrollbar, A11y, Autoplay];
</script>

<template>
  <swiper
    class="flex justify-center w-[800px]"
    :modules="modules"
    :slides-per-view="1"
    :space-between="50"
    :autoplay="{ delay: 10000 }"
    :pagination="{ clickable: true }"
  >
    <swiper-slide>
      <div class="flex flex-wrap justify-center gap-4 w-[800px] pb-10">
        <template v-for="(value, index) in Array(8)" :key="index">
          <img class="" width="160" height="80" :src="`https://picsum.photos/160/80?0-${index}`" alt="" />
        </template>
      </div>
    </swiper-slide>

    <swiper-slide>
      <div class="flex flex-wrap justify-center gap-4 w-[800px] pb-10">
        <template v-for="(value, index) in Array(8)" :key="index">
          <img class="w-[20%]" :src="`https://picsum.photos/200/100?1-${index}`" alt="" />
        </template>
      </div>
    </swiper-slide>
  </swiper>
</template>

<style lang="scss" scoped>
//
</style>
