// Defincion de nuestro servidor

const express = require ('express')

const kodersRouter = require('./routers/koders')
const mentorsRouter = require('./routers/mentors')
const cellsRouter = require('./routers/cells')

const server = express()


//middleware
server.use(express.json())  // -> parsea todo lo que venga en mipaquete a un formato JSON

server.use( (request,response, next) => {
    console.log("RequestMethod: ", request.method , " RequestPath: ", request.path , " RequestBody: ", request.body   )
     next()
})

// agregamos router
server.use('/koders' , kodersRouter )
server.use('/mentors' , mentorsRouter )
server.use('/cells', cellsRouter)

module.exports = server



