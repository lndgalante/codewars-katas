const uniquePush = require('.')

test('Test 1', () => {
  const nameArray = []
  const bob = { name: 'bob', phoneNumber: 1234 }
  const joe = { name: 'joe', phoneNumber: 12345 }
  const dupeJoe = { name: 'I am duped', phoneNumber: 12345 }

  uniquePush(nameArray, bob)
  uniquePush(nameArray, joe)
  uniquePush(nameArray, dupeJoe)

  expect(nameArray).toEqual([{ name: 'bob', phoneNumber: 1234 }, { name: 'joe', phoneNumber: 12345 }])
})
