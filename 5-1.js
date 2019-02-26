
const fs = require('fs')
const dataInput = fs.readFileSync('input5-1.txt', 'utf8')
console.log('original length',dataInput.length)
// console.log(dataInput)

finalArray =[]
function removePolarity(data){
    let dataarray = [...data]
    // console.log(dataarray)
    const datacut = dataarray.map((element,index)=>{
        // console.log('element',element)
        if(element.toUpperCase()===element&&element.toLowerCase()===dataarray[index+1]){
            dataarray[index+1]="remove"
            element="remove"
            return element
        } 
        else if(element.toLowerCase()===element&&element.toUpperCase()===dataarray[index+1]){
            dataarray[index+1]="remove"
            element="remove"
            return element
            }
        else{return element}
    })

    const filterArray = datacut.filter(x=>x!=="remove")
    if (filterArray.length!==dataarray.length){
        removePolarity(filterArray) // multiple runs of function itself, to get result array no reduction
    }
    else{
        console.log("yes")
        console.log(filterArray.length)
        finalArray.push(filterArray)
    }
}
removePolarity(dataInput)
console.log('result',finalArray[0].length)


