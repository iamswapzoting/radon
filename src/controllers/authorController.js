const { count } = require("console")
const authorModel = require("../models/authorModel")
const bookModel = require("../models/bookModel")
const BookModel= require("../models/bookModel")


const createAuthor =async function(req,res){
    let authorData=req.body
    let saveAuthorData= await authorModel.create(authorData)
    res.send({msg:saveAuthorData})
}

const getAuthor= async function (req, res) {
    let savedData= await authorModel.find()
    res.send({msg: savedData})
}

const findAuthorById= async function (req,res){
    
    let data= await authorModel.find({ author_name: "Chetan Bhagat"}).select({author_id:1})
    let listOfBooks= await bookModel.find({author_id:data[0].author_id})
    res.send({msg:listOfBooks })
}

const priceUpdate = async function (req,res){
    let data = await bookModel.findOneAndUpdate({name:"Two states"}, {$set:{price:100}},{new:true})
    let result1 = await authorModel.find({author_id: data.author_id})
    let price= data.price
    res.send({author_name: result1[0].author_name,price})

}
const findByPrice = async function (req, res) {
    let findprc = await bookModel.find({ price: { $gte: 50, $lte: 100 } }).select({ author_id: 1 })
    let arr=[]
    for (let i=0;i<findprc.length; i++){
        let authorName=await authorModel.find({author_id:findprc[i].author_id}).select({author_name:1,author_id:1,_id:0})
        arr.push(authorName)
    }
    res.send({ msg:arr})
        

}
module.exports.getAuthor= getAuthor
module.exports.findAuthorById=findAuthorById
module.exports.createAuthor=createAuthor
module.exports.priceUpdate=priceUpdate
module.exports.findByPrice=findByPrice
