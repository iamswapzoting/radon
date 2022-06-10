const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publisherController=require("../controllers/publisherController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor  )

router.post("/createPublisher",publisherController.createPublisher)

router.get("/getAuthorsData", authorController.getAuthorsData)

router.get("getPublisher",publisherController.getPublisher)

router.post("/createBook", bookController.createBook  )

router.get("/getBooksData", bookController.getBooksData)

router.post("/finalBooksData", bookController.createBook )

router.put("/updateBookData",bookController.updateBookData)

// router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

module.exports = router;