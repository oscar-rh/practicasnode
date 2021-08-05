const http = require ("http")

const server = http.createServer(  ( request, response)=>{
    console.log("url:" , request.url)
    console.log("method:" , request.method)
    
    response.write("<h1>Hola mundo desde un servidor en node!</h1> ")
    response.end()
})

server.listen(8000, ()=> {
/// lo que va a ejecutarse cuando se levante el servidor
        console.log('servidor escuchando en el puerto 8000')

})