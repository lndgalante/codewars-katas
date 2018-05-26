const whoIsPaying = require('.')

test('Test 1', () => {
  expect(whoIsPaying('Mexico')).toEqual(['Mexico', 'Me'])
})

test('Test 2', () => {
  expect(whoIsPaying('Melania')).toEqual(['Melania', 'Me'])
})

test('Test 3', () => {
  expect(whoIsPaying('Melissa')).toEqual(['Melissa', 'Me'])
})

test('Test 4', () => {
  expect(whoIsPaying('Me')).toEqual(['Me'])
})

test('Test 5', () => {
  expect(whoIsPaying('')).toEqual([''])
})

test('Test 6', () => {
  expect(whoIsPaying('I')).toEqual(['I'])
})
