const toQueryString = require('.')

test('Test 1', () => {
  expect(toQueryString({ foo: 1, bar: 2 })).toBe('foo=1&bar=2')
})

test('Test 2', () => {
  expect(toQueryString({ foo: [1, 3], bar: [2, 4] })).toBe('foo=1&foo=3&bar=2&bar=4')
})

test('Test 3', () => {
  expect(toQueryString({ a: 'Z', b: 'Y', c: 'X', d: 'W', e: 'V', f: 'U', g: 'T' })).toBe('a=Z&b=Y&c=X&d=W&e=V&f=U&g=T')
})
