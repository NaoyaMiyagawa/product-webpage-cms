<script setup lang="ts">
import FirstCaseStudy from './parts/FirstCaseStudy.vue';
import CaseStudCard from './parts/CaseStudCard.vue';
import LogoSwiper from '../top/parts/LogoSwiper.vue';

const pageTitle = ref('導入事例');

const firstCaseStudy = {
  id: 1,
  title: 'Dynamic Markets Orchestrator',
  company: '清水 Inc',
  position: 'Chief Directives Consultant',
  person: '山本 颯太 様',
  summary: `無駄 弥生 きんく. とちょう みさき 高値 約する 羊毛 すんか きょうどう かわかす くつじょく 抑制. きょうふ
          げいひんかん 〜亭 やさしい 始まる はんそう. 合う しゃこ 無糖.`,
};

const caseStudies = [
  { id: 2, title: '顔を合わせて個別の定義', company: '株式会社 富国商会', position: '人事部', person: '鈴木 敦 様' },
  {
    id: 3,
    title: 'リアクティブな新鮮な情報メディア',
    company: '株式会社 首野尾ソリューション',
    position: 'グローバル人材開発室',
    person: '高橋 稔 様',
  },
  {
    id: 4,
    title: '先見の明のある付加価値構造',
    company: '株式会社 笠間商会',
    position: 'チームマネージャー',
    person: '中村 聡 様',
  },
  {
    id: 5,
    title: '互換性のあるクライアントサーバー標準化',
    company: '株式会社 紅葉社',
    position: '労務課',
    person: '渡邉 大介 様',
  },
  {
    id: 6,
    title: '多面的なスケーラブルな投影',
    company: '行政書士法人 GQ社',
    position: '情報システム／総務',
    person: '渡辺 健司 様',
  },
  {
    id: 7,
    title: 'プログラム可能なオブジェクト指向ポータル',
    company: '学校法人 モルサ',
    position: '経営企画部 マネージャー',
    person: '小林 真也 様',
  },
];
</script>

<template>
  <div class="text-center">
    <div>
      <div class="p-14 bg-cover bg-[url('https://picsum.photos/id/1049/3900/3120')]">
        <h1 class="text-4xl font-bold text-primary">{{ pageTitle }}</h1>

        <ul class="flex justify-center mt-8 gap-10">
          <NuxtLink to="#case-studies">
            <li class="p-3 px-8 border-2 border-black transition-all hover:bg-white">導入企業様の声</li>
          </NuxtLink>
          <NuxtLink to="#other-companies">
            <li class="p-3 px-8 border-2 border-black transition-all hover:bg-white">その他の導入企業様</li>
          </NuxtLink>
        </ul>
      </div>

      <div class="breadcrumbs w-[90%]">
        <ul class="flex justify-end">
          <li><NuxtLink class="link link-primary" to="/">トップ</NuxtLink></li>
          <li>{{ pageTitle }}</li>
        </ul>
      </div>
    </div>

    <div class="p-4" id="case-studies">
      <h2 class="text-3xl text-primary">ご導入いただいている企業様の声</h2>
      <p class="p-4">
        Productがもたらす効果、活用事例についてなど、 <br />
        実際にご導入いただき活用されている 企業様の声をご紹介します。
      </p>
    </div>

    <div class="p-4">
      <!-- 導入事例 TOP -->
      <FirstCaseStudy :id="firstCaseStudy.id" class="p-4 max-w-[80%] m-auto">
        <template #title>{{ firstCaseStudy.title }}</template>
        <template #company>{{ firstCaseStudy.company }}</template>
        <template #person>{{ firstCaseStudy.position }} - {{ firstCaseStudy.person }}</template>
        <template #summary>{{ firstCaseStudy.summary }}</template>
      </FirstCaseStudy>
    </div>

    <div class="p-4">
      <div class="flex flex-wrap gap-8 m-auto w-[90%] text-left justify-center">
        <!-- 導入事例 その他 -->
        <template v-for="caseStudy in caseStudies" :key="caseStudy.title">
          <CaseStudCard :id="caseStudy.id">
            <template #title>{{ caseStudy.title }}</template>
            <template #company>{{ caseStudy.company }}</template>
            <template #position>{{ caseStudy.position }}</template>
            <template #person>{{ caseStudy.person }}</template>
          </CaseStudCard>
        </template>
      </div>
    </div>

    <div id="other-companies" class="p-4 mt-10">
      <h2 class="text-3xl text-primary">他にもこのような企業様にご導入いただいています</h2>

      <LogoSwiper class="my-10" />
    </div>
  </div>
</template>
