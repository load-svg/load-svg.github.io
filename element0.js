customElements.define("load-svg",class extends HTMLElement{async connectedCallback(t=this.attachShadow({mode:"open"})){t.innerHTML=await(await fetch(this.getAttribute("src"))).text();t.children[0].append(...this.children);this.hasAttribute("replace")&&this.replaceWith(t.children[0])}})
