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

module.exports = {

        getAll,    // getAll  : getAll 
        deleteKoder,
        createKoder
}

