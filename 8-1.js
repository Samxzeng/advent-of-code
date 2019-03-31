const fs = require('fs')
const dataInput = fs.readFileSync('input8-1.txt', 'utf8').split(' ')

const input = dataInput.map(el=>el*1)
// console.log(input)

function getMetadata(array){
    const metalength = array[1]
    const addup = array.slice(array.length-metalength,array.length).reduce((a,c)=>a+c)
    // console.log(addup)
    return addup 
    //this function only return addup
}

const testarray = [3,2,3,9,77,88,4,5,6,33,7,65,4.3,22]
getMetadata(testarray)

function newArray (array){
    const subnodes = array[0]
    const leftover = array.slice(2,array.length-array[1])
    console.log(leftover)
    let newArray = {}
    for (i=0;i<subnodes;i++){
        newArray[i]=leftover.slice(leftover.length / subnodes *i,leftover.length / subnodes *(i+1))
        // newArray.push(leftover.slice(leftover.length / subnodes *i,leftover.length / subnodes *(i+1)))
    }
    return newArray
    // this funcdtion return the child nodes
}

console.log(newArray(testarray))

function runManyTimes(array){
    let metadata = getMetadata(array)
    let subarray = newArray(array)
    console.log(subarray)
    for (let num in subarray){
        console.log(subarray[num].length)
    } 
    //looping throught object

    //now need to code to let it run many times to add up the data also
}

runManyTimes(testarray)