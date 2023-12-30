<template>
  <div class="flex items-center gap-2.5 fixed right-8 top-6">
    <NuxtIcon
      :name="currentAudio.isPlaying ? 'player/pause' : 'player/play'"
      class="w-4 h-4"
      @click="
        currentAudio.isPlaying ? currentAudio.pause() : currentAudio.play()
      "
    />
  </div>
</template>

<script setup lang="ts">
const { currentAudio } = storeToRefs(useGlobalStore())
</script>
