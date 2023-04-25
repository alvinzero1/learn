// ref:: https://stackblitz.com/edit/vitest-dev-vitest-fdhb1y?file=test%2Fas-async.test.ts&initialPath=__vitest__
import { test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Hello from '../Hello.vue'

test('mount component', async () => {
  expect(Hello).toBeTruthy()

  const wrapper = mount(Hello, {
    props: {
      count: 4,
    },
  })

  expect(wrapper.text()).toContain('4 x 2 = 8')
  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.get('button').trigger('click')

  expect(wrapper.text()).toContain('4 x 3 = 12')

  await wrapper.get('button').trigger('click')

  expect(wrapper.text()).toContain('4 x 4 = 16')
})
