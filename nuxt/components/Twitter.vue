<template>
  <div
    class="flex flex-col gap-6 max-h-screen py-6 overflow-y-scroll max-w-[24rem]"
  >
    <TwitterItem :key="i" v-for="i in Array(5).keys()" />
  </div>
</template>
