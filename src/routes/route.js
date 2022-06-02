const express = require('express');
const externalModule = require('../logger/logger.js')
const swap = require('../util/helper.js')
const him = require('../validator/formatter.js')
const _ = require("lodash");
const router = express.Router();

router.get('/test-me', function (req, res) {
    externalModule.welcome()
    res.send('welcome to functionUp');
});

router.get('/test-me1', function (req, res) {
    swap.printDate()
    swap.printMonth()
    swap.getBatchInfo()
    res.send('todays date')
});

router.get('/test-me2', function (req, res) {
    him.trim()
    him.changetoLowerCase()
    him.changeToUpperCase()
    res.send('changes in case of word')
});

router.get('/hello', function (req, res) {
    let arr = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    console.log(_.chunk(arr, 4))
    

    let arr2 =[1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
    let newArray = _.tail(arr2);
    console.log(newArray);

    let arr3 = [1,2,3,45,5]
    let arr4 = [3,4,5,6,7]
    let arr5 = [5,6,7,8,9]
    let arr6 = [7,8,9,10]
    let arr7 = [1,2,4,6]

    let uni = _.union(arr3,arr4,arr5,arr6)
    console.log(uni)


    let list= [["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
    let rest= _.fromPairs(list)
    console.log(rest)

    res.send('My 4th api!')
});

router.get('/test-me4', function (req, res) {
    res.send('My last api!')
});

module.exports = router;
// adding this comment for no reason