const mongoose = require ('mongoose')


const Cell  = require ('../models/cells')

function getAll(filters)
{
        return Cell.find(filters).populate('mentors').exec()
}

function deleteCell(id)
{
        return Cell.findByIdAndDelete(id)
}

function createCell(cell)
{
        return Cell.create(cell)
}

function updateById(id, newData)
{
        return Cell.findByIdAndUpdate(id,newData, { new: true , runValidators : true})
        
}

module.exports = {

        getAll,    
        deleteCell,
        createCell,
        updateById
}


