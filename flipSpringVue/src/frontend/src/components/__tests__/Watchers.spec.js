import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import Watchers from '../Watchers.vue'

describe('test Watchers', () => {

    // https://v1.test-utils.vuejs.org/guides/testing-async-components.html
    it('button click should increment the count text', async () => {
        const wrapper = shallowMount(Watchers)
        expect(wrapper.text()).toContain('Todo id: 1')
        const button = wrapper.find('button')
        await button.trigger('click')
        expect(wrapper.text()).toContain('Todo id: 2')

        console.log("> Watchers > " + wrapper.text())
    })
})