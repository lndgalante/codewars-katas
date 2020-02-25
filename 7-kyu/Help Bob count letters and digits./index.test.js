const countLettersAndDigits = require('.')

test('Test 1', () => {
  expect(countLettersAndDigits('hel2!lo')).toBe(6)
})

test('Test 2', () => {
  expect(countLettersAndDigits('n!!_ice!!123')).toBe(7)
})

test('Test 3', () => {
  expect(countLettersAndDigits('1')).toBe(1)
})

test('Test 4', () => {
  expect(countLettersAndDigits('?')).toBe(0)
})

test('Test 5', () => {
  expect(countLettersAndDigits('12345f%%%t5t&/6')).toBe(10)
})

test('Test 6', () => {
  expect(countLettersAndDigits('aBcDeFg090')).toBe(10)
})

test('Test 7', () => {
  expect(countLettersAndDigits('u_n_d_e_r__S_C_O_R_E')).toBe(10)
})
