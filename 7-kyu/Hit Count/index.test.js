const counterEffect = require('.')

test('Test 1', () => {
  expect(counterEffect('1250')).toEqual([
    [0, 1],
    [0, 1, 2],
    [0, 1, 2, 3, 4, 5],
    [0],
  ])
})

test('Test 2', () => {
  expect(counterEffect('0050')).toEqual([[0], [0], [0, 1, 2, 3, 4, 5], [0]])
})

test('Test 3', () => {
  expect(counterEffect('0000')).toEqual([[0], [0], [0], [0]])
})
