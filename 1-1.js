
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



fs.readFile('input1-1.txt', 'utf8', function(err, data) {  
    if (err) throw err;
    console.log(typeof data) //string

    //to get the data in array
    const splitdata = data.split(/\n/gm)
    console.log(typeof splitdata) //object

    //to get result in number array
    const numberarray=toNumber(splitdata)

    // to get reduce calculation
    const result = SumArray(numberarray)
    console.log(result)


})
 