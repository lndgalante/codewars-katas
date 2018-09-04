const powerOf4 = require('.')

test('Test 1', () => {
  expect(powerOf4(4)).toBeTrue()
})

test('Test 2', () => {
  expect(powerOf4(16)).toBeTrue()
})

test('Test 3', () => {
  expect(powerOf4(1)).toBeFalse()
})

test('Test 4', () => {
  expect(powerOf4(3.1415)).toBeFalse()
})

test('Test 5', () => {
  expect(powerOf4('4')).toBeFalse()
})

test('Test 6', () => {
  expect(powerOf4(null)).toBeFalse()
})

test('Test 7', () => {
  expect(powerOf4(undefined)).toBeFalse()
})

test('Test 9', () => {
  expect(powerOf4(() => {})).toBeFalse()
})
