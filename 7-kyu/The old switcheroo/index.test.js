const vowel2index = require('.')

test('Test 1', () => {
  expect(vowel2index('this is my string')).toBe('th3s 6s my str15ng')
})

test('Test 2', () => {
  expect(vowel2index('Codewars is the best site in the world')).toBe(
    'C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld'
  )
})

test('Test 3', () => {
  expect(vowel2index('Tomorrow is going to be raining')).toBe(
    'T2m4rr7w 10s g1415ng t20 b23 r2627n29ng'
  )
})

test('Test 4', () => {
  expect(vowel2index('')).toBe('')
})
