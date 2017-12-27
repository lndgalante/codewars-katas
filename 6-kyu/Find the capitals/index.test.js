const capitals = require('./index.js')

test('Test 1', () => {
  expect(capitals('CodEWaRs')).toEqual([0, 3, 4, 6])
})
