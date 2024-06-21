<script setup lang="ts">
const layout = 'header';
const debug = constant.DEBUG;
</script>

<template>
  <NuxtLayout :name="layout">
    <section>
      <welcome></welcome>
      <Icon name="uil:github" color="black" />
      <span>{{ debug }}</span>
    </section>
  </NuxtLayout>
</template>
