<template>
  <div class="flex flex-col sm:flex-row sm:gap-8">
    <MainMenu />
    <Transition>
      <TrackList v-if="menuItem === 'album'" class="" />
    </Transition>
    <Transition>
      <Lyrics v-if="menuItem === 'album' && currentTrack.name !== 'none'" />
    </Transition>
    <Transition>
      <Player v-if="menuItem === 'album' && currentTrack.name !== 'none'" />
    </Transition>
    <Transition>
      <Streaming v-show="menuItem === 'streaming'" />
    </Transition>
    <Transition>
      <Pix v-if="menuItem === 'pix'" />
    </Transition>
    <Transition>
      <Twitter v-if="menuItem === 'twitter'" />
    </Transition>
  </div>
</template>

<script setup lang="ts">
const { currentTrack, menuItem } = storeToRefs(useGlobalStore())
</script>

<style scoped lang="postcss">
.v-enter-active {
  @apply transition-opacity duration-300 ease-in-out;
}

.v-leave-active {
  @apply duration-0;
}

.v-enter-from,
.v-leave-to {
  @apply opacity-0;
}
</style>
