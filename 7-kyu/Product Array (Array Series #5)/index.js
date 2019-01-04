/*
  Title:
    Product Array (Array Series #5)

  Description:
    Introduction and Warm-up (Highly recommended)
    Playing With Lists/Arrays Series

    Task
    Given an array/list [] of integers ,
    Construct a product array Of same size Such That prod[i] is equal to The Product of all the elements of Arr[] except Arr[i].

  Examples:
    Input >> Output Examples
    1- productArray ({12,20}) ==>  return {20,12}

    Explanation:

    The first element  in prod [] array 12  is the product of all array's elements except the first element

    The second element 20  is the product of all array's elements except the second element .

    2- productArray ({1,5,2}) ==> return {10,2,5}

    Explanation:

    The first element  10 is the product of all array's elements except the first element 1

    The second element 2 is the product of all array's elements except the second element 5

    The Third element 5 is the product of all array's elements except the Third element 2.

    3- productArray ({10,3,5,6,2}) return ==> {180,600,360,300,900}

    Explanation:

    The first element 180  is the product of all array's elements except the first element  10

    The second element 600 is the product of all array's elements  except  the second element  3

    The Third element 360 is the product of all array's elements except the third element 5

    The Fourth element 300 is the product of all array's elements except the fourth element 6

    Finally ,The Fifth element 900 is the product of all array's elements except the fifth element 2

  Notes:
    - Array/list size is at least 2 .

    - Array/list's numbers  Will be only Postives

    - Repeatition of numbers in the array/list could occur.

  Kata Link:
    https://www.codewars.com/kata/product-array-array-series-number-5

  Discuss Link:
    https://www.codewars.com/kata/product-array-array-series-number-5/discuss

  Solutions Link:
    https://www.codewars.com/kata/product-array-array-series-number-5/solutions
*/

// Long Solution
/*
const productArray = numbers =>
  numbers.map((_, index, array) =>
    [...array.slice(0, index), ...array.slice(index + 1)].reduce((total, number) => total * number, 1)
  )
*/

// Short Solution
const productArray = numbers => {
  const sum = numbers.reduce((totalProduct, number) => totalProduct * number)
  return numbers.map(number => sum / number)
}

// Function Export
module.exports = productArray
