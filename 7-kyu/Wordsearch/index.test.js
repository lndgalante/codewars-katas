const wordSearch = require('.')

const myText = 'what makes the desert beautiful, said the little prince is that somewhere it hides a well'

test('Test 1', () => {
  expect(wordSearch('desert', myText)).toBeTrue()
})

test('Test 2', () => {
  expect(wordSearch('blue', myText)).toBeFalse()
})

test('Test 3', () => {
  expect(wordSearch('well', myText)).toBeTrue()
})

test('Test 4', () => {
  expect(wordSearch('house', myText)).toBeFalse()
})

test('Test 5', () => {
  expect(wordSearch('beautiful', myText)).toBeTrue()
})

test('Test 6', () => {
  expect(wordSearch('prince', myText)).toBeTrue()
})

test('Test 7', () => {
  expect(wordSearch('le prince', myText)).toBeFalse()
})
