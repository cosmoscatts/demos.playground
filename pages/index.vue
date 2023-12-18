<script setup lang="ts">
const projects = getData()

function goto(link?: string) {
  if (!link)
    return
  useOpenWindow(link)
}
</script>

<template>
  <div grid grid-cols-1 gap-x-4 gap-y-1 lg:grid-cols-3 sm:grid-cols-2>
    <a v-for="project in projects" :key="project.name" link mr-4 @click="goto(project.link)">
      <span mr-2 op-50>{{ project.id }}</span>
      <b>{{ project.name }}</b>
    </a>
  </div>
</template>
