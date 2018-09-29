const splitTheBill = require('.')

test('Test 1', () => {
  expect(splitTheBill({ A: 20, B: 15, C: 10 })).toEqual({ A: 5, B: 0, C: -5 })
})

test('Test 2', () => {
  expect(splitTheBill({ A: 40, B: 25, X: 10 })).toEqual({ A: 15, B: 0, X: -15 })
})
