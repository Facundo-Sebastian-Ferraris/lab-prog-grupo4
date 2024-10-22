//creamos un servidor!!! (visto en el capitulo 1)

//vscode truco: si escribes req, te saldra una opcion, le das click a req
// y se te autocompleta la estructura y solo te queda completar el nombre!!! (WOW! :o) (oh si! B) )
const http = require('http');
const fs = require('fs');

// El módulo path proporciona utilidades para trabajar con rutas de archivos y 
// directorios de manera compatible entre plataformas (Windows, Linux, macOS).
const path = require('path');

const nuevoContenido ='02-index.html';

const server = http.createServer((req,res)=>{

    //concatenar la ruta absoluta con un archivo
    let filePath = path.join(__dirname, req.url === '/'? nuevoContenido: req.url);
    //_direname es una variable global que contiene la ruta absoluta del archivo en ejecucion
    // req.url === '/'? preguntamos si estamos en la raiz del sitio web

    fs.readFile(filePath,(err,content)=>{
        if (err) {
            res.writeHead(404,{'Content-Type': 'text/plain'});
            res.end('Archivo No Encontrado');
        }else{
            res.writeHead(200,{'Content-Type': 'text/html'});
            res.end(content);
        }
    });

}); 

const puerto = 3000;
const link = 'http://localhost:'+puerto;

server.listen(puerto, ()=>{
    console.log('servidor abierto ' + link);
});
//PRUEBA TIRANDO UNA DIRECCION ERRONEA PARA VER EL MENSAJE DE NO ENCONTRADO!