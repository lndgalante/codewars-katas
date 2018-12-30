const fs = require('fs')
const argv = require('yargs').argv
const puppeteer = require('puppeteer')

const generateIndex = ({ title, description, link, initialCode, exportName }) => {
  const [parsedLink] = link.split('/train/')

  return `
/*
  Title:
    ${title}

  Description:
${description}

  Examples:

  Notes:

  Kata Link:
    ${parsedLink}

  Discuss Link:
    ${parsedLink}/discuss

  Solutions Link:
    ${parsedLink}/solutions
*/

// Long Solution
${initialCode}

// Short Solution
/*
const solution = () => {}
*/

// Function Export
module.exports = ${exportName}
`
}

const generateIndexTest = ({ exportName, initialTests }) => {
  return `
const ${exportName} = require('.')

test('Test 1', () => {
  expect(${exportName}()).toBe('')
})

test('Test 2', () => {
  expect(${exportName}()).toBeTrue()
})

test('Test 3', () => {
  expect(${exportName}()).toEqual([])
})

${initialTests}
`
}

const main = async link => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  await page.goto(link)

  const data = await page.evaluate(() => {
    const kyu = document.querySelector('div.inner-small-hex.is-extra-wide').textContent
    const title = document.querySelector('h4.mbs.is-white-text').textContent
    const description = document.querySelector('div#description.markdown').textContent
    const code = document.querySelectorAll('div#code_container .CodeMirror-line')
    const tests = document.querySelectorAll('div#fixture_container .CodeMirror-line')

    const parsedTitle = title.replace('Loading Kata: ', '')
    const codeFirstLine = code[0].textContent
    const exportName = codeFirstLine.includes('function') ? codeFirstLine.split('function ')[1].split('(')[0] : 'fn'
    const parsedKyu = kyu.split(' ').join('-')
    const parsedDescription = description
      .split('\n')
      .map(line => line.padStart(line.length + 4))
      .join('\n')
    const initialCode = [...code].map(line => line.textContent).join('\n')
    const initialTests = [...tests].map(line => line.textContent.trimLeft()).join('\n')

    return {
      exportName,
      initialCode,
      initialTests,
      kyu: parsedKyu,
      title: parsedTitle,
      description: parsedDescription,
    }
  })

  const { title, kyu } = data
  const index = generateIndex({ ...data, link })
  const indexTest = generateIndexTest({ ...data })

  fs.promises
    .mkdir(`${kyu}/${title}`, { recursive: true })
    .then(() => {
      fs.promises.writeFile(`${kyu}/${title}/index.js`, index, 'utf8')
      fs.promises.writeFile(`${kyu}/${title}/index.test.js`, indexTest, 'utf8')
    })
    .then(() => console.log(`Kata created under ${kyu}/${title}`))
    .catch(error => console.log(error))

  await browser.close()
}

if (argv.link) main(argv.link)
if (!argv.link) console.log('Should include a link')
