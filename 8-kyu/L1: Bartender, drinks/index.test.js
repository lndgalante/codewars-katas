const getDrinkByProfession = require('.')

test('Test 1', () => {
  expect(getDrinkByProfession('jabrOni')).toBe('Patron Tequila')
})

test('Test 2', () => {
  expect(getDrinkByProfession('scHOOl counselor')).toBe('Anything with Alcohol')
})

test('Test 3', () => {
  expect(getDrinkByProfession('prOgramMer')).toBe('Hipster Craft Beer')
})

test('Test 4', () => {
  expect(getDrinkByProfession('bike ganG member')).toBe('Moonshine')
})

test('Test 5', () => {
  expect(getDrinkByProfession('poLiTiCian')).toBe('Your tax dollars')
})

test('Test 6', () => {
  expect(getDrinkByProfession('rapper')).toBe('Cristal')
})

test('Test 7', () => {
  expect(getDrinkByProfession('pundit')).toBe('Beer')
})

test('Test 8', () => {
  expect(getDrinkByProfession('Pug')).toBe('Beer')
})
