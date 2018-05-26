const capMe = require('.')

test('Test 1', () => {
  expect(capMe(['jo', 'nelson', 'jurie'])).toEqual(['Jo', 'Nelson', 'Jurie'])
})

test('Test 2', () => {
  expect(capMe(['KARLY', 'DANIEL', 'KELSEY'])).toEqual([
    'Karly',
    'Daniel',
    'Kelsey',
  ])
})
