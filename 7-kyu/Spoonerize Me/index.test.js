const spoonerize = require('.')

test('Test 1', () => {
  expect(spoonerize('nit picking')).toBe('pit nicking')
})

test('Test 2', () => {
  expect(spoonerize('wedding bells')).toBe('bedding wells')
})

test('Test 3', () => {
  expect(spoonerize('jelly beans')).toBe('belly jeans')
})
