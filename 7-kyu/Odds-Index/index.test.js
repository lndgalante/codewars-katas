const oddBall = require('.')

test('Test 1', () => {
  expect(oddBall(['even', 4, 'even', 7, 'even', 55, 'even', 6, 'even', 10, 'odd', 3, 'even'])).toBeTrue()
})

test('Test 2', () => {
  expect(oddBall(['even', 4, 'even', 7, 'even', 55, 'even', 6, 'even', 9, 'odd', 3, 'even'])).toBeFalse()
})

test('Test 3', () => {
  expect(oddBall(['even', 10, 'odd', 2, 'even'])).toBeTrue()
})
