<script setup lang="ts">
import RequestDocumentsBtn from '../user/buttons/RequestDocumentsBtn.vue';
import ProductLogo from '../common/ProductLogo.vue';

const links = [
  { name: '特徴', url: '/features' },
  { name: '導入事例', url: '/case-studies' },
  { name: '料金表', url: '/prices' },
  { name: 'コラム', url: '/columns' },
  { name: 'よくあるご質問', url: '/faqs' },
  { name: 'パートナー制度', url: '/partners' },
];
</script>

<template>
  <nav class="navbar bg-base-100">
    <div class="flex-1">
      <NuxtLink href="/" class="btn btn-ghost">
        <ProductLogo />
      </NuxtLink>
    </div>

    <div class="flex-0">
      <ul class="p-0 menu menu-horizontal">
        <template v-for="link in links" :key="link.url">
          <li>
            <NuxtLink :to="link.url">{{ link.name }}</NuxtLink>
          </li>
        </template>

        <li>
          <NuxtLink>
            <RequestDocumentsBtn />
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
//
</style>
