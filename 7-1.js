const fs = require('fs')
const dataInput = fs.readFileSync('input7-1.txt', 'utf8').split(/\r\n/gm)
// console.log(dataInput)

let abc={}
abc['test']=[]
abc['test'].push('give')
console.log(abc) // test how to define type in js obj

//interating throuhg obj, using entries
const object1 = { foo: 'bar', baz: 42 };
console.log(Object.entries(object1)[1]);
// expected output: Array ["baz", 42]

const object2 = {  1: 'b', 2: 'c',0: 'a' };
console.log(Object.entries(object2)[2]);
// expected output: Array ["2", "c"]

const result = Object.entries(object2).sort((a, b) => a - b);//sort to compare number
console.log('result',result)
console.log(Object.entries(result)[1]);


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

// sortResult(dataInput)

