const domainName = require('./index.js')

test('Test 1', () => {
  expect(domainName('http://github.com/carbonfive/raygun')).toBe('github')
})

test('Test 2', () => {
  expect(domainName('http://www.zombie-bites.com')).toBe('zombie-bites')
})

test('Test 3', () => {
  expect(domainName('https://www.cnet.com')).toBe('cnet')
})

test('Test 4', () => {
  expect(domainName('http://google.com')).toBe('google')
})

test('Test 5', () => {
  expect(domainName('http://google.co.jp')).toBe('google')
})

test('Test 6', () => {
  expect(domainName('www.xakep.ru')).toBe('xakep')
})

test('Test 7', () => {
  expect(domainName('https://youtube.com')).toBe('youtube')
})
