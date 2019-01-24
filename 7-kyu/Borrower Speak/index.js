/*
  Title:
    Borrower Speak

  Description:
    The borrowers are tiny tiny fictional people. As tiny tiny people they have to be sure they aren't spotted, or more importantly, stepped on.
    As a result, the borrowers talk very very quietly. They find that capitals and punctuation of any sort lead them to raise their voices and put them in danger.
    The young borrowers have begged their parents to stop using caps and punctuation.
    Change the input text 's' to new borrower speak. Help save the next generation!

  Kata Link:
    https://www.codewars.com/kata/borrower-speak

  Discuss Link:
    https://www.codewars.com/kata/borrower-speak/discuss

  Solutions Link:
    https://www.codewars.com/kata/borrower-speak/solutions
*/

// Long Solution
/*
const borrow = s => s.replace(/\s|\W/g, '').toLowerCase()
*/

// Short Solution
const borrow = s => s.replace(/\W/g, '').toLowerCase()

// Function Export
module.exports = borrow
