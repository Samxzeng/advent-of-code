const fs = require('fs')
const dataInput = fs.readFileSync('input7-1.txt', 'utf8').split(/\r\n/gm)
console.log(dataInput[0])

// //interating throuhg obj, using entries

// const object1 = { foo: 'bar', baz: 42 };
// console.log(Object.entries(object1)[1]);
// // expected output: Array ["baz", 42]
// const object2 = {  1: 'b', 2: 'c',0: 'a' };
// console.log(Object.entries(object2)[2]);
// // expected output: Array ["2", "c"]
// const result = Object.entries(object2).sort((a, b) => a - b);//sort to compare number
// console.log('result',result)
// console.log(Object.entries(result)[1]);


function sortToCondition(data){
    const precon = data.map(el=>el[5])
    const active = data.map(el=>el[36])
    let obj ={}
    active.forEach((el,index)=>{
        if (obj[el]===undefined){
            obj[el]=[]
            obj[el].push(precon[index])
        } else{
            obj[el].push(precon[index])
        }
    })
    console.log(obj)
    return obj
    //get each d:[a,b,c], then a,b,c is the prerequisite for d
}

function findStartPoint(data){
    const precon = data.map(el=>el[5])
    const active = data.map(el=>el[36])
    let startpoint=[]
    precon.forEach(el=>{
        if(active.includes(el)===false){
            startpoint.push(el)
        }
    })
    console.log(startpoint)
    return startpoint
}

function findActiveOrder(remainig,done, obj){
    //array is remaing
    //done is already activated
    //obj to the source to check
}

//start with d:undefine
function giveAlpha(array){

    //return the alpha order of first one
}

function checkActivation(){
    //check with one is activated
}

function sortResult(data){
    const preObj = sortToCondition(data)
    // console.log(preObj)
    const startPoint = findStartPoint(data)
    // console.log(startPoint)
    const activateNumber = checkActivation(preObj)
    // const result=[]
    // result.push(giveAlpha(activateNumber))
    //push to result the checking
}

sortResult(dataInput)


// let obj={}, then find the start point
//then run the selection and push the result
//run many time = length <26
