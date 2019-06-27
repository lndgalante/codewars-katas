const cubeSum = require('.')

test('Test 1', () => {
  expect(cubeSum(5, 0)).toBe(225)
})

test('Test 2', () => {
  expect(cubeSum(2, 3)).toBe(27)
})
