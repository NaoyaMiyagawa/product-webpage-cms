<script setup lang="ts">
import { ElInputNumber } from 'element-plus';
const count = ref(0);
</script>

<template>
  <el-input-number v-model="count" :min="1" :max="10" />
</template>
