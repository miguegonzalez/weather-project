import WeatherCard from './weatherCard.vue'
import { shallowMount } from '@vue/test-utils'

describe('WeatherCard', () => {
    it('calcula correctamente si es un favorito', () => {
      const wrapper = shallowMount(WeatherCard, {
        props: {
          weather: {
            code_province: 'exampleProvinceCode',
            code_village: 'exampleVillageCode',
          },
          favorites: true,
        },
      })
  
      expect(wrapper.vm.getFavorite()).toBe(true)
    })
  
    it('Cambia correctamente el favorito', async () => {
      const wrapper = shallowMount(WeatherCard, {
        props: {
          weather: {
            code_province: 'exampleProvinceCode',
            code_village: 'exampleVillageCode',
          },
          favorites: true,
        },
      })
  
      // Verify that it is initially a favorite
      expect(wrapper.vm.getFavorite()).toBe(true)
  
      // Simulates clicking on the star icon to undo the favorite
      await wrapper.find('.pointer').trigger('click')
  
      // Verify that after clicking, it is no longer a favorite
      expect(wrapper.vm.getFavorite()).toBe(false)
    })
  })
