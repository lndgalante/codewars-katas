const inter = require('.')

test('Test 1', () => {
  const A = new Set([1, 2])

  expect(inter(A, A)).toEqual(A)
})

test('Test 2', () => {
  const A = new Set([1, 2])
  const B = new Set([2, 3])
  const AB = inter(A, B)

  expect([...AB].sort()).toEqual([...inter(B, A)].sort())
})
