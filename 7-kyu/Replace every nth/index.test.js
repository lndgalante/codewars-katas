const replaceNth = require('.')

test('Test 1', () => {
  expect(replaceNth('Vader said: No, I am your father!', 2, 'a', 'o')).toBe(
    'Vader soid: No, I am your fother!'
  )
})

test('Test 2', () => {
  expect(replaceNth('Vader said: No, I am your father!', 4, 'a', 'o')).toBe(
    'Vader said: No, I am your fother!'
  )
})

test('Test 3', () => {
  expect(replaceNth('Vader said: No, I am your father!', 6, 'a', 'o')).toBe(
    'Vader said: No, I am your father!'
  )
})

test('Test 4', () => {
  expect(replaceNth('Vader said: No, I am your father!', 0, 'a', 'o')).toBe(
    'Vader said: No, I am your father!'
  )
})

test('Test 5', () => {
  expect(replaceNth('Vader said: No, I am your father!', -2, 'a', 'o')).toBe(
    'Vader said: No, I am your father!'
  )
})

test('Test 6', () => {
  expect(replaceNth('Vader said: No, I am your father!', 1, 'i', 'y')).toBe(
    'Vader sayd: No, I am your father!'
  )
})

test('Test 7', () => {
  expect(replaceNth('Luke cries: Noooooooooooooooo!', 6, 'o', 'i')).toBe(
    'Luke cries: Noooooioooooioooo!'
  )
})
