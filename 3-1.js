
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

    let overlapAll = Object.values (overlap)

    //this is for the first question, when we need the length of the tiles (blocks)
    return overlapAll.filter(element => element>=2).length
}

//to get the input data in array
const dataInput = fs.readFileSync('input3-1.txt', 'utf8').split(/\n/gm)
// console.log('data',dataInput.length)

// to get the result in console
console.log(overlap(dataInput))


