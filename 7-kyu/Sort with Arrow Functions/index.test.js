const orderPeople = require('.')

test('Test 1', () => {
  expect(
    orderPeople([
      { age: 83, name: 'joel' },
      { age: 46, name: 'roger' },
      { age: 99, name: 'vinny' },
      { age: 26, name: 'don' },
      { age: 74, name: 'brendan' },
    ])
  ).toEqual([
    { age: 26, name: 'don' },
    { age: 46, name: 'roger' },
    { age: 74, name: 'brendan' },
    { age: 83, name: 'joel' },
    { age: 99, name: 'vinny' },
  ])
})
