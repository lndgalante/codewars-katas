const MrFreeze = require('./index.js')

test('Test 1', () => {
  const clon = Object.freeze({})
  expect(MrFreeze).toMatchObject(clon)
})
