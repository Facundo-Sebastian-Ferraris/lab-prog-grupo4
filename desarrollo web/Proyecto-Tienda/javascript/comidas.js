//DIV Contenedor
const contenedor = document.getElementById('contenido');

const menus =
[

//1
{ frente: {class: "front1", contenido: { h3: {class: "card__title", descripcion: "BatBurger"}, p: {class: "card__sub", descripcion: "Time for a"} } } , reverso: {class: "back", contenido: { p: { class: "card__body", descripcion: "Deliciosa hamburguesa con pan de la casa, carne, queso cheddar, cebolla, tomate, lechuga y salsa Sweet Bat"} } }, url: '../assets/hamburguesa2.png'},

//2
{ frente: {class: "front2", contenido: { h3: {class: "card__title", descripcion: "PizzaSmash"}, p: {class: "card__sub", descripcion: "Time for a"} } } , reverso: {class: "back", contenido: { p: { class: "card__body", descripcion: "Deliciosa combinación de salsa de tomate fresca, mozzarella derretida y albahaca fresca, todo sobre una crujiente base artesanal"} } }, url: '../assets/pizza2.png' },

//3
{ frente: {class: "front3", contenido: { h3: {class: "card__title", descripcion: "Papas Flash"}, p: {class: "card__sub", descripcion: "Time for a"} } } , reverso: {class: "back", contenido: { p: { class: "card__body", descripcion: "Deliciosas papas fritas doradas y crujientes, sazonadas a la perfección con un toque picante que llegan a tu mesa en un abrir y cerrar de ojos. ¡Irresistiblemente sabrosas!"} } }, url: '../assets/papas3.png' },

//4
{ frente: {class: "front4", contenido: { h3: {class: "card__title", descripcion: "Teque Hulks"}, p: {class: "card__sub", descripcion: "Time for a"} } } , reverso: {class: "back", contenido: { p: { class: "card__body", descripcion: "Crujientes palitos de masa rellenos de queso suave, perfectos para compartir. Se sirven calientes y acompañados de salsa de guasacaca"} } }, url: '../assets/tequenios5.png' },

//5
{ frente: {class: "front5", contenido: { h3: {class: "card__title", descripcion: "Teen Titans Tacos"}, p: {class: "card__sub", descripcion: "Time for a"} } } , reverso: {class: "back", contenido: { p: { class: "card__body", descripcion: "Deliciosos tacos con carne marinada, asada a la perfección y servida en tortillas de maíz suaves. Acompañados de piña, cebolla y cilantro frescos. ¡Con una variedad de salsas locas para elegir!"} } }, url: '../assets/tacos2.png' },

//6
{ frente: {class: "front6", contenido: { h3: {class: "card__title", descripcion: "IronChili Dog"}, p: {class: "card__sub", descripcion: "Time for a"} } } , reverso: {class: "back", contenido: { p: { class: "card__body", descripcion: "Jugosa salchicha en un pan suave, cubierta con mostaza, ketchup, cebolla picada y chili picante. ¡Un clásico favorito con un toque extravagante!"} } }, url: '../assets/hotdogs2.png' },

//7
{ frente: {class: "front7", contenido: { h3: {class: "card__title", descripcion: "Wolverine's Claws"}, p: {class: "card__sub", descripcion: "Time for a"} } } , reverso: {class: "back", contenido: { p: { class: "card__body", descripcion: "Alitas de pollo picantes y afiladas, con una salsa BBQ intensa que hará vibrar tus sentidos!"} } }, url: '../assets/pollo2.png' },

//8
{ frente: {class: "front8", contenido: { h3: {class: "card__title", descripcion: "Mystic Nachos"}, p: {class: "card__sub", descripcion: "Time for a"} } } , reverso: {class: "back", contenido: { p: { class: "card__body", descripcion: "Nachos con un hechizo especial de queso derretido y guacamole, que transportan tus papilas a otra dimensión."} } }, url: '../assets/nachos3.png' },

//9
{ frente: {class: "front9", contenido: { h3: {class: "card__title", descripcion: "Wonder Sandwich"}, p: {class: "card__sub", descripcion: "Time for a"} } } , reverso: {class: "back", contenido: { p: { class: "card__body", descripcion: "Un sándwich de pollo fuerte y delicioso acompañado con una salsa a base de miel. ¡Te empodera con cada bocado!"} } }, url: '../assets/sandwich.png'}
];




menus.forEach(menu => {
	let div = document.createElement('div');
	div.className = "card";
	
		//segundo div, de contenido
		let div2 = document.createElement('div');
		div2.className = "card__content";
	
			//tercer div, del frente
			let div3 = document.createElement('div');
	
			let unContenido = menu.frente;
	
			div3.className = unContenido.class;

            div3.style.backgroundImage = "url("+menu.url+")";

	
				//armamos los componentes internos del frente
				let aux = unContenido.contenido;
	
				let aux2 = aux.h3;
				//el H3
				let h3 = document.createElement('h3');
				h3.className = aux2.class;
				h3.textContent = aux2.descripcion;
	
				//el parrafo
				aux2 = aux.p;
				let p = document.createElement('p');
				p.className = aux2.class;
				p.textContent = aux2.descripcion;
	
			div3.appendChild(h3);
			div3.appendChild(p);
			
			//CUARTO DIV, DEL BACK
			let div4 = document.createElement('div');
			
			unContenido = menu.reverso;
			div4.className = unContenido.class;
			
				//armamos los componentes internos del back
				aux = unContenido.contenido;
	
				//el parrafo
				aux2 = aux.p;
				p = document.createElement('p');
				p.className = aux2.class;
				p.textContent = aux2.descripcion;
	
			div4.appendChild(p);
		
		div2.appendChild(div3);
		div2.appendChild(div4);
	
	div.appendChild(div2);
	
	//agregamos la carta al contenedor
	
	contenedor.appendChild(div);
	
});