<template>
  <div class="flex hover:text-fg-active cursor-pointer">
    {{ $props.post }}
  </div>
</template>

<script setup lang="ts">
defineProps<{
  post: string
}>()
</script>
