const Cat = require('.')

test('Test 1', () => {
  const cat = new Cat('Mr Whiskers')
  expect(cat.speak()).toBe('Mr Whiskers makes a noise, Mr Whiskers goes meow.')
})
