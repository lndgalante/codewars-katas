const sumOfIntegersInString = require('.')

test('Test 1', () => {
  expect(sumOfIntegersInString('12.4')).toBe(16)
})

test('Test 2', () => {
  expect(sumOfIntegersInString('h3ll0w0rld')).toBe(3)
})

test('Test 3', () => {
  expect(sumOfIntegersInString('2 + 3 = ')).toBe(5)
})

test('Test 4', () => {
  expect(
    sumOfIntegersInString(
      'Our company made approximately 1 million in gross revenue last quarter.'
    )
  ).toBe(1)
})

test('Test 5', () => {
  expect(
    sumOfIntegersInString('The Great Depression lasted from 1929 to 1939.')
  ).toBe(3868)
})

test('Test 6', () => {
  expect(sumOfIntegersInString('Dogs are our best friends.')).toBe(0)
})

test('Test 7', () => {
  expect(sumOfIntegersInString('C4t5 are 4m4z1ng.')).toBe(18)
})

test('Test 8', () => {
  expect(
    sumOfIntegersInString(
      'The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog'
    )
  ).toBe(3635)
})
