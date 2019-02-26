
const fs = require('fs')

const Diff = require('diff')

function hasDuplicates(array) {
    return (new Set(array)).size !== array.length;
}

function getduplicatelist(splitdata) {
    let newlist = []
    splitdata.forEach(function (element) {
        if (hasDuplicates(element)) {
            newlist.push(element)
        }
    })
    return newlist
}

function getArray(list) {
    let lenghtdiffarray = []
    let repeatarray = []
    list.forEach((element) => {
        // let diffLenght = [...element].length-new Set([...element]).size
        let repeat = 0;
        [...element].forEach(subelement => {
            if (element.indexOf(subelement) !== element.lastIndexOf(subelement)) {
                repeat++
            }
        })
        repeatarray.push(repeat);
        lenghtdiffarray.push([...element].length - new Set([...element]).size)
        if (repeat===6 && [...element].length - new Set([...element]).size===3){
            repeatarray.push('all twice')
        } else if (repeat===6 && [...element].length - new Set([...element]).size===4){
            repeatarray.push('all three')
        }
    })
    return [repeatarray, lenghtdiffarray]
}

function countElement(array, element) {
    return [...array].filter(function (x) { return x == element }).length
}

function getFrequency(list) {
    const repeatarry = getArray(list)[0]
    const lenghtdiffarray = getArray(list)[1]
    console.log(new Set(repeatarry))
    console.log(new Set(lenghtdiffarray))
    let repeatarray2 = countElement(repeatarry, 2) //twice
    let repeatarray3 = countElement(repeatarry, 3) // threetimes
    let repeatarray4 = countElement(repeatarry, 4) //twice
    let repeatarray5 = countElement(repeatarry, 5) // twice + threetime
    let repeatarray6 = countElement(repeatarry, 6) // all twice
    let repeatarray7 = countElement(repeatarry, 7) //twice + threetimes
    let twice =repeatarray2+repeatarray4+repeatarray5+repeatarray7+repeatarray6
    let threetimes=repeatarray3+repeatarray5+repeatarray7
    return [twice, threetimes,twice*threetimes]
};

// //to get the difference, same as different method use down there
// Array.prototype.diff = function(a) {
//     return this.filter(function(i) {return a.indexOf(i) < 0;});
// };

fs.readFile('input2-1.txt', 'utf8', function (err, data) {
    if (err) throw err;
    console.log(typeof data) //string
    //to get the data in array
    const splitdata = data.split(/\n/gm)
    console.log(typeof splitdata) //object

    // check if has any dupliate
    // if have, get the size and length difference
    //if odd, then 2, if even then 3. 
    const dupliatelist = getduplicatelist(splitdata);
    console.log(dupliatelist.length, ' list')
    //result 2-1
    console.log(getFrequency(dupliatelist))

    function getdiff(arr1,arr2){
        let difference = arr1.filter(x => !arr2.includes(x));
        return difference
    }
    console.log('diff test',getdiff([1,2,4],[1,2,6,7]))
    

    function compareEach(array){
        let diffarray =[];
        array.forEach((element,index)=>{
            for (i=1;(i+index) <array.length;i++){
                let difference = Diff.diffChars(element,array[index+i])
                if (difference.length===3){
                    diffarray.push([element,array[index+i],index,i,difference])
                }
                //this is only to get difference
                // let diff = getdiff([...element],array[index+i]);
                // if (diff.length===1){
                //     diffarray.push ([index,i,index+i]) 
                // } 
            }
            
        })
        return diffarray
    }

    const diffarray = compareEach(splitdata)

    console.log(diffarray)


   
    

})
