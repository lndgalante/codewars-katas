const hero = require('.')

test('Test 1', () => {
  expect(hero(10, 5)).toBeTruthy()
})

test('Test 2', () => {
  expect(hero(7, 4)).toBeFalsy()
})

test('Test 3', () => {
  expect(hero(4, 5)).toBeFalsy()
})

test('Test 4', () => {
  expect(hero(100, 40)).toBeTruthy()
})

test('Test 5', () => {
  expect(hero(1500, 751)).toBeFalsy()
})

test('Test 6', () => {
  expect(hero(0, 1)).toBeFalsy()
})
