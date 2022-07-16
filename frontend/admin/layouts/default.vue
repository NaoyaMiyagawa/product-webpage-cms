<script setup lang="ts">
const props = defineProps();
const emit = defineEmits();
</script>

<template>
  <div>
    <slot />

    <div class="common-layout">
      <ElContainer>
        <ElHeader>Header</ElHeader>

        <ElContainer>
          <ElAside width="200px">Aside</ElAside>

          <ElMain>Main</ElMain>
        </ElContainer>
      </ElContainer>
    </div>
  </div>
</template>
