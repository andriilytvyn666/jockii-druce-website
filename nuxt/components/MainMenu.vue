<template>
  <div class="flex flex-col gap-1 [&>button]:text-left [&>button]:w-fit">
    <h1 class="text-fg-active whitespace-nowrap pr-0.5">jockii druce</h1>
    <button
      @click="setMenuItem('album')"
      :class="menuItem === 'album' ? 'text-fg-active' : ''"
    >
      альбом
      <span v-show="menuItem === 'album'">+</span>
    </button>
    <button
      @click="setMenuItem('streaming')"
      :class="menuItem === 'streaming' ? 'text-fg-active' : ''"
    >
      стрімінги
      <span v-show="menuItem === 'streaming'">+</span>
    </button>
    <button
      @click="setMenuItem('pix')"
      :class="menuItem === 'pix' ? 'text-fg-active' : ''"
    >
      фоткі
      <span v-show="menuItem === 'pix'">+</span>
    </button>
  </div>
</template>

<script lang="ts" setup>
const { menuItem } = storeToRefs(useGlobalStore())
const { setMenuItem } = useGlobalStore()
</script>
