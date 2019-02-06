const nicknameGenerator = require('.')

test('Test 1', () => {
  expect(nicknameGenerator('Jimmy')).toBe('Jim')
})

test('Test 2', () => {
  expect(nicknameGenerator('Samantha')).toBe('Sam')
})

test('Test 3', () => {
  expect(nicknameGenerator('Sam')).toBe('Error: Name too short')
})

test('Test 4', () => {
  expect(nicknameGenerator('Kayne')).toBe('Kay')
})

test('Test 5', () => {
  expect(nicknameGenerator('Melissa')).toBe('Mel')
})

test('Test 6', () => {
  expect(nicknameGenerator('James')).toBe('Jam')
})
