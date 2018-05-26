const { getMax1, getMax2 } = require('.')

test('Test 1', () => {
  expect(getMax1()).toEqual(getMax2())
})
