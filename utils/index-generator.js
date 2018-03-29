const { appendFile, readdirSync } = require('fs')

const url = 'https://github.com/lndgalante/codewars-katas/tree/master/8-kyu/'

const markdown = source =>
  readdirSync(source)
    .sort((a, b) => a.localeCompare(b))
    .map(name => `* [${name}](${url}${encodeURIComponent(name)})`)
    .join('\n\n')

const eightKyuIndex = markdown('../8-kyu')

appendFile('index.md', eightKyuIndex, err => {
  if (err) throw err
  console.log('Index generated')
})
