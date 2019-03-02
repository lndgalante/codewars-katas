const countAnimals = require('.')

test('Test 1', () => {
  expect(countAnimals('I see 3 zebras, 5 lions and 6 giraffes.')).toBe(14)
})

test('Test 2', () => {
  expect(countAnimals('Mom, 3 rhinoceros and 6 snakes come to us!')).toBe(9)
})

test('Test 3', () => {
  expect(countAnimals('I do not see any animals here!')).toBe(0)
})
