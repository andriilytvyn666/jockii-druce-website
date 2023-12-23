<template>
  <div class="overflow-y-scroll max-h-screen">
    <div class="flex flex-col gap-1">
      <div :key="i" v-for="i in new Array(9).keys()" class="flex gap-2">
        <span>0{{ i + 1 }}</span>
        <p class="whitespace-nowrap">Peroxide</p>
      </div>
    </div>
  </div>
</template>
