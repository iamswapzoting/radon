const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore')

const router = express.Router();

router.get('/test-me', function (req, res) {
    myHelper.printDate()
    myHelper.getCurrentMonth()
    myHelper.getCohortData()
    let firstElement = underscore.first(['Sabiha','Akash','Pritesh'])
    console.log('The first element received from underscope function is '+firstElement)
    res.send('My first ever api!')
});

router.get('/hello', function (req, res) {
   
    res.send('Hello there!')
});

router.get('/candidates', function(req, res){
    console.log('Query paramters for this request are '+JSON.stringify(req.query))
    let gender = req.query.gender
    let state = req.query.state
    let district = req.query.district
    console.log('State is '+state)
    console.log('Gender is '+gender)
    console.log('District is '+district)
    let candidates = ['Akash','Suman']
    res.send(candidates)
})

router.get('/candidates/:canidatesName', function(req, res){
    console.log('The request objects is '+ JSON.stringify(req.params))
    console.log('Candidates name is '+req.params.canidatesName)
    res.send('Done')
})

router.get('/movies', function(req,res){
    let movies= ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]
    console.log(movies)
    res.send('yessss')
})


router.get('/movies/:indexNumber', function(req,res){
    let movies= ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]
    let lengthOfMovies=movies.length
    let num=((req.params))
    let Number=movies[num.indexNumber]

    if ((lengthOfMovies-1)>=num.indexNumber){
    console.log(Number);
    }
    else {
        console.log("iuse a valid index");
    }
    res.send('ohhhh')
})

router.get('/films',function(req,res){
    let filmArray=[ {
        "id" : 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Nemo"
       }]
    console.log(filmArray)
    res.send('ohhyesss')
       
})

router.get('/films/:filmid',function(req,res){
    let filmArray1=[ {
        "id" : 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Nemo"
       }]

    let lengthOfFilmArray=filmArray1.length
    let num1=((req.params))
    let Number1=filmArray1[num1.filmid]

    if ((lengthOfFilmArray-1)>=num1.filmid){
    console.log(Number1);
    }
    else {
        console.log("No movie exists with this id");
    }


    
    res.send('ohhyessssss')
    
})
module.exports = router;
// adding this comment for no reason