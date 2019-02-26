
const fs = require('fs');

//make array of string to number
function toNumber(data){
    let result = []
    data.forEach(element=> {
        elementtonmber=element*1
        result.push(elementtonmber)
    })
    return result
}

//sum the number in array
function SumArray(array){
    return array.reduce(function(total, element){
        // console.log(typeof element)
        return total+element
    })
}

function adduparray (originalarray){
    let finalarray = []
    for (i=0;i<300;i++){
        originalarray.forEach(function(element,index){
            if((index===0 || index===1) && i===0 ){
                finalarray[0]= (originalarray[0]+originalarray[1])
                console.log('first number',finalarray)
            } else {
                finalarray.push(element+finalarray[index+(i*originalarray.length)-2])
                } 
        })
        // console.log(finalarray.length)
        if(hasDuplicates(finalarray)){
            console.log(i+ ' has duplicate')
            break
        }
    }
    console.log('final array length',finalarray.length)
    // console.log(finalarray)
    return finalarray
}

function hasDuplicates(array) {
    return (new Set(array)).size !== array.length;
}

function findduplicate (array){
    return array.filter(function(element,index){
        let slicearray =  array.slice(0,index)
        return slicearray.includes(element)
    })
}

fs.readFile('input1-1.txt', 'utf8', function(err, data) {  
    if (err) throw err;
    console.log(typeof data) //string

    //to get the data in array
    const splitdata = data.split(/\n/gm)
    console.log(typeof splitdata) //object

    //to get result in number array
    const numberarray=toNumber(splitdata)

    // for 1-1, to get reduce calculation
    const result = SumArray(numberarray)
    console.log(result)

    
    // for 1-2 
    const arrayhasduplicate = adduparray(numberarray)
    const dupliateValue =findduplicate(arrayhasduplicate)
    console.log('result', dupliateValue)
     
})
 