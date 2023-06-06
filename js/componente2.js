class componente2 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML =`
    <h1>Hola mundo</h1>
    `;
  }
}

window.customElements.define("componente-dos", componente2);