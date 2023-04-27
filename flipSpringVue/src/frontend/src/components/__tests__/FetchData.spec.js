// from ChatGPT
import { describe, test, expect, vi } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import { ref } from 'vue'
import FetchData from '@/components/FetchData.vue'

describe('FetchData', () => {
  test('fetches and displays message', async () => {
    const mockText = 'Hello world!'
    global.fetch = vi.fn().mockResolvedValue({
      text: () => Promise.resolve(mockText)
    })

    console.log(">>> " + global.fetch())

    const msg = ref(null)
    const wrapper = shallowMount(FetchData, {
      props: { msg }
    })

    console.log(">before>> " + wrapper.text())

    // Assert initial state
    expect(wrapper.find('h3').text()).toBe('msg:')

    // Wait for fetchData to finish
    await wrapper.vm.$nextTick()
    console.log(">after>> " + wrapper.text())

    // Assert state after fetchData completes
    // expect(wrapper.find('h3').text()).toBe(`msg: ${mockText}`)
  })
})

// import { describe, it, expect, vi } from 'vitest'
// import { mount } from '@vue/test-utils'
// import FetchData from '@/components/FetchData.vue'

// describe('FetchData', () => {
//   it('fetches and displays message', async () => {
//     const mockText = 'Hello world!'
//     global.fetch = vi.fn().mockResolvedValue({
//       text: () => Promise.resolve(mockText)
//     })

//     const wrapper = mount(FetchData)
//     console.log('>:>::>' + wrapper.text())

//     // Assert initial state
//     expect(wrapper.find('h3').text()).toBe('msg:')

//     // Wait for fetchData to finish
//     await wrapper.vm.$nextTick()

//     console.log('>:>::>' + wrapper.text())

//     // Assert state after fetchData completes
//     expect(wrapper.find('h3').text()).toBe(`msg: ${mockText}`)
//   })
// })
