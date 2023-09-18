<script setup lang="ts">
import { useProvincesStore } from '../../stores/provinces'
import { WEATHER } from '../../stores/weather'

const provincesStore = useProvincesStore()

/* Interfaces and Types */
interface Props {
  weather: WEATHER
  favorites?: boolean
}

/* Props */
const props = defineProps<Props>()

const setFavorite = () => {
  provincesStore.toggleProvinceFavorite(props.weather)
  getFavorite()
}

const getFavorite = (): boolean => {
  return provincesStore.isProvinceFavorite(props.weather.code_province, props.weather.code_village)
}

</script>

<template>
  <div class="weather" v-if="favorites ? getFavorite() : true">
    <div class="weather__title" >
      <div class="pointer" @click="setFavorite()">
        <IconStar v-if="getFavorite()" />
        <IconStarOutline v-else />
      </div>
      <div class="ml-1">{{ weather.name }}</div>
    </div>
    <div class="weather__body">
      <div class="current">{{ weather.current_temp }}º</div>
      <div><span class="max">{{ weather.max_temp }}º</span> | <span class="min">{{ weather.min_temp }}º</span></div>
    </div>
    <div class="weather__footer">{{ weather.description }}</div>
  </div>
</template>
<style lang="scss" scoped src="./weatherCard.scss"></style>