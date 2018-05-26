const MrFreeze = require('.')

test('Test 1', () => {
  const clon = Object.freeze({})
  expect(MrFreeze).toMatchObject(clon)
})
