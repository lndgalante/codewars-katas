/* eslint no-use-extend-native/no-use-extend-native: 0 */
/* eslint no-extend-native: 0 */

/*
  Title:
    Do something "n.times" (Simplifying "for" loops)

  Description:
    In computer programming, we have a very basic but key principle called the DRY principle. DRY stands for "Don't Repeat Yourself" which basically means that if you have multiple identical (or very similar) blocks of code you should probably simplify it. This is very important because it usually makes the code more readable and understandable to fellow developers and because it always improves performance.

    For example, if we wanted to print "Hello World" to the console 100 times, we could write something like this:

    // UGH!  Disgusting!
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    However, the problem is, the code is barely readable and looks very ugly. How many times exactly is the string "Hello World" printed to the console? Maybe it is only printed 99 times? Maybe 1000? Also, if there is an error in the statement/code (console.log), the same bug will have to be fixed 100 times and I doubt anyone would enjoy doing that.

    Luckily, in just about every modern high-level programming language, there exists a for loop that makes the code much more readable and DRY:

    // Much better :D
    for (var i = 0; i < 100; i++) {
      console.log("Hello World");
    }
    By executing the same action 100 times by using a single for loop instead of copying and pasting the same code 100 times, the code becomes much more readable and easy to debug. For example, if I misspelt "Hello World" I only need to fix it in one place to eliminate the bug as opposed to fixing it in every console.log statement.

    Task
    However, I myself find the for loop very complex and unreadable. Think about it - would you know what the for loop does if you've never learned computer programming? For example, if you've never coded before, would you have any idea what this thing in the for loop: i = 0; i < number; i++ means?

    Therefore, I would like you to define a method callable on integers, Number.prototype.times, that effectively replaces the for loop. It should work like this:

    // Prints "Hello World" to the console 100 times
    // Isn't this much more readable?  At least a non-programmer
    // knows that something is being executed 100 times!
    (100).times(_ => {
      console.log("Hello World");
    });
    Sometimes, we also want to loop through an array. For example, if we have an array example = [1,2,3,4], we could use our newly defined method to loop over the array like this:

    example.length.times(_ => {
      // Code to be executed
    });
    However, here lies the problem - since the function does not accept any arguments, how can we use this method to loop over every element in the array? Therefore, your Number.prototype.times method should supply the iteration variable i to the anonymous function being executed to support this feature of looping through every element in an array, like such:

    example.length.times(i => {
      console.log(example[i]);
    });
    /* Prints the following to the console:
    1
    2
    3
    4
    The iteration variable supplied to the anonymous function could also be used like this:

    (100).times(i => {
      console.log(i);
    });
    Prints all integers from 0 (inclusive) to 100 (exclusive)
    Task Summary
    In case you got lost, here's precisely what you have to do: define a method Number.prototype.times that accepts a function f as an argument and executes it as many times as the integer it is called on (e.g. (100).times would execute something 100 times). The iteration variable i should be supplied to the anonymous function being executed in order to support looping through array elements.

  Kata Link:
    https://www.codewars.com/kata/do-something-n-dot-times-simplifying-for-loops

  Discuss Link:
    https://www.codewars.com/kata/do-something-n-dot-times-simplifying-for-loops/discuss

  Solutions Link:
    https://www.codewars.com/kata/do-something-n-dot-times-simplifying-for-loops/solutions
*/

// Long Solution
Number.prototype.times = function(f) {
  for (let i = 0; i < this; i++) f(i)
}

// Function Export
module.exports = Number.prototype.times
