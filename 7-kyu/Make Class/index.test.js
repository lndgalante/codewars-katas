/* eslint max-params: 0 */

const makeClass = require('.')

test('Test 1', () => {
  function Animal(name, species, age, health, weight, color) {
    this.name = name
    this.species = species
    this.age = age
    this.health = health
    this.weight = weight
    this.color = color
  }

  const Animel = makeClass('name', 'species', 'age', 'health', 'weight', 'color')
  const dog1 = new Animal('Bob', 'Dog', '5', 'good', '50lb', 'brown')
  const dog2 = new Animel('Bob', 'Dog', '5', 'good', '50lb', 'brown')

  expect(Object.values(dog1).join(`,`)).toEqual(Object.values(dog2).join(`,`))
})
