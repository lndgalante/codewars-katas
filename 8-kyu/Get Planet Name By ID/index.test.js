const getPlanetName = require('./index.js')

test('Test 1', () => {
  expect(getPlanetName(3)).toBe('Earth')
})
