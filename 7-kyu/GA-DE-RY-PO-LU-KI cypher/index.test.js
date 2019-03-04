const { encode, decode } = require('.')

test('Test 1', () => {
  expect(encode('Ala has a cat')).toBe('Gug hgs g cgt')
})

test('Test 2', () => {
  expect(encode('Ala has a cat')).toBe('Gug hgs g cgt')
})

test('Test 3', () => {
  expect(decode('Gug hgs g cgt')).toBe('Ala has a cat')
})

test('Test 4', () => {
  expect(encode('ABCD')).toBe('GBCE')
})

test('Test 5', () => {
  expect(encode('gaderypoluki')).toBe('agedyropulik')
})

test('Test 6', () => {
  expect(decode('agedyropulik')).toBe('gaderypoluki')
})

test('Test 7', () => {
  expect(decode('GBCE')).toBe('ABCD')
})
