const formatPoem = require('.')

test('Test 1', () => {
  expect(
    formatPoem(
      'Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex. Complex is better than complicated.'
    )
  ).toBe(
    'Beautiful is better than ugly.\nExplicit is better than implicit.\nSimple is better than complex.\nComplex is better than complicated.'
  )
})

test('Test 2', () => {
  expect(
    formatPoem(
      "Flat is better than nested. Sparse is better than dense. Readability counts. Special cases aren’t special enough to break the rules."
    )
  ).toBe(
    "Flat is better than nested.\nSparse is better than dense.\nReadability counts.\nSpecial cases aren’t special enough to break the rules."
  )
})

test('Test 3', () => {
  expect(
    formatPoem(
      'Although practicality beats purity. Errors should never pass silently. Unless explicitly silenced. In the face of ambiguity, refuse the temptation to guess.'
    )
  ).toBe(
    'Although practicality beats purity.\nErrors should never pass silently.\nUnless explicitly silenced.\nIn the face of ambiguity, refuse the temptation to guess.'
  )
})

test('Test 4', () => {
  expect(
    formatPoem(
      "There should be one-- and preferably only one --obvious way to do it. Although that way may not be obvious at first unless you’re Dutch. Now is better than never. Although never is often better than *right* now."
    )
  ).toBe(
    "There should be one-- and preferably only one --obvious way to do it.\nAlthough that way may not be obvious at first unless you’re Dutch.\nNow is better than never.\nAlthough never is often better than *right* now."
  )
})

test('Test 5', () => {
  expect(
    formatPoem(
      "If the implementation is hard to explain, it’s a bad idea. If the implementation is easy to explain, it may be a good idea. Namespaces are one honking great idea -- let’s do more of those!"
    )
  ).toBe(
    "If the implementation is hard to explain, it’s a bad idea.\nIf the implementation is easy to explain, it may be a good idea.\nNamespaces are one honking great idea -- let’s do more of those!"
  )
})
