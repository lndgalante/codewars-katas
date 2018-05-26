const {
  sandwiches,
  salads,
  wraps,
  frenchFries,
  totalPrice,
} = require('.')

test('Test 1', () => {
  expect(sandwiches).toBe(4)
})

test('Test 2', () => {
  expect(salads).toBe(6)
})

test('Test 3', () => {
  expect(wraps).toBe(5)
})

test('Test 4', () => {
  expect(frenchFries).toBe(10)
})

test('Test 5', () => {
  expect(totalPrice).toBe(118.5)
})
