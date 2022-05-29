<script setup lang="ts">
import { CaseStudy } from '~~/models';

const props = defineProps<{ caseStudy: CaseStudy }>();
const emit = defineEmits();
</script>

<template>
  <div class="mt-10 flex items-center gap-10">
    <div>
      <img src="https://picsum.photos/100" width="100" height="100" alt="" />
    </div>

    <div class="font-bold">
      <p class="flex gap-6 items-end">
        <span class="text-2xl">{{ caseStudy.company }}</span>
        <span class="text-xl">{{ caseStudy.position }}</span>
      </p>

      <p class="mt-2 text-2xl">{{ caseStudy.person }}</p>
    </div>
  </div>
</template>
