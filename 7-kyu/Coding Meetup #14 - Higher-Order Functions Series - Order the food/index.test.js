const orderFood = require('.')

test('Test 1', () => {
  const list1 = [
    {
      firstName: 'Noah',
      lastName: 'M.',
      country: 'Switzerland',
      continent: 'Europe',
      age: 19,
      language: 'C',
      meal: 'vegetarian',
    },
    {
      firstName: 'Anna',
      lastName: 'R.',
      country: 'Liechtenstein',
      continent: 'Europe',
      age: 52,
      language: 'JavaScript',
      meal: 'standard',
    },
    {
      firstName: 'Ramona',
      lastName: 'R.',
      country: 'Paraguay',
      continent: 'Americas',
      age: 29,
      language: 'Ruby',
      meal: 'vegan',
    },
    {
      firstName: 'George',
      lastName: 'B.',
      country: 'England',
      continent: 'Europe',
      age: 81,
      language: 'C',
      meal: 'vegetarian',
    },
  ]

  expect(orderFood(list1)).toEqual({ vegetarian: 2, standard: 1, vegan: 1 })
})
