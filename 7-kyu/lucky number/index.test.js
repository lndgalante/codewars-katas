const isLucky = require('.')

test('Test 1', () => {
  expect(isLucky(1892376)).toBeTrue()
})

test('Test 2', () => {
  expect(isLucky(189237)).toBeFalse()
})

test('Test 3', () => {
  expect(isLucky(1098)).toBeTrue()
})

test('Test 4', () => {
  expect(isLucky(22869)).toBeTrue()
})

test('Test 5', () => {
  expect(isLucky(0)).toBeTrue()
})
