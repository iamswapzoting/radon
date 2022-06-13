

const getBooksData = async function (req, res) {
    let books = await bookModel.find()
   

    res.send({ data: books })
}

const createAPI = async function(req,res){
    res.send({msg:"this is my first API"})
}
const createAPI2 = async function(req,res){
    res.send({msg:"this is my Second API"})
}
const createAPI3 = async function(req,res){
    res.send({msg:"this is my Third API"})
}
const createAPI4 = async function(req,res){
    res.send({msg:"this is my Fourth API"})
}
const createAPI5 = async function(req,res){
    res.send({msg:"this is my Last API"})
}

module.exports.createAPI=createAPI
module.exports.createAPI3=createAPI3
module.exports.createAPI2=createAPI2
module.exports.createAPI4=createAPI4
module.exports.createAPI5=createAPI5