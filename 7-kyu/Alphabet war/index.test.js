const alphabetWar = require('.')

test('Test 1', () => {
  expect(alphabetWar('z')).toBe('Right side wins!')
})

test('Test 2', () => {
  expect(alphabetWar('zdqmwpbs')).toBe("Let's fight again!")
})

test('Test 3', () => {
  expect(alphabetWar('zzzzs')).toBe('Right side wins!')
})

test('Test 4', () => {
  expect(alphabetWar('wwwwww')).toBe('Left side wins!')
})
