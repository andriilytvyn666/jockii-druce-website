<template>
  <div class="flex flex-col gap-1 [&>button]:text-left [&>button]:w-fit">
    <a href="https://spotify.com" target="_blank" class="button-group">
      <NuxtIcon name="streaming/spotify" />
      <span>spotify</span>
    </a>
    <a href="https://music.apple.com" target="_blank" class="button-group">
      <NuxtIcon name="streaming/applemusic" />
      <span>apple music</span>
    </a>
    <a href="https://music.youtube.com" target="_blank" class="button-group">
      <NuxtIcon name="streaming/youtubemusic" />
      <span>youtube music</span>
    </a>
    <a href="https://soundcloud.com" target="_blank" class="button-group">
      <NuxtIcon name="streaming/soundcloud" />
      <span>soundcloud</span>
    </a>
  </div>
</template>

<style scoped lang="postcss">
.button-group {
  @apply flex gap-2 items-end hover:text-fg-active;
}
</style>
