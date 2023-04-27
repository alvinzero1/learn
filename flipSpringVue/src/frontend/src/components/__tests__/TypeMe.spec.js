import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import TypeMe from '../TypeMe.vue'
import { increment } from '../TypeMe.vue'

describe('test TypeMe', () => {
    it('should render', () => {
        const wrapper = mount(TypeMe)
        // has p
        expect(wrapper.find('h1').exists()).toBeTruthy()
        // has input
        expect(wrapper.find('input[type="text"]').exists()).toBeTruthy()
        // has button
        expect(wrapper.find('button').exists()).toBeTruthy()
    })

    it('should change message', async () => {
        const wrapper = mount(TypeMe)
        await wrapper.find('input[type="text"]').setValue('LearnVue')  // <<<< setValue 
        await wrapper.find('button').trigger('click')
        console.log(">:>:> " + wrapper.text())
        expect(wrapper.find('h1').text()).toEqual('LearnVue')
    })

    it('increments the current number by 1', () => {
        const wrapper = mount(TypeMe)
        expect(wrapper.vm.increment(0, 10)).toBe(1)
    })

    it('does not increment the current number over the max', () => {
        const wrapper = mount(TypeMe)
        expect(wrapper.vm.increment(10, 10)).toBe(10)
    })

    it('has a default max of 10', () => {
        const wrapper = mount(TypeMe)
        expect(wrapper.vm.increment(10)).toBe(10)
    })
})
