<script setup lang="ts">
import { InPageNav } from '~~/components/layouts';

const pageTitle = ref('よくあるご質問');
</script>

<template>
  <div class="text-center">
    <InPageNav
      :pageTitle="pageTitle"
      :inPageNavs="[
        { id: 'product-survey', label: 'Productサーベイについて' },
        { id: 'product', label: 'Productについて' },
        { id: 'others', label: 'その他' },
      ]"
    />
  </div>
</template>
