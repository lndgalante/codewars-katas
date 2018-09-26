const MyNamespace = require('.')

test('Test 1', () => {
  const myObject = new MyNamespace.MyClass('Hello!')
  expect(myObject.sayHello()).toBe('Hello!')
})
