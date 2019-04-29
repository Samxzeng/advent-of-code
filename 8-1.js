const fs = require('fs')
const dataInput = fs.readFileSync('input8-1.txt', 'utf8').split(" ").map(Number)

function* getYield (){
    yield* dataInput
}
let input = getYield()
// to get the datainput as generator, to use further the next() function in generator and recurring


