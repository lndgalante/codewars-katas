const scramble = require('.')

test('Test 1', () => {
  expect(scramble('abcd', [0, 3, 1, 2])).toBe('acdb')
})

test('Test 2', () => {
  expect(scramble('sc301s', [4, 0, 3, 1, 5, 2])).toBe('c0s3s1')
})

test('Test 3', () => {
  expect(scramble('bskl5', [2, 1, 4, 3, 0])).toBe('5sblk')
})
