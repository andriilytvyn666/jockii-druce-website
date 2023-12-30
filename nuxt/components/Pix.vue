<template>
  <div
    class="flex flex-col overflow-y-scroll max-h-screen sm:py-6 pb-6 max-w-[48rem] [&>*]:w-fit"
  >
    <!-- TODO: add video support -->
    <!-- <video class="w-full" controls>
      <source type="video/mp4" src="/video.mp4" />
    </video> -->

    <!-- TODO: use NuxtImage or SanityImage -->
    <SanityImage
      :key="image.asset._ref"
      v-for="image in images"
      :asset-id="image.asset._ref"
      max-w="768"
    />
  </div>
</template>

<script setup lang="ts">
const query = groq`*[_type == "pix"][0].pix {asset}`
const { data } = await useSanityQuery<image[]>(query)
const images = data.value ? data.value : []
</script>
