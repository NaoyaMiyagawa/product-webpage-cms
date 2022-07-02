import type { RouterConfig } from '@nuxt/schema';

// https://router.vuejs.org/api/#routeroptions
export default <RouterConfig>{
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (to.hash) {
          resolve({
            el: to.hash,
            behavior: 'smooth',
          });
        }

        resolve({
          left: savedPosition?.left || 0,
          top: savedPosition?.top || 0,
        });
      });
    });
  },
};
