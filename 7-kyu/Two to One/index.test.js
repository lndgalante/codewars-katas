const longest = require('.')

test('Test 1', () => {
  expect(longest('aretheyhere', 'yestheyarehere')).toBe('aehrsty')
})

test('Test 2', () => {
  expect(longest('loopingisfunbutdangerous', 'lessdangerousthancoding')).toBe(
    'abcdefghilnoprstu'
  )
})

test('Test 3', () => {
  expect(longest('inmanylanguages', 'theresapairoffunctions')).toBe(
    'acefghilmnoprstuy'
  )
})
