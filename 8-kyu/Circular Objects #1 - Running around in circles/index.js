/*
  Title:
    Circular Objects #1 - Running around in circles

  Description:
    A circular object is any object containing a property that refers to itself.
    An example of a circular object can be found right here at Codewars - the very programming environment that they provide you with.
    Just try it - print the details of the current programming environment to the console (I will not be giving you any hints - you'll have to figure this out yourself)
    and scroll through the printed text until you find a property named global. As you would expect, the printed output would say that it is [circular].
    Now let's try printing the global property of the programming envoronment to the console. What do you see?
    If you followed the instructions properly you would see the exact same thing being printed out! Impressed?
    You can test this further by then printing the global property of the global property of the current environment to the console and you would still see the exact same thing being printed.
    In fact, no matter how many levels you go "inside" the object, you would still see the exact same thing being printed out.

    Which leads us to the task described below ...

    Task
      Define a circular object circular such that the following are true:

      circular.value === "Hello World"
      circular === circular.self
      circular.self === circular.self.self
      ... and so on.

    Articles of Interest
      Unfortunately, in this Kata, any article I recommend to you would immediately give away the solution so I have decided to not recommend any articles in this Kata of the series. I apologise for any inconvenience caused.

  Notes:
    The code above is pseudocode. If you actually tested your circular object like this with equality or identity operators, it would not work as object literals do not have an intrinsic value.

  Kata Link:
    https://www.codewars.com/kata/circular-objects-number-1-running-around-in-circles

  Discuss Link:
    https://www.codewars.com/kata/circular-objects-number-1-running-around-in-circles/discuss

  Solutions Link:
    https://www.codewars.com/kata/circular-objects-number-1-running-around-in-circles/solutions
*/

// Long Solution
const circular = { value: 'Hello World' }

circular.self = circular
