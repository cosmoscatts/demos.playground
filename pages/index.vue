<script setup lang="ts">
const projects = getData()
</script>

<template>
  <div grid grid-cols-1 gap-x-4 gap-y-1 lg:grid-cols-3 sm:grid-cols-2>
    <ProjectItem v-for="project in projects" :key="project.name" :="project" />
  </div>
</template>
