const mongoose = require('mongoose')

const mentorSchema = new mongoose.Schema(
{
    name : {
        type : String ,
        required : true
    },
    lastName : {
        type : String , 
        required : true
    },
    gender : {
        type : String , 
        required : true ,
        enum: ['m','f']
    },
    modules : [{
        type : String, 
        required : true,
        enum : ['Maquetado', 'JS', 'Cloud', 'Backend', 'React']
        }]
}       
)

const model = mongoose.model('mentors',mentorSchema)

module.exports = model