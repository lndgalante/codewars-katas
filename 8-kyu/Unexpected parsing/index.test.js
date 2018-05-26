const getStatus = require('.')

test('Test 1', () => {
  expect(getStatus(true).status).toBe('busy')
})

test('Test 2', () => {
  expect(getStatus(false).status).toBe('available')
})
