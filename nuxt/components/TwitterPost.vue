<template>
  <div class="flex flex-col gap-1">
    <span class="text-fg-active">{{
      new Date($props.date).toLocaleDateString('uk')
    }}</span>
    <p>
      {{ $props.post }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  date: string
  post: string
}>()
</script>
