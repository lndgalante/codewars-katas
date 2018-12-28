const randomCase = require('.')

test('Test 1', () => {
  expect(randomCase('Lorem ipsum dolor sit amet, consectetur adipiscing elit').toLowerCase()).toBe(
    'lOReM ipSum DOloR SiT AmeT, cOnsEcTEtuR aDiPiSciNG eLIt'.toLowerCase()
  )
})
