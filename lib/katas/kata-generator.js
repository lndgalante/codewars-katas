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
const ${exportName} = () => {}
*/

// Function Export
module.exports = ${exportName}
`
}

const generateIndexTest = ({ exportName, initialTests }) => {
  return `
const ${exportName} = require('.')

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
    const initialTests = [...tests]
      .map((line, index, array) => {
        if (index === array.length - 1) return null

        const test = line.textContent.trimLeft()

        if (test.includes('describe(') || test.includes('it(')) return null

        if (test.includes('assert(')) {
          const testCase = test.split('assert(')[1]
          const [fn, equal] = testCase.includes('),') ? testCase.split('),') : testCase.split(') ,')
          let matchFn = `toBe(${equal}`
          if (equal.includes('true')) matchFn = `toBeTrue()`
          if (equal.includes('false')) matchFn = `toBeFalse()`

          return `test('Test ${index}', () => {
          expect(${fn})).${matchFn}
        })\n`.trimLeft()
        }

        if (test.includes('assertEquals')) {
          const testCase = test.split('assertEquals(')[1]
          const [fn, equal] = testCase.includes('),') ? testCase.split('),') : testCase.split(') ,')
          let matchFn = `toBe(${equal}`
          if (equal.includes('true')) matchFn = `toBeTrue()`
          if (equal.includes('false')) matchFn = `toBeFalse()`

          return `test('Test ${index}', () => {
          expect(${fn})).${matchFn}
        })\n`.trimLeft()
        }

        if (test.includes('assertDeepEquals')) {
          const testCase = test.split('assertDeepEquals(')[1]
          const [fn, equal] = testCase.includes('),') ? testCase.split('),') : testCase.split(') ,')
          let matchFn = `toBe(${equal}`
          if (equal.includes('true')) matchFn = `toBeTrue()`
          if (equal.includes('false')) matchFn = `toBeFalse()`

          return `test('Test ${index}', () => {
          expect(${fn})).${matchFn}
        })\n`.trimLeft()
        }

        if (test.includes('assertSimilar')) {
          const testCase = test.split('assertSimilar(')[1]
          const [fn, equal] = testCase.includes('),') ? testCase.split('),') : testCase.split(') ,')
          const matchFn = `toEqual(${equal}`

          return `test('Test ${index + 1}', () => {
          expect(${fn})).${matchFn}
        })\n`.trimLeft()
        }

        return test
      })
      .filter(Boolean)
      .join('\n')

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
