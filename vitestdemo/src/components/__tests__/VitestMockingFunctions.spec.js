// https://vitest.dev/guide/mocking.html#functions
import { afterEach, describe, expect, it, vi } from 'vitest'

function getLatest(index = messages.items.length - 1) {
  return messages.items[index]
}

const messages = {
  items: [
    { message: 'Simple test message', from: 'Testman' },
    // ...
  ],
  getLatest, // can also be a `getter or setter if supported`
}
console.log("> length :: " + messages.items.length)

describe('reading messages', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should get the latest message with a spy', () => {
    const spy = vi.spyOn(messages, 'getLatest')
    console.log("> spy.getMockName :: " + spy.getMockName())
    expect(spy.getMockName()).toEqual('getLatest')

    expect(messages.getLatest()).toEqual(
      messages.items[messages.items.length - 1],
    )

    expect(spy).toHaveBeenCalledTimes(1)

    spy.mockImplementationOnce(() => 'access-restricted')
    expect(messages.getLatest()).toEqual('access-restricted')

    expect(spy).toHaveBeenCalledTimes(2)
  })

  it('should get with a mock', () => {
    const mock = vi.fn().mockImplementation(getLatest)

    expect(mock()).toEqual(messages.items[messages.items.length - 1])
    expect(mock).toHaveBeenCalledTimes(1)

    mock.mockImplementationOnce(() => 'access-restricted')
    expect(mock()).toEqual('access-restricted')

    expect(mock).toHaveBeenCalledTimes(2)

    expect(mock()).toEqual(messages.items[messages.items.length - 1])
    expect(mock).toHaveBeenCalledTimes(3)
  })

  // https://vitest.dev/api/vi.html#vi-spyon
  let apples = 0
  const cart = {
    getApples: () => 13,
  }

  const spy = vi.spyOn(cart, 'getApples').mockImplementation(() => apples)
  apples = 1

  expect(cart.getApples()).toBe(1)

  expect(spy).toHaveBeenCalled()
  expect(spy).toHaveReturnedWith(1)


  // https://vitest.dev/api/vi.html#vi-fn
  const getApples = vi.fn(() => 0)

  getApples()

  expect(getApples).toHaveBeenCalled()
  expect(getApples).toHaveReturnedWith(0)

  getApples.mockReturnValueOnce(5)

  const res = getApples()
  expect(res).toBe(5)
  expect(getApples).toHaveNthReturnedWith(2, 5)
})