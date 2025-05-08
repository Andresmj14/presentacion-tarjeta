class BarraNavegacion extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML =        `
            <style>
                nav {
                    background-color: #333;
                    color: white;
                    padding: 10px;
                }
                a {
                    color: white;
                    text-decoration: none;
                    margin: 0 15px;
                }
            </style>
            <nav>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </nav>
        `;
        
    }
}
customElements.define('barra-navegacion', BarraNavegacion);