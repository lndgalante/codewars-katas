const removeEveryOther = require('.')

test('Test 1', () => {
  expect(removeEveryOther(['Hello', 'Goodbye', 'Hello Again'])).toEqual([
    'Hello',
    'Hello Again',
  ])
})

test('Test 2', () => {
  expect(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual([
    1,
    3,
    5,
    7,
    9,
  ])
})

test('Test 3', () => {
  expect(removeEveryOther([[1, 2]])).toEqual([[1, 2]])
})

test('Test 4', () => {
  expect(removeEveryOther([['Goodbye'], { Great: 'Job' }])).toEqual([
    ['Goodbye'],
  ])
})

test('Test 5', () => {
  expect(removeEveryOther([])).toEqual([])
})
