/*
  Title:
    Training JS #34: methods of Math---pow() sqrt() and cbrt()

  Description:
    In this lesson we learn three methods of Math: pow() sqrt() and cbrt(). Their usage is very simple: sqrt() returns the square root of a number; cbrt() returns the cube root of a number; pow() returns the base to the exponent power.

    Their definitions and detailed information:

    Math.pow()
    Math.sqrt()
    Math.cbrt()
    Here we use some examples to understand their usage:

    var arr1=[1,4,9];
    var sqroot=arr1.map(Math.sqrt);
    console.log(sqroot);            //output: [1,2,3]

    var arr2=[1,8,27];
    var cbroot=arr2.map(Math.cbrt);
    console.log(cbroot);            //output: [1,2,3]

    var arr3=[1,2,3];
    var pow2=arr3.map(x=>Math.pow(x,2));
    var pow3=arr3.map(x=>Math.pow(x,3));
    console.log(pow2);                  //output: [1,4,9]
    console.log(pow3);                  //output: [1,8,27]
    pow() can use a simplified form: ** operatorcan. See example:

    var n=2
    console.log(Math.pow(n,2));      //output: 4
    console.log(n*n);                //output: 4
    console.log(n**2);               //output: 4

    console.log(Math.pow(n,3));      //output: 8
    console.log(n*n*n);              //output: 8
    console.log(n**3);               //output: 8
    The second parameters of the pow() can be used as a fractional or decimal fraction, thus getting the same results as sqrt() and cbrt(). See example:

    var n=64;
    console.log(Math.sqrt(n));     //output: 8
    console.log(Math.pow(n,0.5));  //output: 8
    console.log(Math.pow(n,1/2));  //output: 8

    console.log(Math.cbrt(n));                      //output: 3.9999999999999996
    console.log(Math.pow(n,0.333333333333333333));  //output: 3.9999999999999996
    console.log(Math.pow(n,1/3));                   //output: 3.9999999999999996
    Look at the example above, what's the problem? Yes, the cube root of 64 should be 4, but we have not seen the 4, but see 3.9999999999999996. Due to the numerical precision of JS, the error will be produced in the calculation. This is a problem that can't be avoided. We should pay attention to this problem in use, look at the following example:

    function isCube(m,n){
      return Math.cbrt(m)==n;
    }
    console.log(isCube(27,3))               //output: true
    console.log(isCube(64,4))               //output: false
    console.log(isCube(125,5))               //output: false
    This function is used to verify whether n is the cube root of m. It is obvious that the result is wrong. We should verify like this:

    function isCube(m,n){
      return m==n**3;
      //or: return m==n*n*n
    }
    console.log(isCube(27,3))               //output: true
    console.log(isCube(64,4))               //output: true
    console.log(isCube(125,5))              //output: true
    This method can also be used to verify the number of squares. The following three methods are used to verify that the square root of a number is an integer:

    function intRoot1(n){
      return Number.isInteger(Math.sqrt(n));
    }
    function intRoot2(n){
      return Math.sqrt(n)%1==0;
    }
    function intRoot3(n){
      var x=Math.round(Math.sqrt(n));
      return x*x==n;
    }

    console.log(intRoot1(16))               //output: true
    console.log(intRoot2(16))               //output: true
    console.log(intRoot3(16))               //output: true
    The third method is the longest, but it is the most stable one.

    Ok, lesson is over. let's us do some task.

    #Task
    Coding in function ```cutCube```. function accept 2 parameter: ```volume``` and ```n```. ```volume``` is the volume of a cube. If we cut the cube into ```n``` block. please determine whether the length of the cube is an integer. return true or false.

    For exmaple:

    volume=27, it can be divided into 27 blocks, each small cube side length is 1
    ```
    cutCube(27,27) should return true
    ```
    volume=512, it can be divided into 8 blocks, each small cube side length is 4
    ```
    cutCube(512,8) should return true
    ```
    volume=512, it can be divided into 64 blocks, each small cube side length is 2
    ```
    cutCube(512,64) should return true
    ```
    If the side length of small cube is not a integer, should return false.
    ```
    cutCube(256,8) should return false
    cutCube(27,3) should return false
    cutCube(123,456) should return false
    ```
    If it can't be divided evenly into ```n``` small cubes, should return false too.
    ```
    cutCube(50000,50) should return false
    cutCube(256,4) should return false
    ```
    The two examples above seems to meet our requirements, but please note: a cube is unable to evenly divided into 50 pieces or 4 pieces. Only cubic numbers(such as 8,27,64,125,216...) can be used to divide the cube evenly.

  Kata Link:
    https://www.codewars.com/kata/training-js-number-34-methods-of-math-pow-sqrt-and-cbrt

  Discuss Link:
    https://www.codewars.com/kata/training-js-number-34-methods-of-math-pow-sqrt-and-cbrt/discuss

  Solutions Link:
    https://www.codewars.com/kata/training-js-number-34-methods-of-math-pow-sqrt-and-cbrt/solutions
*/

// Long Solution
const isIntegerCube = n => Number.isInteger(Math.cbrt(n))

const cutCube = (volume, n) => isIntegerCube(n) && isIntegerCube(volume / n)

// Function Export
module.exports = cutCube
