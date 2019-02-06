const findAdmin = require('.')

const list = [
  {
    firstName: 'Harry',
    lastName: 'K.',
    country: 'Brazil',
    continent: 'Americas',
    age: 22,
    language: 'JavaScript',
    githubAdmin: 'yes',
  },
  {
    firstName: 'Kseniya',
    lastName: 'T.',
    country: 'Belarus',
    continent: 'Europe',
    age: 49,
    language: 'Ruby',
    githubAdmin: 'no',
  },
  {
    firstName: 'Jing',
    lastName: 'X.',
    country: 'China',
    continent: 'Asia',
    age: 34,
    language: 'JavaScript',
    githubAdmin: 'yes',
  },
  {
    firstName: 'Piotr',
    lastName: 'B.',
    country: 'Poland',
    continent: 'Europe',
    age: 128,
    language: 'JavaScript',
    githubAdmin: 'no',
  },
]

const answer = [
  {
    firstName: 'Harry',
    lastName: 'K.',
    country: 'Brazil',
    continent: 'Americas',
    age: 22,
    language: 'JavaScript',
    githubAdmin: 'yes',
  },
  {
    firstName: 'Jing',
    lastName: 'X.',
    country: 'China',
    continent: 'Asia',
    age: 34,
    language: 'JavaScript',
    githubAdmin: 'yes',
  },
]

test('Test 1', () => {
  expect(findAdmin(list, 'JavaScript')).toEqual(answer)
})

test('Test 2', () => {
  expect(findAdmin(list, 'Ruby')).toEqual([])
})
