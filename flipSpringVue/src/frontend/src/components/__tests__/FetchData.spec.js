import { describe, it, expect } from 'vitest'

import FetchData from '../FetchData.vue'

describe('test FetchData', () => {
    it('mount component', async () => {
        expect(FetchData).toBeTruthy()
    })

    it('Really basic test', () => {
        expect(true).toBe(true);
    })
})