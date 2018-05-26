const howManyDalmatians = require('.')

test('Test 1', () => {
  expect(howManyDalmatians(26)).toBe('More than a handful!')
})

test('Test 2', () => {
  expect(howManyDalmatians(8)).toBe('Hardly any')
})

test('Test 3', () => {
  expect(howManyDalmatians(14)).toBe('More than a handful!')
})

test('Test 4', () => {
  expect(howManyDalmatians(80)).toBe("Woah that's a lot of dogs!")
})

test('Test 5', () => {
  expect(howManyDalmatians(100)).toBe("Woah that's a lot of dogs!")
})

test('Test 6', () => {
  expect(howManyDalmatians(101)).toBe('101 DALMATIANS!!!')
})
