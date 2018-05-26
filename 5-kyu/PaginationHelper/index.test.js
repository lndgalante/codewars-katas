const PaginationHelper = require('.')

const helper = new PaginationHelper(['a', 'b', 'c', 'd', 'e', 'f'], 4)

test('Test 1', () => {
  expect(helper.pageCount()).toBe(2)
})

test('Test 2', () => {
  expect(helper.itemCount()).toBe(6)
})

test('Test 3', () => {
  expect(helper.pageItemCount(0)).toBe(4)
})

test('Test 4', () => {
  expect(helper.pageItemCount(1)).toBe(2)
})

test('Test 5', () => {
  expect(helper.pageItemCount(2)).toBe(-1)
})

test('Test 6', () => {
  expect(helper.pageIndex(5)).toBe(1)
})

test('Test 7', () => {
  expect(helper.pageIndex(2)).toBe(0)
})

test('Test 8', () => {
  expect(helper.pageIndex(20)).toBe(-1)
})

test('Test 9', () => {
  expect(helper.pageIndex(-10)).toBe(-1)
})
