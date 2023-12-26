<template>
  <div
    class="flex items-center gap-2.5 fixed right-8 top-6"
    v-if="duration !== null"
  >
    <NuxtIcon
      :name="isPlaying ? 'player/pause' : 'player/play'"
      class="w-4 h-4"
      @click="isPlaying ? pause() : play()"
    />
  </div>
</template>

<script setup lang="ts">
import { useSound } from '@vueuse/sound'
const { play, pause, isPlaying, duration } = useSound('/track.mp3')
</script>
