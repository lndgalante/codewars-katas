const cubeOdd = require('.')

test('Test 1', () => {
  expect(cubeOdd([1, 2, 3, 4])).toBe(28)
})

test('Test 2', () => {
  expect(cubeOdd([-3, -2, 2, 3])).toBe(0)
})

test('Test 3', () => {
  expect(cubeOdd(['a', 12, 9, 'z', 42])).toBeUndefined()
})
