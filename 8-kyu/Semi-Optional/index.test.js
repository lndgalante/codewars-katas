const wrap = require('.')

test('Test 1', () => {
  expect(wrap('MyWrappedString')).toEqual({ value: 'MyWrappedString' })
})
