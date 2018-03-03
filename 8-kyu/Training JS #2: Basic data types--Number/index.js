/*
  Title:
    Training JS #2: Basic data types--Number

  Description:
    In javascript, Number is one of basic data types. It can be positive: 1,2,3, negative:-1,-100 , integer:123,456, decimal:3.1415926,-8.88 etc..

    Numbers can use operators such as + - * / %

    #Task
    I've written five function ```equal1,equal2,equal3,equal4,equal5```, defines six global variables ```v1 v2 v3 v4 v5 v6```, every function has two local variables ```a,b```, please set the appropriate value for the two variables(select from v1--v6), making these function return value equal to 100. the function equal1 is completed, please refer to this example  to complete the following functions.

  Examples:

  Notes:

  Kata Link:
    https://www.codewars.com/kata/training-js-number-2-basic-data-types-number

  Discuss Link:
    https://www.codewars.com/kata/training-js-number-2-basic-data-types-number/discuss

  Solutions Link:
    https://www.codewars.com/kata/training-js-number-2-basic-data-types-number/solutions
*/

// Long Solution
let v1 = 50
let v2 = 100
let v3 = 150
let v4 = 200
let v5 = 2
let v6 = 250

const equal1 = () => v1 + v1
const equal2 = () => v4 - v2
const equal3 = () => v1 * v5
const equal4 = () => v4 / v5
const equal5 = () => v6 % v3

// Function Export
module.exports = {
  v1,
  v2,
  v3,
  v4,
  v5,
  v6,
  equal1,
  equal2,
  equal3,
  equal4,
  equal5,
}
