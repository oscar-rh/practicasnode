const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const cellSchema = mongoose.Schema( 
    {
        name : { 
            type : String, 
            required : true
        },
        mentors  : [ { type: Schema.ObjectId, ref: "mentors" } ]   // type: mongoose.Schema.Types.ObjectId
    }
)

const model = mongoose.model('cells',cellSchema)

module.exports = model

// populate 