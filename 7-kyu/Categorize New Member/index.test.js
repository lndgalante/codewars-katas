const openOrSenior = require('./index.js')

test('Test 1', () => {
  expect(openOrSenior([[45, 12], [55, 21], [19, -2], [104, 20]])).toEqual([
    'Open',
    'Senior',
    'Open',
    'Senior',
  ])
})

test('Test 2', () => {
  expect(openOrSenior([[3, 12], [55, 1], [91, -2], [54, 23]])).toEqual([
    'Open',
    'Open',
    'Open',
    'Open',
  ])
})

test('Test 3', () => {
  expect(openOrSenior([[59, 12], [55, -1], [12, -2], [12, 12]])).toEqual([
    'Senior',
    'Open',
    'Open',
    'Open',
  ])
})
