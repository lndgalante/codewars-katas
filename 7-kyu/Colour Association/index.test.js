const colourAssociation = require('.')

test('Test 1', () => {
  expect(colourAssociation([['white', 'goodness'], ['blue', 'tranquility']])).toEqual([
    { white: 'goodness' },
    { blue: 'tranquility' },
  ])
})
