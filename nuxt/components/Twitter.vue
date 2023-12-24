<template>
  <div
    class="flex flex-col gap-6 max-h-screen py-6 overflow-y-scroll max-w-[24rem]"
  >
    <TwitterPost
      :key="`${post.date} ${post.name}`"
      v-for="post in posts"
      :date="post.date"
      :post="post.post"
    />
  </div>
</template>

<script setup lang="ts">
const query = `*[_type == "twitter"] { posts } [0]`

const { data } = await useSanityQuery<Twitter>(query)

const posts = (data.value ? data.value.posts : []).sort((a, b) => {
  const dateA = new Date(a.date)
  const dateB = new Date(b.date)

  return dateA < dateB ? 1 : dateA > dateB ? -1 : 0
})
</script>
