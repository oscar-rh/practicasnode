const  express = require('express')
const  router = express.Router()


router.use( (request, response, next) =>{
    console.log("Middleware de router koders")
    next()
} )



router.get('/', (request, response ) => {

    response.json ({
        message: "Get all Koders"

    })
})


router.post('/', (request, response ) => {

    response.json ({
        message: "Get all Koders"

    })
})


module.exports = router

