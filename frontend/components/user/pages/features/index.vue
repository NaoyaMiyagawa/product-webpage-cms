<script setup lang="ts">
import { InPageNav } from '~~/components/layouts';

const pageTitle = ref('サービスの特徴');
</script>

<template>
  <div class="text-center">
    <InPageNav
      :pageTitle="pageTitle"
      :inPageNavs="[
        { id: 'merits', label: 'メリット' },
        { id: 'features', label: '本サービスの特徴' },
      ]"
    />
  </div>
</template>
