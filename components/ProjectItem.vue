<script setup lang="ts">
defineProps<{
  id?: string
  name: string
  desc?: string
  img?: string // preview
  link: string
}>()

function goto(link?: string) {
  if (!link)
    return
  useOpenWindow(link)
}
</script>

<template>
  <VDropdown :triggers="['hover']">
    <a link mr-4 @click="goto(link)">
      <span mr-2 op-50>{{ id }}</span>
      <span font-600>{{ name }}</span>
    </a>
    <template #popper>
      <div flex="~ col" min-w-500px p-4 text-3 text-base>
        <div text-lg font-bold>
          {{ name }}
        </div>
        <div my-2 h-300px border border-base rounded bg-white p-2 dark:bg-black>
          <img v-if="img" :src="img" h-full>
        </div>
        <p v-if="desc" mt-2>
          {{ desc }}
        </p>
      </div>
    </template>
  </VDropdown>
</template>
