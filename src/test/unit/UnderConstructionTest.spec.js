import Vue from 'vue'
import UnderConstruction from './../../components/UnderConstruction.vue'

// Función auxiliar que monta y devuelve el texto representado.
function getRenderedText (Component, propsData) {
  const Constructor = Vue.extend(Component)
  const vm = new Constructor({ propsData: propsData }).$mount()
  return vm.$el.textContent
}

describe('UnderConstruction', () => {
  it('renderiza correctamente con diferentes props', () => {
    expect(getRenderedText(UnderConstruction, {
      route: 'Hoy'
    })).toBe('Hoy')

    expect(getRenderedText(UnderConstruction, {
      route: 'Coach'
    })).toBe('Coach')
  })
})