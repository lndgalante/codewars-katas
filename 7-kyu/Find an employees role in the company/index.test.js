const findEmployeesRole = require('.')

test('Test 1', () => {
  expect(findEmployeesRole('Dipper Pines')).toBe('Does not work here!')
  expect(findEmployeesRole('Morty Smith')).toBe('Truck Driver')
})
