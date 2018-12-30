const { writeFile, readdirSync } = require('fs')

const indexGenerator = kyu => {
  const url = `https://github.com/lndgalante/codewars-katas/tree/master/${kyu}/`

  const markdown = source =>
    readdirSync(source)
      .sort((a, b) => a.localeCompare(b))
      .map((name, index) => {
        const bullet = index % 2 === 0 ? '*' : '-'
        return `${bullet} [${name}](${url}${encodeURIComponent(name)})`
      })
      .join('\n\n')

  const kyuIndex = markdown(`./${kyu}`)

  writeFile(`./lib/index/${kyu}.md`, kyuIndex, err => {
    if (err) throw err
    console.log(`${kyu.split('-').join(' ')} index generated`)
  })
}

const generateAllIndex = () => {
  const katas = ['8-kyu', '7-kyu', '6-kyu', '5-kyu']
  katas.forEach(kata => indexGenerator(kata))
}

generateAllIndex()
