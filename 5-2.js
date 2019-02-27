
const info = require("./export5.js")
const sourcedata = info.dataInput
// console.log(sourcedata)
const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
console.log(alphabet)

function RemoveOne (letterarray,soucrcearray){

    return letterarray.map((letter,index)=>{
        const arrayAfterRemove = [...soucrcearray].filter(arrayelement=>{return arrayelement!==letter&&arrayelement!==letter.toUpperCase()})
        console.log('after remove', arrayAfterRemove.length)
        const arrayAfterReact = info.removePolarity(arrayAfterRemove)
        console.log(arrayAfterReact[index].length)
        return arrayAfterReact[index].length
    })
}

const result = RemoveOne(alphabet,sourcedata)
console.log('result is ', result.sort())