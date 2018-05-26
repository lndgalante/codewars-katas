const howMuchILoveYou = require('.')

test('Test 1', () => {
  expect(howMuchILoveYou(7)).toBe('I love you')
})

test('Test 2', () => {
  expect(howMuchILoveYou(3)).toBe('a lot')
})

test('Test 3', () => {
  expect(howMuchILoveYou(6)).toBe('not at all')
})
