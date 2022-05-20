<script setup lang="ts">
const links = [
  { name: '特徴', url: '/features' },
  { name: '導入事例', url: '/case-studies' },
  { name: '料金表', url: '/prices' },
  { name: 'コラム', url: '/columns' },
  { name: 'よくあるご質問', url: '/faqs' },
];
</script>

<template>
  <div class="navbar bg-base-100">
    <div class="flex-1">
      <NuxtLink href="/" class="text-xl normal-case btn btn-ghost">Product</NuxtLink>
    </div>

    <div class="flex-0">
      <ul class="p-0 menu menu-horizontal">
        <template v-for="link in links" :key="link.url">
          <li>
            <NuxtLink :to="link.url">{{ link.name }}</NuxtLink>
          </li>
        </template>

        <li>
          <a><button class="bg-orange-500 border-none rounded-full btn">かんたん資料請求</button></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
//
</style>
