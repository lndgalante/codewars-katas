const { getMax1, getMax2 } = require('./index.js')

test('Test 1', () => {
  expect(getMax1()).toEqual(getMax2())
})
