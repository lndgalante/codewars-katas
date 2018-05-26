const first = require('.')

test('Test 1', () => {
  expect(first(['a', 'b', 'c', 'd', 'e'])).toEqual(['a'])
})

test('Test 2', () => {
  expect(first(['a', 'b', 'c', 'd', 'e'], 2)).toEqual(['a', 'b'])
})
