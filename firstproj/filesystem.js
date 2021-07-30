const fs = require("fs")
/*
/// crear archivo   CREATE
  fs.writeFile('mensaje.txt', 'Hello world!!','utf8', (err) => {

    if (err) throw err
    console.log('El archivo ha sido creado')
  })

/// leer archivo    READ
  fs.readFile('mensaje.txt', 'utf8' ,  (err, data) => {
    if (err) {
        console.error(err)
    }
    else{
        console.log('Datos:', data)
      }
  } )

  // agregar lineas   UPDATE 
  fs.appendFile('mensaje.txt', 'Mas datos!!','utf8', (err) => {
    if (err) throw err
    console.log('El archivo ha sido modificado')
  })
*/
  // borra un archivo DELETE   PORQUE SIMPLEMENTE PUEDE ELIMINAR VINCULOS
  /*
  fs.unlink('mensaje.txt', (err) => {
    if (err) throw err
    console.log('El archivo ha sido borrado')
  })
  */




  //  INVESTIGAR  como se puede utilizar   fs.copyFile()

/*
  fs.copyFile('mensaje.txt', 'archivocopia.txt', (err) => {
    if (err) throw err
    console.log('El archivo ha sido copiado')
  })
*/
  //  y cuales vamos a ocupar para directorios  crear leer y modficar directorios     
/*
  fs.opendir
  fs.readdir
  fs.mkdir
  fs.rmdir
  fs.renameSync
*/

/*
fs.mkdir("prueba2",function(err){
if (err) {
return console.error(err);
}
console.log("Directorio creado");
});
*/

/*
fs.rmdir("prueba2",function(err){
    if (err) {
    return console.error(err);
    }
    console.log("Directorio borrado");
    });
*/
/*
if (fs.existsSync('prueba'))
 {
    console.log("el directorio ya existe")
}
*/
/*
fs.rename("prueba","prueba3", (err) =>{
    if (err) {
    return console.error(err);
    }
    console.log("Directorio renombrado");
    })
*/
/*
fs.readdir("test", (err, files) => {
    if (err)
      console.log(err);
    else {
      console.log("\n Archivos en el directorio:");
      files.forEach(file => {
        console.log(file);
      })
    }
  })
*/

