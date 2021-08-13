const Mentor = require ('../models/mentors')

function getAll()
{
        return Mentor.find()
}

function deleteMentor(id)
{
        return Mentor.findByIdAndDelete(id)
}

function createMentor(koder)
{
        return Mentor.create(koder)
}

function updateById(id, newData)
{
        return Mentor.findByIdAndUpdate(id,newData, { new: true , runValidators : true})
}

module.exports = {

        getAll,    // getAll  : getAll 
        deleteMentor,
        createMentor,
        updateById
}