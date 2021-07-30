var fs = require("fs")


function createDir ( nameDir){
    fs.mkdir(nameDir,function(err){
        if (err) {
        return console.error(err);
        }
        console.log(`Directorio ${nameDir}  ha sido creado`)
        });
}

function createFile ( nameFile){
    fs.writeFile(nameFile, '','utf8', (err) => {
        if (err) throw err
        console.log(`el archivo ${nameFile}  ha sido creado`);
      })
}

function appendFileContent( nameFile, dataToAdd){

    fs.appendFile(nameFile, dataToAdd,'utf8', (err) => {
        if (err) throw err
        console.log(`Se ha añadido contendio al archivo  ${nameFile}`)
      })
    
}

function deleteFile (nameFile) {

  fs.unlink(nameFile, (err) => {
    if (err) throw err
    console.log(`El archivo ${nameFile} ha sido borrado`)
  })

  }

function deleteDirAndFiles ( nameDir){
    fs.rmdir(   nameDir, { recursive: true } , function(err){
        if (err) {
        return console.error(err);
        }
        console.log(`Directorio ${nameDir}  ha sido borrado`)
        });
}


// createFile ("prueba.txt")
// createDir ("dirprueba")
// createFile ("dirprueba/prueba1.txt")
// appendFileContent ("dirprueba/prueba1.txt", "hola koders")
// deleteDirAndFiles("dirprueba")

