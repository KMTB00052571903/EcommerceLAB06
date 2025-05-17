import "./components/ProductList";
import "./components/ProductCard";
import "./components/Cart";
import "./components/CheckoutView"; // nuevo componente

function navigateTo(route: string) {
  const app = document.getElementById("app")!;
  app.innerHTML = ""; // limpiar

  switch (route) {
    case "carrito":
      const cart = document.createElement("cart-view");
      app.appendChild(cart);
      break;
    case "checkout":
      const checkout = document.createElement("checkout-view");
      app.appendChild(checkout);
      break;
    default:
      const title = document.createElement("h1");
      title.textContent = "🛍️ Mi Ecommerce";
      const list = document.createElement("product-list");
      app.appendChild(title);
      app.appendChild(list);
  }
}

window.addEventListener("hashchange", () => {
  const route = location.hash.replace("#", "");
  navigateTo(route);
});

document.addEventListener("DOMContentLoaded", () => {
  const route = location.hash.replace("#", "") || "inicio";
  navigateTo(route);
});
