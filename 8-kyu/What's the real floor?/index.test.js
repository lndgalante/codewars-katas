const getRealFloor = require('.')

test('Test 1', () => {
  expect(getRealFloor(1)).toBe(0)
})

test('Test 2', () => {
  expect(getRealFloor(5)).toBe(4)
})

test('Test 3', () => {
  expect(getRealFloor(15)).toBe(13)
})
