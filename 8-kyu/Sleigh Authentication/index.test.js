const Sleigh = require('.')

test('Test 1', () => {
  const sleigh = new Sleigh()
  expect(sleigh.authenticate('Santa Claus', 'Ho Ho Ho!')).toBeTrue()
})

test('Test 2', () => {
  const sleigh = new Sleigh()
  expect(sleigh.authenticate('Santa', 'Ho Ho Ho!')).toBeFalse()
})

test('Test 3', () => {
  const sleigh = new Sleigh()
  expect(sleigh.authenticate('Santa Claus', 'Ho Ho!')).toBeFalse()
})

test('Test 4', () => {
  const sleigh = new Sleigh()
  expect(sleigh.authenticate('jhoffner', 'CodeWars')).toBeFalse()
})
