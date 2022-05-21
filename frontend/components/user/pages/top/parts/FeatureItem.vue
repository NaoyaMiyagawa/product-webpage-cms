<template>
  <div class="">
    <img class="m-auto" src="https://picsum.photos/200" alt="" />

    <p class="py-4 text-xl font-bold text-center text-primary">
      <slot name="title"></slot>
    </p>

    <p>
      <slot name="description"></slot>
    </p>
  </div>
</template>
