const generateMenu = require('.')

const inputs = [
  {
    url: 'http://www.google.com',
    text: '10^100',
  },
  {
    url: '#codewars',
    text: 'codewars',
  },
  {
    url: '#q',
    text: 'query',
  },
  {
    url: '#a',
    text: 'ans',
  },
  {
    url: '#123',
    text: 123,
  },
]

test('Test 1', () => {
  expect(generateMenu([])).toBe('')
})

test('Test 2', () => {
  expect(generateMenu(inputs.slice(0, 1))).toBe('<a href="http://www.google.com">10^100</a>')
})

test('Test 3', () => {
  expect(generateMenu(inputs.slice(1, 2))).toBe('<a href="#codewars">codewars</a>')
})

test('Test 4', () => {
  expect(generateMenu(inputs.slice(2, 4))).toBe('<a href="#q">query</a><a href="#a">ans</a>')
})

test('Test 5', () => {
  expect(generateMenu(inputs.slice(4))).toBe('<a href="#123">123</a>')
})
