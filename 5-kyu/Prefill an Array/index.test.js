const prefill = require('.')

test('Test 1', () => {
  expect(prefill(0, 1)).toEqual([])
})

test('Test 2', () => {
  expect(prefill(2, 'abc')).toEqual(['abc', 'abc'])
})

test('Test 3', () => {
  expect(prefill('1', 1)).toEqual([1])
})
