/* eslint new-cap: 0 */

const { Adam, has, a, dog, The, name, of, the, is, also } = require('.')

test('Test 1', () => {
  expect(Adam(has(a(dog())))).toBe('Adam has a dog.')
})

test('Test 2', () => {
  expect(The(name(of(the(dog(is(also(Adam())))))))).toBe(
    'The name of the dog is also Adam.'
  )
})
