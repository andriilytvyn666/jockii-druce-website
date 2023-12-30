<template>
  <div class="flex flex-col gap-1 [&>button]:text-left [&>button]:w-fit py-6">
    <a :href="links.spotify" target="_blank" class="button-group">
      <NuxtIcon name="streaming/spotify" />
      <span>spotify</span>
    </a>
    <a :href="links.appleMusic" target="_blank" class="button-group">
      <NuxtIcon name="streaming/applemusic" />
      <span>apple music</span>
    </a>
    <a :href="links.youtubeMusic" target="_blank" class="button-group">
      <NuxtIcon name="streaming/youtubemusic" />
      <span>youtube music</span>
    </a>
    <a :href="links.soundCloud" target="_blank" class="button-group">
      <NuxtIcon name="streaming/soundcloud" />
      <span>soundcloud</span>
    </a>
  </div>
</template>

<script setup lang="ts">
const query = groq`*[_type == "streamingLinks" ] { spotify, appleMusic, youtubeMusic, soundCloud } [0]`
const { data } = await useSanityQuery<StreamingLinks>(query)
const links = data.value
  ? data.value
  : {
      spotify: 'https://open.spotify.com',
      appleMusic: 'https://music.apple.com',
      youtubeMusic: 'https://music.youtube.com',
      soundCloud: 'https://soundcloud.com',
    }
</script>

<style scoped lang="postcss">
.button-group {
  @apply flex gap-2 items-end hover:text-fg-active;
}
</style>
