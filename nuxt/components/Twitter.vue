<template>
  <div
    class="flex flex-col gap-6 sm:max-h-screen sm:py-6 pb-8 pt-1 overflow-y-scroll max-w-[48rem]"
  >
    <TwitterPost
      :key="posts.indexOf(post)"
      v-for="post in posts"
      :post="post"
    />
  </div>
</template>

<script setup lang="ts">
const query = groq`*[_type == "twitter"].posts [0]`

const { data } = await useSanityQuery<string[]>(query)

console.log(data.value)
const posts = data.value ? data.value : []
</script>
