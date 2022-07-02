<script setup lang="ts">
type InPageNav = {
  id: string;
  label: string;
};

const props = defineProps<{
  pageTitle: string;
  inPageNavs: InPageNav[];
}>();
</script>

<template>
  <div>
    <div class="p-14 bg-cover bg-[url('https://picsum.photos/id/1049/3900/3120')]">
      <h1 class="text-4xl font-bold text-primary">{{ pageTitle }}</h1>

      <ul class="flex justify-center mt-8 gap-10">
        <template v-for="inPageNav in inPageNavs" :key="inPageNav.id">
          <NuxtLink :to="`#${inPageNav.id}`">
            <li class="p-3 px-8 border-2 border-black transition-all hover:bg-white">
              {{ inPageNav.label }}
            </li>
          </NuxtLink>
        </template>
      </ul>
    </div>

    <div class="breadcrumbs w-[90%] p-4">
      <ul class="flex justify-end">
        <li><NuxtLink class="link link-primary" to="/">トップ</NuxtLink></li>
        <li>{{ pageTitle }}</li>
      </ul>
    </div>
  </div>
</template>
