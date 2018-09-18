const getVillainName = require('.')

test('Test 1', () => {
  expect(getVillainName(new Date('2001-05-03T00:00:00.000Z'))).toBe(
    'The Despicable Hood Ornament'
  )
})

test('Test 2', () => {
  expect(getVillainName(new Date('2001-04-21T00:00:00.000Z'))).toBe(
    'The Trashy Mustache'
  )
})

test('Test 3', () => {
  expect(getVillainName(new Date('2001-12-17T00:00:00.000Z'))).toBe(
    'The Awkward Tomato'
  )
})

test('Test 4', () => {
  expect(getVillainName(new Date('2001-01-10T00:00:00.000Z'))).toBe(
    'The Evil Laundry Basket'
  )
})
