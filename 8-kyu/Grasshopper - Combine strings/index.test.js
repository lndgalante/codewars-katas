const combineNames = require('.')

test('Test 1', () => {
  expect(combineNames('James', 'Stevens')).toBe('James Stevens')
})
