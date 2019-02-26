
// loop the string many time unitl nothing found
//get ride of the Aa or aA things every loop
//can use splice()

console.log('a'==='A')
console.log('a'=='A')
console.log
const fs = require('fs')

const dataInput = fs.readFileSync('input5-1.txt', 'utf8')
// console.log(dataInput)
console.log('original length',dataInput.length)

function removePolarity(data){
    let dataarray = [...data]
    const datacut = dataarray.map((element,index)=>{
        console.log('element',element)
        if(element.toUpperCase()===element&&element.toLowerCase()===dataarray[index+1]){
            dataarray[index+1]=""
            element=""
        } 
        else if(element.toLowerCase()===element&&element.toUpperCase()===dataarray[index+1]){
            dataarray[index+1]=""
            element=""
            }
    })
    return datacut.filter(x=>x!==0)
}
// removePolarity(dataInput)

// console.log(dataInput.length)

