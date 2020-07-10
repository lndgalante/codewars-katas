const getDayOfTheWeek = require('.')

test('Test 1', () => {
  expect(getDayOfTheWeek('1/1/2017')).toBe('Sunday')
})

test('Test 2', () => {
  expect(getDayOfTheWeek('12/24/2015')).toBe('Thursday')
})

test('Test 3', () => {
  expect(getDayOfTheWeek('2/24/1982')).toBe('Wednesday')
})

test('Test 4', () => {
  expect(getDayOfTheWeek('6/2/1952')).toBe('Monday')
})
