const alphanumeric = require('.')

test('Test 1', () => {
  expect(alphanumeric('Mazinkaiser')).toBeTruthy()
})

test('Test 2', () => {
  expect(alphanumeric('hello world_')).toBeFalsy()
})

test('Test 3', () => {
  expect(alphanumeric('PassW0rd')).toBeTruthy()
})

test('Test 4', () => {
  expect(alphanumeric('     ')).toBeFalsy()
})

test('Test 5', () => {
  expect(alphanumeric('tYV6AyEc!Nc!NBHbNbTZan6yoM7hj')).toBeFalsy()
})
