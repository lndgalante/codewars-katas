const { appendFile, readdirSync } = require('fs')

const indexGenerator = kyu => {
  const url = `https://github.com/lndgalante/codewars-katas/tree/master/${kyu}/`

  const markdown = source =>
    readdirSync(source)
      .sort((a, b) => a.localeCompare(b))
      .map(
        (name, index) =>
          `${index % 2 === 0 ? '*' : '-'} [${name}](${url}${encodeURIComponent(
            name
          )})`
      )
      .join('\n\n')

  const kyuIndex = markdown(`../${kyu}`)

  appendFile(`${kyu}.md`, kyuIndex, err => {
    if (err) throw err
    console.log('Index generated')
  })
}

indexGenerator('8-kyu')
