<script setup lang="ts">
import TheContainer from '~~/components/layouts/TheContainer.vue';
import { CaseStudy } from '~~/models';
import CompanyInfo from './parts/CompanyInfo.vue';

const caseStudy: CaseStudy = {
  id: 1,
  title: 'Dynamic Markets Orchestrator',
  company: '清水 Inc',
  position: 'Chief Directives Consultant',
  person: '山本 颯太 様',
  summary: `無駄 弥生 きんく. とちょう みさき 高値 約する 羊毛 すんか きょうどう かわかす くつじょく 抑制. きょうふ
          げいひんかん 〜亭 やさしい 始まる はんそう. 合う しゃこ 無糖.`,
};
</script>

<template>
  <TheContainer class="mb-20">
    <div>
      <div>
        <h1 class="text-5xl font-bold">導入企業様の声</h1>
        <h3 class="text-xl mt-2">CUSTOMER VOICE</h3>
      </div>

      <CompanyInfo :caseStudy="caseStudy" />
    </div>
  </TheContainer>
</template>

<style lang="scss" scoped>
//
</style>
