const whatday = require('.')

test('Test 1', () => {
  expect(whatday(1)).toBe('Sunday')
})

test('Test 2', () => {
  expect(whatday(2)).toBe('Monday')
})

test('Test 3', () => {
  expect(whatday(3)).toBe('Tuesday')
})

test('Test 4', () => {
  expect(whatday(3)).toBe('Tuesday')
})

test('Test 5', () => {
  expect(whatday(8)).toBe('Wrong, please enter a number between 1 and 7')
})

test('Test 6', () => {
  expect(whatday(20)).toBe('Wrong, please enter a number between 1 and 7')
})
