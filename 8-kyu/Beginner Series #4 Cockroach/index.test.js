const cockroachSpeed = require('.')

test('Test 1', () => {
  expect(cockroachSpeed(1.08)).toBe(30)
})

test('Test 2', () => {
  expect(cockroachSpeed(1.09)).toBe(30)
})

test('Test 3', () => {
  expect(cockroachSpeed(0)).toBe(0)
})
