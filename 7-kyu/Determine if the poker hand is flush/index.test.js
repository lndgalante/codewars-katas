const isFlush = require('.')

test('Test 1', () => {
  expect(isFlush(['AS', '3S', '9S', 'KS', '4S'])).toBeTrue()
})

test('Test 2', () => {
  expect(isFlush(['AD', '4S', '7H', 'KC', '5S'])).toBeFalse()
})

test('Test 3', () => {
  expect(isFlush(['AD', '4S', '10H', 'KC', '5S'])).toBeFalse()
})

test('Test 4', () => {
  expect(isFlush(['QD', '4D', '10D', 'KD', '5D'])).toBeTrue()
})

test('Test 5', () => {
  expect(isFlush(['10D', '4D', 'QD', 'KD', '5D'])).toBeTrue()
})
