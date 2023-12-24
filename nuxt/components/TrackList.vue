<template>
  <div class="overflow-y-scroll max-h-screen">
    <div class="flex flex-col gap-1">
      <div
        :key="i"
        v-for="i in new Array(9).keys()"
        :class="(currentTrack == i + 1 ? 'text-fg-active ' : '') + 'flex gap-2'"
        @click="setCurrentTrack(i + 1)"
      >
        <span>0{{ i + 1 }}</span>
        <p class="whitespace-nowrap">Peroxide</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { currentTrack } = storeToRefs(useGlobalStore())
const { setCurrentTrack } = useGlobalStore()
</script>
