/*
  Title:
    Training JS #1: create your first JS function and print "Helloworld!"

  Description:
    In javascript, your code is running in a function, let us step by step complete your first JS function.

    Look at this example:

          --------keyword "function"
          |       ----your function name
          |       |    ---if needed, some arguments will appear in brackets
          |       |    |
        function myfunc(){  ---------your function code will starting with "{"
          //you should type your code here
        }----------------------------ending with "}"
    If we want to print some to the screen, maybe we can use Document.write() in the web, or use alert() pop your message, but Codewars did not support these methods, we should use console.log() in your function. see this example:

    function printWordToScreen(){
      var somewords="This is an example."
      console.log(somewords)
    }
    If we run this function, This is an example. will be seen on the screen. As you see, console.log() is an useful method help your work, you will become more and more like it.

    Task
    Please refer to two example above and write your first JS function.

    mission 1:

    use keyword function to define your function, function name should be helloWorld(don't forget the () and {})

    mission 2:

    use keyword var to define a variable str, value of str should be a string: "Hello World!"(don't forget the =).

    mission 3:

    type the console.log() in the next line(don't forget to put the str in the brackets).

  Kata Link:
    https://www.codewars.com/kata/training-js-number-1-create-your-first-js-function-and-print-helloworld

  Discuss Link:
    https://www.codewars.com/kata/training-js-number-1-create-your-first-js-function-and-print-helloworld/discuss

  Solutions Link:
    https://www.codewars.com/kata/training-js-number-1-create-your-first-js-function-and-print-helloworld/solutions
*/

// Long Solution
/*
function helloWorld() {
  const str = 'Hello World!'
  console.log(str)
}
*/

// Short Solution
const helloWorld = (str = 'Hello World!') => console.log(str)

// Function Export
module.exports = helloWorld
