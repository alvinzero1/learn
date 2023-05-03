import { describe, expect, it, vi } from 'vitest';
import { shallowMount } from '@vue/test-utils'

import callMethodIf from '../CallMethodIf.vue';

vi.mock('../blackbox.js');
const wrapper = shallowMount(callMethodIf)
const vm = wrapper.vm

describe('Call method if', () => {
    it('returns "called: true" if condition is true', async () => {
        const blackbox = await import('../blackbox.js');
        blackbox.blackbox = (await vi.importActual('../blackbox.js')).blackbox;
        console.log(">>>> " +  blackbox.blackbox) // the whole code
        vm.updateCalled(true);
            console.log(": result.called : " + vm.result.called) 
        expect(vm.result.called).toEqual(true);
    });

    it('returns mocked blackbox return object', async () => {
        const blackbox = await import('../blackbox.js');
        blackbox.blackbox = vi.fn().mockReturnValue({ mock: true });
        vm.updateCalled(false);
            console.log(": result.mock : " + vm.result.mock) 
        expect(vm.result).toEqual({ mock: true });
    });
});