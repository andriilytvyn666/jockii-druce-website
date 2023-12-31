<template>
  <div
    class="select-none flex flex-col sm:gap-1 gap-1.5 [&>button]:text-left [&>button]:w-fit sm:py-0 sm:h-screen sm:justify-center pb-6 pt-1"
  >
    <a :href="links.spotify" target="_blank" class="button-group group">
      <NuxtIcon
        name="streaming/spotify"
        class="group-hover:text-fg-active [&>*]:transition-none duration-0"
      />
      <span class="group-hover:text-fg-active">spotify</span>
    </a>
    <a :href="links.appleMusic" target="_blank" class="button-group group">
      <NuxtIcon
        name="streaming/applemusic"
        class="group-hover:text-fg-active [&>*]:transition-none duration-0"
      />
      <span class="group-hover:text-fg-active">apple music</span>
    </a>
    <a :href="links.youtubeMusic" target="_blank" class="button-group group">
      <NuxtIcon
        name="streaming/youtubemusic"
        class="group-hover:text-fg-active [&>*]:transition-none duration-0"
      />
      <span class="group-hover:text-fg-active">youtube music</span>
    </a>
    <a :href="links.soundCloud" target="_blank" class="button-group group">
      <NuxtIcon
        name="streaming/soundcloud"
        class="group-hover:text-fg-active [&>*]:transition-none duration-0"
      />
      <span class="group-hover:text-fg-active">soundcloud</span>
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
  @apply flex gap-2 items-end transition-none;
}
</style>
