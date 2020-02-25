const number = require('.')

test('Test 1', () => {
  expect(number([])).toEqual([])
})

test('Test 2', () => {
  expect(number(['a', 'b', 'c'])).toEqual(['1: a', '2: b', '3: c'])
})
