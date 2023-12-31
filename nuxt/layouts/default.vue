<template>
  <div class="flex flex-col min-h-screen max-h-screen">
    <div class="flex flex-col grow mx-4 sm:mx-8">
      <slot />
    </div>
    <DevOnly>
      <BreakpointDebug />
    </DevOnly>
  </div>
</template>

<script setup lang="ts">
useServerSeoMeta({
  title: 'jockii druce',
  description: 'шо ви браття?',
})

useHeadSafe({
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
    {
      rel: 'mask-icon',
      href: '/safari-pinned-tab.svg',
      color: '#282828',
    },
  ],
})
</script>
