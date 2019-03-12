
const fs = require('fs')
const dataInput = fs.readFileSync('input6-1.txt', 'utf8').split(/\r\n/gm)
// console.log(dataInput)
//has to find the most outer book by seeing all 5 pairs and get the outer number, then see each of inside belongs to which on \
// use 2 layer of for loop to get every point close to which one 

function cutString(str){
    const left = str.substring(0,str.indexOf(','))*1
    const right = str.substring(str.indexOf(',')+1,str.length)*1
    return [left,right]
}
const arrayData = dataInput.map(element=>cutString(element))
console.log(arrayData)

xArray = arrayData.map(element=>element[0])
yArray = arrayData.map(element=>element[1])
maxX=Math.max(...xArray)
maxY=Math.max(...yArray)
minX=Math.min(...xArray)
minY=Math.min(...yArray)
xRange=[minX,maxX]
yRange=[minY,maxY]

console.log(xRange,yRange)

function findManhattanDistance([x1,y1],[x2,y2]){
   return Math.abs(x1-x2)+Math.abs(y1-y2)
}
console.log(findManhattanDistance([1,2],[4,5]))
function calculateDistance (array){
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
    console.log(counter)
}
calculateDistance(arrayData)

//try to enlarge mixX,minY,maxX, maxY to see which one will change
