const bandNameGenerator = require('.')

test('Test 1', () => {
  expect(bandNameGenerator('knife')).toBe('The Knife')
})

test('Test 2', () => {
  expect(bandNameGenerator('tart')).toBe('Tartart')
})

test('Test 3', () => {
  expect(bandNameGenerator('sandles')).toBe('Sandlesandles')
})

test('Test 4', () => {
  expect(bandNameGenerator('bed')).toBe('The Bed')
})
