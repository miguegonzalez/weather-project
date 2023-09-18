import { http } from './index'

class provinces {
  /**
   * Get Province data.
   * API GET Method
   */

  static listProvincias = async () => {
    try {
      const response = await http
        .get('/provincias')
      return response
    } catch (error: any) {
      return error.response
    }
  }
  static listVillages = async (payload: any) => {
    try {
      const response = await http
        .get(`/provincias/${payload.province}/municipios`)
      return response
    } catch (error: any) {
      return error.response
    }
    
  }
}
export { provinces }


