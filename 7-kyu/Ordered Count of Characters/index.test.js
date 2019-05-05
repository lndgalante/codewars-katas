const orderedCount = require('.')

test('Test 1', () => {
  expect(orderedCount('abracadabra')).toEqual([['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]])
})

test('Test 2', () => {
  expect(orderedCount('Code Wars')).toEqual([
    ['C', 1],
    ['o', 1],
    ['d', 1],
    ['e', 1],
    [' ', 1],
    ['W', 1],
    ['a', 1],
    ['r', 1],
    ['s', 1],
  ])
})

test('Test 3', () => {
  expect(orderedCount('212')).toEqual([['2', 2], ['1', 1]])
})
