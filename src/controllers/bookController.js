const bookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await bookModel.create(data)
    res.send({msg: savedData})
}

const getBooksData= async function (req, res) {
    let allBooks= await bookModel.find()
    res.send({msg: allBooks})
}

const getAuthorBooks= async function(req,res){
    ddata=req.body
    let listOfBook= await bookModel.find(ddata)
    res.send({msg: listOfBook})
}



module.exports.createBook= createBook
module.exports.getBooksData=getBooksData
module.exports.getAuthorBooks=getAuthorBooks
