const changeTime = require('.')

test('Test 1', () => {
  const input = '08:15'
  const model = changeTime(input, 1)

  expect(model).toBe('08:16')
})

test('Test 2', () => {
  const input = '08:15'
  const model = changeTime(input, -1)

  expect(model).toBe('08:14')
})
