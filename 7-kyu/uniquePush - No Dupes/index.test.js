const uniquePush = require('.')

test('Test 1', () => {
  const nameArr = []
  const bob = { name: 'bob', phoneNumber: 1234 }
  const joe = { name: 'joe', phoneNumber: 12345 }
  const dupeJoe = { name: 'I am duped', phoneNumber: 12345 }

  uniquePush(nameArr, bob)
  uniquePush(nameArr, joe)
  uniquePush(nameArr, dupeJoe)

  expect(nameArr).toEqual([{ name: 'bob', phoneNumber: 1234 }, { name: 'joe', phoneNumber: 12345 }])
})
