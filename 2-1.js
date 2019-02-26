
const fs = require('fs')


function hasDuplicates(array) {
    return (new Set(array)).size !== array.length;
}

fs.readFile('input2-1.txt', 'utf8', function (err, data) {
    if (err) throw err;
    console.log(typeof data) //string

    //to get the data in array
    const splitdata = data.split(/\n/gm)
    console.log(typeof splitdata) //object

    // check if has any dupliate
    // if have, get the size and length difference
    //if odd, then 2, if even then 3. 

    function getduplicatelist() {
        let newlist = []
        splitdata.forEach(function (element) {
            if (hasDuplicates(element)) {
                newlist.push(element)
            }
        })
        return newlist
    }

    const dupliatelist = getduplicatelist(splitdata);

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
    }
    
    console.log(getFrequency(dupliatelist))

})
