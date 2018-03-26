/*
  Title:
    Training JS #17: Methods of String object--indexOf(), lastIndexOf() and search()

  Description:
    This time we learn three methods to retrieve the string:indexOf() lastIndexOf() and search(). Their usage:

    StringObject.indexOf(searchvalue,fromindex)
    StringObject.lastIndexOf(searchvalue,fromindex)
    StringObject.search(searchvalue/regexp)
    indexOf() retrieves a string from the location of the fromindex to the right (If fromindex is omitted, began retrieval from index0).

    lastIndexOf() retrieves a string from the location of the fromindex to the left (If fromindex is omitted, began retrieval from last chars).

    Usage of search() is similar to indexOf(). It is characterized by the support of regular expressions, but it always returns the position of the first match from the left side(This means that it does not support the option "g" of regular expressions).

    Here we use some examples to illustrate their usage and difference:

    var str="Hello World!";
    console.log(str.indexOf("e"))
    console.log(str.lastIndexOf("e"))
    console.log(str.search("e"))
      //output:
      1
      1
      1

    We can see, str.indexOf("e") equals str.lastIndexOf("e"), because there is only one "e" in str. Look at the following example:

    var str="Hello World!";
    console.log(str.indexOf("o"))
    console.log(str.lastIndexOf("o"))
    console.log(str.search("o"))
      //output:
      4
      7
      4

    We can see, indexOf() returned 4 and lastIndexOf() returned 7. search() always returned the first "o". Look at the following example:

    var str="Hello World!";
    console.log(str.indexOf("o",5))
    console.log(str.lastIndexOf("o",5))
    console.log(str.search("o"))
      //output:
      7
      4
      4

    We can see, indexOf() returned 7, because it start retrieves from index 5 to the right; lastIndexOf() returned 4 because it start retrieves from index 5 to the left;. search() always returned the first "o". Look at the following example:

    var str="Hello World!";
    console.log(str.indexOf("world"))
    console.log(str.lastIndexOf("world"))
    console.log(str.search(/world/i))
    console.log(str.search(/word/i))

      //output:
      -1
      -1
      6
      -1

    From this example we can see that indexOf() and lastIndexOf() can not find "world" in str, because "World" and "world" are diffrent; search() uses a regular expression, the option i allows it to ignore the case(Regular expressions are powerful and complex, and we will learn it later). when the search string is not found, they always return -1;

    Ok, lesson is over. let's us do some task.

    #Task
    Coding in function ```firstToLast```, function accept 2 parameters:```str``` and ```c```. ```str``` is a string. ```c``` is a char.

    Please return the gap between the first position of ```c``` and the last position of ```c```.

    If there are a lot of ```c``` in the ```str```, should  return a positive integer; If there is only one ```c``` in ```str```, should return 0; If there is no ```c``` in the ```str```, should return -1. Retrieval should not ignored the case.

    for example:

    ```
      firstToLast("ababc","a") should return 2(2-0)
      firstToLast("ababc","c") should return 0(4-4)
      firstToLast("ababc","d") should return -1
    ```

  Kata Link:
    https://www.codewars.com/kata/training-js-number-17-methods-of-string-object-indexof-lastindexof-and-search

  Discuss Link:
    https://www.codewars.com/kata/training-js-number-17-methods-of-string-object-indexof-lastindexof-and-search/discuss

  Solutions Link:
    https://www.codewars.com/kata/training-js-number-17-methods-of-string-object-indexof-lastindexof-and-search/solutions
*/

// Long Solution
// const firstToLast = (str, c) => str.includes(c) ? str.lastIndexOf(c) - str.indexOf(c) : -1

// Short Solution
const firstToLast = (str, c) => str.lastIndexOf(c) - Math.max(0, str.indexOf(c))

// Function Export
module.exports = firstToLast
