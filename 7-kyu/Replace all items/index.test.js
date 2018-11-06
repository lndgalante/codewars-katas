const replaceAll = require('.')

test('Test 1', () => {
  expect(replaceAll([], 1, 2)).toEqual([])
})

test('Test 2', () => {
  expect(replaceAll([1, 2, 2], 1, 2)).toEqual([2, 2, 2])
})

test('Test 3', () => {
  expect(replaceAll('Hello World', 'o', '0')).toEqual('Hell0 W0rld')
})
