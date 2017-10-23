function closestFriends(histories) {
  const result = []

  const topTotalCallTime = histories
    .map(history => {
      const historySeparated = history.split(' ')
      return {
        cellphone: `${historySeparated[0]} ${historySeparated[1]}`,
        totalTime: historySeparated[2],
      }
    })
    .sort((prev, act) => prev.totalTime < act.totalTime)
    .splice(0, 3)

  console.log(topTotalCallTime)

  topTotalCallTime.forEach(top => {
    for (var name in phonebook) {
      if (phonebook[name] === top.cellphone) result.push(name)
    }
  })

  console.log(result)

  return result
}

var h1 = [
  '(110) 012-5135 01:11:20',
  '(141) 011-6123 00:36:46',
  '(424) 009-3030 01:05:32',
  '(141) 012-6691 01:06:12',
  '(127) 042-3341 01:59:47',
  '(127) 018-6512 00:32:26',
  '(424) 017-4123 01:16:58',
]

var h2 = [
  '(123) 013-7743 00:49:47',
  '(442) 130-5165',
  '(110) 012-5135 00:16:54',
  '(161) 022-7510 00:16:24',
  '(127) 011-6751 01:01:53',
  '(424) 012-2013 01:46:29',
  '(123) 013-7743 00:59:13',
  '(127) 042-3341 04:32:45',
]

var h3 = [
  '(442) 130-5165',
  '(110) 012-5135 00:44:20',
  '(333) 010-5135',
  '(127) 018-6512 01:59:58',
  '(127) 011-6751 00:05:05',
  '(210) 013-1040 01:07:19',
  '(424) 012-2013 01:30:37',
]

console.log(closestFriends(h1)) // => It should return ['Betty', 'Shane', 'Michael']
console.log(closestFriends(h2)) // => It should return ['Betty', 'Ray', 'Rob']
console.log(closestFriends(h3)) // => It should return ['Jack', 'Rob', 'Rudolf']
