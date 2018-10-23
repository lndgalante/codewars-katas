const fire = require('.')

test('Test 1', () => {
  expect(fire(0, 0)).toBe('top left')
})

test('Test 2', () => {
  expect(fire(1, 2)).toBe('bottom middle')
})
