<script setup lang="ts">
import { InPageNav } from '~~/components/layout';
import ColumnCard from './parts/ColumnCard.vue';

const pageTitle = ref('コラム');
const columns = ref([
  {
    id: 1,
    title: 'Product Branding Representative',
    description: 'hoge',
  },
  {
    id: 2,
    title: 'Product Branding Representative',
    description: 'hoge',
  },
  {
    id: 3,
    title: 'Product Branding Representative',
    description: 'hoge',
  },
  {
    id: 4,
    title: 'Product Branding Representative',
    description: 'hoge',
  },
  {
    id: 5,
    title: 'Product Branding Representative',
    description: 'hoge',
  },
  {
    id: 6,
    title: 'Product Branding Representative',
    description: 'hoge',
  },
]);
</script>

<template>
  <div class="text-center">
    <InPageNav :pageTitle="pageTitle" :inPageNavs="[]" />

    <div class="p-4" id="case-studies">
      <h2 class="text-3xl text-primary">活用事例や詳細な利用方法などのご紹介</h2>
      <p class="p-4">
        Product の具体的な活用事例や、<br />
        ご利用いただいている企業様にご質問いただいた内容などを<br />
        ご紹介させていただきます。
      </p>
    </div>

    <div class="p-4">
      <div class="flex flex-wrap gap-8 m-auto w-[90%] text-left justify-center">
        <template v-for="column in columns" :key="column.id">
          <ColumnCard :id="column.id">
            <template #title>{{ column.title }}</template>
            <template #description>{{ column.description }}</template>
          </ColumnCard>
        </template>
      </div>
    </div>

    <div class="mt-10"></div>
  </div>
</template>
