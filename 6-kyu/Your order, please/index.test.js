const order = require('./index.js')

test('Test 1', () => {
  expect(order('is2 Thi1s T4est 3a')).toBe('Thi1s is2 3a T4est')
})

test('Test 2', () => {
  expect(order('4of Fo1r pe6ople g3ood th5e the2')).toBe(
    'Fo1r the2 g3ood 4of th5e pe6ople'
  )
})

test('Test 3', () => {
  expect(order('')).toBe('')
})
