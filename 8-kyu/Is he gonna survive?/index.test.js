const hero = require('.')

test('Test 1', () => {
  expect(hero(10, 5)).toBeTrue()
})

test('Test 2', () => {
  expect(hero(7, 4)).toBeFalse()
})

test('Test 3', () => {
  expect(hero(4, 5)).toBeFalse()
})

test('Test 4', () => {
  expect(hero(100, 40)).toBeTrue()
})

test('Test 5', () => {
  expect(hero(1500, 751)).toBeFalse()
})

test('Test 6', () => {
  expect(hero(0, 1)).toBeFalse()
})
