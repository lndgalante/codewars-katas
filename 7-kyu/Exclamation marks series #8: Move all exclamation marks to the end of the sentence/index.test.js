const remove = require('.')

test('Test 1', () => {
  expect(remove('Hi!')).toEqual('Hi!')
})

test('Test 2', () => {
  expect(remove('Hi! Hi!')).toEqual('Hi Hi!!')
})

test('Test 3', () => {
  expect(remove('Hi! Hi! Hi!')).toEqual('Hi Hi Hi!!!')
})

test('Test 4', () => {
  expect(remove('Hi! !Hi Hi!')).toEqual('Hi Hi Hi!!!')
})

test('Test 5', () => {
  expect(remove('Hi! Hi!! Hi!')).toEqual('Hi Hi Hi!!!!')
})
