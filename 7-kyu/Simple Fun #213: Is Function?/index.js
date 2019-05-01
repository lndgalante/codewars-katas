/*
  Title:
    Simple Fun #213: Is Function?

  Description:
    Task
      In mathematics, a function is a relation between a set of inputs and a set of permissible outputs with the property that each input is related to exactly one output. In other words, for every x from the set of inputs there is exactly one element y from the set of outputs, such that the ordered pair (x, y) is contained in the set defining the function.
      You are given a set of pairs that defines something. Your task is to figure out whether this something can be a function or not.

    Input/Output
      [input] 2D float array pairs
      A non-empty set of pairs. Each pair is given as a two-element array, where the first element belongs to the set of inputs, and the second one belongs to the set of outputs.

      [output] a boolean value
      true if the given set can define a function and false otherwise.

  Examples:
     For pairs = [[0.5,1.5],[2.5,3.5]], the output should be true.
     For pairs = [[5,1],[2.5,3.4],[5,6],[7,2]], the output should be false.
     The given set can't possibly define a function, since values y = 1 and y = 6 both correspond to the value x = 5.

  Kata Link:
    https://www.codewars.com/kata/simple-fun-number-213-is-function

  Discuss Link:
    https://www.codewars.com/kata/simple-fun-number-213-is-function/discuss

  Solutions Link:
    https://www.codewars.com/kata/simple-fun-number-213-is-function/solutions
*/

// Long Solution
/*
const isFunction = pairs => {
  return !pairs.some(([x, y], index) => {
    return pairs.slice(index + 1).some(pair => pair[0] === x && pair[1] !== y)
  })
}
*/

// Short Solution
const isFunction = pairs => new Set(pairs.map(([x]) => x)).size === new Set(pairs.map(String)).size

// Function Export
module.exports = isFunction
