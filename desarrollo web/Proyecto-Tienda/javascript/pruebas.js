const navBar = document.getElementById('navegador')


//crear icono de ir a menu
const logo = document.createElement('a');
logo.className = 'logo';
logo.href = '../HTML/index.html';

//crear botones
const navItems =
[
    {   class: 'boton',    href: '../HTML/indexcomida.html',   text: 'COMIDA'  },
    {   class: 'boton',    href: '../HTML/indexComics.html',   text: 'COMICS'  },
    {   class: 'boton',    href: '../HTML/indexContacto.html', text: 'CONTACTO'}
];


//insercion de menu
navBar.appendChild(logo);

//inserciones de botones
navItems.forEach(item => {
    let a = document.createElement('a');
    a.className = item.class;  
    a.href = item.href;
    a.textContent = item.text;
    navBar.appendChild(a);
});
