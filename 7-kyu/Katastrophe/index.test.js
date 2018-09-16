const strongEnough = require('.')

test('Test 1', () => {
  expect(strongEnough([[2, 3, 1], [3, 1, 1], [1, 1, 2]], 2)).toBe('Safe!')
})

test('Test 2', () => {
  expect(strongEnough([[5, 8, 7], [3, 3, 1], [4, 1, 2]], 2)).toBe('Safe!')
})

test('Test 3', () => {
  expect(strongEnough([[5, 8, 7], [3, 3, 1], [4, 1, 2]], 3)).toBe(
    'Needs Reinforcement!'
  )
})
