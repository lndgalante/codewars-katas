/*
  Title:
    Number climber

  Description:
    For every positive integer N, there exists a unique sequence starting with 1 and ending with N and such that every number in the sequence is either the double of the preceeding number or the double plus 1.

    For example, given N = 13, the sequence is [1, 3, 6, 13], because . . . :

    3 =  2*1 +1
    6 =  2*3
    13 = 2*6 +1

    Write a function that returns this sequence given a number N. Try generating the elements of the resulting list in ascending order, i.e., without resorting to a list reversal or prependig the elements to a list.

  Kata Link:
    https://www.codewars.com/kata/number-climber

  Discuss Link:
    https://www.codewars.com/kata/number-climber/discuss

  Solutions Link:
    https://www.codewars.com/kata/number-climber/solutions
*/

// Long Solution
const climb = n => {
  let number = n
  let output = []

  while (number >= 1) {
    output = [number, ...output]
    number = Math.floor(number / 2)
  }

  return output
}

// Short Solution
/*
const climb = n => (n === 1 ? [1] : climb((n / 2) | 0).concat([n]))
*/

// Function Export
module.exports = climb
