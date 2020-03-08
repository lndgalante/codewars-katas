/* eslint new-cap: 0 */

const Person = require('.')

const people = [
  ['bob', 'john'],
  ['bob', 'john', 'dave'],
  [],
  ['bob', 'john', 'dave', 'matt', 'alex'],
]

for (const [i, element] of people.entries()) {
  const person = Person()
  person.fillFriends(element)

  test(`Test ${i}`, () => {
    expect(person._friends).toEqual(element)
  })
}
