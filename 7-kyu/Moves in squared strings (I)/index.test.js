const { vertMirror, horMirror, oper } = require('.')

test('Test 1', () => {
  expect(
    oper(vertMirror, 'hSgdHQ\nHnDMao\nClNNxX\niRvxxH\nbqTVvA\nwvSyRu')
  ).toBe('QHdgSh\noaMDnH\nXxNNlC\nHxxvRi\nAvVTqb\nuRySvw')
})

test('Test 2', () => {
  expect(
    oper(vertMirror, 'IzOTWE\nkkbeCM\nWuzZxM\nvDddJw\njiJyHF\nPVHfSx')
  ).toBe('EWTOzI\nMCebkk\nMxZzuW\nwJddDv\nFHyJij\nxSfHVP')
})

test('Test 3', () => {
  expect(oper(horMirror, 'lVHt\nJVhv\nCSbg\nyeCt')).toBe(
    'yeCt\nCSbg\nJVhv\nlVHt'
  )
})
