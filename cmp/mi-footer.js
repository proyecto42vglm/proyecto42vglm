class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
        Vargas Guzmán Luis Manuel.
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
