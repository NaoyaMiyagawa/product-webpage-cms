<script setup lang="ts">
import SecondaryBtn from '../components/user/buttons/SecondaryBtn.vue';
import LogoSwiper from '../components/user/companies/LogoSwiper.vue';
</script>

<template>
  <div class="min-h-[500px] hero bg-[url('https://picsum.photos/1000/600')]">
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="text-center hero-content text-neutral-content">
      <div class="max-w-md">
        <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
        <p class="mb-5">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti
          eaque aut repudiandae et a id nisi.
        </p>

        <SecondaryBtn class="w-[300px]">試してみる</SecondaryBtn>
      </div>
    </div>
  </div>

  <div>
    <div class="p-4">
      <LogoSwiper />
    </div>
  </div>
</template>
