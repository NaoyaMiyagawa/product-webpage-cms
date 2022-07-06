import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  meta: {
    title: 'Element Plus + Nuxt 3',
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'ElementPlus + Nuxt3',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: ['~/assets/scss/index.scss'],

  typescript: {
    strict: true,
    tsConfig: {
      compilerOptions: {
        types: ['element-plus/global'],
      },
    },
  },

  components: true,
});
