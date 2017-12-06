const getCount = require('./index')

test('Test 1', () => {
  expect(getCount('abracadabra')).toBe(5)
})
