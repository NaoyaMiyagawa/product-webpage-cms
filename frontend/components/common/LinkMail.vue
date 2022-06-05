<script setup lang="ts">
const props = defineProps<{
  email: string;
}>();
</script>

<template>
  <a class="text-primary underline" :href="`mailto:${email}`">
    {{ email }}
  </a>
</template>
