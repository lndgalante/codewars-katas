/* eslint no-prototype-builtins: 0 */

/*
  Title:
    Training JS #12: loop statement --for..in and for..of

  Description:
    In lesson #11, we learned that for loop can traverse the array.
    If we want to traverse an object, we can use the variant of the for: for..in, it can traverse all the keys of the object. an example:

    function showObjectKeys(obj){
      for (var key in obj){
        console.log(key);
      }
    }
    function showObjectValues(obj){
      for (var key in obj){
        console.log(obj[key]);
      }
    }
    var ob={item1:"This",item2:"is",item3:"an",item4:"example"};
    console.log("keys of ob:")
    showObjectKeys(ob);
    console.log("values of ob:")
    showObjectValues(ob);
    Code results:

    keys of ob:
    item1
    item2
    item3
    item4
    values of ob:
    This
    is
    an
    example
    for..in can also be used in arrays, at this time the array is treated as an object. Modify the code above, we can see:

    function showObjectKeys(obj){
      for (var key in obj){
        console.log(key);
      }
    }
    function showObjectValues(obj){
      for (var key in obj){
        console.log(obj[key]);
      }
    }
    var arr=["one","two","three"];
    console.log("keys of arr:")
    showObjectKeys(arr);
    console.log("values of arr:")
    showObjectValues(arr);
    Code results:

    keys of arr:
    0
    1
    2
    values of arr:
    one
    two
    three
    We can see, keys is the index of the array elements. Need attention: When using for..in with an array, key(index) is always a string, not a number. In the example above, keys is "0", "1" and "2", we can't see the quotes because console.log() doesn't show it.

    Although for..in can traverse the array, but we do not recommend the use of it. Because it has a flaw, in some cases, it may not be in accordance with the order of the array elements to traverse the array. So we recommend you use another variant:for..of(New member of ES6), it can traverse all the values of the array, if you don't care about its index. In the example above, function showObjectValues() can be modified like this:

    function showArrayValues(arr){
      for (var value of arr){
        console.log(value);
      }
    }
    Ok, lesson is over, let's us do some task with for..in.

    #Task
    Coding in function ```giveMeFive```, function accept 1 parameter:```obj```, it's an object.

    You need to the traverse the `obj`, if the length of the object key equals to 5, then push the key value to the array (you need to define the array by yourself, this time I won't help you). Additionally push the value to the array as well, if the length of the value is equal to 5.

    Return the ```five``` after works finished.

    You should use ```for..in``` in your code, otherwise, your solution may not pass this kata. Don't learn bad habits from those lazy guys ;-)

  Kata Link:
    https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of

  Discuss Link:
    https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/discuss

  Solutions Link:
    https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/solutions
*/

// Long Solution
const giveMeFive = obj => {
  const result = []

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (key.length === 5) result.push(key)
      if (obj[key].length === 5) result.push(obj[key])
    }
  }

  return result
}

// Short Solution
/*
const giveMeFive = obj =>
  Object.entries(obj)
    .reduce((arr, value) => arr.concat(value), [])
    .filter(word => word.length >= 5)
*/

// Function Export
module.exports = giveMeFive
