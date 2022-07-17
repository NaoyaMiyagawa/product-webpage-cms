<script setup lang="ts">
import { ElContainer, ElHeader, ElAside, ElMain } from 'element-plus';

const props = defineProps();
const emit = defineEmits();
</script>

<template>
  <div>
    <slot />

    <div class="common-layout">
      <ElContainer>
        <ElHeader>HeadeElHeader</ElHeader>

        <ElContainer>
          <ElAside width="200px">Aside</ElAside>

          <ElMain>Main</ElMain>
        </ElContainer>
      </ElContainer>
    </div>
  </div>
</template>
