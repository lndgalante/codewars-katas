/* eslint no-unused-vars: 0 */

/*
  Title:
    Training JS #3: Basic data types--String

  Description:
    In javascript, String is one of basic data types. Use "" or '' to declare a string variable. It can be letters:a,b,c,A,B,C, numbers: 123..., Various symbol:@#$%^&* , Control symbol:\n,\t etc..

    String can use operators +, Connect two or more strings together.

    misson 1:
    I've create three function, and defined some global variables, please select some variables that can make up the name of the function, and return them(Please note the uppercase and lowercase letters are different).

    When you have finished the work, click "Run Tests" to see if your code is working properly.

    misson 2:
    After misson 1 finished. you should click "Submit" to see my three questions, and write the answer in function ```answer1, answer2,answer3```

    If everything is right, click "Submit" again to submit your code pass this kata.

  Kata Link:
    https://www.codewars.com/kata/training-js-number-3-basic-data-types-string

  Discuss Link:
    https://www.codewars.com/kata/training-js-number-3-basic-data-types-string/discuss

  Solutions Link:
    https://www.codewars.com/kata/training-js-number-3-basic-data-types-string/solutions
*/

// Long Solution
const a1 = 'A'
const a2 = 'a'
const b1 = 'B'
const b2 = 'b'
const c1 = 'C'
const c2 = 'c'
const d1 = 'D'
const d2 = 'd'
const e1 = 'E'
const e2 = 'e'
const n1 = 'N'
const n2 = 'n'

const dad = () => `${d1}${a2}${d2}`
const bee = () => `${b1}${e2}${e2}`
const banana = () => `${b2}${a2}${n2}${a2}${n2}${a2}`

const answer1 = () => 'no'
const answer2 = () => 'no'
const answer3 = () => 'yes'

// Function Export
module.exports = { dad, bee, banana }
