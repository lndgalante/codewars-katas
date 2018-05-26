const billboard = require('.')

test('Test 1', () => {
  expect(billboard('Jeong-Ho Aristotelis')).toBe(600)
})

test('Test 2', () => {
  expect(billboard('Abishai Charalampos')).toBe(570)
})

test('Test 3', () => {
  expect(billboard('Idwal Augustin')).toBe(420)
})

test('Test 4', () => {
  expect(billboard('Hadufuns John', 20)).toBe(260)
})

test('Test 5', () => {
  expect(billboard('Zoroaster Donnchadh')).toBe(570)
})

test('Test 6', () => {
  expect(billboard('Claude Miljenko')).toBe(450)
})

test('Test 7', () => {
  expect(billboard('Werner Vígi', 15)).toBe(165)
})

test('Test 8', () => {
  expect(billboard('Anani Fridumar')).toBe(420)
})

test('Test 9', () => {
  expect(billboard('Paolo Oli')).toBe(270)
})

test('Test 10', () => {
  expect(billboard('Hjalmar Liupold', 40)).toBe(600)
})

test('Test 11', () => {
  expect(billboard('Simon Eadwulf')).toBe(390)
})
