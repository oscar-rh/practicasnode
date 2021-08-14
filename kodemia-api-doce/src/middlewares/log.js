

function printLog () 
{
    (request,response, next) => {
    console.log("RequestMethod: ", request.method , " RequestPath: ", request.path , " RequestBody: ", request.body   )
    next()
}

}
module.exports = printLog