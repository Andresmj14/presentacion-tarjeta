class BarLine extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({ mode: 'open' });
        this.currentFilter = 'all';
        this.loopS = '';
        this.render();
    }
    connectedCallback() {
        setTimeout(() => {
            this.setupEventListeners();
        }, 400);
    }
    
    setupEventListeners() {
        // Aquí defines los eventos necesarios para tu componente
        console.log('Configurando eventos...');
    }

    HeroesImplement() {
        
















































}














































}
