
const fs = require('fs')
const dataInput = fs.readFileSync('input6-1.txt', 'utf8').split(/\r\n/gm)

function cutString(str){
    const left = str.substring(0,str.indexOf(','))*1
    const right = str.substring(str.indexOf(',')+1,str.length)*1
    return [left,right]
}
const arrayData = dataInput.map(element=>cutString(element))
//orginise to array

xArray = arrayData.map(element=>element[0])
yArray = arrayData.map(element=>element[1])
maxX=Math.max(...xArray)
maxY=Math.max(...yArray)
minX=Math.min(...xArray)
minY=Math.min(...yArray)

function findManhattanDistance([x1,y1],[x2,y2]){
   return Math.abs(x1-x2)+Math.abs(y1-y2)
}

function calculateDistance (array,minX,maxX,minY,maxY){
    let counter ={}
    for (i=minX;i<maxX;i++){
        for(j=minY;j<maxY;j++){
            const distArray = array.map(element=>findManhattanDistance(element,[i,j]))
            const nearestIndex = distArray.indexOf(Math.min(...distArray))
            if(counter[nearestIndex]===undefined){
                counter[nearestIndex]=1
            }else{
            counter[nearestIndex]+=1
                }
            //calculte each point the distance to the datapoint
            //findout the smallest one
        }
    }
    return counter
}
const square = calculateDistance(arrayData,minX,maxX,minY,maxY)
const squareLarge = calculateDistance(arrayData,minX-1,maxX+1,minY-1,maxY+1)
//try to enlarge mixX,minY,maxX, maxY to see which one will change
//the one changes will be infinite, the remaining value is finite

function findoverlapBiggest(obj1,obj2){
    let value1= Object.values(obj1)
    let value2 = Object.values(obj2)
    const finiteElement =value1.map((element,index)=>{
        if (value2.includes(element)){
            // console.log(index)
            return [index,element]
        } else{
            return ['infinite',0]
        }
    })
    console.log(finiteElement)
    const maxResult = Math.max(...finiteElement.map(el=>el[1]))
    
    console.log(maxResult)
    return maxResult
}

findoverlapBiggest(square,squareLarge)






