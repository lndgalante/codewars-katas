const copyList = require('.')

test('Test 1', () => {
  const t = [1, 2, 3, 4]
  const tCopy = copyList(t)
  t[1] += 5

  expect(t).toEqual([1, 7, 3, 4])
  expect(tCopy).toEqual([1, 2, 3, 4])
})
