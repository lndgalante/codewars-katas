const bump = require('.')

test('Test 1', () => {
  expect(bump('n')).toBe('Woohoo!')
})

test('Test 2', () => {
  expect(bump('_nnnnnnn_n__n______nn__nn_nnn')).toBe('Car Dead')
})

test('Test 3', () => {
  expect(bump('______n___n_')).toBe('Woohoo!')
})
