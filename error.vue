<script setup lang="ts">
defineProps({
  error: Object,
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div flex="col center" h-screen text-base>
    <div flex="~ col gap-2" h-full items-center justify-center text-center>
      <template v-if="error?.statusCode === 404">
        <span mb-10 text-4xl>⊙﹏⊙∥ 页面未找到</span>
      </template>
      <template v-else>
        <div i-ri-error-warning-line text-5xl /><span text-xl>发生了一些错误···</span>
      </template>
      <button btn-solid mt-5 @click="handleError">
        {{ error?.statusCode === 404 ? '返回' : '清除错误' }}
      </button>
    </div>
  </div>
</template>
