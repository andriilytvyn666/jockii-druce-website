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
        @click="
          () => {
            // TODO: rework for dynamic track list
            setCurrentTrack(track)
            if (audio.isPlaying.value) {
              audio.stop()
              if (currentTrack.name !== 'none') audio.play()
            } else audio.play()
          }
        "
      >
        <span :class="'whitespace-nowrap'">
          {{ getTrackNameString(track) }}
        </span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSound } from '@vueuse/sound'

const { currentTrack } = storeToRefs(useGlobalStore())
const { setCurrentTrack, setAudio } = useGlobalStore()

const query = groq`*[_type == "trackList"].tracks [0]`
const { data } = await useSanityQuery<Track[]>(query)

import { buildFileUrl, parseAssetId } from '@sanity/asset-utils'

const config = useSanity().config

const trackList = data.value ? data.value : []

const getTrackNameString = (track: Track): string => {
  const trackNum = trackList.indexOf(track) + 1
  return `${trackNum < 10 ? '0' : ''}${trackNum}\xa0\xa0\xa0${track.name}`
}
const asset = parseAssetId(data.value![0].mp3!.asset._ref)

const audio = useSound(
  buildFileUrl(
    {
      assetId: asset.assetId,
      extension: asset.extension,
    },
    {
      projectId: config.projectId,
      dataset: config.dataset,
    }
  )
)

setAudio(audio)
</script>

<style scoped lang="postcss">
.track {
  @apply hover:text-fg-active;
}
</style>
