<script setup lang="ts">
import { RequestDocumentsBtn } from '~/components/button';
import { ProductLogo } from '~/components/common';

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
  <footer class="bg-white rounded footer footer-center text-base-content">
    <div class="w-full h-[360px] bg-cover bg-[url('https://picsum.photos/seed/picsum/1000/300')]">
      <div class="h-[200px] flex flex-col gap-4 justify-center">
        <ProductLogo />
        かんたん資料請求は下記のフォームから行えます。
        <RequestDocumentsBtn />
      </div>
    </div>

    <div class="pb-10">
      <div class="grid grid-flow-col gap-6">
        <template v-for="link in links" :key="link.url">
          <NuxtLink :to="link.url" class="text-primary link link-hover">{{ link.name }}</NuxtLink>
        </template>
      </div>

      <div class="mt-4">
        <p>Copyright © 2022 - All right reserved by XXX Ltd</p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
//
</style>
