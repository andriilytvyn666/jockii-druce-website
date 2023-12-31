<template>
  <div
    class="overflow-y-scroll select-none flex flex-col gap-1 max-h-screen min-w-fit sm:h-screen sm:justify-center pb-6 pt-1 sm:py-0"
  >
    <button
      :key="track.name"
      v-for="track in trackList"
      :class="
        (currentTrack.name === track.name
          ? 'text-fg-active whitespace-nowrap underline '
          : '') + 'flex gap-2 track'
      "
      @click="
        () => {
          setCurrentTrack(track)
          stopAllTracks(track)
        }
      "
    >
      {{ getTrackNameString(track) }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { useSound } from '@vueuse/sound'
import { buildFileUrl, parseFileAssetId } from '@sanity/asset-utils'

const { currentTrack, currentAudio } = storeToRefs(useGlobalStore())
const { setCurrentTrack, setCurrentAudio } = useGlobalStore()

const query = groq`*[_type == "trackList"].tracks [0]`
const { data } = await useSanityQuery<Track[]>(query)
const trackList = data.value ? data.value : []

const config = useSanity().config
const audioList: ReturnedValue[] = []

for (let track of trackList) {
  audioList.push(
    useSound(
      buildFileUrl(parseFileAssetId(track.mp3.asset._ref), {
        dataset: config.dataset,
        projectId: config.projectId,
      })
    )
  )
}

const stopAllTracks = (track: Track) => {
  setCurrentAudio(audioList[trackList.indexOf(track)])

  if (currentAudio.value.isPlaying) {
    currentAudio.value.stop()
  } else if (currentTrack.value.name !== 'none') {
    currentAudio.value.play()
  }

  for (let audio of audioList) {
    if (trackList.indexOf(track) !== audioList.indexOf(audio)) {
      audio.stop()
    }
  }
}

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
