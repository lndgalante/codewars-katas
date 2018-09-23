const wordsToMarks = require('.')

test('Test 1', () => {
  expect(wordsToMarks('attitude')).toBe(100)
})

test('Test 2', () => {
  expect(wordsToMarks('friends')).toBe(75)
})

test('Test 3', () => {
  expect(wordsToMarks('family')).toBe(66)
})

test('Test 4', () => {
  expect(wordsToMarks('selfness')).toBe(99)
})

test('Test 5', () => {
  expect(wordsToMarks('knowledge')).toBe(96)
})
