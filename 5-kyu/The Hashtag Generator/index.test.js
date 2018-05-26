const generateHashtag = require('.')

test('Test 1', () => {
  expect(generateHashtag(' Hello there thanks for trying my Kata')).toBe(
    '#HelloThereThanksForTryingMyKata'
  )
})

test('Test 2', () => {
  expect(generateHashtag(' Hello World ')).toBe('#HelloWorld')
})
