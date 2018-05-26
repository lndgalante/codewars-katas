const { money, candy, chips, soda } = require('.')

test('Test 1', () => {
  expect(money).toBe(10)
})

test('Test 2', () => {
  expect(candy).toBe(1.42)
})

test('Test 3', () => {
  expect(chips).toBe(2.4)
})

test('Test 4', () => {
  expect(soda).toBe(1)
})
