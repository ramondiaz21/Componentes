class componente1 extends HTMLElement {
  constructor() {
    super();

    let shadow = this.attachShadow({
      mode: 'open'
    });

    this.divHeader = document.createElement("div");
    this.divContent = document.createElement("div");
    this.modePicture = false;
    //this.divHeader.innerHTML = "hola mundo";

    this.getAttribute("data-title");
    this.getAttribute("data-field");
    shadow.appendChild(this.divHeader);
    shadow.appendChild(this.divContent);
  }

  connectedCallback() {
    this.divHeader.innerHTML =
      `
    <h1>Hola ${this.getAttribute("data-title")}</h1>
    `;

    let url = this.getAttribute("data-url");
    let field = this.getAttribute("data-field");
    if (this.getAttribute("modePicture")) {
      this.modePicture = this.getAttribute("modePicture")
    }
    console.log(this.modePicture);

    //fetch te sirve para hacer peticiones http
    this.divContent.innerHTML = "";

    fetch(url)
      .then(response => response.json())
      .then(json => json.forEach(element => {
        if (this.modePicture === 'true') {
          this.divContent.innerHTML += `
          <img src='${element[field]}'></img>
          `;
        } else {
          this.divContent.innerHTML += `
          <div>
          ${element[field]}
          </div>
          `;
        }

      }));
  }
}

customElements.define("app-list", componente1);