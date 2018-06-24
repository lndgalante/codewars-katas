const alphanumeric = require('.')

test('Test 1', () => {
  expect(alphanumeric('Mazinkaiser')).toBeTrue()
})

test('Test 2', () => {
  expect(alphanumeric('hello world_')).toBeFalse()
})

test('Test 3', () => {
  expect(alphanumeric('PassW0rd')).toBeTrue()
})

test('Test 4', () => {
  expect(alphanumeric('     ')).toBeFalse()
})

test('Test 5', () => {
  expect(alphanumeric('tYV6AyEc!Nc!NBHbNbTZan6yoM7hj')).toBeFalse()
})
