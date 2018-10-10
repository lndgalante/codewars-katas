const notVisibleCubes = require('.')

test('Test 1', () => {
  expect(notVisibleCubes(3)).toBe(1)
})

test('Test 2', () => {
  expect(notVisibleCubes(5)).toBe(27)
})
