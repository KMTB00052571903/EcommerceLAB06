class ProductCard extends HTMLElement {
  product: any;

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  set data(product: any) {
    this.product = product;
    this.render();
  }

  render() {
    if (!this.product) return;

    this.shadowRoot!.innerHTML = `
      <style>
        .card {
          border: 1px solid #ccc;
          border-radius: 8px;
          padding: 10px;
          text-align: center;
        }
        img {
          max-width: 100px;
          height: auto;
        }
        button {
          margin-top: 8px;
          padding: 6px 12px;
          cursor: pointer;
        }
      </style>
      <div class="card">
        <img src="${this.product.image}" alt="${this.product.title}" />
        <h3>${this.product.title}</h3>
        <p>$${this.product.price}</p>
        <button id="addBtn">Agregar al carrito</button>
      </div>
    `;

    this.shadowRoot!.querySelector("#addBtn")?.addEventListener("click", () => {
      const event = new CustomEvent("add-to-cart", { detail: this.product });
      this.dispatchEvent(event);
    });
  }
}

customElements.define("product-card", ProductCard);
