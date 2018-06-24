const Ship = require('.')

test('Test 1', () => {
  const emptyShip = new Ship(0, 0)
  expect(emptyShip.isWorthIt()).toBeFalse()
})
