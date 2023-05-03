import { describe, it, expect, vi } from 'vitest'

import VueWatchersBasic from '../VueWatchersBasic.vue'

describe('Test Watchers', async () => {
    it('tobetruthty', () => {
        expect(VueWatchersBasic).toBeTruthy()
    })

    console.log(">>>>>  tobethruthy! ")
    vi.mock('../VueWatchersBasic.vue')
    console.log(">>>> " + vi)

})