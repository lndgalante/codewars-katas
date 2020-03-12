const decodeMorse = require('.')

test('Test 1', () => {
  expect(decodeMorse('…. . -.--   .--- ..- -.. .')).toBe('HEY JUDE')
})
