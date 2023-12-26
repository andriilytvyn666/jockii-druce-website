<template>
  <div class="overflow-y-scroll max-h-screen py-6">
    <div class="flex flex-col gap-1">
      <button
        :key="track.name"
        v-for="track in trackList"
        :class="
          (currentTrack.name === track.name
            ? 'text-fg-active underline '
            : '') + 'flex gap-2 track'
        "
        @click="setCurrentTrack(track)"
      >
        <span :class="'whitespace-nowrap'">
          {{ getTrackNameString(track) }}
        </span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const { currentTrack } = storeToRefs(useGlobalStore())
const { setCurrentTrack } = useGlobalStore()

const query = groq`*[_type == "trackList"].tracks [0]`
const { data } = await useSanityQuery<Track[]>(query)
const trackList = data.value ? data.value : []

const getTrackNameString = (track: Track): string => {
  const trackNum = trackList.indexOf(track) + 1
  return `${trackNum < 10 ? '0' : ''}${trackNum}\xa0\xa0\xa0${track.name}`
}
</script>

<style scoped lang="postcss">
.track {
  @apply hover:text-fg-active;
}
</style>
