
const express = require('express')
const cells = require('../usecases/cells')
const router = express.Router()

router.get( '/', async (request, response) => {


    const { id }  = request.query
    const  filters  = {}   
    
    if (id) filters._id = id  

    try{

        const allCells = await cells.getAll(filters)
        response.json({
            success: true,
            message: "Get All Cells",
            data : allCells
        })

    }
    catch (error){
        response.status(400)
        response.json({
            success: false,
            message: "Get All Cells error "  ,
            data : error.message
        })

    }
}
) 

router.delete('/:id',  async (request, response ) =>{ 
 
    try{

        const {id} = request.params  

        const cellDeleted = await cells.deleteCell(id)
   
        response.json( {
            success: true,
            message : "Celula borrado", 
            data : cellDeleted 
        })


    }
    catch (error){
        response.status(400)
        response.json({
            success: false,
            message: "Error al borrar celula"  ,
            data : error.message
        })

    } 
 })



 router.post('/',  async (request, response ) =>{ 

    try
    {
        const newCell  = request.body  
        const CellCreated = await cells.createCell( newCell )
     
        response.json( {
           success : true,
           message : "Celula creada", 
           data : CellCreated 
        })   
    }
    catch (error)
    {
        response.status(400)
        response.json( {
            success : false ,
            message : "Error al crear la celula ", 
            data : error.message             
         })
    }


})


router.patch('/:id',  async (request, response ) =>{ 
 
    try{

        const {id} = request.params  
        const  data = request.body 
         
        const cellUpdated = await cells.updateById(id, data)
    
        response.json( {
            success: true,
            message : "Celula actualizada", 
            data : cellUpdated 
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