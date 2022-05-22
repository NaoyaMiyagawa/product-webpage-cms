<script setup lang="ts"></script>

<template>
  <div class="flex gap-8 text-left">
    <img src="https://picsum.photos/450/300" width="450" height="300" alt="" />

    <div class="">
      <img src="https://picsum.photos/100" width="100" height="100" alt="" />

      <p class="mt-4 text-2xl text-primary">
        <slot name="title"></slot>
      </p>

      <div class="mt-2 font-bold">
        <p><slot name="companyName"></slot></p>
        <span><slot name="personInfo"></slot></span>
      </div>

      <p class="mt-2">
        <slot name="description"></slot>
      </p>
    </div>
  </div>
</template>
