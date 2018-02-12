/*
  Title:

  Description:
    The main mode is having a method named main inside a class and should return nothing but should print a line to the standard output with the message Hello World!.
    For Java the main method should receive String array as parameters that can be specified when running from console with the command.
    In many traditional programming languages can be only one main for a whole application since it denotes the application entry point.

    Solution.main("parameter1", "parameter2");

  Notes:
    Check your references
    Think about the scope of your method

  Kata Link:
    https://www.codewars.com/kata/classic-hello-world

  Discuss Link:
    https://www.codewars.com/kata/classic-hello-world/discuss

  Solutions Link:
    https://www.codewars.com/kata/classic-hello-world/solutions
*/

// Long Solution
class Solution {
  static main() {
    console.log('Hello World!')
  }
}

// Function Export
module.exports = Solution
