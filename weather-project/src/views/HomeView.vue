<script setup lang="ts">
import { computed, onBeforeMount, ref, watch } from 'vue'
import { useProvincesStore } from '@/stores/provinces'
import { useWeatherStore } from '@/stores/weather'

const provincesStore = useProvincesStore()
const weatherStore = useWeatherStore()

const provincesList = ref<any[]>([])
const villageList = ref<any[]>([])

const provinceSelected = ref<string>('')

const weather = computed(() => weatherStore.getWeather)

watch(provinceSelected, async (newData: string) => {
  // Get associated villages
  await provincesStore.requestListVillages({
    province: newData
  })
  villageList.value = provincesStore.getListVillages
  const capital = villageList.value.find((el: { COD_GEO: string }) => el.COD_GEO === newData + '001')

  await weatherStore.requestWeather({
    province: newData,
    village: capital?.CODIGOINE?.slice(0, 5) || ''
  })
})

onBeforeMount(async () => {
  await provincesStore.requestListProvinces()
  provincesList.value = provincesStore.getListProvinces
})
</script>

<template>
  <main>
    <h1>Lista de provincias</h1>
    <div class="d-flex">
      <div>Elige la provincia:</div>
      <select v-model="provinceSelected">
        <option v-for="(el, index) in provincesList" :key="index" :value="el.CODPROV">
          {{ el.NOMBRE_PROVINCIA }}
        </option>
      </select>
    </div>
    <WeatherCard v-if="weather?.name" :weather="weather" />
  </main>
</template>
