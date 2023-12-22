<template>
  <div class="overflow-y-scroll max-h-screen">
    <div class="flex flex-col gap-3 my-12">
      <div :key="i" v-for="i in new Array(50).keys()" class="flex gap-2">
        <span>01</span>
        <p class="whitespace-nowrap">Peroxide</p>
      </div>
    </div>
  </div>
</template>
