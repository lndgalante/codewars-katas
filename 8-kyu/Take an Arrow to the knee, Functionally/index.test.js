const arrowFunc = require('.')

test('Test 1', () => {
  expect(arrowFunc([84, 101, 115, 116])).toBe('Test')
})

test('Test 2', () => {
  expect(arrowFunc([70, 85, 83, 32, 82, 79, 72, 32, 68, 65, 72])).toBe(
    'FUS ROH DAH'
  )
})
