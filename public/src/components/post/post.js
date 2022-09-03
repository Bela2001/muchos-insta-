class Post extends HTMLElement {
  static get observedAttributes() {
    return ["username", "numerolikes", "comentario1"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(prop, oldValue, newValue) {
    this[prop] = newValue;
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/components/post/style.css">

        <section class="fondoDePantalla">

        <img id="logo" src="./assets/Yourlogo.png"/>
        <h1 id="Username">${this.username}</h1>
        <img id="Moreinfo" src="./assets/Moreinfo.png"/>

        <img id="Group" src="./assets/Group.png"/>

        <h1 id="Likes">${this.numerolikes} </h1>
        <p id="Comentario1">
        ${this.comentario1} 
        </p>
        
       

        <img id="Hearticon" src="./assets/Hearticon.png"/>
        <img id="Commenticon" src="./assets/Commenticon.png"/>
        <img id="Shareicon" src="./assets/Shareicon.png"/>

        <img id="Saveicon" src="./assets/Saveicon.png"/>
        

        </section>

        `;
  }
}

customElements.define("my-post", Post);
export default Post;
