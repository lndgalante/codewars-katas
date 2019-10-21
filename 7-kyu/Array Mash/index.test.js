const arrayMash = require('.')

test('Test 1', () => {
  expect(arrayMash([1, 2, 3], ['a', 'b', 'c'])).toEqual([1, 'a', 2, 'b', 3, 'c'])
})

test('Test 2', () => {
  expect(arrayMash([1, 2, 3, 4, 5], ['a', 'b', 'c', 'd', 'e'])).toEqual([1, 'a', 2, 'b', 3, 'c', 4, 'd', 5, 'e'])
})

test('Test 3', () => {
  expect(arrayMash([1, 1, 1, 1], [2, 2, 2, 2])).toEqual([1, 2, 1, 2, 1, 2, 1, 2])
})

test('Test 4', () => {
  expect(arrayMash([1, 8, 'hello', 'dog'], ['fish', '2', 9, 10])).toEqual([1, 'fish', 8, '2', 'hello', 9, 'dog', 10])
})

test('Test 5', () => {
  expect(arrayMash([null, null, 4], [NaN, null, 'hello'])).toEqual([null, NaN, null, null, 4, 'hello'])
})

test('Test 6', () => {
  expect(arrayMash([1], [2])).toEqual([1, 2])
})

test('Test 7', () => {
  expect(arrayMash(['h', 'l', 'o', 'o', 'l'], ['e', 'l', 'w', 'r', 'd'])).toEqual([
    'h',
    'e',
    'l',
    'l',
    'o',
    'w',
    'o',
    'r',
    'l',
    'd',
  ])
})
