/* 
  Description ⚔️
    
*/

// Brute force
// const isPP = n => {
//   for (let k = 2; k < 1000; k++) {
//     const m = Math.pow(n, 1 / k)
//     if (Number.isInteger(m) && Math.pow(m, k) === n) return [m, k]
//   }

//   return null
// }

const isPP = n => {
  let current = 2
  let power = 2
  let max = Math.floor(n / 2)
  while (current <= max) {
    power = 2
    while (Math.pow(current, power) <= n) {
      if (n === Math.pow(current, power)) {
        return [current, power]
      } else {
        power++
      }
    }
    current++
  }
  return null
}

// Test to pass
console.log(isPP(125)) // => It should return [2,2] because "4 = 2^2"
