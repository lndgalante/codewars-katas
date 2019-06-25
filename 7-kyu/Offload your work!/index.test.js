const workNeeded = require('.')

test('Test 1', () => {
  expect(workNeeded(60, [[1, 0]])).toBe('Easy Money!')
})

test('Test 2', () => {
  expect(workNeeded(60, [[0, 0]])).toBe('I need to work 1 hour(s) and 0 minute(s)')
})

test('Test 3', () => {
  expect(workNeeded(141, [[1, 55], [0, 25]])).toBe('I need to work 0 hour(s) and 1 minute(s)')
})
