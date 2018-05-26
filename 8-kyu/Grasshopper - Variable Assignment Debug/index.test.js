const { a, b, name } = require('.')

test('Test 1', () => {
  expect(a).toBe('dev')
})

test('Test 2', () => {
  expect(b).toBe('Lab')
})

test('Test 3', () => {
  expect(name).toBe('devLab')
})
