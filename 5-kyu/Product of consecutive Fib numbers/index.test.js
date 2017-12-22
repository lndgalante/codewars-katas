const productFib = require('./index.js')

test('Test 1', () => {
  expect(productFib(4895)).toEqual([55, 89, true])
})

test('Test 2', () => {
  expect(productFib(5895)).toEqual([89, 144, false])
})

test('Test 3', () => {
  expect(productFib(74049690)).toEqual([6765, 10946, true])
})

test('Test 4', () => {
  expect(productFib(84049690)).toEqual([10946, 17711, false])
})

test('Test 5', () => {
  expect(productFib(193864606)).toEqual([10946, 17711, true])
})

test('Test 6', () => {
  expect(productFib(447577)).toEqual([610, 987, false])
})

test('Test 7', () => {
  expect(productFib(602070)).toEqual([610, 987, true])
})
