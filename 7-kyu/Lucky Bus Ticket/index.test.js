const isLucky = require('.')

test('Test 1', () => {
  expect(isLucky('123321')).toBeTrue()
})

test('Test 2', () => {
  expect(isLucky('100001')).toBeTrue()
})

test('Test 3', () => {
  expect(isLucky('100200')).toBeFalse()
})

test('Test 4', () => {
  expect(isLucky('12341234')).toBeFalse()
})

test('Test 5', () => {
  expect(isLucky('12a12a')).toBeFalse()
})
