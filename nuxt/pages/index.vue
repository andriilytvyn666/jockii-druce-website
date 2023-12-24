<template>
  <div class="flex gap-8">
    <MainMenu />
    <TrackList v-if="menuItem === 'album'" />
    <Lyrics v-if="menuItem === 'album' && currentTrack !== 'none'" />
    <Streaming v-if="menuItem === 'streaming'" />
  </div>
</template>

<script setup lang="ts">
const { currentTrack, menuItem } = storeToRefs(useGlobalStore())
</script>
