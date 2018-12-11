const scrollingText = require('.')

test('Test 1', () => {
  expect(scrollingText('abc')).toEqual(['ABC', 'BCA', 'CAB'])
})
