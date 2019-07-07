const radLadies = require('.')

test('Test 2', () => {
  expect(radLadies('9?9?9?m335%$£@a791%&$r$$$l£@53$&y&n%$5@ $£5577w&7e931%s$£c$o%%%f351f??%!%%')).toBe(
    'MARLYN WESCOFF!'
  )
})

test('Test 5', () => {
  expect(radLadies('??£@%&a5d15??e599713%l%%e%75913 1£$%&@g@£%o&$@13l5d11s$%&t15i9n&5%%@%e@£$!£%$£')).toBe(
    'ADELE GOLDSTINE!'
  )
})
