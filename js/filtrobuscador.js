"use strict";


export let elcomponente = document.querySelector('laLista-heroes');
console.log(elcomponente)


export const filtroBuscadordeHeroes = (texto) =>{
    let laListaNueva= [];
    datas.array.forEach(personajesComics => {
        if(personajesComics.nombre_heroes.toLocaleLowerCase().startsWith (texto)){
            laListaNueva.push(personajesComics)
        }
    });
    elcomponente = document.querySelector('lalista-heroes');
    console.log(laListaNueva)

    elcomponente.datas = laListaNueva
    //funcionalidad de la barra de busqueda 
}
    
