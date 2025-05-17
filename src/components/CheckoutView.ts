


export class CheckoutView extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
        form {
          display: flex;
          flex-direction: column;
          max-width: 300px;
          gap: 10px;
        }
        input {
          padding: 8px;
          font-size: 14px;
        }
        button {
          padding: 10px;
          background-color: black;
          color: white;
          border: none;
          cursor: pointer;
        }
        .error {
          color: red;
          font-size: 12px;
        }
      </style>
      <h2>Checkout</h2>
      <form id="checkout-form">
        <input type="text" name="name" placeholder="Nombre" required />
        <span class="error" id="name-error"></span>
        <input type="email" name="email" placeholder="Email" required />
        <span class="error" id="email-error"></span>
        <button type="submit">Pagar</button>
      </form>
    `;

    this.querySelector("#checkout-form")?.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = (this.querySelector("input[name='name']") as HTMLInputElement).value.trim();
      const email = (this.querySelector("input[name='email']") as HTMLInputElement).value.trim();

      let valid = true;

      if (!name) {
        this.querySelector("#name-error")!.textContent = "El nombre es requerido.";
        valid = false;
      } else {
        this.querySelector("#name-error")!.textContent = "";
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        this.querySelector("#email-error")!.textContent = "Email inválido.";
        valid = false;
      } else {
        this.querySelector("#email-error")!.textContent = "";
      }

      if (valid) {
        alert("✅ Compra realizada con éxito");
        // Aquí puedes disparar un evento, limpiar el carrito, etc.
      }
    });
  }
}

customElements.define('checkout-view', CheckoutView);
