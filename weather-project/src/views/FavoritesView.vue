<script setup lang="ts">
import { computed } from 'vue'
import { useWeatherStore } from '@/stores/weather'

const weatherStore = useWeatherStore()
const weatherList = computed(() => [...weatherStore.getHistoricalWeather].reverse())

</script>

<template>
  <main>
    <h1>Provincias favoritas</h1>
    <div v-for="weather in weatherList" :key="weather.name">
      <WeatherCard :weather="weather" favorites />
    </div>
  </main>
</template>