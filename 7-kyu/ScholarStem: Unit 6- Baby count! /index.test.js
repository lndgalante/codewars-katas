const countName = require('.')

const MAINLIST = ['Bob', 'Ted', 'Amy', 'Alice', 'Bob', 'Ted', 'Amy', 'Ted', 'Amy', 'Fred']

test('Test 1', () => {
  expect(countName(MAINLIST, 'Ted')).toBe(3)
})

test('Test 2', () => {
  expect(countName(MAINLIST, 'Amy')).toBe(3)
})

test('Test 3', () => {
  expect(countName(MAINLIST, 'Bob')).toBe(2)
})
