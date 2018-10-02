const sumFromString = require('.')

test('Test 1', () => {
  expect(
    sumFromString('In 2015, I want to know how much does iPhone 6+ cost?')
  ).toBe(2021)
})

test('Test 2', () => {
  expect(sumFromString('1+1=2')).toBe(4)
})

test('Test 3', () => {
  expect(sumFromString('e=mc^2')).toBe(2)
})
