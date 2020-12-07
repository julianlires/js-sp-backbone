class CustomButton extends HTMLElement {
  constructor() {
    super();
    this.text = ""; 
  }

  async connectedCallback() {
    this.text = this.getAttribute('text') || this.text;

    this.innerHTML = this.template + this.initialStyle;
  }

  // Renderers
  ////
  ////

  // Base template
  get template() {
    return `
      <button id="button" class=''>${this.text}</button>
    `;
  }

  // Base style (optional)
  get initialStyle() {
    return `
        <style>
        </style>
    `;
  }
}

window.customElements.define('custom-button', CustomButton);
