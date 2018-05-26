const buildString = require('.')

test('Test 1', () => {
  expect(buildString('Cheese', 'Milk', 'Chocolate')).toBe(
    'I like Cheese, Milk, Chocolate!'
  )
})

test('Test 2', () => {
  expect(buildString('Cheese', 'Milk')).toBe('I like Cheese, Milk!')
})

test('Test 3', () => {
  expect(buildString('Chocolate')).toBe('I like Chocolate!')
})
