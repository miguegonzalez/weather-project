
<script setup lang="ts">
import { onBeforeMount } from "vue"
import { useProvincesStore } from '@/stores/provinces'
import { useWeatherStore } from '@/stores/weather'

const provinceStore = useProvincesStore()
const weatherStore = useWeatherStore()

onBeforeMount(() => {
  const favoritesDataString = localStorage.getItem('FavoritesList');
  if (favoritesDataString !== null) {
    const favoritesData = JSON.parse(favoritesDataString);
    provinceStore.setListFav(favoritesData);
  }

  const weatherDataString = localStorage.getItem('WeatherList');
  if (weatherDataString !== null) {
    const weatherData = JSON.parse(weatherDataString);
    weatherStore.setWeather(weatherData);
  }
})

</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo_bbva_blanco.svg" width="125" height="125" />

    <div class="wrapper">
      <h1 class="text-center">Welcome to BBVA meteo app</h1>
      <h3 class="text-center">
        <a href="https://www.el-tiempo.net/mas-informacion" target="_blank">
          © Información metereológica elaborada por la Agencia Estatal de Meteorología (AEMET)
        </a>
      </h3>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/historical">Histórico</RouterLink>
        <RouterLink to="/favorites">Favoritos</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
<style lang="scss" src="./assets/styles/main.scss"></style>
<style>
@font-face {
    font-family: BentonSansBBVA;
    src: url("./assets/fonts/BentonSansBBVA/BentonSansBBVA-Medium-Lite.woff2") format("woff2"),
         url("./assets/fonts/BentonSansBBVA/BentonSansBBVA-Bold-Lite.woff2") format("woff2");
}
</style>