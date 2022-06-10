const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const publisherShema= new mongoose.Schema({
    name: String,
    headQuarter: String

},{ timestamps: true })

module.exports= mongoose.model('newPublisher',publisherShema)