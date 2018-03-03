const wrap = require('./index.js')

test('Test 1', () => {
  expect(wrap('MyWrappedString')).toEqual({ value: 'MyWrappedString' })
})
