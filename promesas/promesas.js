

    var TIEMPO = 2000

    function construir (muro) {
        return new Promise ( (resolve, reject ) =>
        {
                setTimeout(  ()=> {
                    muro.contruido = true

                    if (muro.contruido) 
                    { resolve ( muro)
                    }
                    else 
                    {
                        const error = new Error("no se pudo construir el muro")
                        reject (error)

                    }

                } , TIEMPO  )

        })
    }


    function aplanar (muro) {
        return new Promise ( (resolve, reject ) =>
        {
                setTimeout(  ()=> {
                    muro.aplanado = true
                    if (muro.aplanado) 
                    { resolve ( muro)
                    }
                    else 
                    {
                        const error = new Error("no se pudo aplanar el muro")
                        reject (error)

                    }

                } , TIEMPO  )
        })
    }


    function pintar (muro) {
        return new Promise ( (resolve, reject ) =>
        {
                setTimeout(  ()=> {
                    muro.pintado = true
                    if (muro.pintado) 
                    { resolve ( muro)
                    }
                    else 
                    {
                        const error = new Error("no se pudo pintar el muro")
                        reject (error)
                    }

                } , TIEMPO  )
        })
    }


    let muro = {}

    const promesaDeConstruccion = construir ( muro ) 
    promesaDeConstruccion 
        .then ( (muroConstruido) => {
                muro = muroConstruido
                console.log("muro construido: ",  muroConstruido )
        })
        .catch ( (error) => {
            console.error ("ocurrio un error al construir ", error) 
        } 
    )

    const promesaDeAplanado = aplanar ( muro ) 
    promesaDeAplanado 
        .then ( (muroAplanado) => {
                 muro = muroAplanado
                console.log("muro aplanado: ",  muroAplanado )
        })
        .catch ( (error) => {
            console.error ("ocurrio un error al aplanar ", error) 
        } 
    )

    const promesaDePintado = pintar ( muro ) 
    promesaDePintado 
        .then ( (muroPintado) => {
                muro = muroPintado
                console.log("muro pintado: ",  muroPintado )
        })
        .catch ( (error) => {
            console.error ("ocurrio un error al pintar ", error) 
        } 
    )

    /* RESULTADO
    ❯ node promesas.js
    muro construido:  { contruido: true }
    muro aplanado:  { contruido: true, aplanado: true }
    muro pintado:  { contruido: true, aplanado: true, pintado: true }
    */ /


        