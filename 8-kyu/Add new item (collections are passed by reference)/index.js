/*
  Title:
    Add new item (collections are passed by reference)

  Description:
    Add an item to the list:

    AddExtra method adds a new item to the list and returns the list.
    The new item can be any object, and it does not matter. (lets say you add an integer value, like 13)

    In our test case we check to assure that the returned list has one more item than the input list.
    However the method needs some modification to pass this test.

    P.S. You have to create a new list and add a new item to that.
    This Kata is originally designed for C# language and it shows that adding a new item to the input list is not going to work,
    even though the parameter is passed by value, but the value is poining to the reference of list and any change on parameter will be seen by caller.

  Kata Link:
    https://www.codewars.com/kata/add-new-item-collections-are-passed-by-reference

  Discuss Link:
    https://www.codewars.com/kata/add-new-item-collections-are-passed-by-reference/discuss

  Solutions Link:
    https://www.codewars.com/kata/add-new-item-collections-are-passed-by-reference/solutions
*/

// Long Solution
const addExtra = listOfNumbers => [...listOfNumbers, 7]

// Function Export
module.exports = addExtra
