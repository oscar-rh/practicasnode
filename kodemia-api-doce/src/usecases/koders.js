const Koder = require ('../models/koders')

function getAll()
{
        return Koder.find()
}

function deleteKoder(id)
{
        return Koder.findByIdAndDelete(id)
}

function createKoder(koder)
{
        return Koder.create(koder)
}

function updateById(id, newData)
{
        return Koder.findByIdAndUpdate(id,newData, { new: true})
}

module.exports = {

        getAll,    // getAll  : getAll 
        deleteKoder,
        createKoder,
        updateById
}

