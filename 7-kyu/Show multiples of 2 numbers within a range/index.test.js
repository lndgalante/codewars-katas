const multiples = require('.')

test('Test 1', () => {
  const s1 = 2
  const s2 = 4
  const s3 = 40

  expect(multiples(s1, s2, s3)).toEqual([4, 8, 12, 16, 20, 24, 28, 32, 36])
})

test('Test 2', () => {
  const s1 = 13
  const s2 = 5
  const s3 = 800

  expect(multiples(s1, s2, s3)).toEqual([65, 130, 195, 260, 325, 390, 455, 520, 585, 650, 715, 780])
})
