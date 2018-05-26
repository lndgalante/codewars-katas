const areYouPlayingBanjo = require('.')

test('Test 1', () => {
  expect(areYouPlayingBanjo('Martin')).toBe('Martin does not play banjo')
})

test('Test 2', () => {
  expect(areYouPlayingBanjo('Rikke')).toBe('Rikke plays banjo')
})
