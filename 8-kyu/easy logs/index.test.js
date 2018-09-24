const logs = require('.')

test('Test 1', () => {
  expect(logs(10, 2, 3)).toBe(0.7781512503836435)
})

test('Test 2', () => {
  expect(logs(5, 2, 3)).toBe(1.1132827525593785)
})

test('Test 3', () => {
  expect(logs(1000, 2, 3)).toBe(0.25938375012788123)
})
