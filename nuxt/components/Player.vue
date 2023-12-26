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
    <span>
      <span
        >{{
          `${new Date(playbackPosition).getMinutes()}:${new Date(
            playbackPosition
          ).getSeconds()}`
        }}
      </span>
      <span>/</span>
      <span>
        {{
          `${new Date(duration!).getMinutes()}:${new Date(
            duration!
          ).getSeconds()}`
        }}
      </span>
    </span>
  </div>
</template>

<script setup lang="ts">
import { useSound } from '@vueuse/sound'
const { play, pause, isPlaying, duration } = useSound('/track.mp3')
const playbackPosition = ref<number>(0)

setInterval(() => {
  if (isPlaying.value) {
    playbackPosition.value += 1000
  }

  if (
    playbackPosition.value - 1000 ===
    Math.floor(duration.value! / 1000) * 1000
  )
    playbackPosition.value = 1000

  console.log(playbackPosition.value)
}, 1000)
</script>
