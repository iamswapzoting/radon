const express = require('express');
const externalModule = require('../logger/logger.js')
const swap = require('../util/helper.js')
const him = require('../validator/formatter.js')

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

router.get('/test-me3', function (req, res) {
    res.send('My 4th api!')
});

router.get('/test-me4', function (req, res) {
    res.send('My last api!')
});

module.exports = router;
// adding this comment for no reason