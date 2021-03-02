const premierLeagueStandings = require('.')

test('Test 1', () => {
  expect(premierLeagueStandings({ 1: 'Arsenal' })).toEqual({ 1: 'Arsenal' })
})

test('Test 2', () => {
  expect(premierLeagueStandings({ 2: 'Arsenal', 3: 'Accrington Stanley', 1: 'Leeds United' })).toEqual({
    3: 'Arsenal',
    2: 'Accrington Stanley',
    1: 'Leeds United',
  })
})
