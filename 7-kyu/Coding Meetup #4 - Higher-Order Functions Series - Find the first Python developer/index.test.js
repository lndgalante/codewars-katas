const getFirstPython = require('.')

test('Test 1', () => {
  const list = [
    { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
    {
      firstName: 'Victoria',
      lastName: 'T.',
      country: 'Puerto Rico',
      continent: 'Americas',
      age: 30,
      language: 'Python',
    },
    { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' },
  ]

  expect(getFirstPython(list)).toBe('Victoria, Puerto Rico')
})

test('Test 2', () => {
  const list = [
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
    {
      firstName: 'Amar',
      lastName: 'V.',
      country: 'Bosnia and Herzegovina',
      continent: 'Europe',
      age: 32,
      language: 'Ruby',
    },
  ]

  expect(getFirstPython(list)).toBe('There will be no Python developers')
})
