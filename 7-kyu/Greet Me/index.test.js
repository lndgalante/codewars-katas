const greet = require('.')

test('Test 1', () => {
  expect(greet('maya')).toBe('Hello Maya!')
})

test('Test 2', () => {
  expect(greet('JACK')).toBe('Hello Jack!')
})

test('Test 3', () => {
  expect(greet('riley')).toBe('Hello Riley!')
})
