const getCount = require('.')

test('Test 1', () => {
  expect(getCount('abracadabra')).toBe(5)
})
