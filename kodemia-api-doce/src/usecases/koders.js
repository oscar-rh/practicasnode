const Koder = require ('../models/koders')
const bcrypt = require ('../lib/bcrypt')

function getAll()
{
        return Koder.find()
}

function deleteKoder(id)
{
        return Koder.findByIdAndDelete(id)
}

async function  createKoder(koder)
{
        const {email, password} = koder
        
        const koderFound = await Koder.findOne( {email})

        if (koderFound) throw new Error('El email del koder ya existe')

        const encryptedPassword =  await bcrypt.hash(password)
       
        return Koder.create({...koder, password : encryptedPassword} )
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

