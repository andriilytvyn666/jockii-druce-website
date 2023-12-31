<template>
  <div
    :class="`flex flex-col sm:flex-row sm:gap-8 ${
      menuItem !== 'pix' ? 'mx-4 sm:mx-0' : ''
    }`"
  >
    <MainMenu />
    <TrackList v-if="menuItem === 'album'" />
    <Lyrics v-if="menuItem === 'album' && currentTrack.name !== 'none'" />
    <Player v-if="menuItem === 'album' && currentTrack.name !== 'none'" />
    <Streaming v-show="menuItem === 'streaming'" />
    <Pix v-if="menuItem === 'pix'" />
    <Twitter v-if="menuItem === 'twitter'" />
  </div>
</template>

<script setup lang="ts">
const { currentTrack, menuItem } = storeToRefs(useGlobalStore())
</script>
