/*
  Title:
    Basic subclasses - Adam and Eve

  Description:
    According to the creation myths of the Abrahamic religions, Adam and Eva were the first Humans to wander the earth.

    You have to do God’s job. The creation method must return an array of length 2 containing objects representing Adam and Eva.
    The first object in the array should be an instance of the class Man. The second should be an instance of the class Woman.
    Both objects have to be subclasses of Human. Your job is to implement the Human, Man and Woman classes.

  Kata Link:
    https://www.codewars.com/kata/basic-subclasses-adam-and-eve

  Discuss Link:
    https://www.codewars.com/kata/basic-subclasses-adam-and-eve/discuss

  Solutions Link:
    https://www.codewars.com/kata/basic-subclasses-adam-and-eve/solutions
*/

// Long Solution
class Human {}
class Man extends Human {}
class Woman extends Human {}

class God {
  static create() {
    const adan = new Man()
    const eva = new Woman()

    return [adan, eva]
  }
}

// Function Export
module.exports = { God, Man, Woman }
