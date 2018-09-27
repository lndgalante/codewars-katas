const reverser = require('.')

test('Test 1', () => {
  expect(reverser('Hi mom')).toBe('iH mom')
})

test('Test 2', () => {
  expect(reverser('friendzone')).toBe('enozdneirf')
})

test('Test 3', () => {
  expect(reverser(' ')).toBe(' ')
})
