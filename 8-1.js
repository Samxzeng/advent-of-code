const fs = require('fs')
const dataInput = fs.readFileSync('input8-1.txt', 'utf8').split(' ')

const input ={0:dataInput.map(el=>el*1)} 
console.log('last', input[0][input[0].length-1])

function getMetadata(array){
    const metalength = array[1]
    const addup = array.slice(array.length-metalength,array.length).reduce((a,c)=>{return a+c},0)
    return addup 
    //this function only return addup
}


const testObj ={"0":[1,2,3,4,5,1,2,3,4,5,1,2,3,4,5]} 
const testarr =[1,2,3,4,5,1,2,3,4,5,1,2,3,4,5]

let abc = testarr.slice(testarr.length-19,testarr.length).reduce((a,c)=>{return a+c},0)
console.log(testarr.slice(testarr.length-13,testarr.length))
console.log('abc,',abc)
// console.log(testObj[0])
console.log(getMetadata(testarr))
// console.log(getMetadata(testObj[0]))

function findnewOject (object){
    let newOject = {}
    for (let num in object){
        // console.log(object[num].length)
        const subnodes = object[num][0]
        const leftover = object[num].slice(2,object[num].length-object[num][1])
        // console.log(leftover)
        for (i=0;i<subnodes;i++){
        //  newOject[num+'-'+i]=leftover.slice(Math.ceil(leftover.length / subnodes *i),Math.ceil(leftover.length / subnodes *(i+1)))
         newOject[num+'-'+i]=leftover.slice(Math.round(leftover.length / subnodes *i),Math.round(leftover.length / subnodes *(i+1)))
        //  newOject[num+'-'+i]=leftover.slice(Math.round(leftover.length / subnodes *i),Math.round(leftover.length / subnodes *(i+1)))
        // newOject[num+'-'+i]=leftover.slice(leftover.length / subnodes *i,leftover.length / subnodes *(i+1))
    
         // newOject.push(leftover.slice(leftover.length / subnodes *i,leftover.length / subnodes *(i+1)))
        }
        
    } 
    return newOject
}
//all is working on obj
//need to develop the addup function, and run this findnewObject till null

function addup(obj){
    let addup=[]
    for (let num in obj){
        addup.push(getMetadata(obj[num]))
    }
    return addup.reduce((a,c)=>{return a+c},0)
}

// console.log(addup(input))



console.log(findnewOject(testObj),'1st')
console.log(findnewOject(findnewOject(testObj)),'2nd')

// console.log(addup(testObj))
// console.log(addup(findnewOject(input)))
// console.log(addup(findnewOject(findnewOject(input))))

var obj = {0:dataInput.map(el=>el*1)} 
var sum = 0
for (j=0;j<20;j++){
    console.log('run'+j)
    sum += addup(obj)
    obj = findnewOject(obj)
    console.log(obj)
    console.log('sum',sum)

}
// console.log(obj)

console.log(dataInput.map(el=>el*1).reduce((a,c)=>a+c))
