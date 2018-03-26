/*
  Title:
    Training JS #21: Methods of String object--trim() and the string template

  Description:
    This is the last lesson about the string object, we will learn the two knowledge used to format the string.

    The first is a simple method: trim(). Usage is very simple:

    stringObject.trim()
    Its role is very simple too: remove the whitespace at the edge of the string. example:

    var str = "             abc                ";
    console.log(str.trim());
    str="\n\n\n\nabc\t\t\t"
    console.log(str.trim());
    //output:
    abc
    abc
    Various non visible characters such as space tab are called whitespace. more detailed information please refer to:whitespace

    trim() only remove whitespace at edge of string, whitespace in the middle of the string will not be removed.

    var str="  a b c  ";
    console.log(str.trim());

    //output:
    a b c
    Next we will learn a new member of the ES6: string template, We look at the following code:

    var s1="My name is John.";
    var s2='My name is John.';
    var s3=`My name is John.`;
    Are their values equal? Yes, they are equal. Do you see the difference in s2 and s3? Bingo! single quotes ' and backtick ` are different. Of course, this is not the biggest difference between them. Using double quotes " or single quotes ', we get a fixed string value. Use the backtick ` , we are defining a string template.

    We can use ${variable} insert a variable into string template. like this:

    var a=1,b=2;
    console.log(`${a} + ${b} = ${a+b}`);

    //output:
    1 + 2 = 3
    Or we can write this:

    function plus(a,b){
      console.log(`${a} + ${b} = ${a+b}`);
    }
    plus(1,2);
    plus(3,4);

    //output:
    1 + 2 = 3
    3 + 4 = 7
    Isn't it interesting? There are more interesting things to happen. When the string template appears in the back of a function, It will be used as a parameter. Look at the following example:

    function repeatIt(s){
      console.log(`${s} ${s} ${s}`);
    }
    repeatIt `a`;
    repeatIt `ab`;

    //output:
    a a a
    ab ab ab
    Ok, lesson is over. let's us do some task.

    #Task
    Coding in function ```fiveLine```, function accept 1 parameter:```s```. ```s``` is a string.

    Please return a string of 5 lines(newline symbol is ```\n```). The first line has one s; Second line have two s; and so on..Fifth line have five s;

    Note1: The two sides of the parameter ```s``` may contain some whitespace, please clear them before using ```s```.

    Note2: Using a string template can make your job easier.

    Example:
    ```
    fiveLine("  a") should return "a\naa\naaa\naaaa\naaaaa"
    a
    aa
    aaa
    aaaa
    aaaaa       <---The effect when you console.log it
    fiveLine("  xy ")
    should return "xy\nxyxy\nxyxyxy\nxyxyxyxy\nxyxyxyxyxy"
    xy
    xyxy
    xyxyxy
    xyxyxyxy
    xyxyxyxyxy  <---The effect when you console.log it
    ```

  Kata Link:
    https://www.codewars.com/kata/training-js-number-21-methods-of-string-object-trim-and-the-string-template

  Discuss Link:
    https://www.codewars.com/kata/training-js-number-21-methods-of-string-object-trim-and-the-string-template/discuss

  Solutions Link:
    https://www.codewars.com/kata/training-js-number-21-methods-of-string-object-trim-and-the-string-template/solutions
*/

// Long Solution
const fiveLine = s => {
  const sWithoutWhitespace = s.trim()
  let result = ''

  for (let i = 1; i <= 5; i++) {
    if (i === 5) {
      result += `${sWithoutWhitespace.repeat(i)}`
      break
    }
    result += `${sWithoutWhitespace.repeat(i)}\n`
  }

  return result
}

// Function Export
module.exports = fiveLine
