const derDieDas = require('.')

test('Test 1', () => {
  expect(derDieDas('Jürgen')).toBe('die Jürgen')
})

test('Test 2', () => {
  expect(derDieDas('Auto')).toBe('die Auto')
})

test('Test 3', () => {
  expect(derDieDas('Lappen')).toBe('die Lappen')
})

test('Test 4', () => {
  expect(derDieDas('Donau-Dampfschifffahrtsgesellschaft')).toBe('der Donau-Dampfschifffahrtsgesellschaft')
})

test('Test 5', () => {
  expect(derDieDas('Ei')).toBe('die Ei')
})
