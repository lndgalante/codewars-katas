const swap = require('.')

test('Test 1', () => {
  expect(swap('HelloWorld!')).toBe('HEllOWOrld!')
})

test('Test 2', () => {
  expect(swap('Sunday')).toBe('SUndAy')
})
