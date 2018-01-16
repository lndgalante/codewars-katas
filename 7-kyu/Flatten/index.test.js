const flatten = require('./index.js')

test('Test 1', () => {
  expect(flatten([])).toEqual([])
})

test('Test 2', () => {
  expect(flatten([1, 2, 3])).toEqual([1, 2, 3])
})

test('Test 3', () => {
  expect(flatten([[1, 2, 3], ['a', 'b', 'c'], [1, 2, 3]])).toEqual([
    1,
    2,
    3,
    'a',
    'b',
    'c',
    1,
    2,
    3,
  ])
})

test('Test 4', () => {
  expect(flatten([[3, 4, 5], [[9, 9, 9]], ['a,b,c']])).toEqual([
    3,
    4,
    5,
    [9, 9, 9],
    'a,b,c',
  ])
})

test('Test 5', () => {
  expect(flatten([[[3], [4], [5]], [9], [9], [8], [[1, 2, 3]]])).toEqual([
    [3],
    [4],
    [5],
    9,
    9,
    8,
    [1, 2, 3],
  ])
})
