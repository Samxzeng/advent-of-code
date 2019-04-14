const fs = require('fs')
const dataInput = fs.readFileSync('input8-1.txt', 'utf8').split(' ')
// console.log(dataInput.length)
// console.log(dataInput)

const input ={0:dataInput.map(el=>el*1)} 

function getMetadata(array){
    const metalength = array[1]
    const addup = array.slice(array.length-metalength,array.length).reduce((a,c)=>{return a+c},0)
    return addup 
    //this function only return addup
}

const testObj ={"0":[2, 3, 0, 3, 10, 11, 12, 1, 1, 0, 1, 99, 2, 1, 1, 2]} 

function findnewOject (object){
    let newOject = {}
    for (let num in object){
        // console.log(object[num].length)
        const subnodes = object[num][0]
        const leftover = object[num].slice(2,object[num].length-object[num][1])
        // console.log(leftover)
        for (i=0;i<subnodes;i++){
            let remainnumber=leftover.length % subnodes
            if(i<subnodes-remainnumber){
         newOject[num+'-'+i]=leftover.slice(Math.floor(leftover.length / subnodes) *i, Math.floor(leftover.length / subnodes) *(i+1))
            }
            else{
         newOject[num+'-'+i]=leftover.slice(Math.floor(leftover.length / subnodes) *i, Math.floor(leftover.length / subnodes) *(i+1)+1)
            }
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


// console.log(findnewOject(testObj),'1st')
// console.log(findnewOject(findnewOject(testObj)),'2nd')
// console.log(findnewOject(findnewOject(findnewOject(testObj))),'3rd')

// console.log(addup(testObj))
// console.log(addup(findnewOject(testObj)))
// console.log(addup(findnewOject(findnewOject(testObj))))

function getresult(){
    let obj = {0:dataInput.map(el=>el*1)} 
    // let obj = testObj   
    let sum = 0
    for (j=0;j<2;j++){
        console.log('run'+j)
        sum += addup(obj)
        obj = findnewOject(obj)
        // console.log(obj)
        for (let n in obj){
            console.log(obj[n].length)
        }
    }
}
getresult()
console.log('input length', input[0].length)// the length of the number 
console.log(dataInput.map(el=>el*1).reduce((a,c)=>a+c))

//problem:the data is not divided into integer
