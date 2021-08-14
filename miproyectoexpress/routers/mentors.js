const express = require('express')
const fs = require ('fs')
const router = express.Router()    /// este router tiene el mismo alcance para generar endpoints


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
                    const json = JSON.parse(content)
                    resolve(json)
                }           
            }          
            )
    }
    )
}

/// AGREGA UN mentor 
router.post('/', async (request, response) => {
    const newMentor = request.body
    const content = await readFilePromise('koders.json', 'utf8')
    content.mentors.push(newMentor)
    fs.writeFileSync ('koders.json', JSON.stringify(content, null , 2), 'utf-8')

    response.json({
        success : true,
        message: "Mentor agregado",
        data: {
            mentor: newMentor
              }
    })

})

router.patch('/:id', async (request,response) =>{
    // const id = (request.params.id)       // ----- una forma de tener los datos del objeto 
    const {id} = request.params 
    console.log(id)
    const {name , modulo } = request.body          
    const content = await readFilePromise('koders.json', 'utf8')  

    const newMentors = content.mentors.map((mentor) => {

        if (mentor.id === parseInt(id))
        {
            mentor = {...mentor, name, modulo}
        }
        return mentor
    })

    content.mentors = newMentors
    fs.writeFileSync ('koders.json', JSON.stringify(content, null , 2), 'utf-8')

    response.json({
            success : true,
            message : "Mentor updated"

    })

} )


router.delete('/:id' , async (request, response)  => {

    const {id} = request.params      
    const content = await readFilePromise('koders.json', 'utf8')  
    const newMentors = content.mentors.filter( mentor => {
        if (mentor.id !== parseInt(id))
        {
            return { mentor }
        }
        
    } )

    content.mentors = newMentors
    fs.writeFileSync ('koders.json', JSON.stringify(content, null , 2), 'utf-8')

    response.json({
            success : true,
            message : "Mentor borrado"

    })

})



router.get('/', async (request, response) => {

    // console.log(request.query)     
    const { id,  modulo, name , counter } = request.query
    const content = await readFilePromise('koders.json', 'utf8')  
    //console.log(generation, gender, name)

    let allMentors = content.mentors

    if ( id)
    {        
        allMentors = allMentors.filter( mentor =>  mentor.id === parseInt(id)  )
    } 

    if ( name)
    {        
        allMentors = allMentors.filter( mentor =>  mentor.name === name  )
    } 

    if (modulo)
    {             
        allMentors = allMentors.filter( mentor =>  mentor.modulo === modulo )
    }    

    if (counter)
    {           
        allMentors  =  allMentors.slice(0, parseInt(counter) )            
    }    


    content.mentors = allMentors  || content.mentors
   
    response.status(200).json(
        {
            success : true, 
            message : "all mentors", 
            data : {
                    mentors : content.mentors
            }
        }

    )
    
})

module.exports = router