/*
  Title:
    Logical calculator

  Description:
    Your task is to calculate logical value of boolean array.
    Test arrays are one-dimensional and their size is in the range 1-50.

    Links referring to logical operations: AND, OR and XOR.

    You should begin at the first value, and repeatedly apply the logical operation across the remaining elements in the array sequentially.

  Examples:
    First Example:
      Input:
        true, true, false, operator: AND

      Steps:
        true AND true -> true, true AND false -> false

      Output:
        false

    Second Example:
      Input:
        true, true, false, operator: OR

      Steps:
        true OR true -> true, true OR false -> true

      Output:
        true

    Third Example:
      Input:
        true, true, false, operator: XOR

      Steps:
        true XOR true -> false, false XOR false -> false

      Output:
        false

    Input:
      boolean array, string with operator' s name: 'AND', 'OR', 'XOR'.

    Output:
      calculated boolean

  Kata Link:
    https://www.codewars.com/kata/logical-calculator

  Discuss Link:
    https://www.codewars.com/kata/logical-calculator/discuss

  Solutions Link:
    https://www.codewars.com/kata/logical-calculator/solutions
*/

// Long Solution
/*
const getOperator = operator => {
  switch (operator) {
    case 'AND':
      return '&&'
    case 'OR':
      return '||'
    case 'XOR':
      return '!=='
    default:
      return ''
  }
}

const logicalCalc = (array, op) =>
  eval(
    array.reduce((exp, bool, index) => {
      const operator = getOperator(op)

      if (index === 0) return `${exp} ${bool}`
      return `${exp} ${operator} ${bool}`
    }, '')
  )
*/

// Short Solution
const operations = {
  AND: (a, b) => a && b,
  OR: (a, b) => a || b,
  XOR: (a, b) => a !== b,
}

const logicalCalc = (array, op) => array.reduce(operations[op])

// Function Export
module.exports = logicalCalc
