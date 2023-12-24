<template>
  <div class="flex flex-col gap-1 [&>button]:text-left [&>button]:w-fit py-6">
    <button
      @click="setMenuItem('twitter')"
      :class="
        'text-fg-active whitespace-nowrap pr-0.5 hover:text-[#fff]' +
        (menuItem === 'twitter' ? ' underline' : ' ')
      "
    >
      jockii druce
    </button>
    <button
      @click="setMenuItem('album')"
      :class="
        (menuItem === 'album' ? 'text-fg-active underline ' : ' ') + 'menu-item'
      "
    >
      альбом
    </button>
    <button
      @click="setMenuItem('streaming')"
      :class="
        (menuItem === 'streaming' ? 'text-fg-active underline ' : ' ') +
        'menu-item'
      "
    >
      стрімінги
    </button>
    <button
      @click="setMenuItem('pix')"
      :class="
        (menuItem === 'pix' ? 'text-fg-active underline ' : ' ') + 'menu-item'
      "
    >
      фоткі
    </button>
  </div>
</template>

<script lang="ts" setup>
const { menuItem } = storeToRefs(useGlobalStore())
const { setMenuItem } = useGlobalStore()
</script>

<style scoped lang="postcss">
.menu-item {
  @apply hover:text-fg-active;
}
</style>
