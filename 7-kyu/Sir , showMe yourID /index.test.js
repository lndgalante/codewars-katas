const showMe = require('.')

test('Test 1', () => {
  expect(showMe('Francis')).toBeTrue()
})

test('Test 2', () => {
  expect(showMe('Jean-Eluard')).toBeTrue()
})

test('Test 3', () => {
  expect(showMe('Le Mec')).toBeFalse()
})

test('Test 4', () => {
  expect(showMe('Bernard-Henry-Levy')).toBeTrue()
})

test('Test 5', () => {
  expect(showMe('Mémé Gertrude')).toBeFalse()
})
