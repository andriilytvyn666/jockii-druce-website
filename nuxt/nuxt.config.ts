import eslintPlugin from 'vite-plugin-eslint'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    '@vueuse/motion/nuxt',
    '@nuxtjs/tailwindcss',
    'nuxt-icons',
    '@nuxtjs/sanity',
    [
      '@pinia/nuxt',
      {
        storesDirs: ['./stores/**'],
        autoImports: ['defineStore', 'acceptHMRUpdate'],
      },
    ],
  ],
  imports: {
    dirs: ['stores'],
  },
  sanity: {
    projectId: '4d7emgbh',
    dataset: 'production',
    useCdn: true,
    globalHelper: true,
  },
  vite: {
    plugins: [eslintPlugin()],
  },
})
