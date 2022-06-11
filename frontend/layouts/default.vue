<script setup lang="ts">
import { TheHeader, TheFooter } from '~/components/layouts';
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
