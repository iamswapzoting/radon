let arr=[1,2,3,5,6,7]
const missingNumber= function(){
    let n =arr.length +1
    
    sumofNumber= (n*(n+1))/2
    let sum=0
    
   const result =arr.forEach(x=>(sum=sum+x))
   let number= sumofNumber - sum
    console.log(number)
}
let arr1=[33,34,35,37,38]
const missingNumber2= function(){
    let n =arr1.length +1
    
    sumofNumber= (n*(33+38))/2
    let sum=0
    
   const result =arr1.forEach(x=>(sum=sum+x))
   let number= sumofNumber - sum
    console.log(number)

}



module.exports.missingNumber=missingNumber
module.exports.missingNumber2=missingNumber2
