const solution = require('./index.js')

test('Test 1', () => {
  expect(solution()).toBe('')
})

test('Test 2', () => {
  expect(solution()).toBeTruthy()
})

test('Test 3', () => {
  expect(solution()).toEqual([])
})
