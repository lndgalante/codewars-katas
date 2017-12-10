const decodeMorse = require('./index.js')

test('Test 1', () => {
  expect(decodeMorse('.... . -.--   .--- ..- -.. .')).toBe('HEY JUDE')
})
