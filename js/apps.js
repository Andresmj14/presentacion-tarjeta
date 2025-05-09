"use strict";

import { HeroesStore } from "../base/datos.js";
let compn = document.querySelector('ver-heroes');
console.log(compn)

const buscarheroes = ( texto) => {
    let lisOop =[];
    HeroesStore.forEach(personaje => {
        if (personaje.clave.toLocaleLowerCase().startsWith(texto)){
            lisOop.push(personaje)
        }

    });
    compn = document.querySelector('base-heroes');
    console.log(lisOop)
    compn.HeroesStore = lisOop

}

class BarradeBusqueda extends HTMLElement {
    constructor(){
        super();
        this.attachShadow ({mode:'open'});
        this.shadowRoot.innerHTML =  `
        <style>
        
        
        </style>
        
        <div class="barra">
            <form id="form">
            <h2 class="texto-buscar>BUSCAR...</h2>
            <input id="busqueda" type="text">
            <p><span class="olo"> search</span></p>
            
            </form>
        
        
        
        
        </div>`
        ;

    }
connectedCallback(){
        let info = this.shadowRoot.querySelector('#busqueda')
        info.addEventListener('input', () => {
            let valor = info.value.toLowerCase()
            buscarheroes(valor)
        })
    }
}
class VerHeroes extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        this._HeroesStore = []
        this.styles = document.createElement('style')
        this.styles.innerHTML = /*ccs*/`
            .HeroesStore {
                padding: 20px;
                margin: 10px;
                border: 1px solid #ccc;
                border-radius: 8px;
            }
            .titulo-portada {
                font-size: 1.5em;
                color: #333;
             }
            /* Agrega más estilos aquí */
             `;
        
        
        
       
       
        
        this.shadowRoot.appendChild(this.styles)




    }
    set HeroesStore(value){
        this._HeroesStore = value ;
        this.render();



    }
    render(){
        this.shadowRoot.innerHTML = '';
        this.shadowRoot.appendChild(this.styles.cloneNode(true));
        this._HeroesStore.forEach(HeroesStore=>{
            const cadena = document.createElement('div');
                cadena.classList.add('HeroesStore')
                cadena.innerHTML = /*html*/
                    `
                    <h1 class="titulo-portada">${HeroesStore.nombre_heroes}</h1>
                    <img src=${HeroesStore.imagen} alt="">
                    <p>${HeroesStore.nombre_real}</p>
                    <p>${HeroesStore.proveniente_de}</p>
                    <p>${HeroesStore.poderes}</p>
                    <p>${HeroesStore.descripcion_del_personaje}</p>
                    <button id="view${HeroesStore.nombre_real}">Ver mas</button>
                `;
           
                this.shadowRoot.appendChild(cadena);
                //*cadena.querySelector('view${HeroesStore.nombre_real}').addEventListener('click'  {
                     Swal.fire({
                        title: "Sweet!",
                        text: "Modal with a custom image.",
                        imageUrl: "https://unsplash.it/400/200",
                        imageWidth: 400,
                        imageHeight: 200,
                        imageAlt: "Custom image"
                    })
                



                





        });
    }
}
customElements.define('barrade-busqueda', BarradeBusqueda)
customElements.define('ver-heroes',VerHeroes)
compn.HeroesStore = HeroesStore

