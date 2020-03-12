/*
  Title:
    uniquePush - No Dupes!

  Description:
    Write a function that will take an array and a person object as parameters. The function will only push a "person" object onto the end of an array if someone with that phone number doesn't already exist in that array.

    -A "person" is a javascript object with a name and a phoneNumber : {name:'SomeName', phoneNumber:1234567890}
    -A duplicate person object is an object with the same phoneNumber as someone else

    If the person object is unique, push them onto the end of the array, and return true.
    If the person object is NOT unique, don't push them to the array and return false;
    If the person doesn't have a phoneNumber, don't add them to the array and return false.

  Kata Link:
    https://www.codewars.com/kata/uniquepush-no-dupes

  Discuss Link:
    https://www.codewars.com/kata/uniquepush-no-dupes/discuss

  Solutions Link:
    https://www.codewars.com/kata/uniquepush-no-dupes/solutions
*/

// Long Solution
/*
const uniquePush = (arr, obj) =>
  obj.phoneNumber && !arr.map(({ phoneNumber }) => phoneNumber).includes(obj.phoneNumber) && arr.push(obj)
*/

// Short Solution
const uniquePush = (array, object) =>
  object.phoneNumber && !array.some(({ phoneNumber }) => phoneNumber === object.phoneNumber) && array.push(object)

// Function Export
module.exports = uniquePush
