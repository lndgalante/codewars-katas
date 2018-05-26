const animal = require('.')

test('Test 1', () => {
  expect(animal({ name: 'dog', legs: 4, color: 'white' })).toBe(
    'This white dog has 4 legs.'
  )
})

test('Test 2', () => {
  expect(animal({ name: 'cock', legs: 2, color: 'red' })).toBe(
    'This red cock has 2 legs.'
  )
})

test('Test 3', () => {
  expect(animal({ name: 'rabbit', legs: 4, color: 'gray' })).toBe(
    'This gray rabbit has 4 legs.'
  )
})
