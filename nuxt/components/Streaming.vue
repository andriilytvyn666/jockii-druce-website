<template>
  <div
    class="flex flex-col gap-1.5 [&>button]:text-left [&>button]:w-fit sm:py-6 pb-6 pt-1"
  >
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
const links = data.value!
</script>

<style scoped lang="postcss">
.button-group {
  @apply flex gap-2 items-end hover:text-fg-active;
}
</style>
