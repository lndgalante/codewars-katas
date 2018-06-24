const circleArea = require('.')

test('Test 1', () => {
  expect(circleArea(-1485.86)).toBeFalse()
})

test('Test 2', () => {
  expect(circleArea(0)).toBeFalse()
})

test('Test 3', () => {
  expect(circleArea(43.2673)).toBe(5881.25)
})

test('Test 4', () => {
  expect(circleArea(68)).toBe(14526.72)
})

test('Test 5', () => {
  expect(circleArea('number')).toBeFalse()
})
