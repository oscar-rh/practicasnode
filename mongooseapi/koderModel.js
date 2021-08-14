const mongoose = require('mongoose');

const koderSchema = new mongoose.Schema({
    name: { 
        type: String,
        minLength: 2,
        maxLength: 50,
        required: true
     },
     lastname: { 
        type: String,
        minLength: 2,
        maxLength: 50,
        required: true,
        trim: true
     },
     age: { 
        type: Number,
        min: 0,
        max: 90,
        required: true
     },
     gender: { 
        type: String,
        enum: ['m','f'],
        required: true
    } ,
    generation: { 
      type: Number,
      min: 1,
      required: true
   },               

})

const model = mongoose.model('koders',koderSchema)

module.exports = model