const Sleigh = require('./index.js')

test('Test 1', () => {
  const sleigh = new Sleigh()
  expect(sleigh.authenticate('Santa Claus', 'Ho Ho Ho!')).toBeTruthy()
})

test('Test 2', () => {
  const sleigh = new Sleigh()
  expect(sleigh.authenticate('Santa', 'Ho Ho Ho!')).toBeFalsy()
})

test('Test 3', () => {
  const sleigh = new Sleigh()
  expect(sleigh.authenticate('Santa Claus', 'Ho Ho!')).toBeFalsy()
})

test('Test 4', () => {
  const sleigh = new Sleigh()
  expect(sleigh.authenticate('jhoffner', 'CodeWars')).toBeFalsy()
})
