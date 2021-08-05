const express = require ('express')
const fs = require("fs")


// tener acceso al servidor hay que instanciar express
const server = express()

//middleware
server.use(express.json())  // -> parsea todo lo que venga en mipaquete a un formato JSON


server.get('/hola', (request, response) => {
    response.write("Hola mundo desde express")
    response.end()
})

server.post('/koders1', (request, response) => {

    // response.setHeader("Content-type", "application/json")
    // const objeto = { mensaje : "hola"}    // response.write(JSON.stringify(objeto))
    // response.end()
    // response.status(200)
    response.status(201).json({ mensaje: "Hola Koders"})
})

server.get('/mentors', (request, response) => {


    readFilePromise('mentors.json')
    .then( (content) =>{
        const contentObject = JSON.parse(content)
        response.json({contentObject})
    })
    .catch((err) => {
        response.status(400).json({error: "No se pudo leer el archivo"})
    })

    // response.setHeader("Content-type", "application/json")
    // response.write(JSON.stringify({mensajeGet: "Aqui encontraras a los mentores de kodemia"}))
    // response.end()
})

server.post('/mentors', (request, response) => {

    // const body = request.body
    // console.log("body", body)

    // response.setHeader("Content-type", "application/json")
    // response.write(JSON.stringify({mensajePost: "Aqui podras crear un mentor"}))
    // response.end()




})


server.get('/koders', (request, response) => {

    fs.readFile("koders.json", 'utf8', (error, datos) => {
        if (error) throw error;
        response.json(JSON.parse(datos))

         // console.log(JSON.parse(datos))
        //  response.setHeader("Content-type", "application/json")
        //  response.write(JSON.stringify(JSON.parse(datos)))
        //  response.end()
    });
    // response.setHeader("Content-type", "application/json")
    // const objeto = { mensaje : "hola"}    // response.write(JSON.stringify(objeto))
    // response.end()
    // response.status(200)
    
})


server.post('/koders', (request, response) => {

    const nuevosDatos = request.body  //ya viene en formato Json del postman
       
      fs.readFile("koders.json", 'utf8', (error, datosarchivo) => {          
        if (error) throw error;           
            let archivokoders = datosarchivo.toString();   // convierto los datos leidos a un string
            archivokoders = JSON.parse(archivokoders);   // de STRING json a objetos javascript
            archivokoders.koders.push(nuevosDatos);    // como ya es un objeto javascript, le hago push para agregar el dato de entrada                
            let nuevoContenido = JSON.stringify(archivokoders);   // de objeto javascript a json para guardar en el archivo
            fs.writeFile('koders.json',nuevoContenido,function(err){
                if(err){
                    console.error(err);
                }    
                response.write("Datos agregados")   
                response.end()                    
            })
        })             



})




server.listen(8080,()=>{
    console.log("listening on port 8080")
})

/*
PRACTICA:

GENERAR UNA RUTA QUE LEA DE UN ARCHIVO "JSON"
/KODERS
Y CREAR UN GET QUE LEA EL ARCHIVO JSON
*/

function readFilePromise( pathToRead )
{
    return new Promise (  (resolve, reject) => 
    {
            fs.readFile( pathToRead, 'utf8', (err, content)  => 
            {
                if (err)
                {
                    reject (err)                    
                }
                else 
                {   
                    /* const fileObject = {  pathToRead, content  }*/
                    resolve(content)
                }           
            }          
            )
    }
    )
}

server.get('/read', (req, res) => 
{
    readFilePromise('koders.json')
    .then( (content) =>{
        const contentObject = JSON.parse(content)
        res.json({contentObject})
    })
    .catch((err) => {
        res.status(400).json({error: "No se pudo leer el archivo"})
    })
})
