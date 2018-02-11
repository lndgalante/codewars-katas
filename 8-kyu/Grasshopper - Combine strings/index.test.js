const combineNames = require('./index.js')

test('Test 1', () => {
  expect(combineNames('James', 'Stevens')).toBe('James Stevens')
})
