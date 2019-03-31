const fs = require('fs')
const dataInput = fs.readFileSync('input8-1.txt', 'utf8').split(' ')

const input ={0:dataInput.map(el=>el*1)} 
// console.log(input)

function getMetadata(array){
    const metalength = array[1]
    const addup = array.slice(array.length-metalength,array.length).reduce((a,c)=>a+c)
    // console.log(addup)
    return addup 
    //this function only return addup
}

const testObj ={"0":[3,2,3,9,77,88,4,5,6,33,7,65,4.3,22]} 
getMetadata(testObj[0])

function findnewOject (object){
    let newOject = {}
    for (let num in object){
        console.log(object[num].length)
        const subnodes = object[num][0]
        const leftover = object[num].slice(2,object[num].length-object[num][1])
        console.log(leftover)
        
        for (i=0;i<subnodes;i++){
         newOject[i]=leftover.slice(leftover.length / subnodes *i,leftover.length / subnodes *(i+1))
            // newOject.push(leftover.slice(leftover.length / subnodes *i,leftover.length / subnodes *(i+1)))
        }
        
    } 
    return newOject
}

// console.log(typeof input)

console.log (findnewOject(testObj))
//all is working on obj
//need to develop the addup function, and run this findnewObject till null

