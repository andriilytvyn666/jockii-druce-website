import eslintPlugin from 'vite-plugin-eslint'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    'nuxt-icons',
    '@nuxtjs/sanity',
  ],
  sanity: {
    // TODO: boostrap sanity
  },
  vite: {
    plugins: [eslintPlugin()],
  },
})
