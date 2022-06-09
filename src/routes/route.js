const express = require('express');
const router = express.Router();
const BookController= require("../controllers/bookController")
const  authorController= require("../controllers/authorController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createauthor",authorController.createAuthor)

router.post("/createBook", BookController.createBook)

router.get("/getAuthor" , authorController.getAuthor)

router.get("/getBooks",BookController.getBooksData)

router.get("/getAuthorId", authorController.findAuthorById)

router.post("/getBooksByAuthor", BookController.getAuthorBooks)

router.get("/priceUpdate",authorController.priceUpdate)

router.get("/bookFind", authorController.findByPrice)


const moment = require('moment');
router.get("/dateManipulations", function (req, res) {
    

    const dateA = moment('01-01-1900', 'DD-MM-YYYY');
    const dateB = moment('01-01-2000', 'DD-MM-YYYY');

    let x= dateB.diff(dateA, "days")
    console.log(x)

    res.send({ msg: "all good"})
})

module.exports = router;