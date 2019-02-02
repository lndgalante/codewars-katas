const reverseSlice = require('.')

test('Test 1', () => {
  expect(reverseSlice('123')).toEqual(['321', '21', '1'])
})

test('Test 2', () => {
  expect(reverseSlice('abcde')).toEqual(['edcba', 'dcba', 'cba', 'ba', 'a'])
})
