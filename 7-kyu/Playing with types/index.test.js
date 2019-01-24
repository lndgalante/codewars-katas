const typing = require('.')

test('Test 1', () => {
  expect(typing(1)).toBe('number=1')
})

test('Test 2', () => {
  expect(typing(true)).toBe('boolean=true')
})
