const timedReading = require('.')

test('Test 1', () => {
  expect(timedReading(4, "The Fox asked the stork, ’How is the soup?’")).toBe(7)
})

test('Test 2', () => {
  expect(timedReading(1, '…')).toBe(0)
})

test('Test 3', () => {
  expect(timedReading(3, 'This play was good for us.')).toBe(3)
})

test('Test 4', () => {
  expect(timedReading(3, 'Suddenly he stopped, and glanced up at the houses')).toBe(5)
})

test('Test 5', () => {
  expect(timedReading(6, 'Zebras evolved among the Old World horses within the last four million years.')).toBe(11)
})

test('Test 6', () => {
  expect(timedReading(5, 'Although zebra species may have overlapping ranges, they do not interbreed.')).toBe(6)
})

test('Test 7', () => {
  expect(timedReading(1, 'Oh!')).toBe(0)
})

test('Test 8', () => {
  expect(
    timedReading(
      5,
      'Now and then, however, he is horribly thoughtless, and seems to take a real delight in giving me pain.'
    )
  ).toBe(14)
})
