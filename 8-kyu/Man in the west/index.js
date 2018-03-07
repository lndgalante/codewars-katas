/*
  Title:
    Man in the west

  Description:
    A western man is trying to find gold in a river. To do that, he passes a bucket through the river's soil and then checks if it contains any gold.
    However, he could be more productive if he wrote an algorithm to do the job for him.

    So, you need to check if there is gold in the bucket, and if so, return True/true. If not, return False/false.

  Kata Link:
    https://www.codewars.com/kata/man-in-the-west

  Discuss Link:
    https://www.codewars.com/kata/man-in-the-west/discuss

  Solutions Link:
    https://www.codewars.com/kata/man-in-the-west/solutions
*/

// Long Solution
const checkTheBucket = bucket => bucket.includes('gold')

// Function Export
module.exports = checkTheBucket
