const mongoose = require('mongoose');

const DB_USER = 'oscarh'
const DB_PASSWORD = 'kodemia123'
const DB_HOST = 'kodemia-12va.qclvg.mongodb.net'
const DB_NAME = 'kodemia'

// const url = "mongodb+srv://oscarh:kodemia123@kodemia-12va.qclvg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const url = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`

// SCHEMA
// schema: para generar un modelo, necesitamos un esquema, es decir la definicion de cada campo, es decir si va a ser requerido, 
// si tiene un maximo de caracteres, generar validaciones de los campos, etc. 

const koderSchema = new mongoose.Schema({
    name: { 
        type: String,
        minLength: 2,
        maxLength: 50,
        require: true
     },
     lastName: { 
        type: String,
        minLength: 2,
        maxLength: 50,
        require: true,
        trim: true
     },
     age: { 
        type: Number,
        min: 0,
        max: 90,
        require: true
     },
     gender: { 
        type: String,
        enum: ['m','f'],
        require: true
    }            

})


// MODELO
// modelo: lo vamos a ver como una plantilla o un formato que esta y hay que rellenar que me permita conectarme a mi coleccion
// especifica y me va a permitir CRUD a mi coleccion, no podemos agregar ni quitar campos.

const Koder = mongoose.model('koders',koderSchema)

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
    .then( async (connection) =>  {
        console.log("Base de datos Conectada") // connection                
    
    /// CONSULTAR A LOS KODERS CON PROMESAS Y ASYNC AWAIT
     /*
        // const allkoders = await Koder.find({})
        // console.log (allkoders)
     */
    /*
            // Koder.find()
        // .then( (koders) => {
        //     console.log(koders)
        // })
        // .catch( err => {
        //     console.log("Error al traer koders", err)
        // })
    */
   
    //// CREAR UN REGISTRO    
    const koderCreated = await Koder.create( { name:"Alfred", lastName: "Pizaña", gender:"m", edad:"27" } )
    console.log(koderCreated)    


    }  )

    .catch(error => {
        console.log("Hubo un error", error)
    } )







    
