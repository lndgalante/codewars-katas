/*
  Title:
    Training JS #22: Unlock new skills--Arrow function,spread operator and deconstruction

  Description:
    Next training (#23 Array Methods) >>
    Training JS #22:Unlock new skills--Arrow function,spread operator and deconstruction

    OK, my warriors! Now that you beat the big BOSS, you can unlock three new skills. (Does it sound like we're playing an RPG? ;-)
    #The Arrow Function (JS only)
    The first skill is the arrow function. Let's look at some examples to see how it works:
    #ignore this part, it is just for JS
    #ignore this part, it is just for JS
    //a normal function:
    function plus(a,b){
      return a+b;
    }
    //or we can write like this:
    var plus=function(a,b){
      return a+b;
    }
    //now, wo can use arrow function write it:
    var plus=(a,b)=>a+b;
             ~~~~~~~~~~  ------arrow function
    As you can see, its syntax is:
    #ignore this part, it is just for JS
    #ignore this part, it is just for JS
    (parameters) => {statement} or expression
    If only one parameter exists on the left side of the arrow, the bracket can be omitted. If only one expression exists on the right side of the arrow, the curly braces can also be omitted. The example below shows a function with the () and {} omitted.
    #ignore this part, it is just for JS
    #ignore this part, it is just for JS
    var add=x=>x+1;
    If the right side of the arrow is a complex statement, you must use curly braces:
    #ignore this part, it is just for JS
    #ignore this part, it is just for JS
    var pushElement=(arr,el1,el2)=>{
      arr.push(el1);
      arr.push(el2);
      return arr;
    }
    console.log( pushElement([1],2,3) );

    //output:
    [ 1, 2, 3 ]
    So far, our examples have used function assignment. However, an arrow function can also be used as a parameter to a function call, as well. When used as a parameter, the arrow function does not require a name. Let's rewrite the string.replace() example we saw from a previous training using our new skill:
    #ignore this part, it is just for JS
    #ignore this part, it is just for JS
    var str="abababab";
    console.log( str.replace(/a/g, x=>x.toUpperCase()) );

    //output:
    AbAbAbAb
    String.replace takes a regular expression and a function. The function is invoked on each substring matching the regex, and return the string replacement of that match. In this case, the arrow function takes the matched string as the parameter x, and returns the upper cased value of x.
    In the soon to learn the arrayObject and its methods, there are many applications on the arrow function, which is the reason we first learn the arrow function. The arrow function has more complex usage and usage restrictions, but we don't need to learn to be so deep, so we only learn the contents of the above.
    #The Spread Operator
    The second skill is the spread operator. The spread operator allows an expression to be expanded in places where multiple arguments (for function calls) or multiple elements (for array literals) are expected.
    It looks like this: ...obj. It can be used in three places:
    1.In function calls:
    def plus(a,b,c,d,e): return a+b+c+d+e

    arg1=[1,2,3,4,5]
    arg2=[2,3]
    print plus(...arg1) #output is 15
    print plus(...arg2) #output is 5
    def plus(a,b,c,d,e)
      return a+b+c+d+e
    end

    arg1=[1,2,3,4,5]
    arg2=[2,3]
    puts plus(...arg1) #output is 15
    puts plus(...arg2) #output is 5
    function plus(a,b,c,d,e){
      return a+b+c+d+e;
    }
    var arg1=[1,2,3,4,5];
    var arg2=[2,3];
    console.log(plus(...arg1));
    console.log(plus(1,...arg2,4,5));

    //output:
    15
    15
    ...arg1 spreads all the elements in arg1 into individual parameters to plus().
    In Javascript, it's also possible to use the spread operator in the middle of a parameter list, as was done with ...arg2.
    2.Creating array literals (JS and Ruby):
    #ignore this part, it is just for JS and Ruby
    a=[1,2,3]
    b=[*a,4,5]
    puts b #output is [ 1, 2, 3, 4, 5 ]
    var a=[1,2,3]
    var b=[...a,4,5]
    console.log(b);

    //output:
    [ 1, 2, 3, 4, 5 ]
    ...a spreads out the array's elements, making them individual elements in b.
    3.Used for deconstruction. destructuring is also a new member of ES6. It is the third skill we learn in this training.
    First, let's look at a simple example of destructuring:
    a,b=[1,2] #or [a,b]=[1,2]
    print a #output is 1
    print b #output is 2
    a,b=[1,2]
    puts a #output is 1
    puts b #output is 2
    var [a,b]=[1,2];   //the old method is var a=1,b=2;
    console.log(a);
    console.log(b);

    //output:
    1
    2
    Destructuring allows us to assign variables in a sentence-like form. Here's a slightly more complicated example:
    a,b=[1,2] #or [a,b]=[1,2]
    #old way to swap them:
    #c=a; a=b; c=b
    b,a=[a,b] #or [b,a]=[a,b]
    print a #output is 2
    print b #output is 1
    a,b=[1,2]
    #old way to swap them:
    #c=a; a=b; c=b
    b,a=[a,b]
    puts a #output is 2
    puts b #output is 1
    var [a,b]=[1,2]
    //Exchange the values of the two variables
    //classic method:
    var c=a;    //defined c to help us
    a=b;
    b=c;
    //deconstruction method:
    var [a,b]=[1,2];
    [b,a]=[a,b];
    console.log(a);
    console.log(b);

    //output:
    2
    1
    With destructuring, we don't need a temporary variable to help us exchange the two values.
    You can use the spread operator for destructuring like this:
    #ignore this part, it is just for JS
    #ignore this part, it is just for JS
    var [a,...b]=[1,2,3,4,5];
    console.log(a);
    console.log(b);

    //output:
    1
    [ 2, 3, 4, 5 ]
    Please note: the spread operator must  be the last variable: [...a,b]=[1,2,3,4,5] does not work.
    a was assigned to the first element of the array, andbwas initialized with the remaining elements in the array.
    Javascript note: If you see an ellipse ... in the argument list in a function declaration, it is not a spread operator, it is a structure called rest parameters. The rest parameter syntax allows us to represent an indefinite number of arguments as an array, like this:
    def plus(*num):
      rs=0
      for x in num: rs+=x
      return rs
    print plus(1,2) #output is 3
    print plus(3,4,5) #output is 12
    def plus(*num)
      rs=0
      for x in num: rs+=x
      return rs
    end
    puts plus(1,2) #output is 3
    puts plus(3,4,5) #output is 12
    function plus(...num){
      var rs=0
      for (x of num) rs+=x;
      return rs;
    }
    console.log(plus(1,2));
    console.log(plus(3,4,5));

    //output:
    3
    12
    The rest paramater must be the last argument in the function definition argument list.
    In the next example, we use a rest parameter to collect all the values passed to mul() after the first into an array. We then multiply each of them by the first parameter and return that array:
    def mul(a,*b):
      b=list(b) #default type would be tuple
      for i in xrange(len(b)): b[i]*=a
      return b
    print mul(2,1,1,1) #output is [2,2,2]
    print mul(2,1,2,3,4) #output is [2,4,6,8]
    def mul(a,*b)
      for i in (0...b.length) do b[i]*=a end
      return b
    end
    puts mul(2,1,1,1) #output is [2,2,2]
    puts mul(2,1,2,3,4) #output is [2,4,6,8]
    function mul(a,...b){
      for (var i=0;i<b.length;i++) b[i]*=a;
      return b;
    }
    console.log(mul(2,1,1,1));
    console.log(mul(2,1,2,3,4));

    //output:
    [2,2,2]
    [2,4,6,8]
    Ok, the lesson is over. Did you get it all? Let's do a task, now.

    #Task
    Create a function ```shuffleIt```. The function accepts two or more parameters.
    The first parameter arr is an array of numbers, followed by an arbitrary number of numeric arrays.
    Each numeric array contains two numbers, which are indices for elements in arr (the numbers will always be within bounds).For every such array, swap the elements. Try to use all your new skills: arrow functions, the spread operator, destructuring, and rest parameters.

  Examples:
    shuffleIt([1,2,3,4,5],[1,2]) should return [1,3,2,4,5]
    shuffleIt([1,2,3,4,5],[1,2],[3,4]) should return [1,3,2,5,4]
    shuffleIt([1,2,3,4,5],[1,2],[3,4],[2,3]) should return [1,3,5,2,4]

  Kata Link:
    https://www.codewars.com/kata/training-js-number-22-unlock-new-skills-arrow-function-spread-operator-and-deconstruction

  Discuss Link:
    https://www.codewars.com/kata/training-js-number-22-unlock-new-skills-arrow-function-spread-operator-and-deconstruction/discuss

  Solutions Link:
    https://www.codewars.com/kata/training-js-number-22-unlock-new-skills-arrow-function-spread-operator-and-deconstruction/solutions
*/

// Long Solution
const shuffleIt = (arr, ...swaps) => {
  const newArr = [...arr]

  swaps.forEach(([firstIndex, secondIndex]) => {
    const [firstNumber, secondNumber] = [newArr[firstIndex], newArr[secondIndex]]
    ;[newArr[firstIndex], newArr[secondIndex]] = [secondNumber, firstNumber]
  })

  return newArr
}

// Function Export
module.exports = shuffleIt
