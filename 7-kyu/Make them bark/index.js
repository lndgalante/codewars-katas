/*
  Title:
    Make them bark!

  Description:
    You have been hired by a dogbreeder to write a program to keep record of his dogs.

    You've already made a constructor Dog, so no one has to hardcode every puppy.

    The work seems to be done. It's high time to collect the payment.

    ..hold on! The dogbreeder says he wont pay you, until he can make every dog object .bark(). Even the ones already done with your constructor. "Every dog barks" he says. He also refuses to rewrite them, lazy as he is.

    You can't even count how much objects that bastard client of yours already made. He has a lot of dogs, and none of them can .bark().

    Can you solve this problem, or will you let this client outsmart you for good?

    Practical info:
      The .bark() method of a dog should return the string 'Woof!'.

      The contructor you made (it is preloaded) looks like this:
        function Dog(name, breed, sex, age){
            this.name  = name;
            this.breed = breed;
            this.sex   = sex;
            this.age   = age;
        }

  Notes:
    A friend of yours just told you about how javascript handles classes diferently from other programming languages.
    He couldn't stop ranting about "prototypes", or something like that. Maybe that could help you...

  Kata Link:
    https://www.codewars.com/kata/make-them-bark

  Discuss Link:
    https://www.codewars.com/kata/make-them-bark/discuss

  Solutions Link:
    https://www.codewars.com/kata/make-them-bark/solutions
*/

// Long Solution
function Dog(name, breed, sex, age) {
  this.name = name
  this.breed = breed
  this.sex = sex
  this.age = age
}

/*
Dog.prototype.bark = function() {
  return 'Woof!'
}
*/

// Short Solution
Dog.prototype.bark = () => 'Woof!'

// Function Export
module.exports = Dog
