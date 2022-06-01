const trim = function(){
    let text = "       functionUp        ";
console.log(text.trim());

}

const changetoLowerCase= function(){
    let text = "THIS IS A TEXT";
let result = text.toLowerCase();
console.log(result);
}


const changeToUpperCase= function(){
    let text = "this is text";
let result = text.toUpperCase();
console.log(result);
}


module.exports.trim=trim
module.exports.changetoLowerCase=changetoLowerCase
module.exports.changeToUpperCase=changeToUpperCase
