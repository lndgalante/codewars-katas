const rainAmount = require('.')

test('Test 1', () => {
  expect(rainAmount(100)).toBe(
    'Your plant has had more than enough water for today!'
  )
})

test('Test 2', () => {
  expect(rainAmount(39)).toBe('You need to give your plant 1mm of water')
})
