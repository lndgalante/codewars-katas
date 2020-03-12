/*
  Title:
    Numbers in different systems

  Description:
    Translate number to the selected number system.
    If the number consists just of digits - return number, else - return string.

  Examples:
    SysNums(5,2) // 101
    SysNums(5,8) // 5
    SysNums(250,2) // 11111010
    SysNums(250,16) // "fa"#####Hint: System can be 2, 8, 10, 16.

  Kata Link:
    https://www.codewars.com/kata/588bb1195eb601f5d400001f

  Discuss Link:
    https://www.codewars.com/kata/588bb1195eb601f5d400001f/discuss

  Solutions Link:
    https://www.codewars.com/kata/588bb1195eb601f5d400001f/solutions
*/

// Long Solution
/*
const sysNums = (n, system) => {
  const translation = n.toString(system);
  return isNaN(translation) ? translation : Number(translation);
};
*/

// Short Solution
const sysNums = (number, system) => ((numberInSystem) => (isNaN(numberInSystem) ? numberInSystem : Number(numberInSystem)))(number.toString(system));

// Function Export
module.exports = sysNums;
