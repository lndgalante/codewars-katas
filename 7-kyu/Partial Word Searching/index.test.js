const wordSearch = require('.')

test('Test 1', () => {
  expect(wordSearch('ab', ['za', 'ab', 'abc', 'zab', 'zbc'])).toEqual([
    'ab',
    'abc',
    'zab',
  ])
})

test('Test 2', () => {
  expect(wordSearch('aB', ['za', 'ab', 'abc', 'zab', 'zbc'])).toEqual([
    'ab',
    'abc',
    'zab',
  ])
})

test('Test 3', () => {
  expect(wordSearch('ab', ['za', 'aB', 'Abc', 'zAB', 'zbc'])).toEqual([
    'aB',
    'Abc',
    'zAB',
  ])
})

test('Test 4', () => {
  expect(wordSearch('abcd', ['za', 'aB', 'Abc', 'zAB', 'zbc'])).toEqual([
    'Empty',
  ])
})
