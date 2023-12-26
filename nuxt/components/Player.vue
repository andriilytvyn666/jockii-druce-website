<template>
  <div
    class="flex items-center gap-2.5 fixed right-8 top-6"
    v-if="audio?.isPlaying !== null"
  >
    <NuxtIcon
      :name="audio?.isPlaying ? 'player/pause' : 'player/play'"
      class="w-4 h-4"
      @click="audio?.isPlaying ? audio.pause() : audio?.play()"
    />
  </div>
</template>

<script setup lang="ts">
const { audio } = storeToRefs(useGlobalStore())
</script>
