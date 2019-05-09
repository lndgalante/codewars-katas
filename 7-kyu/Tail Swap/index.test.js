const tailSwap = require('.')

test('Test 1', () => {
  expect(tailSwap(['abc:123', 'cde:456'])).toEqual(['abc:456', 'cde:123'])
})

test('Test 2', () => {
  expect(tailSwap(['a:12345', '777:xyz'])).toEqual(['a:xyz', '777:12345'])
})
