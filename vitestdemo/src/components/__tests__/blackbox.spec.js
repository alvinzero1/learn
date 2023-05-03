// https://test-utils.vuejs.org/guide/advanced/v-model.html#a-simple-example
import { describe, expect, it, vi } from 'vitest';

import { callMethodIf } from '../call-method-if.js';

vi.mock('../blackbox.js');

describe('Call method if', () => {
    it('returns "called: true" if condition is true', async () => {
        const blackbox = await import('../blackbox.js');
        blackbox.blackbox = (await vi.importActual('../blackbox.js')).blackbox;
        const result = callMethodIf(true);
            console.log(": result.called : " + result.called) // true
        expect(result).toEqual({ called: true });
    });

    it('returns mocked blackbox return object', async () => {
        const blackbox = await import('../blackbox.js');
        blackbox.blackbox = vi.fn().mockReturnValue({ mock: true });
        const result = callMethodIf(false);
            console.log(": result.mock : " + result.mock) // true
        expect(result).toEqual({ mock: true });
    });
});