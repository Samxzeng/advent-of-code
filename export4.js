
// for 4-1

const fs = require('fs')

const dataInput = fs.readFileSync('input4-1.txt', 'utf8').split(/\n/gm)

const sortdata = dataInput.sort()
const minutes = Array.from(new Array(60),(val,index)=>index+1); //1 to 60 array

function guardsleeptime(data){
    let total= {} // the organised total data with guard id, and minuteds
    data.forEach((element,index)=>{
        if(element.indexOf('#')>0){
            const dutyDate = data[index+1].substring(6,12)
            const guardIndex = element.substring(element.indexOf("#"),element.indexOf('b'))
            total[dutyDate]=[]
            total[dutyDate].push(guardIndex)
        } 
        else if (element.indexOf('f')>0){
            const timetosleep = element.substring(element.indexOf(':')+1,element.indexOf(':')+3)*1
            // console.log(typeof timetosleep)
            const timetowake  = data[index+1].substring(element.indexOf(':')+1,element.indexOf(':')+3)
            // console.log(timetowake)
            const sleepminutes =  minutes.slice(timetosleep-1,timetowake-1)
            // console.log(sleepminutes)
            const dutyDate2 = data[index+1].substring(6,12)
            total[dutyDate2].push(...sleepminutes)
        }

    })
    // console.log(total)
    return total
}


function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }



function findguard (data){
    const sleeptime = Object.values(guardsleeptime(data))
    
    let countminutes = {}
    sleeptime.forEach(element=>{
        // console.log(element[0])
        if(countminutes[element[0]]===undefined){
            countminutes[element[0]]=element.length-1
        } else {
            countminutes[element[0]]+=element.length-1
        }
    })
    // console.log(countminutes)
    const maxValue = Math.max(...Object.values(countminutes))
    // console.log(getKeyByValue(countminutes,maxValue))
    return getKeyByValue(countminutes,maxValue)//return the gurad number
}

function listguard(data){
    const sleeptime = Object.values(guardsleeptime(data))
    
    let countminutes = {}
    sleeptime.forEach(element=>{
        // console.log(element[0])
        if(countminutes[element[0]]===undefined){
            countminutes[element[0]]=element.length-1
        } else {
            countminutes[element[0]]+=element.length-1
        }
    })
    const guradNumber = Object.keys(countminutes)
    // console.log(guradNumber)
    return guradNumber
}
// console.log(listguard(sortdata))


function overlapminute (data,index){
    const sleeptime = Object.values(guardsleeptime(data))
    // console.log('sleetime',sleeptime)
    let allsleepminutes =[]
    let countoverlop ={}

    sleeptime.forEach(element=>{
        if(element[0]===index){
            allsleepminutes.push(...element.slice(1,element.length))
        }
    })
    // console.log(allsleepminutes)
    allsleepminutes.forEach(element=>{
        if(countoverlop[element]===undefined){
            countoverlop[element]=1
        }else{
            countoverlop[element]+=1
        }
    })
    // console.log(countoverlop)
    const maxValue = Math.max(...Object.values(countoverlop))
    // console.log(getKeyByValue(countoverlop,maxValue))
    return getKeyByValue(countoverlop,maxValue)
    
}

function overlaptimes(data,index){
    const sleeptime = Object.values(guardsleeptime(data))
    // console.log('sleetime',sleeptime)
    let allsleepminutes =[]
    let countoverlop ={}

    sleeptime.forEach(element=>{
        if(element[0]===index){
            allsleepminutes.push(...element.slice(1,element.length))
        }
    })
    // console.log(allsleepminutes)
    allsleepminutes.forEach(element=>{
        if(countoverlop[element]===undefined){
            countoverlop[element]=1
        }else{
            countoverlop[element]+=1
        }
    })
    // console.log(countoverlop)
    const maxValue = Math.max(...Object.values(countoverlop))
    return maxValue
    // console.log(getKeyByValue(countoverlop,maxValue))
    // return getKeyByValue(countoverlop,maxValue)
}
// overlaptimes(sortdata,'#827 ')

// overlaptimes(sortdata,)
// overlapminute(sortdata)
module.exports = {listguard,overlapminute,sortdata,overlaptimes}
// const result = findguard(sortdata).slice(1,findguard(sortdata).length)*overlapminute(sortdata)
// console.log(result)