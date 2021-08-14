const express = require ('express')
const fs = require("fs")

const kodersRouter  = require ('./routers/koders')
const mentorsRouter = require ('./routers/mentors')


// tener acceso al servidor hay que instanciar express
const server = express()

//middleware
server.use(express.json())  // -> parsea todo lo que venga en mipaquete a un formato JSON


server.use('/koders', kodersRouter )
server.use('/mentors', mentorsRouter )


server.get('/', (request, response) => {
    response.write("Hola mundo desde express")
    response.end()
})

server.listen(8080,()=>{
    console.log("listening on port 8080")
})


/*
server.post('/koders1', (request, response) => {

    // response.setHeader("Content-type", "application/json")
    // const objeto = { mensaje : "hola"}    // response.write(JSON.stringify(objeto))
    // response.end()
    // response.status(200)
    response.status(201).json({ mensaje: "Hola Koders"})
})
*/


// server.get('/mentors', (request, response) => {


//     readFilePromise('mentors.json')
//     .then( (content) =>{
//         const contentObject = JSON.parse(content)
//         response.json({contentObject})
//     })
//     .catch((err) => {
//         response.status(400).json({error: "No se pudo leer el archivo"})
//     })

//     // response.setHeader("Content-type", "application/json")
//     // response.write(JSON.stringify({mensajeGet: "Aqui encontraras a los mentores de kodemia"}))
//     // response.end()
// })

// server.post('/mentors', (request, response) => {

//     // const body = request.body
//     // console.log("body", body)

//     // response.setHeader("Content-type", "application/json")
//     // response.write(JSON.stringify({mensajePost: "Aqui podras crear un mentor"}))
//     // response.end()


// })


/*
server.get('/koders', (request, response) => {

    console.log(request.query)     //  koders?generation=10&name=antonio&limit=5                /// QUERY PARAMS



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
*/

/*
server.post('/kodersorh', (request, response) => {

    const nuevosDatos = request.body  //ya viene en formato Json del postman
       
      fs.readFile("koders.json", 'utf8', (error, datosarchivo) => {          
        if (error) throw error;           
            let archivokoders = datosarchivo.toString();   // convierto los datos leidos a un string
            archivokoders = JSON.parse(archivokoders);   // de STRING en formato json a objetos javascript
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

*/


/*
PRACTICA:

GENERAR UNA RUTA QUE LEA DE UN ARCHIVO "JSON"
/KODERS
Y CREAR UN GET QUE LEA EL ARCHIVO JSON
*/

/*
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
                    ///  const fileObject = {  pathToRead, content  }
                    const json = JSON.parse(content)
                    resolve(json)
                }           
            }          
            )
    }
    )
}

*/


//// USANDO PROMESAS
/*
server.get('/koders', (req, res) => 
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

*/
//// USANDO ASYN Y AWAIT, AWAIT HACE QUE LA FUNCION SE ESPERE HASTA QUE TERMINE PARA QUE NO CONTINUE, PERO REQUIERE QUE LA FUNCION SEA ASYNCRONA, 
/// POR ESO SE LE COLOCA EL ASYNC AL CALLBACK

/*
server.get('/koders2', async (req, res) => 
{
    //const content = await fs.promises.readFile('koders.json', 'utf8') //// ESTA ES UNA OPCION DIFERENTE DE USAR UN METODO DE FS QUE YA DEVUELVE UNA PROMESA
    const content = await readFilePromise('koders.json', 'utf8')
    console.log(content)
    res.status(200).json({success: true  ,
                          message: "all koders", 
                          data: {
                                     koders : content.koders
                                } 
                            })
})
*/

/// AGREGA UN KODER 
/*
server.post('/koders2', async (request, response) => {
    const newKoder = request.body
    const content = await readFilePromise('koders.json', 'utf8')
    content.koders.push(newKoder)
    fs.writeFileSync ('koders.json', JSON.stringify(content, null , 2), 'utf-8')

    response.json({
        success : true,
        message: "Koder agregado",
        data: {
            koder: newKoder
              }
    })

})
*/
/// PATH PARAMS     /koders/:id

/*
server.patch('/koders/:id', async (request,response) =>{
    // const id = (request.params.id)       // ----- una forma de tener los datos del objeto 
    const {id} = request.params 
    console.log(id)
    const {name , generation } = request.body          
    const content = await readFilePromise('koders.json', 'utf8')  


    const newKoders = content.koders.map((koder) => {

        if (koder.id === parseInt(id))
        {
            koder = {...koder, name, generation}
        }
        return koder
    })

    content.koders = newKoders
    fs.writeFileSync ('koders.json', JSON.stringify(content, null , 2), 'utf-8')

    response.json({
            success : true,
            message : "koder updated"

    })

} )
*/

/*
server.get('/koders/:id' , async (request, response) => {

    const {id} = request.params      
    const content = await readFilePromise('koders.json', 'utf8')  

    const oneKoder = content.koders.filter(koder => {

        if (koder.id === parseInt(id))
        {
            return koder    
        }    
        
    }) 
    
    //// otra manera de hacerlo
    const koderFound = content.koders.find( koder => koder.id === parseInt(id) )


    if (!koderFound)
    {
        response.json({
            success : false,
            message : "koder no encontrado" 
        })

    }
    else
    {
        response.json({
            success : true,
            message : "koder encontrado" ,
            data    :  oneKoder   ,
            data2   :  koderFound
        })
    }

})
*/


/*
server.delete('/koders/:id' , async (request, response)  => {

    const {id} = request.params      
    const content = await readFilePromise('koders.json', 'utf8')  
    
    const newKoders = content.koders.filter( koder => {
        if (koder.id !== parseInt(id))
        {
            return { koder }
        }
        
    } )

    content.koders = newKoders
    fs.writeFileSync ('koders.json', JSON.stringify(content, null , 2), 'utf-8')

    response.json({
            success : true,
            message : "koder borrado"

    })

})

*/


//  koders?generation=10&name=antonio&limit=5                /// QUERY PARAMS
/*
server.get('/koders4', async (request, response) => {

    // console.log(request.query)     
    const {generation, gender, name , counter } = request.query
    const content = await readFilePromise('koders.json', 'utf8')  
    //console.log(generation, gender, name)

    let kodersByGeneration = content.koders

    if ( name)
    {        
        kodersByGeneration = kodersByGeneration.filter( koder =>  koder.name === name  )
    } 

    if (generation)
    {                
        kodersByGeneration = kodersByGeneration.filter( koder =>  koder.generation === parseInt(generation) )
    }

    if (gender)
    {             
        kodersByGeneration = kodersByGeneration.filter( koder =>  koder.gender === gender )
    }    

    if (counter)
    {           
        kodersByGeneration  =  kodersByGeneration.slice(0, parseInt(counter) )            
    }    



    content.koders = kodersByGeneration  || content.koders
   
    response.status(200).json(
        {
            success : true, 
            message : "all koders", 
            data : {
                    koders : content.koders
            }
        }

    )
    
})
*/
