const union = require('.')

test('Test 1', () => {
  const A = new Set([1, 2])
  const B = new Set([2, 3])

  expect(union(A, B)).toEqual(new Set([1, 2, 3]))
})
