const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( 
    { 
        name:String,
        author_id:{type:Number,
            require:true},
        price:number,
        ratings:number,
    }
, { timestamps: true });


module.exports = mongoose.model('newBook', bookSchema) //users
