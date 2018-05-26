const dutyFree = require('.')

test('Test 1', () => {
  expect(dutyFree(12, 50, 1000)).toBe(166)
})

test('Test 2', () => {
  expect(dutyFree(17, 10, 500)).toBe(294)
})

test('Test 3', () => {
  expect(dutyFree(24, 35, 3000)).toBe(357)
})
