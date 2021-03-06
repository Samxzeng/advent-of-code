const fs = require('fs')
const dataInput = fs.readFileSync('input7-1.txt', 'utf8').split(/\r\n/gm)
console.log(dataInput[0])
console.log('length',dataInput.length)

function findPendingPoint(data){
    const precon = data.map(el=>el[5])
    const active = data.map(el=>el[36])
    let pendingPoint=[]
    precon.forEach(el=>{
        if(active.includes(el)===false){
            pendingPoint.push(el)
        }
    })
    return pendingPoint
}
//find pending points to sort based on current list

function getOneResult(array){
    const selection = array.sort()
    return selection[0]
}
//sort and get one resulst

function removeResultsDone(data,doneArray){
    const newData =data.filter(el=>{
        return doneArray.includes(el[5])===false 
    })
    return newData
}
//remove the finished result from the "suppose to do list"


function findlastNum(data){
    const precon = data.map(el=>el[5])
    const active = data.map(el=>el[36])
    const lastNum = active.filter(el=>{
        return precon.includes(el)===false
    })
    return lastNum
}
//find the last number without precon

function loopToResult(data){
    let results=[]
    for (i=0;i<dataInput.length;i++){
        let newData = removeResultsDone(data,results)
        let pendingPoints = findPendingPoint(newData)
        let theOne = getOneResult(pendingPoints)
        results.push(theOne)
    }
    return results
}

const results = loopToResult(dataInput)
const lastNum = [...new Set(findlastNum(dataInput))]//find the unique number of an array

const str = results.filter(el=>el!==undefined).map(el=>el).reduce((a,c)=>a+c)+lastNum 
//remove the undefined value
// get full list in string

console.log(str)