import { fetchProducts } from "../actions/productActions";
import { productStore } from "../flux/store/productStore";
import { dispatcher } from "../flux/dispatcher/dispatcher";

class ProductList extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    productStore.addEventListener("change", () => this.render());
    dispatcher.dispatch(fetchProducts());
  }

  render() {
    const products = productStore.getProducts();
    this.shadowRoot!.innerHTML = `<div class="list"></div>`;

    const list = this.shadowRoot!.querySelector(".list")!;
    products.forEach(product => {
      const card = document.createElement("product-card");
      (card as any).data = product;
      card.addEventListener("add-to-cart", (e: any) => {
        dispatcher.dispatch({
          type: "ADD_TO_CART",
          payload: e.detail
        });
      });
      list.appendChild(card);
    });
  }
}

customElements.define("product-list", ProductList);
