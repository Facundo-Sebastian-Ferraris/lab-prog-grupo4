//DIV Contenedor

const cartel = document.getElementById("cartel");

const items =
[
{class: "lata", style: "--etiqueta: url(../assets/PerkCans/01-perk.webp); --posicion:9"},
{class: "lata", style: "--etiqueta: url(../assets/PerkCans/02-perk.webp); --posicion:7"},
{class: "lata", style: "--etiqueta: url(../assets/PerkCans/03-perk.webp); --posicion:5"},
{class: "lata", style: "--etiqueta: url(../assets/PerkCans/04-perk.webp); --posicion:3"},
{class: "lata", style: "--etiqueta: url(../assets/PerkCans/05-perk.webp); --posicion:1"},
{class: "lata", style: "--etiqueta: url(../assets/PerkCans/06-perk.webp); --posicion:-1"},
{class: "lata", style: "--etiqueta: url(../assets/PerkCans/07-perk.webp); --posicion:-3"},
{class: "lata", style: "--etiqueta: url(../assets/PerkCans/08-perk.webp); --posicion:-5"},
{class: "lata", style: "--etiqueta: url(../assets/PerkCans/09-perk.webp); --posicion:-7"},
{class: "lata", style: "--etiqueta: url(../assets/PerkCans/10-perk.webp); --posicion:-9"}
];

items.forEach(item => {
    let div1 = document.createElement('div');
    div1.className = "producto";

    let div2 = document.createElement('div');
    div2.className = item.class;
    //div2.style.cssText = item.style;
    div2.style = item.style;
    //div2.setAttribute("style",item.style);

    div1.appendChild(div2);

    cartel.appendChild(div1);

});
