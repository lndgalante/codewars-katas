const calculateAge = require('.')

test('Test 1', () => {
  expect(calculateAge(2012, 2016)).toBe('You are 4 years old.')
})

test('Test 2', () => {
  expect(calculateAge(1989, 2016)).toBe('You are 27 years old.')
})

test('Test 3', () => {
  expect(calculateAge(2000, 2090)).toBe('You are 90 years old.')
})

test('Test 4', () => {
  expect(calculateAge(2000, 1990)).toBe('You will be born in 10 years.')
})

test('Test 5', () => {
  expect(calculateAge(3400, 3400)).toBe('You were born this very year!')
})

test('Test 6', () => {
  expect(calculateAge(900, 2900)).toBe('You are 2000 years old.')
})

test('Test 7', () => {
  expect(calculateAge(2010, 1990)).toBe('You will be born in 20 years.')
})

test('Test 8', () => {
  expect(calculateAge(2010, 1500)).toBe('You will be born in 510 years.')
})

test('Test 9', () => {
  expect(calculateAge(2010, 1500)).toBe('You will be born in 510 years.')
})

test('Test 10', () => {
  expect(calculateAge(2011, 2012)).toBe('You are 1 year old.')
})

test('Test 11', () => {
  expect(calculateAge(2011, 2012)).toBe('You are 1 year old.')
})

test('Test 12', () => {
  expect(calculateAge(2000, 1999)).toBe('You will be born in 1 year.')
})
