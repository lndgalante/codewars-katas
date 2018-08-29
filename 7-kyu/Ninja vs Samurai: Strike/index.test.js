const Warrior = require('.')

test('Test 1', () => {
  const ninja = new Warrior('Ninja')
  const samurai = new Warrior('Samurai')

  samurai.strike(ninja, 3)
  expect(ninja.health).toBe(70)
})
