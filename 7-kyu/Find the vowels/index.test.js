const vowelIndices = require('.')

test('Test 1', () => {
  expect(vowelIndices('mmm')).toEqual([])
})

test('Test 2', () => {
  expect(vowelIndices('apple')).toEqual([1, 5])
})

test('Test 3', () => {
  expect(vowelIndices('super')).toEqual([2, 4])
})

test('Test 4', () => {
  expect(vowelIndices('orange')).toEqual([1, 3, 6])
})

test('Test 5', () => {
  expect(vowelIndices('supercalifragilisticexpialidocious')).toEqual([
    2,
    4,
    7,
    9,
    12,
    14,
    16,
    19,
    21,
    24,
    25,
    27,
    29,
    31,
    32,
    33,
  ])
})
