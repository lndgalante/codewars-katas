const getNames = require('.')

test('Test 1', () => {
  expect(
    getNames([
      { name: 'Joe', age: 20 },
      { name: 'Bill', age: 30 },
      { name: 'Kate', age: 23 },
    ])
  ).toEqual(['Joe', 'Bill', 'Kate'])
})
