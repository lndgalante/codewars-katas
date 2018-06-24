/* eslint new-cap: 0 */

const Person = require('.')

const people = [
  ['bob', 'john'],
  ['bob', 'john', 'dave'],
  [],
  ['bob', 'john', 'dave', 'matt', 'alex'],
]

for (let i = 0; i < people.length; i++) {
  const person = Person()
  person.fillFriends(people[i])

  test(`Test ${i}`, () => {
    expect(person._friends).toEqual(people[i])
  })
}
