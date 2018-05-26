const shorcut = require('.')

test('Test 1', () => {
  expect(shorcut('hello')).toBe('hll')
})

test('Test 2', () => {
  expect(shorcut('how are you today?')).toBe('hw r y tdy?')
})

test('Test 3', () => {
  expect(shorcut('complain')).toBe('cmpln')
})

test('Test 4', () => {
  expect(shorcut('never')).toBe('nvr')
})
