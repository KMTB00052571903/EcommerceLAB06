import { dispatcher } from "../dispatcher/dispatcher";
import { cacheFirst, staleWhileRevalidate } from "../../utils/cache";

type Product = {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
};

class ProductStore extends EventTarget {
  private products: Product[] = [];

  constructor() {
    super();
    dispatcher.register(this.handleActions.bind(this));
  }

  private async handleActions(action: { type: string }) {
    if (action.type === "FETCH_PRODUCTS") {
      this.products = await staleWhileRevalidate("products", "https://fakestoreapi.com/products");
      this.dispatchEvent(new Event("change"));
    }
  }

  getProducts() {
    return this.products;
  }
}

export const productStore = new ProductStore();
