<template>
  <div
    class="flex flex-col gap-6 max-h-screen py-6 overflow-y-scroll max-w-[24rem]"
  >
    <TwitterPost
      :key="posts.indexOf(post)"
      v-for="post in posts"
      :post="post.post"
    />
  </div>
</template>

<script setup lang="ts">
const query = `*[_type == "twitter"] { posts } [0]`

const { data } = await useSanityQuery<Twitter>(query)

const posts = data.value ? data.value.posts : []
</script>
