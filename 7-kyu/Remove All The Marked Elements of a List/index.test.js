/* eslint no-array-constructor: 0 */

const Array = require('.')

test('Test 1', () => {
  const list = new Array()
  const integerList = [1, 1, 2, 3, 1, 2, 3, 4]
  const valuesList = [1, 3]

  expect(list.remove(integerList, valuesList)).toEqual([2, 2, 4])
})

test('Test 2', () => {
  const list = new Array()
  const integerList = [1, 1, 2, 3, 1, 2, 3, 4, 4, 3, 5, 6, 7, 2, 8]
  const valuesList = [1, 3, 4, 2]

  expect(list.remove(integerList, valuesList)).toEqual([5, 6, 7, 8])
})

test('Test 3', () => {
  const list = new Array()
  const integerList = [8, 2, 7, 2, 3, 4, 6, 5, 4, 4, 1, 2, 3]
  const valuesList = [2, 4, 3]

  expect(list.remove(integerList, valuesList)).toEqual([8, 7, 6, 5, 1])
})
