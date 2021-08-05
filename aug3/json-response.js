const http = require ("http")

const server = http.createServer( (request, response)  => {

    
    //response.setHeader('Content-Type', 'application/json');
    response.writeHead  (200, {'Content-Type': 'application/json'});
    let objeto = { mensaje: "hola mundo" , mensaje2: "esto es una prueba de un objeto Json" }
    response.write(JSON.stringify( objeto  ))
    response.end();

    
})

server.listen( 8080, () =>{
    console.log("servidor corriendo")
   
})


