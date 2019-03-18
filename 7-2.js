
const info = require('./export7.js')
const input = info.dataInput

const beginning = info.findPendingPoint(info.dataInput)
const starting = [...new Set(beginning)]
console.log (starting)

// this step is to try to find the longest path to achive from beginning to the end

//From last number, push to different chain, make it concat with last number, then go again to develop all the chains, then cal the longest time

//eventually like: 'GDFE','EFGFDS',sth like this