<template>
  <!-- TODO: refactor this mess -->
  <div class="flex flex-col gap-1 [&>button]:text-left [&>button]:w-fit pt-6">
    <button
      :class="
        'text-fg-active whitespace-nowrap pr-0.5 hover:text-[#fff]' +
        (menuItem === 'none' ? ' hidden' : ' sm:hidden')
      "
      @click="setMenuItem('none')"
    >
      {{ '< назад' }}
    </button>
    <button
      v-if="mainMenu.title.enabled"
      @click="setMenuItem('twitter')"
      :class="
        'text-fg-active whitespace-nowrap pr-0.5 hover:text-[#fff]' +
        (menuItem === 'twitter' ? ' underline' : ' ') +
        (menuItem !== 'none' ? ' hidden sm:inline' : '')
      "
    >
      {{ mainMenu.title.name }}
    </button>
    <button
      v-if="mainMenu.album.enabled"
      @click="setMenuItem('album')"
      :class="
        (menuItem === 'album' ? 'text-fg-active underline ' : ' ') +
        'menu-item' +
        (menuItem !== 'none' ? ' hidden sm:inline' : '')
      "
    >
      {{ mainMenu.album.name }}
    </button>
    <button
      v-if="mainMenu.streaming.enabled"
      @click="setMenuItem('streaming')"
      :class="
        (menuItem === 'streaming' ? 'text-fg-active underline ' : ' ') +
        'menu-item' +
        (menuItem !== 'none' ? ' hidden sm:inline' : '')
      "
    >
      {{ mainMenu.streaming.name }}
    </button>
    <button
      v-if="mainMenu.pix.enabled"
      @click="setMenuItem('pix')"
      :class="
        (menuItem === 'pix' ? 'text-fg-active underline ' : ' ') +
        'menu-item' +
        (menuItem !== 'none' ? ' hidden sm:inline' : '')
      "
    >
      {{ mainMenu.pix.name }}
    </button>
  </div>
</template>

<script lang="ts" setup>
const { menuItem } = storeToRefs(useGlobalStore())
const { setMenuItem } = useGlobalStore()

const query = groq`*[_type == "mainMenu" ] { title, album, streaming, pix } [0]`
const { data } = await useSanityQuery<MainMenu>(query)

const mainMenu = data.value!
</script>

<style scoped lang="postcss">
.menu-item {
  @apply hover:text-fg-active;
}
</style>
