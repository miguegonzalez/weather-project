<script setup lang="ts">
import { computed, ref } from 'vue'
import { useWeatherStore } from '@/stores/weather'

const weatherStore = useWeatherStore()
const favorites = ref<boolean>(false)
const weatherList = computed(() => [...weatherStore.getHistoricalWeather].reverse())

</script>

<template>
  <main>
    <h1>Histórico de provincias</h1>
    <div v-for="weather in weatherList" :key="weather.name">
      <WeatherCard :weather="weather" :favorites="favorites" />
    </div>
  </main>
</template>