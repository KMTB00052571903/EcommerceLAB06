import { dispatcher } from "../dispatcher/dispatcher";

type Product = {
  id: number;
  title: string;
  image: string;
  price: number;
};

class CartStore extends EventTarget {
  private cart: Product[] = [];

  constructor() {
    super();
    this.loadCart();
    dispatcher.register(this.handleActions.bind(this));
  }

  private handleActions(action: { type: string; payload?: any }) {
    switch (action.type) {
      case "ADD_TO_CART":
        this.cart.push(action.payload);
        this.saveCart();
        this.dispatchEvent(new Event("change"));
        break;

      case "REMOVE_FROM_CART":
        this.cart = this.cart.filter(p => p.id !== action.payload);
        this.saveCart();
        this.dispatchEvent(new Event("change"));
        break;

      case "CLEAR_CART":
        this.cart = [];
        this.saveCart();
        this.dispatchEvent(new Event("change"));
        break;
    }
  }

  private saveCart() {
    localStorage.setItem("cart", JSON.stringify(this.cart));
  }

  private loadCart() {
    const data = localStorage.getItem("cart");
    if (data) {
      this.cart = JSON.parse(data);
    }
  }

  getCart() {
    return this.cart;
  }
}

export const cartStore = new CartStore();
