const countSmileys = require('.')

test('Test 1', () => {
  expect(countSmileys([])).toBe(0)
})

test('Test 2', () => {
  expect(countSmileys([':)', ';(', ';}', ':-D'])).toBe(2)
})

test('Test 3', () => {
  expect(countSmileys([';D', ':-(', ':-)', ';~)'])).toBe(3)
})

test('Test 4', () => {
  expect(countSmileys([';]', ':[', ';*', ':$', ';-D'])).toBe(1)
})

test('Test 5', () => {
  expect(countSmileys([':D', ':~)', ';~D', ':)'])).toBe(4)
})

test('Test 6', () => {
  expect(countSmileys([':)', ':(', ':D', ':O', ':;'])).toBe(2)
})
