
const DoubleButtonMaker = (list) => {
 let result = []

 
 for (let i=0 ; i<list.length ; i+=2){
   result.push(list.slice(i, i+2))
 }

 return result
}

module.exports = DoubleButtonMaker 