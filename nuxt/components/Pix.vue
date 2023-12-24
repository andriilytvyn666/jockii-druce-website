<template>
  <div
    class="flex flex-col gap-4 overflow-auto max-h-screen py-6 max-w-[48rem]"
  >
    <video class="w-full" controls>
      <source type="video/mp4" src="/video.mp4" />
    </video>
    <NuxtImg
      :key="i"
      v-for="i in Array(5).keys()"
      src="/images/16x9.jpg"
      class="aspect-video"
    />
  </div>
</template>
