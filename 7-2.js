
const info = require('./export7.js')
const input = info.dataInput

const beginning = info.findPendingPoint(info.dataInput)
const starting = [...new Set(beginning)]
console.log (starting)

// this step is to try to find the longest path to achive from beginning to the end


// let finished =[]
// let inPrgross =[]

// let newData = info.removeResultsDone(input,finished)
// console.log(newData)
// let pendingPoints = info.findPendingPoint(newData)
// // needtodo = pendingPoints - inprogress 

// console.log(pendingPoints)

// inPrgross.push([...new Set(pendingPoints)])
// console.log(inPrgross)

// let theOne = info.getOneResult(pendingPoints)
// finished.push(theOne)
// console.log(finished)


let worker1=[]
let worker2=[]
let worker3=[]
let worker4=[]
let worker5=[]

let round1 = starting.sort()
console.log(round1)

//after one finished, considered round2

