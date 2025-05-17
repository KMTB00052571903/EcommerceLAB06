import { cartStore } from "../flux/store/cartStore";
import { dispatcher } from "../flux/dispatcher/dispatcher";

class Cart extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    cartStore.addEventListener("change", () => this.render());
    this.render();
  }

  render() {
    const items = cartStore.getCart();
    const total = items.reduce((acc, item) => acc + item.price, 0).toFixed(2);

    this.shadowRoot!.innerHTML = `
      <style>
        .cart {
          padding: 1rem;
          background: #f9f9f9;
          border-radius: 10px;
        }
        .item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #fff;
          padding: 10px;
          margin-bottom: 10px;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .item img {
          width: 60px;
          height: auto;
          margin-right: 10px;
        }
        .item-title {
          flex: 1;
          font-weight: bold;
        }
        .item-price {
          margin-right: 10px;
        }
        .remove-btn {
          color: red;
          cursor: pointer;
        }
      </style>
      <div class="cart">
        <h2>Carrito</h2>
        ${items.map((item, index) => `
          <div class="item" data-index="${index}">
            <img src="${item.image}" alt="${item.title}">
            <span class="item-title">${item.title}</span>
            <span class="item-price">$${item.price}</span>
            <span class="remove-btn" data-index="${index}">Eliminar</span>
          </div>
        `).join("")}
        <p><strong>Total: $${total}</strong></p>
        <button id="clearBtn">Vaciar carrito</button>
      </div>
    `;

    this.shadowRoot!.querySelectorAll(".remove-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const index = parseInt((e.target as HTMLElement).dataset.index || "0", 10);
        dispatcher.dispatch({ type: "REMOVE_FROM_CART", payload: index });
      });
    });

    this.shadowRoot!.querySelector("#clearBtn")?.addEventListener("click", () => {
      dispatcher.dispatch({ type: "CLEAR_CART" });
    });
  }
}

customElements.define("cart-view", Cart);
