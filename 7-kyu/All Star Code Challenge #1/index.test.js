const { NBAplayer, sumPPG } = require('.')

test('Test 1', () => {
  const iverson = new NBAplayer('Iverson', '76ers', 11.2)
  const jordan = new NBAplayer('Jordan', 'bulls', 20.2)

  expect(sumPPG(iverson, jordan)).toBe(31.4)
})
