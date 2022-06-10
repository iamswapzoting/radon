const publisherModel = require("../models/publisherModel")


const createPublisher=async function(req,res){
    let data=req.body
    let publisher= await publisherModel.create(data)
    res.send({msg:publisher})
}

const getPublisher= async function(req,res){
    let publisher1= await publisherModel.find()
    res.send({msg:publisher1})
}

module.exports.createPublisher=createPublisher
module.exports.getPublisher=getPublisher