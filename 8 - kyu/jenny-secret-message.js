/* 
  Title:
    Jenny's secret message

  Description:
    Jenny has written a function that returns a greeting for a user.
    However, she's in love with Johnny, and would like to greet him slightly different. 
    She added a special case to her function, but she made a mistake.

    Can you help her?

  Link:
    https://www.codewars.com/kata/jennys-secret-message
*/

// Long Solution
function greet(name) {
  if (name === 'Johnny') return 'Hello, my love!'
  return 'Hello, ' + name + '!'
}

// Short Solution
const greet = name =>
  name === 'Johnny' ? 'Hello, my love!' : `Hello, ${name}!`

// Test to pass
console.log(greet('Jim'))
// => It should return 'Hello, Jim!'
console.log(greet('Jane'))
// => It should return 'Hello, Jane!'
console.log(greet('Simon'))
// => It should return 'Hello, Simon!'
