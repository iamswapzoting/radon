
const printDate= function(){
    let current_datetime= new Date()
    let formatted_date = current_datetime.getDate() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getFullYear()
console.log(formatted_date)
}


const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const printMonth=function(){
const d= new Date();
let name = month[d.getMonth()];
console.log(name);
}


const getBatchInfo= function(){
    console.log("Radon,W3D3,the topic for today is Nodejs module system")
}


module.exports.printDate= printDate
module.exports.printMonth= printMonth
module.exports.getBatchInfo=getBatchInfo