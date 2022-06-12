<script setup lang="ts">
import { TheHeader, TheFooter } from '~/components/layout';
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
