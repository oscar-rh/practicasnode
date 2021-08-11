const express = require ('express')
const server = express()
const mongoose = require('mongoose');

const DB_USER = 'oscarh'
const DB_PASSWORD = 'kodemia123'
const DB_HOST = 'kodemia-12va.qclvg.mongodb.net'
const DB_NAME = 'kodemia'

const url = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`

const Koder = require("./koderModel")

//middleware
server.use(express.json())  // -> parsea todo lo que venga en mipaquete a un formato JSON


server.get('/', (request, response ) =>{
    response.json( {
        message : "API WITH MONGOOSE"
    })
})

server.get('/koders', async (request, response ) =>{    

    const koders = await Koder.find({})
    let { gender, age, generation , name , lastname }  = request.query

    let kodersFiltered = koders
    
    console.log( gender, age, name , lastname , generation)

    if (gender)
    {   
        kodersFiltered = kodersFiltered.filter( koder => {         
                    return koder.gender === gender 
               }  )
    }
    if (age)
    {           
        kodersFiltered = kodersFiltered.filter( koder => {                     
                    return koder.age === parseInt(age) 
                }  )
    }
    if (generation)
    {           
        kodersFiltered = kodersFiltered.filter( koder => {    
                    console.log(koder.generation)                 
                    return koder.generation === parseInt(generation) 
                }  )
    }  
    if (name)
    {           
        kodersFiltered = kodersFiltered.filter( koder => {                     
                    return koder.name === name 
                }  )
    }    
    if (lastname)
    {           
        kodersFiltered = kodersFiltered.filter( koder => {                                      
                    return koder.lastname === lastname 
                }  )
    }      

    response.json( {
        message : kodersFiltered
    })
})


server.post('/koders',  async (request, response ) =>{ 
     let { gender, age, generation , name , lastname }  = request.body  
    const koderCreated = await Koder.create( { name:name, lastname: lastname, gender:gender, age:age , generation:generation } )
    console.log(koderCreated)      
    response.json( {
        message : "Koder creado", 
        data : koderCreated 
    })

})

server.delete('/koders/:id',  async (request, response ) =>{  
   const {id} = request.params  
   console.log(id)   
   const koderDeleted = await Koder.findByIdAndDelete(id)
   console.log(koderDeleted)      
   response.json( {
       message : "Koder borrado", 
       data : koderDeleted 
   })

})

server.patch('/koders/:id',  async (request, response ) =>{  
    const {id} = request.params  
    console.log(id)   
    const {generation , age } = request.body        
    const koderUpdated = await Koder.findByIdAndUpdate(id, { generation: parseInt(generation) , age: parseInt(age) })
    console.log(koderUpdated)      
    response.json( {
        message : "Koder actualizado", 
        data : koderUpdated 
    })
 
 })



mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(  (connection) =>  {
        console.log("Base de datos Conectada") // connection  

        server.listen(8080, () =>{
            console.log("Servidor escuchando")
        })
        
    }  )
    .catch(error => {
        console.log("Hubo un error", error)
    } )

//  PRACTICA: GENERAR UN ENPOINT QUERY PARAMS FILTRAR POR GENDER, POR EDAD, 
// GET /KODERS/?gender=m&age=23
// POST /KODERS

// VIMOS COMO NOS CONECTAMOS A LA BD POR UNA INTERFAZ GRAFICA 
// LA ESTRUCUTRA DE LA CONEXION A LA BD MONGO
// COMO CONECTARNOS CON MONGOOSE Y CREAR PETICIONES
// APLICAR FILTROS CON EL METODO FIND({}) Y USAR OPERADORES LOGICOS Y DE COMPARACION
// COMO INTEGRARLO CON EXPRESS, QUE SE CONECTE Y TRAER DATA.
// MODELO Y SCHEMA