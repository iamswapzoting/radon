const { is } = require("express/lib/request")
const authorModel = require("../models/authorModel")
const bookModel = require("../models/bookModel")
const publisherModel = require("../models/publisherModel")

// const createBook = async function (req, res) {
//     let book = req.body
//     let bookCreated = await bookModel.create(book);
//     res.send({ msg: bookCreated });
// }

const createBook = async function (req, res) {
    let book = req.body
    if (book.author_id === undefined) {
        return res.send({ msg: "the user Id is Not given" })
    }
    else if (book.author_id !== "62a1c6bfcdd6d99aea68d79d") {
        res.send({ msg: "user Id is not Valid" })
    } else if (book.publisher_id === undefined) {
        return res.send({ msg: "the publisher Id is Not given" })
    } else if (book.publisher_id !== "62a1c7d7767bc736a9d0b333") {
        res.send({ msg: "publisher Id is not Valid" })
    } else {
        let bookCreated = await bookModel.create(book);
        res.send({ msg: bookCreated });
    }

}

const finalBooksData = async function (req, res) {

    let allBookData = await bookModel.find().populate("publisher").populate("author_id")
    res.send({ msg: allBookData })
}




const getBooksData = async function (req, res) {
    let books = await bookModel.find()
    res.send({ data: books })
}

const updateBookData = async function (req, res) {  
   let Check3 = await authorModel.find({rating:{$gt:3.5}}).select({author_name:1,_id:0})``
    res.send({msg:check3})
}

module.exports.createBook = createBook
module.exports.getBooksData = getBooksData
module.exports.finalBooksData=finalBooksData
module.exports.updateBookData=updateBookData
// module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails


// const createBook= async function (req, res) {
//     let book = req.body
//     if (book.author_id=true){
//     let bookCreated = await bookModel.create(book)
//     res.send({data: bookCreated})
//     }
//     else{
//         res.send("please Enter user Id" )
//     }
// }

// const createBook= async function (req,res){
//     let book=req.body
//     // if (book.author_id===undefined){
//     //     return res.send({msg: "the user Id is Not given"  })
//     // }
//     // res.send({msg:book.author_id})
//     let AuthorIdData= await authorModel.find().select({author_id:1})
//     //  res.send({msg:AuthorIdData})
//       for(i=0;i<AuthorIdData.length;i++){
//       if (book.author_id===AuthorIdData[i]._id){
//           let bookCreated= await bookModel.create(book)
//           res.send({msg:bookCreated})
//       }
//       else {
//           res.send({msg:"author Id is not Valid"})
//       }
//      }

// else {
//     let bookCreated= await bookModel.create(book);
//        res.send({msg:bookCreated});
// }


// const getBooksWithAuthorDetails = async function (req, res) {


//     var specificBook = await bookModel.find().populate('author_id')

//     for (i=0;i<specificBook.length;i++){
//      if(specificBook[i].author_id._id=true){
//          res.send({msg: "id is present"})

//      }
//      else{
//          res.send({msg:"id is not present"})
//      }

//     }


// }