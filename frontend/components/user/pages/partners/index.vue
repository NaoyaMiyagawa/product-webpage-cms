<script setup lang="ts">
import { TheContainer, InPageNav } from '~~/components/layouts';
import { LinkMail } from '~~/components/common';
</script>

<template>
  <div class="text-center">
    <InPageNav pageTitle="パートナー制度について" :inPageNavs="[]" />

    <TheContainer class="mt-4 mb-14">
      <p class="text-2xl">
        Product では<br />
        パートナー企業様を２種類のプランで募集しています。
      </p>

      <div class="flex flex-col gap-10 text-left">
        <div class="mt-8">
          <p class="text-primary text-3xl underline">販売代理店パートナー</p>

          <p class="mt-4">
            Product を代理販売していただくパートナー制度です。<br />
            クライアント様に当サービスをご紹介いただき、実際のご利用にいたった場合、一定のコミッション費用をお支払いいたします。
          </p>
        </div>

        <div>
          <p class="text-primary text-3xl underline">コンサルティングパートナー</p>

          <p class="mt-4">
            人事コンサルティングや研修といった人事系・人材育成系サービスを提供されている企業様向けのパートナー制度です。<br />
            パートナー契約を結んでいただくと、貴社のサービスと Product
            を組み合わせて、エンドユーザー様にご提供することが可能になります。<br />
            エンドユーザー様向けの診断ツールをはじめとした、様々な手法でご活用いただけます。<br />
          </p>
        </div>
      </div>

      <div class="text-2xl mt-14">
        パートナーへのお申込みや、ご質問がある場合は<br />
        <LinkMail email="product-support@example.com" /><br />
        までお気軽にご連絡ください。<br />
      </div>
    </TheContainer>
  </div>
</template>
