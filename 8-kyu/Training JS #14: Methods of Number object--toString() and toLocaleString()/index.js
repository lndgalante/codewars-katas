/*
  Title:
    Training JS #14: Methods of Number object--toString() and toLocaleString()

  Description:
    This time we learn about two useful methods of Number objects: toString() and toLocaleString(). the basic usage of the two methods is to convert a number into a string. look at this:

    var num=111;
    var a=num.toString(),
        b=num.toLocaleString(),
        c=num+""
    console.log([a,b,c])   //put them to an array, we can see the quotes
    //output: [ '111', '111', '111' ]
    We can see, if you just want to translate a number into a string representation, in the general case the results obtained in these ways is the same. I love to use the last one, cause I'm lazy ;-)

    But these two methods have other uses as well.

    When used toLocaleString() converted a number to a string. the results obtained are in the order of the local numeric format(I don't have this experience. it is always the same as toString() in my here).

    And toString() of Number object has a more special usage: According to the base output different strings.

    NumberObject.toString(radix)
    radix is optional parameter. if ignored it, the output will be the default decimal. If not, like this:

    var num=111;
    var a=num.toString(2),
        b=num.toString(8),
        c=num.toString(16),
    console.log([a,b,c])
    //output: [ '1101111', '157', '6f' ]
    They are converted to binary, octal and hexadecimal.

    Ok, lesson is over. let's us do some task with Number .toString().

    #Task
    Coding in function ```colorOf```. function accept 3 parameter:```r``` ```g``` ```b```. It means value of color red green and blue. the value range is 0-255.

    Use ```toString(16)``` Convert numbers r g b to hex string form. at last, combine them to a web color code and return it.

    the color code should starting with "#". and then use 2 characters per color.

    for example:

    ```
    colorOf(255,0,0) should return "#ff0000"
    colorOf(0,111,0) should return "#006f00"
    colorOf(1, 2 ,3) should return "#010203"

    ```

    That's all of your work. My work is print your color code on your screen.

  Kata Link:
    https://www.codewars.com/kata/training-js-number-14-methods-of-number-object-tostring-and-tolocalestring

  Discuss Link:
    https://www.codewars.com/kata/training-js-number-14-methods-of-number-object-tostring-and-tolocalestring/discuss

  Solutions Link:
    https://www.codewars.com/kata/training-js-number-14-methods-of-number-object-tostring-and-tolocalestring/solutions
*/

// Long Solution
const hex = integer => `${integer < 16 ? '0' : ''}${integer.toString(16)}`

const colorOf = (r, g, b) => `#${hex(r)}${hex(g)}${hex(b)}`

// Function Export
module.exports = colorOf
