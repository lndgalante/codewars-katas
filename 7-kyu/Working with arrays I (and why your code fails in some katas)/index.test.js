const withoutLast = require('.')

test('Test 1', () => {
  expect(withoutLast([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4])
})

test('Test 2', () => {
  expect(withoutLast([6, 7, 8, 9])).toEqual([6, 7, 8])
})
