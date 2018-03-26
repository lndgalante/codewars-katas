/*
  Title:
    Training JS #15: Methods of Number object--toFixed(), toExponential() and toPrecision()

  Description:
    This time we learn about three useful methods of Number objects: toFixed(), toExponential() and toPrecision(). their purpose is to convert numbers into strings and the difference between them and toString() is:

    1. NumberObject.toFixed(n)
    toFixed() accepts 1 parameter n, returns a string representation of NumberObject. It does not use the exponential notation. after the decimal point has fixed n digit. If necessary, the number will be rounded or use "0" to make it reach the specified length. If number is greater than le+21, the method only calls NumberObject.toString() and returns a string that is represented by an exponential notation.

    2. NumberObject.toExponential(n)
    toExponential() accepts 1 parameter n, returns NumberObject string representation, using the exponential count method. that is, there is one digit before the decimal point and n digits after the decimal point. The decimal part of the number is rounded. when necessary, with 0 to make up the specified length.

    3. NumberObject.toPrecision(n)
    toPrecision(n) accepts 1 parameter n, returns a string representation of NumberObject, contains n valid numbers. If num is large enough To include all the integer part of the NumberObject, then the returned string will use point counting method. otherwise using the exponential counting method.

    Simple introduction is abstract, not easy to understand. Here we use examples to explain the difference between them:

    //example 1
    var num=111;
    var a=num.toFixed(),
        b=num.toExponential(),
        c=num.toPrecision()
    console.log([a,b,c])   //put them to an array, we can see the quotes
    //output: [ '111', '1.11e+2', '111' ]
    We can see, if the parameter n is omitted, a and c return a string with the number of original state; b is returned a string using the exponential counting method, the string contains the decimal maximum possible.

    //example 2
    var num=111.11;
    var a=num.toFixed(1),
        b=num.toExponential(1),
        c=num.toPrecision(1)
    console.log([a,b,c])
    //output: [ '111.1', '1.1e+2', '1e+2' ]
    We can see, a returns a string with 1 decimal places, using fixed point counting method; b returns a string with 1 integer and 1 decimal places, using the exponential count method; c also uses the exponential count method, but returns a string with 1 integer.

    //example 3
    var num=111.11;
    var a=num.toFixed(6),
        b=num.toExponential(6),
        c=num.toPrecision(6)
    console.log([a,b,c])
    //output: [ '111.110000', '1.111100e+2', '111.110' ]
    We can see, a returns a string with 6 decimal places(make up with "0"), using fixed point counting method; b returns a string with 1 integer and 6 decimal places(make up with "0"), using the exponential count method; c returns a string with 3 integer and 3 decimal places(make up with "0"), returns the integer and decimal numbers in the string to a total of 6 digits.

    In a word, parameter n of toFixed() and toExponential() are used for digital fractional parts; parameter n of toPrecision() is used for the entire number. We can choose to use them according to different needs.

    Sometimes, it's not our ultimate goal to use these methods to convert the number into a string. We need to use the value after the change. What should we do?

    We need to learn two (or three) very useful global methods:parseInt() and parseFloat(). They can help you get the string back into the number. see the example learn to use them:

    //example 4
    var num=111.1234;
    var s=num.toFixed(2)   //s=="111.12"
    var a=parseInt(s),
        b=parseFloat(s),
        c= +s
    console.log([a,b,c])
    //output: [ 111, 111.12, 111.12 ]
    We can see, use parseInt(s) can convert s to an integer; use parseFloat(s) can convert s to a decimal; The '+' is a simplified form of the parseFloat()(when it is used in front of a string).

    Ok, lesson is over. let's us do some task.

    #Task
    Coding in function ```howManySmaller```, function accept 2 parameter:```arr``` and ```n```. ```arr``` is a decimal array. ```n``` is a decimal.

    The first mission: let all elements in the array keep two decimal places(No need to convert number n).

    The second mission: Traversal arr, count the number of the element which smaller than n and return it.

    for example:

    ```
    howManySmaller([1.234,1.235,1.228],1.24) should return 2
    howManySmaller([1.1888,1.1868,1.1838],1.19) should return 1
    howManySmaller([3.1288,3.1212,3.1205],3.1212) should return 2
    ```

  Kata Link:
    https://www.codewars.com/kata/training-js-number-15-methods-of-number-object-tofixed-toexponential-and-toprecision

  Discuss Link:
    https://www.codewars.com/kata/training-js-number-15-methods-of-number-object-tofixed-toexponential-and-toprecision/discuss

  Solutions Link:
    https://www.codewars.com/kata/training-js-number-15-methods-of-number-object-tofixed-toexponential-and-toprecision/solutions
*/

// Long Solution
/*
const howManySmaller = (arr, n) =>
  arr.map(num => Number(num.toFixed(2))).filter(num => num < n).length
*/

// Short Solution
const howManySmaller = (arr, n) =>
  arr.filter(num => Number(num.toFixed(2)) < n).length

// Function Export
module.exports = howManySmaller
