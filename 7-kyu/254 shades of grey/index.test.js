const shadesOfGrey = require('.')

test('Test 1', () => {
  expect(shadesOfGrey(1)).toEqual(['#010101'])
})

test('Test 2', () => {
  expect(shadesOfGrey(10)).toEqual([
    '#010101',
    '#020202',
    '#030303',
    '#040404',
    '#050505',
    '#060606',
    '#070707',
    '#080808',
    '#090909',
    '#0a0a0a',
  ])
})
