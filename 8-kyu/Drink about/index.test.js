const peopleWithAgeDrink = require('.')

test('Test 1', () => {
  expect(peopleWithAgeDrink(22)).toBe('drink whisky')
})

test('Test 2', () => {
  expect(peopleWithAgeDrink(13)).toBe('drink toddy')
})

test('Test 3', () => {
  expect(peopleWithAgeDrink(17)).toBe('drink coke')
})

test('Test 4', () => {
  expect(peopleWithAgeDrink(18)).toBe('drink beer')
})

test('Test 5', () => {
  expect(peopleWithAgeDrink(20)).toBe('drink beer')
})

test('Test 6', () => {
  expect(peopleWithAgeDrink(30)).toBe('drink whisky')
})
