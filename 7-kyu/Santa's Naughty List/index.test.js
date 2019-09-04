const findChildren = require('.')

test('Test 1', () => {
  expect(findChildren(['Jason', 'Jackson', 'Jordan', 'Johnny'], ['Jason', 'Jordan', 'Jennifer'])).toEqual([
    'Jason',
    'Jordan',
  ])
})

test('Test 2', () => {
  expect(findChildren(['jASon', 'JAsoN', 'JaSON', 'jasON'], ['JasoN', 'jASOn', 'JAsoN', 'jASon', 'JASON'])).toEqual([
    'JAsoN',
    'jASon',
  ])
})

test('Test 3', () => {
  expect(findChildren(['Jason', 'James', 'Johnson'], ['Jason', 'James', 'JJ'])).toEqual(['James', 'Jason'])
})
