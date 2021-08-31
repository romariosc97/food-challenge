import { shallowMount } from '@vue/test-utils'
import UnderConstruction from '../../src/components/UnderConstruction.vue'

test('renders a greeting', () => {
  const wrapper = shallowMount(UnderConstruction, {
    props: {
      route: 'Hoy'
    }
  })

  expect(wrapper.find({ className: 'description' })).toContain('<span>"Hoy"</span> se encuentra en desarrollo')
})