
const fs = require('fs')

const cutString = function (str){
    const upperleftx = str.substring(str.indexOf("@")+2,str.indexOf(","))*1
    const upperlefty = str.substring(str.indexOf(",")+1,str.indexOf(":"))*1
    const rightbottomx = str.substring(str.indexOf(":")+1,str.indexOf("x"))*1
    const rightbottomy = str.substring(str.indexOf("x")+1,str.length)*1
    return [upperleftx,upperlefty,rightbottomx,rightbottomy]
}

function getTablePoint(corner){
    let table = []
    for (var j=0;j<corner[3];j++){
        for (var i=0;i<corner[2];i++){
            table.push([corner[0]+i,corner[1]+j])
        }
    }
    return table
}

//this is the function
const overlap = function(input){
    const cornerMap = input.map(element=>{
        return cutString(element)
    })
    let overlap = {}
    cornerMap.forEach(corner=>{
        const table = getTablePoint(corner)
        table.forEach(element=>{
            if (overlap[element]===undefined){
                overlap[element]=1
            } else {
                overlap[element]=overlap[element]+1
            }
        })
    })
    let overlapAll = Object.keys (overlap)
    const overlaparray = overlapAll.map(element=>{
        if(overlap[element]>=2){
            return element
        }
    })
    return overlaparray
}

//to get the input data in array
const dataInput = fs.readFileSync('input3-1.txt', 'utf8').split(/\n/gm)
// console.log('data',dataInput.length)

// to get the result in console
// console.log(overlap(dataInput))
const overlapblocks= overlap(dataInput)

//exporet the function
module.exports = {getTablePoint,overlapblocks,cutString}


