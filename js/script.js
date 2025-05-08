class BarraNavegacion extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML =        `
            <style>
                *{
                    box-sizing: border-box;
                    margin: 0;
                    padding: 0;
                    font-family: open sans;
                }
                .barra-navegacion {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-color: rgb(71, 63, 71);
                    padding: 20px;
                    
                    
                    
                }
               
                .barra-navegacion input[type="text"] {
                    width: 25rem;
                    margin-right: 10px;
                    padding: 5px;
                    border: 5px solid #ccc;
                    border-radius: 3vw;
                    font-size: 2rem;
                    
                    
                }
                .input {
                    width: 200px;
                    margin-right: 10px;
                    padding: 5px;
                    border: 5px solid #ccc;
                    border-radius: 3vw;
                }
                button {
                    padding: 5px 10px;
                    background-color:rgb(43, 68, 180);
                    color: white;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                    font-size: 1.5rem;
                    transition: background-color 0.3s ease;
                }
                button:focus {
                    
                }
                button:hover {
                    background-color:rgb(156, 42, 42);
                }
            </style>
            <div class="barra-navegacion">
            
                <input type="text" placeholder="Buscar...">
                <button>Buscar</button>
            </div>
                
        `;
        
    }
}
customElements.define('barra-navegacion', BarraNavegacion);