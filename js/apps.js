"use strict";
import { datas} from "../js/datos.js";
import {filtroBuscadordeHeroes} from "../js/filtrobuscador.js";
import { elcomponente } from "../js/filtrobuscador.js";


class NavBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow ({mode: 'open'});
    this.shadowRoot.innerHTML = /* CCS AND HTML */`
        <style>

        </style>
            <div class="navbar">
                <form action="">
                    <h1 class="texto-buscar"> MARVEL & DC COMICS  </h1>
                    <input id="input-buscador" type="text" placeholder="BUSCAR......">

                </form>
            </div>`;
  }

    connetedCallback(){
        let eldato = this.shadowRoot.querySelector('#input-buscador')
        eldato.addEventListener('input', () => {
            let valor = eldato.ariaValueMax.toLowerCase()
            filtroBuscadordeHeroes(valor)
        })

        
    }






}
class VerlosHeroes extends HTMLElement {
  constructor() {
    super();
    this.attachShadow ({mode:'open'});
    this._datas = []
    this.estilos = document.createElement('style')
    this.estilos.innerHTML = /*apartado para el css*/`

    
    
    
    `

    
        this.shadowRoot.append(this.estilos)
    }

    
    set datas(value){
        this_datas = value;
        this.render();
    }
     render() {
        this.shadowRoot.innerHTML = ``;
        this.shadowRoot.appendChild(this.estilos.clone)
  }
}


customElements.define("nav-bar", NavBar);
customElements.define('laLista-heroes', VerlosHeroes)
elcomponente.datas = datas 