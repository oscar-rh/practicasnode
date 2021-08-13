
const express = require('express')
const mentors = require('../usecases/mentors')
const router = express.Router()

router.get( '/', async (request, response) => {

    try{

        const allMentors = await mentors.getAll()
        response.json({
            success: true,
            message: "Get All mentors",
            data : allMentors
        })

    }
    catch (error){
        response.status(400)
        response.json({
            success: false,
            message: "Get All mentors error "  ,
            data : error.message
        })

    }
}
)



router.post('/',  async (request, response ) =>{ 

    try
    {
        const newMentor  = request.body  
        const mentorCreated = await mentors.createMentor( newMentor )
  
        response.json( {
           success : true,
           message : "Mentor creado", 
           data : mentorCreated 
        })   
    }
    catch (error)
    {
        response.status(400)
        response.json( {
            success : false ,
            message : "Error al crear el mentor ", 
            data : error.message             
         })
    }


})


router.delete('/:id',  async (request, response ) =>{ 
 
    try{

        const {id} = request.params   
        const mentorDeleted = await mentors.deleteMentor(id)
  
        response.json( {
            success: true,
            message : "Mentor borrado", 
            data : mentorDeleted 
        })


    }
    catch (error){
        response.status(400)
        response.json({
            success: false,
            message: "Error al borrar mentor"  ,
            data : error.message
        })

    } 
 })



router.patch('/:id',  async (request, response ) =>{ 
 
    try{
        const {id} = request.params  
        const  data = request.body 

        const mentorUpdated = await mentors.updateById(id, data)
   
        response.json( {
            success: true,
            message : "Mentor actualizado", 
            data : mentorUpdated 
        })


    }
    catch (error){
        response.status(400)
        response.json({
            success: false,
            message: "Error al actualizar mentor"  ,
            data : error.message
        })

    } 
 })


module.exports = router 