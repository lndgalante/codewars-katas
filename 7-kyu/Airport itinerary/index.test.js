const itinerary = require('.')

test('Test 1', () => {
  expect(itinerary([{ in: 'TRN', out: 'FCO' }])).toBe('TRN-FCO')
})

test('Test 2', () => {
  expect(
    itinerary([
      { in: 'TRN', out: 'FCO' },
      { in: 'CIA', out: 'JFK' },
    ]),
  ).toBe('TRN-FCO-CIA-JFK')
})

test('Test 3', () => {
  expect(
    itinerary([
      { in: 'TRN', out: 'FCO' },
      { in: 'FCO', out: 'JFK' },
    ]),
  ).toBe('TRN-FCO-JFK')
})

test('Test 4', () => {
  expect(
    itinerary([
      { in: 'TRN', out: 'FCO' },
      { in: 'CIA', out: 'TRN' },
    ]),
  ).toBe('TRN-FCO-CIA-TRN')
})

test('Test 5', () => {
  expect(
    itinerary([
      { in: 'TRN', out: 'FCO' },
      { in: 'FCO', out: 'TRN' },
    ]),
  ).toBe('TRN-FCO-TRN')
})
