/*
  Title:
    The reject() function

  Description:
    Let's implement the reject()/Reject() function...

  Examples:
    var odds = reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
    => [1, 3, 5]

  Kata Link:
    https://www.codewars.com/kata/the-reject-function

  Discuss Link:
    https://www.codewars.com/kata/the-reject-function/discuss

  Solutions Link:
    https://www.codewars.com/kata/the-reject-function/solutions
*/

// Long Solution
/*
const reject = (array, iterator) => {
  const filtered = array.filter(iterator)
  return array.filter(el => !filtered.includes(el))
}
*/

// Short Solution
const reject = (array, iterator) => array.filter(element => !iterator(element))

// Function Export
module.exports = reject
