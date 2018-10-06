const HTMLGen = require('.')

test('Test 1', () => {
  const htmlGen = new HTMLGen()

  expect(htmlGen.div('test')).toBe('<div>test</div>')
})

test('Test 2', () => {
  const htmlGen = new HTMLGen()

  expect(htmlGen.b('test')).toBe('<b>test</b>')
})
