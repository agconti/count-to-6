var inputs = process.argv.slice(2)
  , result = inputs.map(item => item[0])
                   .reduce((previousLetter, letter) => previousLetter.concat(letter))

console.log(`[${ inputs }] becomes "${ result }"`)                          