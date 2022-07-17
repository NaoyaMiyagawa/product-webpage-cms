import { defineNuxtConfig } from 'nuxt';
// import IconsResolver from 'unplugin-icons/resolver';
// import AutoImport from 'unplugin-auto-import/vite';
// import Components from 'unplugin-vue-components/vite';
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

const lifecycle = process.env.npm_lifecycle_event;

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

  // build
  build: {
    transpile: lifecycle === 'build' ? ['element-plus'] : [],
  },

  typescript: {
    strict: true,
    tsConfig: {
      compilerOptions: {
        types: ['element-plus/global'],
      },
    },
  },

  components: true,

  // vite plugins
  vite: {
    plugins: [
      // Components({
      //   dts: true,
      //   resolvers: [IconsResolver({}), ElementPlusResolver()],
      // }),
      // AutoImport({
      //   resolvers: [ElementPlusResolver()],
      // }),
    ],
  },
});
