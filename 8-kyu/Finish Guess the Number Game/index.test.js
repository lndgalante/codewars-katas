const Guesser = require('.')

test('Test 1', () => {
  const guesser = new Guesser(10, 2)
  expect(guesser.guess(10)).toBeTrue()
})
