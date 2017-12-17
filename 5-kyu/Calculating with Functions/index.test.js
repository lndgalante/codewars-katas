const {
  zero,
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  plus,
  minus,
  times,
  dividedBy,
} = require('./index.js')

test('Test 1', () => {
  expect(seven(times(five()))).toBe(35)
})

test('Test 2', () => {
  expect(four(plus(nine()))).toBe(13)
})

test('Test 3', () => {
  expect(eight(minus(three()))).toBe(5)
})

test('Test 4', () => {
  expect(six(dividedBy(two()))).toBe(3)
})

test('Test 4', () => {
  expect(one(plus(zero()))).toBe(1)
})
