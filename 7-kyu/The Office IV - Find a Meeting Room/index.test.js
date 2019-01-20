const meeting = require('.')

test('Test 1', () => {
  expect(meeting(['X', 'O', 'X'])).toBe(1)
})

test('Test 2', () => {
  expect(meeting(['O', 'X', 'X', 'X', 'X'])).toBe(0)
})

test('Test 3', () => {
  expect(meeting(['X', 'X', 'X', 'X', 'X'])).toBe('None available!')
})
