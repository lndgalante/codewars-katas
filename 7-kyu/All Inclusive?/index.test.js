const containAllRots = require('.')

test('Test 1', () => {
  expect(containAllRots('', [])).toBeTrue()
})

test('Test 2', () => {
  expect(containAllRots('', ['bsjq', 'qbsj'])).toBeTrue()
})

test('Test 3', () => {
  expect(
    containAllRots('bsjq', ['bsjq', 'qbsj', 'sjqb', 'twZNsslC', 'jqbs'])
  ).toBeTrue()
})

test('Test 4', () => {
  expect(
    containAllRots('XjYABhR', [
      'TzYxlgfnhf',
      'yqVAuoLjMLy',
      'BhRXjYA',
      'YABhRXj',
      'hRXjYAB',
      'jYABhRX',
      'XjYABhR',
      'ABhRXjY',
    ])
  ).toBeFalse()
})
