const disemvowel = require('.')

test('Test 1', () => {
  expect(disemvowel('This website is for losers LOL!')).toBe(
    'Ths wbst s fr lsrs LL!'
  )
})
