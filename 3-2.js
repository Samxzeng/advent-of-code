// get the one not overlap

// if we have the overlop blocks
//we loop to check which one is not touching this overlop blcok
//if find one on this, then we stop, and start the next
//until we findone that no overlap we stop also. 

const block = require('./export3')
const fs = require('fs')
// console.log(typeof block.cutString)

const dataInput = fs.readFileSync('input3-1.txt', 'utf8').split(/\n/gm)
console.log(dataInput[0])

let itable = {}
const fourelement = dataInput.map(element=>{
    return block.cutString(element)
})
for (i=0;i<fourelement.length;i++){
    // console.log(itable)
    const table = block.getTablePoint(fourelement[i])
    for (j=0;j<table.length;j++){
        // console.log(table[j].toString())
        if (block.overlapblocks.includes(table[j].toString())){
            itable[i]=i
            break
        }
    }
    if(itable[i]==undefined){
        console.log(itable[i+1]) //get the id, id is counting start from 1
        console.log('find',i+1) //get the id, id is counting start from 1
        break
    }
}
