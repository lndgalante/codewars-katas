const Guesser = require('./index.js')

test('Test 1', () => {
  let guesser = new Guesser(10, 2)
  guesser.guess(10)
  guesser.guess(10)
  guesser.guess(10)
  guesser.guess(10)
  expect(guesser.guess(10)).toBeTruthy()
})
