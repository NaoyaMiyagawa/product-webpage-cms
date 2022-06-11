<script setup lang="ts">
import { IconCheck } from '~/components/icons';
</script>

<template>
  <div class="border border-transparent bg-gray-600 p-6 rounded-3xl">
    <div>
      <h2 class="mb-2 text-center font-semibold uppercase tracking-wide text-white">Application UI</h2>
      <h3 class="sr-only">Price</h3>
      <div class="mb-10 text-base font-medium text-gray-400 sm:mb-8 lg:mb-10">
        <span class="flex items-center justify-center"
          ><span class="mx-3 text-5xl font-extrabold tracking-tight text-white">$149</span
          ><span class="text-white">USD</span></span
        ><span class="mt-2 block text-center text-sm font-normal">plus local taxes</span>
      </div>
      <a
        href="/checkout/0ed326ca-c1fc-440b-b1ba-bdfb01c43185"
        class="mx-auto hidden w-60 rounded-lg bg-gray-700 p-3 text-center font-semibold text-gray-200 hover:bg-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 sm:block md:w-64 lg:hidden"
        >Get this package</a
      >
    </div>
    <div class="text-white lg:mb-auto lg:flex lg:flex-col lg:items-center">
      <h3 class="sr-only">Features</h3>
      <ul role="list" class="space-y-4">
        <li class="flex items-center">
          <IconCheck />

          All application UI components
        </li>
        <li class="flex items-center">
          <IconCheck />
          Lifetime access
        </li>
        <li class="flex items-center">
          <IconCheck />
          Use on unlimited projects
        </li>
        <li class="flex items-center">
          <IconCheck />
          Free updates
        </li>
        <li class="flex items-center">
          <IconCheck />
          Community access
        </li>
      </ul>
    </div>
    <a
      href="/checkout/0ed326ca-c1fc-440b-b1ba-bdfb01c43185"
      class="mx-auto mt-8 block w-60 rounded-lg bg-gray-700 p-3 text-center font-semibold text-gray-200 hover:bg-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 sm:hidden md:w-64 lg:mt-12 lg:block xl:w-60"
    >
      Get this package
    </a>
  </div>
</template>
