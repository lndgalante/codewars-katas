/*
  Title:
    Training JS #9: loop statement --while and do..while

  Description:
    If you want your code to do a lot of similar work, a loop statement is a good choice.
    For example, if we need to calculate the cumulative value from 1 to 10, we can write code like this:

    function sum1_10(){
      return 1+2+3+4+5+6+7+8+9+10;
    }
    Wow~~,looks very cool! But if we need to calculate the cumulative value from 1 to 100, the code becomes:

    function sum1_100(){
      return 1+2+3+4+5+6+7+8+9+10+11+12+13+14+15+16+17+18+19+20+21+22+23+24+25
      +26+27+28+29+30+31+32+33+34+35+36+37+38+39+40+41+42+43+44+45+46+47+48+49+50
      +51+52+53+54+55+56+57+58+59+60+61+62+63+64+65+66+67+68+69+70+71+72+73+74+75
      +76+77+78+79+80+81+82+83+84+85+86+87+88+89+90+91+92+93+94+95+96+97+98+99+100;
    }
    Do you feel a bit tired? We can use a loop statement do it:

    function sum1_100(){
      var sum=0,num=1;    //Initialize two variables sum and num
      while (num<=100){   //Determine the expression in brackets, while true,
                          //run the code block one time, while false, break the loop
        sum=sum+num;      //Each time num will be added to the current value of sum
                          //It can be simplified as:  sum+=num
        num=num+1;        //Each time the value of num increases by 1
                          //It can be simplified as:  num++
      }
      return sum;         //return the final cumulative value
    }
    The do..while is a variant of while. The example above can be written like this:

    function sum1_100(){
      var sum=0,num=1;
      do{
        sum+=num;
        num++;
      }while (num<=100)
      return sum;
    }

    The difference is, while judges the condition before perform code execution, do..while judges the condition after code run one time.

    Finally, it is worth mentioning: Do not forget to change the value of the variable (for conditional expressions),
    otherwise it will turn into an infinite loop.

    Ok, lesson is over. Let us do some task with while.

    #Task
    Coding in function ```padIt```, function accept 2  parameters:

    1.```str```,  it's a string representing the string to pad, we need pad some ```"*"``` at leftside or rightside of ```str```

    2.```n```, it's a number, how many times to pad the string.
    Behaviour
    You need to write a loop statement within the function that loops n times. Each time through the loop it will add one * to str,
    alternating on which side it is padded: the first time will add a * to the left side of str, the second time will add a * to the right side, and so on.

    Finally, return the padded string.

  Kata Link:
    https://www.codewars.com/kata/training-js-number-9-loop-statement-while-and-do-dot-while

  Discuss Link:
    https://www.codewars.com/kata/training-js-number-9-loop-statement-while-and-do-dot-while/discuss

  Solutions Link:
    https://www.codewars.com/kata/training-js-number-9-loop-statement-while-and-do-dot-while/solutions
*/

// Long Solution
const padIt = (str, n) => {
  let result = str
  let i = 0

  while (i < n) {
    if (i % 2 === 0) {
      result = `*${result}`
    } else {
      result = `${result}*`
    }

    i += 1
  }

  return result
}

// Short Solution
/*
const padIt = (str, n) =>
  `${'*'.repeat(Math.ceil(n / 2))}${str}${'*'.repeat(Math.floor(n / 2))}`
*/

// Function Export
module.exports = padIt
