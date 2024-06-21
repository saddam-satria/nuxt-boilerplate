<script setup lang="ts">
const layout = 'header';
const debug = constant.DEBUG;
import { useCounterStore } from '@/stores/counter';
const counter = useCounterStore();

const buttonIncrement = (type: 'increment' | 'decrement') => {
  if (type !== 'decrement') {
    counter.increment();
    return;
  }

  counter.decrement();
};
</script>

<template>
  <NuxtLayout :name="layout">
    <section>
      <Welcome></Welcome>
      <Hello message="Hello"></Hello>
      <div class="flex flex-col">
        <Icon name="uil:github" color="black" />
        <span>{{ counter.getCounter }}</span>
        <span>{{ debug }}</span>
        <span>{{ constant.API_URL }}</span>
        <div class="flex flex-col">
          <div>
            <button
              @click="buttonIncrement('increment')"
              class="p-2 bg-blue-300 text-md"
            >
              Increment
            </button>
          </div>
          <div>
            <button
              @click="buttonIncrement('decrement')"
              class="p-2 bg-blue-300 text-md"
            >
              decrement
            </button>
          </div>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>
