// Express es un framework ligero que facilita la creación de servidores web y APIs en Node.js. 
// Usarlo será el siguiente paso natural para estructurar mejor tus aplicaciones.
// instalamos con el comando: npm install express

//importamos express
const express = require('express');

//instanciamos express
const app = express();

//importamos path
const path = require('path');

// crea un middleware que sirve archivos estáticos (HTML, CSS, JS) (eso es por el express.static(...))
// esto sirve para cuando tu archivo html requiere algun archivo de esa carpeta, entonces
//lo obtenga de inmediato.
app.use(express.static(path.join(__dirname, '03-b-public')));

//cuando alguien accede a la direccion raiz, entonces...
app.get('/', (req, res) => {
    //... se lo redireccionara hacia el archivo index.html

    res.sendFile(path.join(__dirname, '03-b-public', 'index.html'));
});


//comunicamos servidor en puerto 3000
const port = 3000;
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});


//notemos que no es necesario crear las constantes http, el crear servidor, entre otros, gracias a express.

//un middleware lo puedes imaginar como un filtro o proceso de 
//producción en una línea de ensamblaje, donde cada parte del 
//proceso contribuye a la creación del producto final.

//si quitamos el middleware de express.static, se tendria que hacer varios app.get para cada elemento de la carpeta
//lo cual seria caotico