const uefaEuro2016 = require('.')

test('Test 1', () => {
  expect(uefaEuro2016(['Germany', 'Ukraine'], [2, 0])).toBe(
    'At match Germany - Ukraine, Germany won!'
  )
})

test('Test 2', () => {
  expect(uefaEuro2016(['Belgium', 'Italy'], [0, 2])).toBe(
    'At match Belgium - Italy, Italy won!'
  )
})

test('Test 3', () => {
  expect(uefaEuro2016(['Portugal', 'Iceland'], [1, 1])).toBe(
    'At match Portugal - Iceland, teams played draw.'
  )
})
