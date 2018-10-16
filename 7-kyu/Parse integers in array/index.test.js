const parseNumbers = require('.')

test('Test 1', () => {
  expect(parseNumbers([])).toEqual([])
})

test('Test 2', () => {
  expect(parseNumbers(['13'])).toEqual([13])
})

test('Test 3', () => {
  expect(parseNumbers(['2.48'])).toEqual([2])
})

test('Test 4', () => {
  expect(parseNumbers(['8', '16', '24', '36'])).toEqual([8, 16, 24, 36])
})
