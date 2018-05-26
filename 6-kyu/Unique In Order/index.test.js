const uniqueInOrder = require('.')

test('Test 1', () => {
  expect(uniqueInOrder('AAAABBBCCDAABBB')).toEqual([
    'A',
    'B',
    'C',
    'D',
    'A',
    'B',
  ])
})

test('Test 2', () => {
  expect(uniqueInOrder('AAAABBBCCDAABBB')).toEqual([
    'A',
    'B',
    'C',
    'D',
    'A',
    'B',
  ])
})

test('Test 3', () => {
  expect(uniqueInOrder([1, 2, 2, 3, 3])).toEqual([1, 2, 3])
})
