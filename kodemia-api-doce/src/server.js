// Defincion de nuestro servidor

const express = require ('express')

const kodersRouter = require('./routers/koders')
const server = express()


//middleware
server.use(express.json())  // -> parsea todo lo que venga en mipaquete a un formato JSON

// agregamos router
server.use('/koders' , kodersRouter )


module.exports = server

// REQUERIMIENTO
// GENERAR  ENDPOINT GET KODERS
// 1.- Asegurarnos que nuestro modelo exista y si no lo creamos
// 2.- generar el caso de uso especificamente
// 3.- crear el endpoind


