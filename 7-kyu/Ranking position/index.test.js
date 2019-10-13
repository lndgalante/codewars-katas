const ranking = require('.')

test('Test 1', () => {
  const input = [
    {
      name: 'John',
      points: 100,
    },
    {
      name: 'Bob',
      points: 130,
    },
    {
      name: 'Mary',
      points: 120,
    },
    {
      name: 'Kate',
      points: 120,
    },
  ]

  const output = [
    {
      name: 'Bob',
      points: 130,
      position: 1,
    },
    {
      name: 'Kate',
      points: 120,
      position: 2,
    },
    {
      name: 'Mary',
      points: 120,
      position: 2,
    },
    {
      name: 'John',
      points: 100,
      position: 4,
    },
  ]

  expect(ranking(input)).toEqual(output)
})

test('Test 2', () => {
  const input = [
    {
      name: 'Bob',
      points: 130,
    },
    {
      name: 'Mary',
      points: 120,
    },
    {
      name: 'John',
      points: 100,
    },
  ]

  const output = [
    {
      name: 'Bob',
      points: 130,
      position: 1,
    },
    {
      name: 'Mary',
      points: 120,
      position: 2,
    },
    {
      name: 'John',
      points: 100,
      position: 3,
    },
  ]

  expect(ranking(input)).toEqual(output)
})

test('Test 3', () => {
  const input = [
    {
      name: 'Bob',
      points: 100,
    },
    {
      name: 'Mary',
      points: 100,
    },
    {
      name: 'John',
      points: 100,
    },
  ]

  const output = [
    {
      name: 'Bob',
      points: 100,
      position: 1,
    },
    {
      name: 'John',
      points: 100,
      position: 1,
    },
    {
      name: 'Mary',
      points: 100,
      position: 1,
    },
  ]

  expect(ranking(input)).toEqual(output)
})

test('Test 4', () => {
  const input = [
    {
      name: 'John',
      points: 100,
    },
  ]

  const output = [
    {
      name: 'John',
      points: 100,
      position: 1,
    },
  ]

  expect(ranking(input)).toEqual(output)
})

test('Test 5', () => {
  const input = []
  const output = []

  expect(ranking(input)).toEqual(output)
})
