
//find all guard the max minutes of asleep and multiply by the gurad id

const info = require ('./export4')

const guardlist = info.listguard(info.sortdata)

const resultsPairs = guardlist.map(element=>{
    const overlapmin =info.overlapminute(info.sortdata,element)
    // console.log(element,overlapmin)
    console.log(element.slice(1,element.length),overlapmin)
    return(element.slice(1,element.length)*overlapmin) //times together
})

const times = guardlist.map(element=>{
    const picktimes = info.overlaptimes(info.sortdata,element)
    return picktimes
})

// console.log(times.filter(x=>x))
// console.log(Math.max(...times))

const index = times.indexOf(Math.max(...times)) // Math.max(...times) is to look for the index of the selected pairs
const pairs = resultsPairs[index]
console.log('result is',pairs) // this is the result
