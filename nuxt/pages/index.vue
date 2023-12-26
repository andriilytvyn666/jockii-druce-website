<template>
  <div class="flex gap-8">
    <MainMenu />
    <TrackList v-if="menuItem === 'album'" />
    <Lyrics v-if="menuItem === 'album' && currentTrack.name !== 'none'" />
    <Streaming v-show="menuItem === 'streaming'" />
    <Pix v-if="menuItem === 'pix'" />
    <Twitter v-if="menuItem === 'twitter'" />
  </div>
</template>

<script setup lang="ts">
const { currentTrack, menuItem } = storeToRefs(useGlobalStore())
</script>
