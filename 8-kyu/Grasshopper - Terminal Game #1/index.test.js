const Hero = require('.')

test('Test 1', () => {
  const hero = new Hero()
  expect(hero.name).toBe('Hero')
  expect(hero.position).toBe('00')
  expect(hero.health).toBe(100)
  expect(hero.damage).toBe(5)
  expect(hero.experience).toBe(0)
})
