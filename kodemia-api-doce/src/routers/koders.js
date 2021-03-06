
const express = require('express')
const koders = require('../usecases/koders')
const router = express.Router()

router.get( '/', async (request, response) => {

    try{

        const allKoders = await koders.getAll()
        response.json({
            success: true,
            message: "Get All koders",
            data : allKoders
        })

    }
    catch (error){
        response.status(400)
        response.json({
            success: false,
            message: "Get All koders error "  ,
            data : error.message
        })

    }
}
) 

router.delete('/:id',  async (request, response ) =>{ 
 
    try{

        const {id} = request.params  

        const koderDeleted = await koders.deleteKoder(id)
     
        response.json( {
            success: true,
            message : "Koder borrado", 
            data : koderDeleted 
        })


    }
    catch (error){
        response.status(400)
        response.json({
            success: false,
            message: "Error al borrar koder"  ,
            data : error.message
        })

    } 
 })



 router.post('/',  async (request, response ) =>{ 

    try
    {
        const newKoder  = request.body  
        const koderCreated = await koders.createKoder( newKoder )

        response.json( {
           success : true,
           message : "Koder creado", 
           data : koderCreated 
        })   
    }
    catch (error)
    {
        response.status(400)
        response.json( {
            success : false ,
            message : "Error al crear el koder ", 
            data : error.message             
         })
    }


})


router.patch('/:id',  async (request, response ) =>{ 
 
    try{

        const {id} = request.params  
        const  data = request.body 

         
        const koderUpdated = await koders.updateById(id, data)
  
        response.json( {
            success: true,
            message : "Koder actualizado", 
            data : koderUpdated 
        })


    }
    catch (error){
        response.status(400)
        response.json({
            success: false,
            message: "Error al actualizar koder"  ,
            data : error.message
        })

    } 
 })


module.exports = router 