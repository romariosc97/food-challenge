import { shallowMount } from '@vue/test-utils';
import UnderConstruction from '../../src/components/UnderConstruction.vue';

test('Mensaje del componente: "UnderConstruction"', () => {
  const wrapper = shallowMount(UnderConstruction, {
    props: {
      route: 'Hoy'
    },
    global: {
      stubs: ['FontAwesomeIcon']
    }
  });

  expect(wrapper.find('.description').html()).toContain('<span>"Hoy"</span> se encuentra en desarrollo');
});