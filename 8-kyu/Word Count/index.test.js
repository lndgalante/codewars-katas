const countWords = require('.')

test('Test 1', () => {
  expect(countWords('Hello')).toBe(1)
})

test('Test 2', () => {
  expect(countWords('Hello, World!')).toBe(2)
})

test('Test 3', () => {
  expect(
    countWords(
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    )
  ).toBe(19)
})

test('Test 4', () => {
  expect(countWords('')).toBe(0)
})

test('Test 5', () => {
  expect(countWords('With! Symbol@ #Around! (Every) %Word$')).toBe(5)
})

test('Test 6', () => {
  expect(countWords('Dear   Victoria, I love  to press   space button.')).toBe(
    8
  )
})

test('Test 7', () => {
  expect(countWords(' Arthur ')).toBe(1)
})

test('Test 8', () => {
  expect(countWords(' David')).toBe(1)
})

test('Test 9', () => {
  expect(countWords('Nelson ')).toBe(1)
})

test('Test 10', () => {
  expect(countWords('  Hello Gomer  ')).toBe(2)
})

test('Test 11', () => {
  expect(countWords('  Hello     Bart  ')).toBe(2)
})

test('Test 12', () => {
  expect(countWords('﻿Hello﻿World ')).toBe(2)
})

test('Test 13', () => {
  expect(countWords('Hello﻿World')).toBe(2)
})
