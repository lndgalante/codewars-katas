/*
  Title:
    Regular Ball Super Ball

  Description:
    Create a class Ball.

    Ball objects should accept one argument for "ball type" when instantiated.

    If no arguments are given, ball objects should instantiate with a "ball type" of "regular."

  Examples:
    ball1 = new Ball();
    ball2 = new Ball("super");

    ball1.ballType     //=> "regular"
    ball2.ballType     //=> "super"

  Kata Link:
    https://www.codewars.com/kata/regular-ball-super-ball

  Discuss Link:
    https://www.codewars.com/kata/regular-ball-super-ball/discuss

  Solutions Link:
    https://www.codewars.com/kata/regular-ball-super-ball/solutions
*/

// Long Solution
class Ball {
  constructor(ballType = 'regular') {
    this.ballType = ballType
  }
}

// Short Solution
/*
function Ball(ballType = 'regular') {
  this.ballType = ballType
}
*/

// Function Export
module.exports = Ball
