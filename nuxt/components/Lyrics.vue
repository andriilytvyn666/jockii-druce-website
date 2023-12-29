<template>
  <div class="overflow-y-scroll max-h-screen py-6">
    <span>
      <PortableText :key="currentTrack.name" :value="currentTrack.lyrics" />
    </span>
  </div>
</template>

<script setup lang="ts">
import { PortableText } from '@portabletext/vue'

const { currentTrack } = storeToRefs(useGlobalStore())
</script>
