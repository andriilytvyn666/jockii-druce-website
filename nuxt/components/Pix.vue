<template>
  <div
    class="sm:ml-4 flex flex-col sm:overflow-y-scroll sm:max-h-screen sm:py-6 pb-6 pt-4 max-w-[48rem] [&>*]:w-fit"
  >
    <!-- TODO: add video support -->
    <!-- <video class="w-full" controls>
      <source type="video/mp4" src="/video.mp4" />
    </video> -->

    <SanityImage
      :key="image.asset._ref"
      v-for="image in images"
      :asset-id="image.asset._ref"
      max-w="768"
      v-motion-fade-once
    />
  </div>
</template>

<script setup lang="ts">
const query = groq`*[_type == "pix"][0].pix {asset}`
const { data } = await useSanityQuery<image[]>(query)
const images = data.value ? data.value : []
</script>
