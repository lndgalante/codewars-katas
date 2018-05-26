const fiveLine = require('.')

test('Test 1', () => {
  expect(fiveLine('  a')).toBe('a\naa\naaa\naaaa\naaaaa')
})

test('Test 2', () => {
  expect(fiveLine('\txy \n')).toBe('xy\nxyxy\nxyxyxy\nxyxyxyxy\nxyxyxyxyxy')
})

test('Test 3', () => {
  expect(fiveLine('           Ok               ')).toBe(
    'Ok\nOkOk\nOkOkOk\nOkOkOkOk\nOkOkOkOkOk'
  )
})
