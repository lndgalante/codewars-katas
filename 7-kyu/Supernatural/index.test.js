const bob = require('.')

test('Test 1', () => {
  expect(bob('vampire')).toBe('Behead it with a machete, idjits!')
})

test('Test 2', () => {
  expect(bob('pagan god')).toBe('It depends on which one it is, idjits!')
})

test('Test 3', () => {
  expect(bob('werepuppy')).toBe('I have friggin no idea yet, idjits!')
})
