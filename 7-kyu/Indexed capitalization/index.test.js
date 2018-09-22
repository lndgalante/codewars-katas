const capitalize = require('.')

test('Test 1', () => {
  expect(capitalize('abcdef', [1, 2, 5])).toBe('aBCdeF')
})

test('Test 2', () => {
  expect(capitalize('abcdef', [1, 2, 5, 100])).toBe('aBCdeF')
})

test('Test 3', () => {
  expect(capitalize('codewars', [1, 3, 5, 50])).toBe('cOdEwArs')
})

test('Test 4', () => {
  expect(capitalize('abracadabra', [2, 6, 9, 10])).toBe('abRacaDabRA')
})

test('Test 5', () => {
  expect(capitalize('codewarriors', [5])).toBe('codewArriors')
})

test('Test 6', () => {
  expect(capitalize('indexinglessons', [0])).toBe('Indexinglessons')
})
