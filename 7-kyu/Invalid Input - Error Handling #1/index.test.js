const getCount = require('.')

test('Test 1', () => {
  expect(getCount('Test')).toEqual({ vowels: 1, consonants: 3 })
})

test('Test 2', () => {
  expect(getCount('Here is some text')).toEqual({ vowels: 6, consonants: 8 })
})

test('Test 3', () => {
  expect(getCount('To be a Codewarrior or not to be')).toEqual({
    vowels: 12,
    consonants: 13,
  })
})

test('Test 4', () => {
  expect(getCount('To Kata or not to Kata')).toEqual({
    vowels: 8,
    consonants: 9,
  })
})

test('Test 5', () => {
  expect(getCount('aeiou')).toEqual({ vowels: 5, consonants: 0 })
})

test('Test 6', () => {
  expect(getCount('TEst')).toEqual({ vowels: 1, consonants: 3 })
})

test('Test 7', () => {
  expect(getCount('HEre Is sOme text   ')).toEqual({ vowels: 6, consonants: 8 })
})

test('Test 8', () => {
  expect(getCount()).toEqual({ vowels: 0, consonants: 0 })
})

test('Test 9', () => {
  expect(getCount(['To Kata or not to Kata'])).toEqual({
    vowels: 0,
    consonants: 0,
  })
})

test('Test 10', () => {
  expect(getCount(undefined)).toEqual({ vowels: 0, consonants: 0 })
})
