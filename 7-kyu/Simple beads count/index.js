/*
  Title:
    Simple beads count

  Description:
    Two red beads are placed between every two blue beads. There are N blue beads.
    After looking at the arrangement below work out the number of red beads.

    @ @@ @ @@ @ @@ @ @@ @ @@ @

    Implement count_red_beads(n) (in PHP count_red_beads($n);
    in Java, Javascript, C, C++ countRedBeads(n)) so that it returns the number of red beads.
    If there are less than 2 blue beads return 0.

  Kata Link:
    https://www.codewars.com/kata/simple-beads-count

  Discuss Link:
    https://www.codewars.com/kata/simple-beads-count/discuss

  Solutions Link:
    https://www.codewars.com/kata/simple-beads-count/solutions
*/

// Long Solution
/*
const countRedBeads = n => (n > 2 ? 2 * (n - 1) : 0)
*/

// Alternative Solution
const countRedBeads = n => Math.max(0, 2 * (n - 1))

// Function Export
module.exports = countRedBeads
