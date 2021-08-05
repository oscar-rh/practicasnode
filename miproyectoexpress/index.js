const express = require ('express')

// tener acceso al servidor hay que instanciar express
const server = express()

server.get('/hola', (request, response) => {
    response.write("Hola mundo desde express")
    response.end()
})

server.post('/koders', (request, response) => {

    response.setHeader("Content-type", "application/json")
    const objeto = { mensaje : "hola"}
    response.write(JSON.stringify(objeto))
    response.end()
})

server.get('/mentors', (request, response) => {
    response.setHeader("Content-type", "application/json")
    response.write(JSON.stringify({mensajeGet: "Aqui encontraras a los mentores de kodemia"}))
    response.end()
})

server.post('/mentors', (request, response) => {
    response.setHeader("Content-type", "application/json")
    response.write(JSON.stringify({mensajePost: "Aqui podras crear un mentor"}))
    response.end()
})

server.listen(8080,()=>{
    console.log("listening on port 8080")
})

