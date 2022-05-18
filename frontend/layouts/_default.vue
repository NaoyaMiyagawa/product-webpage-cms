<script setup lang="ts">
import TheHeader from '~/components/layouts/TheHeader.vue';
import TheFooter from '~/components/layouts/TheFooter.vue';
</script>

<template>
  <div>
    <slot name="header">
      <TheHeader />
    </slot>

    <slot />

    <slot name="footer">
      <TheFooter />
    </slot>
  </div>
</template>
