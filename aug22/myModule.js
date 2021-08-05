const moduleContent = {

    nombre: "some name", 
    someFunction: () => {

        console.log ("hola desde un modulo")
    } , 
    addTwoNumbers: (first, second) =>{
            return first + second
    }

}


exports.moduleContent = moduleContent