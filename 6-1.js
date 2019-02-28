
const fs = require('fs')
const dataInput = fs.readFileSync('input6-1.txt', 'utf8').split(/\r\n/gm)
console.log(dataInput)
console.log(typeof dataInput)

//has to find the most outer book by seeing all 5 pairs and get the outer number, then see each of inside belongs to which on \
// use 2 layer of for loop to get every point close to which one 