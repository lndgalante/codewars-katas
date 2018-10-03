const zipvalidate = require('.')

test('Test 1', () => {
  expect(zipvalidate('198328')).toBeTrue()
})

test('Test 2', () => {
  expect(zipvalidate('310003')).toBeTrue()
})

test('Test 3', () => {
  expect(zipvalidate('424000')).toBeTrue()
})

test('Test 4', () => {
  expect(zipvalidate('12A483')).toBeFalse()
})

test('Test 5', () => {
  expect(zipvalidate('1@63')).toBeFalse()
})

test('Test 6', () => {
  expect(zipvalidate('056879')).toBeFalse()
})

test('Test 7', () => {
  expect(zipvalidate('1111111')).toBeFalse()
})
