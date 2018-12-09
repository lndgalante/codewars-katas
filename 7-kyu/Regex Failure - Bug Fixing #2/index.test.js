const filterWords = require('.')

test('Test 1', () => {
  expect(filterWords("You're Bad! timmy!")).toBe("You're awesome! timmy!")
})

test('Test 2', () => {
  expect(filterWords("You're MEAN! timmy!")).toBe("You're awesome! timmy!")
})
