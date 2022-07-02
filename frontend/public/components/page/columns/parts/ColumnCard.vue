<script setup lang="ts">
import { PrimaryBtn } from '~~/components/button';
const props = defineProps<{
  id: number;
}>();
</script>

<template>
  <NuxtLink :to="`/columns/view/${$props.id}`">
    <div
      class="group hover:-translate-y-1 hover:bg-[#13c1aa] hover:shadow-2xl card card-bordered w-80 bg-base-100 shadow-xl transition-all duration-300"
    >
      <figure class="bg-white">
        <img
          class="transition-all duration-300 group-hover:opacity-80"
          width="450"
          height="300"
          :src="`https://picsum.photos/450/300?random=${$props.id}`"
          alt=""
        />
      </figure>

      <div class="gap-0 p-4 justify-between card-body h-[160px] group-hover:text-white">
        <h2 class="card-title font-normal text-[#13c1aa] group-hover:text-white">
          <slot name="title" />
        </h2>

        <div>
          <p>
            <slot name="description" />
          </p>

          <div class="text-center">
            <PrimaryBtn class="px-10"> 詳しく見る </PrimaryBtn>
          </div>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
