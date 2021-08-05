const http = require ("http")

const server = http.createServer( (request, response)  => {

    //response.write("hola")
    console.log("method:" , request.method)
    console.log("url:" , request.url)

    if (request.url == '/mentors' && request.method == 'GET')
    {
        response.write ("Aqui encontraras a los mentores de kodemia")
    } else if (request.url == '/mentors' && request.method == 'POST')
    {
        response.write ("Aqui podras crear un mentor")
    }
    else 
    {
        response.write ("No se esperaba esto")
    }


    response.end()

    
})

server.listen( 8080, () =>{
    console.log("servidor corriendo")
   
})


