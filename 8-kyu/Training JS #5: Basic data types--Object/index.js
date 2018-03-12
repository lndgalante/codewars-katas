/*
  Title:
    Training JS #5: Basic data types--Object

  Description:
    In javascript, Object is one of basic data types.
    Define an Object can use var obj=new Object() or var obj={}

    You can define the object attributes during initialization, like this:

    var animal = {name:"dog"}
    you can also set/get some properties after the object definition, like this:

    var animal = {}
    animal.name = "dog"  (or animal["name"] = "dog")

    #Task
    Give you a function ```animal```, accept 1 parameter:```obj```


  Examples:
    ```
    {name:"dog",legs:4,color:"white"}
    ```

    and return a string like this:

    ```
    "This white dog has 4 legs."
    ```

  Kata Link:
    https://www.codewars.com/kata/training-js-number-5-basic-data-types-object

  Discuss Link:
    https://www.codewars.com/kata/training-js-number-5-basic-data-types-object/discuss

  Solutions Link:
    https://www.codewars.com/kata/training-js-number-5-basic-data-types-object/solutions
*/

// Long Solution
const animal = ({ name, legs, color }) =>
  `This ${color} ${name} has ${legs} legs.`

// Function Export
module.exports = animal
