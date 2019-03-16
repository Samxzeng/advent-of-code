
const inherit = require('./export6')

const distance = inherit.calculateDistance(inherit.arrayData,minX,maxX,minY,maxY)

const value = Object.values(distance)
console.log(value.length)

const results = value.filter(el=>el<10000)
console.log(results.length)


