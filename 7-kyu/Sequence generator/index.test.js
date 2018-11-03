const sequence = require('.')

test('Test 1', () => {
  expect(sequence(3, 4)).toEqual([4, 4, 4])
})

test('Test 2', () => {
  expect(sequence(3, 's')).toEqual(['s', 's', 's'])
})

test('Test 3', () => {
  expect(sequence(5, [])).toEqual([[], [], [], [], []])
})

test('Test 4', () => {
  expect(sequence(5, (x, idx) => idx % 2)).toEqual([0, 1, 0, 1, 0])
})
