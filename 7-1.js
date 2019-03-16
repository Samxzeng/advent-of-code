const fs = require('fs')
const dataInput = fs.readFileSync('input7-1.txt', 'utf8').split(/\r\n/gm)
console.log(dataInput)

function getToArray(){
    //transfer to array
}

function sortToCondition(){
    //use getToArray() to transfer
    //get each d:[a,b,c], then a,b,c is the prerequisite for d
}

//start with d:undefine
function giveAlpha(array){
    //return the alpha order of first one
}

function checkActivation(){
    //check with one is activated
}

function sortResult(data){
    const preObj = sortToConditon(data)
    const activateNumber = checkActivation(preObj)
    const result=[]
    result.push(giveAlpha(activateNumber))
    //push to result the checking
}

sortResult(dataInput)

