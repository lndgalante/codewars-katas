const sortme = require('.')

test('Test 1', () => {
  expect(sortme(['web-1305', 'site-1305', 'web-1304', 'site-1304'])).toEqual([
    'site-1304',
    'web-1304',
    'site-1305',
    'web-1305',
  ])
})
