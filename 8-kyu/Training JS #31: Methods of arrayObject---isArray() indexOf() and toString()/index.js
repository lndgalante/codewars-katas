/* eslint no-negated-condition: 0 */

/*
  Title:
    Training JS #31: Methods of arrayObject---isArray() indexOf() and toString()

  Description:
    This lesson we learn the last three methods: isArray() indexOf() and toString(). Each of these three methods have their own purpose and put them together just because this is the last lesson of arrayObject ;-)

    For more information, please refer to:

    Array.prototype.isArray()
    Array.prototype.indexOf()
    Array.prototype.toString()
    Here are some examples to help us understand the use of isArray() indexOf and toString():

    isarray() is a static method, its main-body can only be Array. it returns a Boolean value, which means that the parameter is an array or not. See example:

    var a=[1], b=1, c="1", d={1:1}, e=true;
    console.log(Array.isArray(a)); //true    a is an array
    console.log(Array.isArray(b)); //false   b is not an array
    console.log(Array.isArray(c)); //false   c is not an array
    console.log(Array.isArray(d)); //false   d is not an array
    console.log(Array.isArray(e)); //false   e is not an array
    It is often used to check the validity of the parameters. There are many other ways to determine the parameter type, and we will learn from the next lesson.

    We have seen indexOf() used for stringObject. The array object can also be used. its Usage is basically the same as the string object.

    It's usually used to determine whether an array contains an element or not. Its return value is the index of element. If there is no such element in the array, return -1. See example:

    var arr=[1,2,3,4,5];
    console.log(arr.indexOf(1));             //output: 0  arr[0]=1
    console.log(arr.indexOf(5));             //output: 4  arr[4]=5
    console.log(arr.indexOf(6));             //output: -1 no 6 in the array
    More examples please refer to #17: Methods of String object--indexOf(), lastIndexOf() and search()

    All objects in JS have toString() methods. Its function is to return a string representation of an object. Converting an object into a string, toString() is not the easiest way to do it. A lot of ways to do this:

    var arr=[1,2,3,4,5];
    console.log(arr.toString()); //1,2,3,4,5
    console.log(arr+"");         //1,2,3,4,5
    console.log(arr.join());     //1,2,3,4,5
    Sometimes the performance of toString()' is not satisfactory, JSON.stringify() provides us with a more powerful feature:

    var arr1=["1","2","3","4","5"];
    console.log(arr1.toString());       //1,2,3,4,5
    console.log(JSON.stringify(arr1));  //["1","2","3","4","5"]

    var arr2=[[1,2],[3,4],[5]];
    console.log(arr2.toString());       //1,2,3,4,5
    console.log(JSON.stringify(arr2));  //[[1,2],[3,4],[5]]
    Ok, lesson is over. let's us do some task.

    #Task
    Coding in function ```blackAndWhite```. function accept 1 parameter ```arr```(a number array).

    If ```arr``` is not an array, we should return:
    ```
    "It's a fake array"
    ```
    If ```arr``` contains elements 5 and 13, we should return:
    ```
    "It's a black array"
    ```

    If ```arr``` does not contain 5 or 13, we should return:
    ```
    "It's a white array"
    ```

    Some example:
    ```
    blackAndWhite(5,13) should return "It's a fake array"
    blackAndWhite([5,13]) should return "It's a black array"
    blackAndWhite([5,12]) should return "It's a white array"
    ```

    Using ```string template``` and ```ternary operator``` can make your work easier.

  Kata Link:
    https://www.codewars.com/kata/training-js-number-31-methods-of-arrayobject-isarray-indexof-and-tostring

  Discuss Link:
    https://www.codewars.com/kata/training-js-number-31-methods-of-arrayobject-isarray-indexof-and-tostring/discuss

  Solutions Link:
    https://www.codewars.com/kata/training-js-number-31-methods-of-arrayobject-isarray-indexof-and-tostring/solutions
*/

// Long Solution
const blackAndWhite = arr =>
  `It's a ${
    !Array.isArray(arr)
      ? 'fake'
      : arr.includes(5) && arr.includes(13)
        ? 'black'
        : !(arr.includes(5) && arr.includes(13)) ? 'white' : ''
  } array`

// Function Export
module.exports = blackAndWhite
