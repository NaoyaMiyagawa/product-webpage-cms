<script setup lang="ts">
import { PrimaryBtn, SecondaryBtn } from '~/components/button';
import { LogoSwiper, FeatureItem } from './parts';
</script>

<template>
  <div>
    <div class="min-h-[500px] hero bg-[url('https://picsum.photos/1000/600')]">
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="text-center hero-content text-neutral-content">
        <div class="max-w-md">
          <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
          <p class="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In
            deleniti eaque aut repudiandae et a id nisi.
          </p>

          <SecondaryBtn class="w-[300px]">試してみる</SecondaryBtn>
        </div>
      </div>
    </div>

    <div>
      <div class="p-4">
        <LogoSwiper />
      </div>

      <div class="p-4">
        <div class="p-4 text-center">
          <span class="text-3xl text-primary">カンタン導入！</span>
        </div>

        <div class="flex justify-center gap-10 max-w-[1000px] m-auto">
          <FeatureItem>
            <template #title>スマホ・タブレットで簡単入力</template>
            <template #description>
              かぶしきしじょう 黒板 まつ あつかい ずいぶん こわす はちのす 待合. なんべい いちだい 自立 哀れむ. 胃
              ぞくご
            </template>
          </FeatureItem>

          <FeatureItem>
            <template #title>結果資料を自動作成</template>
            <template #description>
              ことばつき かんじる たくす むらさきいろ こくふくする 凝固 馬鹿馬鹿しい. 面 よくげつ とくに おきゃくさん
              無駄
            </template>
          </FeatureItem>

          <FeatureItem>
            <template #title>利用料金は、評価実施時のみの課金</template>
            <template #description>
              しゃっか 閉める ねんじゅう むこう けしき ひんかく 浸す 哀れむ 学者 ほんらい. ほうせき れつあく 白菊 うえる
            </template>
          </FeatureItem>
        </div>

        <div class="p-4 text-center">
          <PrimaryBtn>特徴をさらに詳しく見る</PrimaryBtn>
        </div>
      </div>

      <div class="p-10 mt-10 text-center bg-gray-100">
        <p class="text-4xl text-primary">課金は実施月のみ！</p>

        <div class="p-4 mt-6">
          <PrimaryBtn>料金体系をさらに詳しく見る</PrimaryBtn>
        </div>
      </div>
    </div>
  </div>
</template>
