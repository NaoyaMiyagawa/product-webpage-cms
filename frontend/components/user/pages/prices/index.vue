<script setup lang="ts">
import { PlanPricesBox } from './parts';
import { InPageNav } from '~~/components/layouts';

const pageTitle = ref('料金表');
</script>

<template>
  <div class="text-center">
    <InPageNav
      :pageTitle="pageTitle"
      :inPageNavs="[
        { id: 'price-overall', label: '料金体系' },
        { id: 'option-features', label: 'オプション機能一覧' },
      ]"
    />

    <PlanPricesBox class="pt-10" />
  </div>
</template>
