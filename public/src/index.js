import "./components/post/post.js";
import "./components/contador/contador.js";
import data from "./components/data.js";

class MyContainer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const compts = data.map(
      ({ username, numerolikes, comentario1 }) => `
    <my-post username="${username}"
    numerolikes="${numerolikes}"
    comentario1="${comentario1}"></my-post>
    
    <my-counter></my-counter>
    `
    );
    console.log(compts);

    this.shadowRoot.innerHTML = compts.join("");
  }
}

customElements.define("my-container", MyContainer);
