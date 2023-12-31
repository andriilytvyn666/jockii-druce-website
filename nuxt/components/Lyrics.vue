<template>
  <div
    class="flex overflow-visible sm:overflow-y-scroll sm:max-h-screen sm:pt-[30vh] sm:py-6 pb-8"
  >
    <span>
      <PortableText :key="currentTrack.name" :value="currentTrack.lyrics" />
    </span>
  </div>
</template>

<script setup lang="ts">
import { PortableText } from '@portabletext/vue'

const { currentTrack } = storeToRefs(useGlobalStore())
</script>
