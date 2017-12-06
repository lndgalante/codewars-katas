const songDecoder = require('./index')

test('Test 1', () => {
  expect(songDecoder('WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB')).toBe(
    'WE ARE THE CHAMPIONS MY FRIEND'
  )
})

test('Test 2', () => {
  expect(songDecoder('AWUBBWUBC')).toBe('A B C')
})

test('Test 3', () => {
  expect(songDecoder('AWUBWUBWUBBWUBWUBWUBC')).toBe('A B C')
})

test('Test 4', () => {
  expect(songDecoder('WUBAWUBBWUBCWUB')).toBe('A B C')
})
