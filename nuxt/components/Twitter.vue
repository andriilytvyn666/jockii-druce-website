<template>
  <div
    class="flex flex-col gap-6 max-h-screen py-6 overflow-y-scroll max-w-[48rem]"
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
