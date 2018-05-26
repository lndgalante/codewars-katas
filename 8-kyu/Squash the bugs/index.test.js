const findLongest = require('.')

test('Test 1', () => {
  expect(findLongest('The quick white fox jumped around the massive dog')).toBe(
    7
  )
})

test('Test 2', () => {
  expect(findLongest('Take me to tinseltown with you')).toBe(10)
})

test('Test 3', () => {
  expect(findLongest('Sausage chops')).toBe(7)
})

test('Test 4', () => {
  expect(findLongest('Wind your body and wiggle your belly')).toBe(6)
})

test('Test 5', () => {
  expect(findLongest('Lets all go on holiday')).toBe(7)
})
