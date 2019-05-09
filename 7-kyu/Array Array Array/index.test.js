const explode = require('.')

test('Test 1', () => {
  expect(explode([9, 3])).toEqual([
    [9, 3],
    [9, 3],
    [9, 3],
    [9, 3],
    [9, 3],
    [9, 3],
    [9, 3],
    [9, 3],
    [9, 3],
    [9, 3],
    [9, 3],
    [9, 3],
  ])
})

test('Test 2', () => {
  expect(explode(['a', 3])).toEqual([['a', 3], ['a', 3], ['a', 3]])
})

test('Test 3', () => {
  expect(explode([6, 'c'])).toEqual([[6, 'c'], [6, 'c'], [6, 'c'], [6, 'c'], [6, 'c'], [6, 'c']])
})

test('Test 4', () => {
  expect(explode(['a', 'b'])).toBe('Void!')
})
