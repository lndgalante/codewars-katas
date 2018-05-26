const otherAngle = require('.')

test('Test 1', () => {
  expect(otherAngle(30, 60)).toBe(90)
})

test('Test 2', () => {
  expect(otherAngle(60, 60)).toBe(60)
})

test('Test 3', () => {
  expect(otherAngle(43, 78)).toBe(59)
})

test('Test 4', () => {
  expect(otherAngle(10, 20)).toBe(150)
})
