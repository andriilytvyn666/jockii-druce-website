<template>
  <div class="overflow-y-scroll max-h-screen py-6">
    <div class="flex flex-col gap-1">
      <button
        :key="i"
        v-for="i in new Array(9).keys()"
        :class="
          (currentTrack == i + 1 ? 'text-fg-active underline ' : ' ') +
          'flex gap-2 track'
        "
        @click="setCurrentTrack(i + 1)"
      >
        <span class="whitespace-nowrap"
          >0{{ i + 1 }} {{ '\xa0\xa0Peroxide' }}</span
        >
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const { currentTrack } = storeToRefs(useGlobalStore())
const { setCurrentTrack } = useGlobalStore()
</script>

<style scoped lang="postcss">
.track {
  @apply hover:text-fg-active;
}
</style>
