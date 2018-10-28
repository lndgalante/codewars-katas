const capital = require('.')

test('Test 1', () => {
  const stateCapitals = [{ state: 'Maine', capital: 'Augusta' }]

  expect(capital(stateCapitals)[0]).toBe('The capital of Maine is Augusta')
})

test('Test 2', () => {
  const stateCapitals = [{ country: 'Spain', capital: 'Madrid' }]

  expect(capital(stateCapitals)[0]).toBe('The capital of Spain is Madrid')
})

test('Test 3', () => {
  const mixedCapitals = [
    { state: 'Maine', capital: 'Augusta' },
    { country: 'Spain', capital: 'Madrid' },
  ]

  expect(capital(mixedCapitals)[1]).toBe('The capital of Spain is Madrid')
})
