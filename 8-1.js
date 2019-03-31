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


function findnewOject (object){
    let newOject = {}
    for (let num in object){
        // console.log(object[num].length)
        const subnodes = object[num][0]
        const leftover = object[num].slice(2,object[num].length-object[num][1])
        // console.log(leftover)
        for (i=0;i<subnodes;i++){
         newOject[num+'-'+i]=leftover.slice(Math.floor(leftover.length / subnodes *i),Math.floor(leftover.length / subnodes *(i+1)))
        }
        
    } 
    return newOject
}

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
// var obj = testObj

var sum = 0
for (j=0;j<4;j++){
    console.log('run'+j)
    sum += addup(obj)
    obj = findnewOject(obj)
    // console.log(obj)
    console.log('sum',sum)

}
console.log(obj)

console.log(dataInput.map(el=>el*1).reduce((a,c)=>a+c))
