const inArray = require('./index.js')

test('Test 1', () => {
  expect(
    inArray(
      ['arp', 'live', 'strong'],
      ['lively', 'alive', 'harp', 'sharp', 'armstrong']
    )
  ).toEqual(['arp', 'live', 'strong'])
})

test('Test 2', () => {
  expect(
    inArray(
      ['tarp', 'mice', 'bull'],
      ['lively', 'alive', 'harp', 'sharp', 'armstrong']
    )
  ).toEqual([])
})

test('Test 3', () => {
  expect(
    inArray(
      ['xyz', 'live', 'strong'],
      ['lively', 'alive', 'harp', 'sharp', 'armstrong']
    )
  ).toEqual(['live', 'strong'])
})
