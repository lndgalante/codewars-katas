const noOdds = require('./index.js')

test('Test 1', () => {
  expect(noOdds([0, 1])).toEqual([0])
})

test('Test 2', () => {
  expect(noOdds([0, 1, 2, 3])).toEqual([0, 2])
})
