<script setup lang="ts">
const links = [
  { name: 'トップ', url: '/' },
  { name: '特徴', url: '/features' },
  { name: '導入事例', url: '/case-studies' },
  { name: '料金表', url: '/prices' },
  { name: 'コラム', url: '/columns' },
  { name: 'よくあるご質問', url: '/faqs' },
  { name: 'パートナー制度', url: '/partners' },
  { name: 'プライバシーポリシー', url: '/privacy-policies' },
  { name: '利用規約', url: '/service-policies' },
];
</script>

<template>
  <footer class="p-10 rounded footer footer-center bg-base-200 text-base-content">
    <div class="grid grid-flow-col gap-6">
      <template v-for="link in links" :key="link.url">
        <NuxtLink :to="link.url" class="link link-hover">{{ link.name }}</NuxtLink>
      </template>
    </div>

    <div>
      <p>Copyright © 2022 - All right reserved by XXX Ltd</p>
    </div>
  </footer>
</template>
