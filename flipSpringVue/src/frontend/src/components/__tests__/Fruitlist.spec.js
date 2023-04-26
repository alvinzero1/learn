//  https://blog.canopas.com/vue-3-component-testing-with-jest-8b80a8a8946b
import { describe, test, expect } from 'vitest' // <<  define `test`
import { shallowMount } from '@vue/test-utils'
import FruitList from '@/components/fruitList.vue'

describe('FruitList component test', () => {



    test("tests data attributes", () => {
        const wrapper = shallowMount(FruitList)
        expect(wrapper.vm.fruits).toEqual(["apple", "banana", "orange"]);
    })

    test('return total number of fruits', () => {
        const wrapper = shallowMount(FruitList)
        expect(wrapper.vm.numFruits).toBe(3);
    })

    test('displays a list of fruits', () => {
        const wrapper = shallowMount(FruitList)
        const fruits = wrapper.findAll('li')

        expect(fruits.at(0).text()).toBe('apple')
        expect(fruits.at(1).text()).toBe('banana')
        expect(fruits.at(2).text()).toBe('orange')
    })

    test('displays the number of fruits', () => {
        const wrapper = shallowMount(FruitList)
        const numFruits = wrapper.find('p')
        expect(numFruits.text()).toBe('Number of fruits: 3')
    })

    test('tests addFruit method', () => {
        const wrapper = shallowMount(FruitList)

        const vm = wrapper.vm
        expect(vm.fruits.length).toBe(3)

        // add mango to the fruit list
        vm.addFruit('mango')
        console.log("> FruitList.fruits > " + vm.numFruits)

        expect(vm.fruits.length).toBe(4)
    })

    // Need tp quit and restart to update
    test('displays of fruits', () => {
        const wrapper = shallowMount(FruitList)
        console.log("> html > " + wrapper.html())
        expect(wrapper.html()).toMatchSnapshot() // <<<<< snapshot
    })

    test('my test all', () => {
        const wrapper = shallowMount(FruitList)
        const vm = wrapper.vm
        expect(vm.fruits).toEqual(["apple", "banana", "orange"])
        expect(vm.numFruits).toBe(3)
        vm.addFruit('mango')
        expect(vm.fruits.length).toBe(4)

        vm.fruits = (["aaa", "bbb"])
        console.log("> vm.fruits > " + vm.fruits)
        expect(vm.fruits).toEqual(["aaa", "bbb"])
        expect(vm.numFruits).toBe(2)
    })

})