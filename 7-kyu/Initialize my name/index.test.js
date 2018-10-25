const initializeNames = require('.')

test('Test 1', () => {
  expect(initializeNames('Jack Ryan')).toBe('Jack Ryan')
})

test('Test 2', () => {
  expect(initializeNames('Lois Mary Lane')).toBe('Lois M. Lane')
})

test('Test 3', () => {
  expect(initializeNames('Dimitri')).toBe('Dimitri')
})

test('Test 4', () => {
  expect(initializeNames('Alice Betty Catherine Davis')).toBe(
    'Alice B. C. Davis'
  )
})
