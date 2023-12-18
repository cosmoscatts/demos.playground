<script setup lang="ts">
const route = useRoute()
watch(() => route.path, () => {
  const title = (route.meta.title ?? 'Cosmoscatts') as string
  useHead({ title })
}, { immediate: true })
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
