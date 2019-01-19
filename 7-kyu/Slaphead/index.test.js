const bald = require('.')

test('Test 1', () => {
  expect(bald('/---------')).toEqual(['----------', 'Unicorn!'])
})

test('Test 2', () => {
  expect(bald('/-----/-')).toEqual(['--------', 'Homer!'])
})

test('Test 3', () => {
  expect(bald('--/--/---/-/---')).toEqual(['---------------', 'Careless!'])
})
