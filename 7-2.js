
const info = require('./export7.js')

const beginning = info.findPendingPoint(info.dataInput)
const startLetters = [...new Set(beginning)]
console.log(startLetters)
const lastLettter = [info.lastNum[0]]
console.log(lastLettter)

//logic, running from last letter to see the longest branches
function Runbackward (lastResult){
    let nextResult = []
    info.dataInput.forEach(el=>{
        lastResult.forEach(re=>{
            if(el[36]===re[re.length-1]){
                nextResult.push(re+el[5])
            }
        })
    })
    return nextResult
}

let backTraceLetter = lastLettter

for (i=1;i<13;i++){
    let oneround= Runbackward(backTraceLetter)
    // console.log(oneround)
    backTraceLetter=oneround
    if(backTraceLetter[0]===undefined){
        console.log(i) // find till the end, then know how many rounds
        break
    }
}

console.log(backTraceLetter)

let final = backTraceLetter.map(el=>{
    console.log('lenght',[...el].length)
    let value = [...el].map(letter=>{
        return (letter.charCodeAt(0) - 64)
    })
    .reduce((a,c)=>a+c)
    return value + [...el].length *60
})
console.log(final)

