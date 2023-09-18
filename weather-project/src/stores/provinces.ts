import { defineStore } from 'pinia'
import { provinces } from '@/services/http/provinces'
import { WEATHER } from './weather'

interface IDVILLAGE {
  CODPROV: string
  CODIGOINE: string
}

interface VILLAGE {
  CODIGOINE: string
  ID_REL: string
  COD_GEO: string
  CODPROV: string
  NOMBRE_PROVINCIA: string
  NOMBRE: string
  POBLACION_MUNI: number
  SUPERFICIE: number
  PERIMETRO: number
  CODIGOINE_CAPITAL: string
  NOMBRE_CAPITAL: string
  POBLACION_CAPITAL: string
  HOJA_MTN25: string
  LONGITUD_ETRS89_REGCAN95: number
  LATITUD_ETRS89_REGCAN95: number
  ORIGEN_COORD: string
  ALTITUD: number
  ORIGEN_ALTITUD: string
  DISCREPANTE_INE: number
}

interface AppState {
  error: boolean
  loading: boolean
  listProvinces: VILLAGE[]
  listVillages: VILLAGE[]
  listFavoritesVillages: IDVILLAGE[]
}

export const useProvincesStore = defineStore({
  id: 'provincias',
  state: (): AppState => ({
    error: false,
    loading: false,
    listProvinces: [],
    listVillages: [],
    listFavoritesVillages: []
  }),
  getters: {
    getListProvinces: (state) => state.listProvinces,
    getListVillages: (state) => state.listVillages,
    getListFavorites: (state) => state.listFavoritesVillages
  },
  actions: {
    async requestListProvinces(this) {
      const resp = await provinces.listProvincias()
      this.listProvinces = resp.data.provincias
    },
    async requestListVillages(this, payload: any) {
      const resp = await provinces.listVillages(payload)
      this.listVillages = resp.data.municipios
    },
    toggleProvinceFavorite(this, weather: WEATHER) {
      const isProvinceFav = this.listFavoritesVillages?.find(
        (el) => el.CODPROV === weather.code_province && el.CODIGOINE === weather.code_village
      )

      if (isProvinceFav) {
        this.listFavoritesVillages = this.listFavoritesVillages?.filter(
          (el) => el.CODPROV !== weather.code_province && el.CODIGOINE !== weather.code_village
        )
      } else {
        this.listFavoritesVillages.push({
          CODPROV: weather.code_province,
          CODIGOINE: weather.code_village
        })
      }
      localStorage.setItem('FavoritesList', JSON.stringify(this.listFavoritesVillages))
    },
    isProvinceFavorite(this, code_province: string, code_village: string): boolean {
      if (this.listFavoritesVillages && this.listFavoritesVillages?.length) {
        return !!this.listFavoritesVillages?.find(
          (el) => el.CODPROV === code_province && el.CODIGOINE === code_village
        )
      }
      return false
    },
    setListFav(payload: any) {
      this.listFavoritesVillages = payload
    }
  }
})
