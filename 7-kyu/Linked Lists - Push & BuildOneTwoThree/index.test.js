const { Node, push, buildOneTwoThree } = require('.')

test('Test 1', () => {
  expect(push(null, 1).data).toBe(1)
})

test('Test 2', () => {
  expect(push(null, 1).next).toBeNull()
})

test('Test 3', () => {
  expect(push(new Node(1), 2).data).toBe(2)
})

test('Test 4', () => {
  expect(push(new Node(1), 2).next.data).toBe(1)
})

test('Test 5', () => {
  expect(buildOneTwoThree().data).toBe(1)
})

test('Test 6', () => {
  expect(buildOneTwoThree().next.data).toBe(2)
})

test('Test 7', () => {
  expect(buildOneTwoThree().next.next.data).toBe(3)
})

test('Test 8', () => {
  expect(buildOneTwoThree().next.next.next).toBeNull()
})
