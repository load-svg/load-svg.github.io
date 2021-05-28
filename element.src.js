customElements.define("load-svg", class extends HTMLElement {
  async connectedCallback(svg) {
    svg = await (await fetch(this.getAttribute("src"))).text();
    if (this.hasAttribute("replace")) {
      this.innerHTML = svg;
      this.replaceWith(...this.children); // replace <load-svg> with <svg>
    } else {
      this.attachShadow({
        mode: "open"
      }).innerHTML = svg;
      this.shadowRoot.append(...this.children) // append optional <style>
    }
  }
});
