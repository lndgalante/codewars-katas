const playerRankUp = require('./index.js')

test('Test 1', () => {
  expect(playerRankUp(64)).toBeFalsy()
})

test('Test 2', () => {
  expect(playerRankUp(101)).toBe(
    'Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up.'
  )
})
