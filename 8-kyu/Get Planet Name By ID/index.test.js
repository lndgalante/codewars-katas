const getPlanetName = require('.')

test('Test 1', () => {
  expect(getPlanetName(3)).toBe('Earth')
})
