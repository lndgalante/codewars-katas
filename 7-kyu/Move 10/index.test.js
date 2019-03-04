const moveTen = require('.')

test('Test 1', () => {
  expect(moveTen('testcase')).toEqual('docdmkco')
})

test('Test 2', () => {
  expect(moveTen('codewars')).toEqual('mynogkbc')
})

test('Test 3', () => {
  expect(moveTen('exampletesthere')).toEqual('ohkwzvodocdrobo')
})
