const diff = require('.')

test('Test 1', () => {
  expect(diff(['a', 'b'], ['a', 'b'])).toEqual([])
})

test('Test 2', () => {
  const a = ['a', 'b']
  const b = []

  expect(diff(a, b)).toEqual(a)
})

test('Test 3', () => {
  const a = []
  const b = ['a', 'b']

  expect(diff(a, b)).toEqual(b)
})
