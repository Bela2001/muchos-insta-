class MyCounter extends HTMLElement {
  static get observerAttributes() {
    return ["count"];
  }
  attributeChangedCallback(propName, oldValue, newValue) {
    this[propName] = newValue;
    this.mount();
  }
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.increaseCount = this.increaseCount.bind(this);
  }
  connectedCalback() {
    this.mount();
  }
  disconnectedCalback() {
    this.removeListenners();
  }
  mount() {
    this.render();
    this.addEventListener();
  }
  addEventListener() {
    const button = this.shadowRoot.querySelector("button");
    button.addEventListener("click", this.increaseCount);
  }
  removeEventListener() {
    const button = this.shadowRoot.querySelector("button");
    button.removeEventListener("click", this.increaseCount);
  }
  increaseLikes() {
    const likesValue = Number(this.getAttribute("count"));
    this.setAttribute("count", likeValue + 1);
  }
  render() {
    this.shadowRoot.innerHTML = `<section>
    <h1>${this.count}</h1>
    <button>click</button>
    </section>`;
  }
}

customElements.define("my-counter", MyCounter);
export default MyCounter;
