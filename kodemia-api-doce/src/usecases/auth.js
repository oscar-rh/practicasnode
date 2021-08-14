
const Koder = require ('../models/koders')
const bcrypt = require ('../lib/bcrypt')



async function login (email, password){

    const koderFound =  await Koder.findOne ({email})

    if (!koderFound) throw new Error ('Credenciales Invalidas 1')

    const isValidPassword = bcrypt.compare(password, koderFound.password)

    if (!isValidPassword) throw new Error  ('Credenciales Invalidas 2')

    //regresar el token
 

    
}