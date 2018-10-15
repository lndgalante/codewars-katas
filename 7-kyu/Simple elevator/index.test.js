const goto = require('.')

test('Test 1', () => {
  expect(goto(0, '2')).toBe(2)
})

test('Test 2', () => {
  expect(goto(0, '2')).toBe(2)
})

test('Test 3', () => {
  expect(goto(2, '2')).toBe(0)
})
