const encryption = require('.')

test('Test 1', () => {
  expect(encryption('HELLO WORLD')).toBe(
    '.... . .-.. .-.. ---   .-- --- .-. .-.. -..'
  )
})
