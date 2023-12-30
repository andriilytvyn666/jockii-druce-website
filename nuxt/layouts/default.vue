<template>
  <div class="flex flex-col min-h-screen max-h-screen">
    <div class="flex flex-col grow mx-8">
      <slot />
    </div>
    <DevOnly>
      <BreakpointDebug />
    </DevOnly>
  </div>
</template>
