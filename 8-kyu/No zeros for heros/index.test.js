const noBoringZeros = require('.')

test('Test 1', () => {
  expect(noBoringZeros(1450)).toBe(145)
})

test('Test 2', () => {
  expect(noBoringZeros(960000)).toBe(96)
})

test('Test 3', () => {
  expect(noBoringZeros(1050)).toBe(105)
})

test('Test 4', () => {
  expect(noBoringZeros(-1050)).toBe(-105)
})

test('Test 5', () => {
  expect(noBoringZeros(-105)).toBe(-105)
})

test('Test 6', () => {
  expect(noBoringZeros(0)).toBe(0)
})
