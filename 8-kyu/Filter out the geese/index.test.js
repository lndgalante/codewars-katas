const gooseFilter = require('.')

test('Test 1', () => {
  expect(
    gooseFilter([
      'Mallard',
      'Hook Bill',
      'African',
      'Crested',
      'Pilgrim',
      'Toulouse',
      'Blue Swedish',
    ])
  ).toEqual(['Mallard', 'Hook Bill', 'Crested', 'Blue Swedish'])
})

test('Test 2', () => {
  expect(
    gooseFilter(['Mallard', 'Barbary', 'Hook Bill', 'Blue Swedish', 'Crested'])
  ).toEqual(['Mallard', 'Barbary', 'Hook Bill', 'Blue Swedish', 'Crested'])
})

test('Test 3', () => {
  expect(
    gooseFilter([
      'African',
      'Roman Tufted',
      'Toulouse',
      'Pilgrim',
      'Steinbacher',
    ])
  ).toEqual([])
})
