const anagrams = require('.')

test('Test 1', () => {
  expect(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])).toEqual([
    'aabb',
    'bbaa',
  ])
})

test('Test 2', () => {
  expect(
    anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])
  ).toEqual(['carer', 'racer'])
})

test('Test 3', () => {
  expect(anagrams('laser', ['lazing', 'lazy', 'lacer'])).toEqual([])
})
