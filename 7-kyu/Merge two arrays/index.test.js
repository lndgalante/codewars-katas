const mergeArrays = require('.')

test('Test 1', () => {
  expect(mergeArrays([1, 2, 3, 4, 5, 6, 7, 8], ['a', 'b', 'c', 'd', 'e'])).toEqual([
    1,
    'a',
    2,
    'b',
    3,
    'c',
    4,
    'd',
    5,
    'e',
    6,
    7,
    8,
  ])
})

test('Test 2', () => {
  expect(mergeArrays(['a', 'b', 'c', 'd', 'e'], [1, 2, 3, 4, 5])).toEqual(['a', 1, 'b', 2, 'c', 3, 'd', 4, 'e', 5])
})

test('Test 3', () => {
  expect(mergeArrays([2, 5, 8, 23, 67, 6], ['b', 'r', 'a', 'u', 'r', 's'])).toEqual([
    2,
    'b',
    5,
    'r',
    8,
    'a',
    23,
    'u',
    67,
    'r',
    6,
    's',
  ])
})

test('Test 4', () => {
  expect(mergeArrays(['b', 'r', 'a', 'u', 'r', 's', 'e', 'q', 'z'], [2, 5, 8, 23, 67, 6])).toEqual([
    'b',
    2,
    'r',
    5,
    'a',
    8,
    'u',
    23,
    'r',
    67,
    's',
    6,
    'e',
    'q',
    'z',
  ])
})
