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


/// AGREGA UN KODER 
router.post('/', async (request, response) => {
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

router.patch('/:id', async (request,response) =>{
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


router.delete('/:id' , async (request, response)  => {

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



//  koders?generation=10&name=antonio&limit=5                /// QUERY PARAMS
router.get('/', async (request, response) => {

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

module.exports = router


/// router extension del servidor que puede tener los mismos metodos del servidor, 
/// nos permite crear y administrar carpetas para organizar el código
// hay que exportar el router
// y en el index tenemos que importarlo e indicarle al servidor 


//  retomamos query params
//  concepto de routers que dividimos recursos (endpoints) y modularizarlos
//  como configurar una bd mongo en un servicio en la nube
//  conceptos de bases de datos  