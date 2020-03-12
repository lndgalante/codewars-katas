const ghostBusters = require('.')

test('Test 1', () => {
  expect(ghostBusters('Factor y')).toBe('Factory')
})

test('Test 2', () => {
  expect(ghostBusters('O  f fi ce')).toBe('Office')
})

test('Test 3', () => {
  expect(ghostBusters('BusStation')).toBe(
    "You just wanted my autograph didn’t you?"
  )
})
