<script setup lang="ts">
import { InPageNav } from '~~/components/layouts';

const pageTitle = ref('コラム');
</script>

<template>
  <div class="text-center">
    <InPageNav :pageTitle="pageTitle" :inPageNavs="[]" />
  </div>
</template>
