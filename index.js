const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})
console.log('Hello this program reverses words type one (attention type .exit to exit or ctrl+c)')
const rev = () => {
  rl.question('> ', (word) => {
    if(word === '.exit') {
      rl.close()
    } else {
      let revWord = ''
      const arrWord = word.split('')
      arrWord.forEach((item, index) => {
        revWord += arrWord[arrWord.length - index - 1]
      })
      console.log(revWord)
      rev()
    }
  })
}

rev()

rl.on('close', () => {
  console.log('\n Bye Bye !!!')
  process.exit(0)
})
