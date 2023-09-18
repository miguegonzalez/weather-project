import { defineStore } from 'pinia'
import { weather } from '@/services/http/weatherService'

export interface WEATHER {
  code_province: string
  code_village: string
  name: string
  current_temp: string
  max_temp: string
  min_temp: string
  description: string
}

interface AppState {
  error: boolean
  loading: boolean
  historicalWeather: WEATHER[]
  weather: WEATHER
}

export const useWeatherStore = defineStore({
  id: 'weather',
  state: (): AppState => ({
    error: false,
    loading: false,
    historicalWeather: [],
    weather: {
      code_province: '',
      code_village: '',
      name: '',
      current_temp: '',
      max_temp: '',
      min_temp: '',
      description: '',
    }
  }),
  getters: {
    getHistoricalWeather(state): WEATHER[] {
      return state.historicalWeather
    },
    getWeather(state): WEATHER {
      return state.weather
    },
  },
  actions: {
    async requestWeather(payload: { province: string, village: string }) {
      try {
        const resp = await weather.villageWeather(payload)

        const indexFindInHistorical = this.historicalWeather.findIndex(
          el => el.code_province === payload.province && el.code_village === payload.village
        )
        
        if (indexFindInHistorical !== -1) {
          this.historicalWeather.splice(indexFindInHistorical, 1);
        }

        const newWeather: WEATHER = {
          code_province: payload.province,
          code_village: payload.village,
          name: resp.data.municipio.NOMBRE,
          current_temp: resp.data.temperatura_actual,
          max_temp: resp.data.temperaturas.max,
          min_temp: resp.data.temperaturas.min,
          description: resp.data.stateSky.description,
        }
        this.weather = newWeather
        this.historicalWeather.push(newWeather)
        localStorage.setItem('WeatherList', JSON.stringify(this.historicalWeather))
      } catch (error) {
        console.error('Error al obtener el clima:', error)
        this.error = true
      } finally {
        this.loading = false
      }
    },
    setWeather(payload: any) {
      this.historicalWeather = payload
    }
  }
})
