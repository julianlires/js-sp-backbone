class BaseView extends HTMLElement {

    constructor() {
        super();
    }

    async connectedCallback() {
        // Initialization code
        await this.showElements();

        // Render
        this.innerHTML = this.template + this.initialStyle;

        // After render
        await this.addHandlers();
    }

    // Renderers

    async showElements() {

    }

    // Event handlers

    async addHandlers() {
        this.querySelector("#button").addEventListener("click", this.handleClick);
    }

    handleClick() {
        alert("Great job!!!")
    }

    // Base template
    get template() {
        return `
            <div id="el-example" class="flexbox">
                <h3>Vanilla JS Simple Framework</h3>
                <ul id="elements">
                </ul>
                <custom-button id="button" text="Click me!"></custom-button>
            </div>
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

window.customElements.define('page-base-view', BaseView);
