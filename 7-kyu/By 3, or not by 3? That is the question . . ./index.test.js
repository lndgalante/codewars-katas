const divisibleByThree = require('.')

test('Test 1', () => {
  expect(divisibleByThree('123')).toBeTrue()
})

test('Test 2', () => {
  expect(divisibleByThree('19254')).toBeTrue()
})

test('Test 3', () => {
  expect(divisibleByThree('88')).toBeFalse()
})

test('Test 4', () => {
  expect(divisibleByThree('1')).toBeFalse()
})
