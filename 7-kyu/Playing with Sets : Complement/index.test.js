const diff = require('.')

test('Test 1', () => {
  const A = new Set([1, 2, 3, 4])

  expect(diff(A, A)).toEqual(new Set())
})

test('Test 2', () => {
  const A = new Set([1, 2, 3, 4])
  const B = new Set([1, 3, 5, 7])
  const AB = new Set([2, 4])

  expect(diff(A, B)).toEqual(AB)
})

test('Test 3', () => {
  const A = new Set([1, 2, 3, 4])
  const B = new Set([1, 3, 5, 7])
  const BA = new Set([5, 7])

  expect(diff(B, A)).toEqual(BA)
})
