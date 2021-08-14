const express = require('express')
const server = express()


const koderRouter = require('./routerKoders')
server.use('/koders', koderRouter )

server.use(middleware)

function factoryMiddleware() {

    return (req, res, next) => {
        console.log("Middleware factory")
        next()
    }
}

server.use(factoryMiddleware())

function middleware(req, res, next)
{
    console.log ("Middleware externo")
    next()

}



// middleware anidado
server.use( (request,response, next) => {
    console.log("Middleware de aplicacion 1")
    request.user ="oscar"
    next()
} ,  (request, response, next) => {

    console.log("Middleware de aplicacion 2")
    next()
}  ) 


server.use( (request,response, next) => {
    console.log("Middleware de aplicacion 3")
    request.user ="karen"
    next()
})

// middleware individual
server.get('/', (request, response ) => {

    console.log ('user', request.user )

    response.json(
        {
            message : "Hola Koders"
        }

    )
})


server.use(express.json())




server.get('/koders',  (req, res, next) => {
    console.log ("Middleware en la ruta /koders ")
    next()
},
(request, response ) => {
    console.log ('user', request.user )

    response.json(
        {
            message : "Hola Koders"
        }

    )
})




server.listen(8080, () => {

    console.log("server running")    
})