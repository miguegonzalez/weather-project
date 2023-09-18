import { http } from './index'

class weather {
  /**
   * Get Weather data.
   * API GET Method
   */

  static villageWeather = async (payload: any) => {
    try {
      const response = await http
        .get(`/provincias/${payload.province}/municipios/${payload.village}`)
      return response
    } catch (error: any) {
      return error.response
    }
  }
}
export { weather }


