const filterLongWords = require('.')

test('Test 1', () => {
  expect(filterLongWords('The quick brown fox jumps over the lazy dog', 4)).toEqual(['quick', 'brown', 'jumps'])
})
