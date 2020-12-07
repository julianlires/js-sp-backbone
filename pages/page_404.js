class Page404 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = this.template + this.initialStyle;

    //this.querySelector('#404-image').src = ''
  }

  get template() {
    return `
    <div class='container'>
      <img id='404-image' src='../images/404.png'>
      </img>
    </div>
    `;
  }

  get initialStyle() {
    return `
    <style>
      page-404 {
        width: 100%;
        height: calc(100vh - 150px);
      }

      page-404 .container img {
        width: 100%;
        position: relative;
        top: 10vh;
      }
    </style>
    `;
  }
}

window.customElements.define('page-404', Page404);
