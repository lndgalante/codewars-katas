const sortGiftCode = require('.')

test('Test 1', () => {
  expect(sortGiftCode('abcdef')).toBe('abcdef')
})

test('Test 2', () => {
  expect(sortGiftCode('pqksuvy')).toBe('kpqsuvy')
})

test('Test 3', () => {
  expect(sortGiftCode('zyxwvutsrqponmlkjihgfedcba')).toBe(
    'abcdefghijklmnopqrstuvwxyz'
  )
})
