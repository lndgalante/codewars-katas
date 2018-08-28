const swap = require('.')

test('Test 1', () => {
  expect(swap('HelloWorld')).toBe('hELLOwORLD')
})

test('Test 2', () => {
  expect(swap('CodeWars')).toBe('cODEwARS')
})
