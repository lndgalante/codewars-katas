const isPP = require('./index.js')

test('Test 1', () => {
  expect(isPP(125)).toEqual([5, 3])
})
