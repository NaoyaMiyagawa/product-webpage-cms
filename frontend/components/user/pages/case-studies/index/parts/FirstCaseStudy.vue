<script setup lang="ts">
import PrimaryBtn from '~~/components/user/buttons/PrimaryBtn.vue';
const props = defineProps<{ id: number }>();
</script>

<template>
  <div>
    <NuxtLink
      :to="`/case-studies/view/${$props.id}`"
      class="group hover:-translate-y-1 flex rounded-xl p-4 gap-8 text-left max-w-[1200px] w-[90%] m-auto hover:shadow-2xl transition-all duration-300 hover:bg-[#13c1aa]"
    >
      <img
        class="rounded-xl transition-all duration-300 group-hover:opacity-80"
        src="https://picsum.photos/450/300"
        width="450"
        height="300"
        alt=""
      />

      <div class="group-hover:text-white">
        <img src="https://picsum.photos/100" width="100" height="100" alt="" />

        <p class="mt-4 text-2xl text-primary group-hover:text-white">
          <slot name="title"></slot>
        </p>

        <div class="mt-2 font-bold">
          <p><slot name="company"></slot></p>
          <span><slot name="person"></slot></span>
        </div>

        <p class="mt-2">
          <slot name="summary"></slot>
        </p>

        <div class="mt-4 text-right">
          <PrimaryBtn>くわしく見る</PrimaryBtn>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>
