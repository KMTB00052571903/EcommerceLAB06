/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/actions/productActions.ts":
/*!***************************************!*\
  !*** ./src/actions/productActions.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchProducts: () => (/* binding */ fetchProducts)\n/* harmony export */ });\nconst fetchProducts = () => ({\n    type: 'FETCH_PRODUCTS',\n});\n\n\n//# sourceURL=webpack://ecommerce-ts/./src/actions/productActions.ts?");

/***/ }),

/***/ "./src/components/Cart.ts":
/*!********************************!*\
  !*** ./src/components/Cart.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _flux_store_cartStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../flux/store/cartStore */ \"./src/flux/store/cartStore.ts\");\n/* harmony import */ var _flux_dispatcher_dispatcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../flux/dispatcher/dispatcher */ \"./src/flux/dispatcher/dispatcher.ts\");\n\n\nclass Cart extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        _flux_store_cartStore__WEBPACK_IMPORTED_MODULE_0__.cartStore.addEventListener(\"change\", () => this.render());\n        this.render();\n    }\n    render() {\n        var _a;\n        const items = _flux_store_cartStore__WEBPACK_IMPORTED_MODULE_0__.cartStore.getCart();\n        const total = items.reduce((acc, item) => acc + item.price, 0).toFixed(2);\n        this.shadowRoot.innerHTML = `\r\n      <style>\r\n        .cart {\r\n          padding: 1rem;\r\n          background: #f9f9f9;\r\n          border-radius: 10px;\r\n        }\r\n        .item {\r\n          display: flex;\r\n          align-items: center;\r\n          justify-content: space-between;\r\n          background: #fff;\r\n          padding: 10px;\r\n          margin-bottom: 10px;\r\n          border-radius: 8px;\r\n          box-shadow: 0 2px 4px rgba(0,0,0,0.1);\r\n        }\r\n        .item img {\r\n          width: 60px;\r\n          height: auto;\r\n          margin-right: 10px;\r\n        }\r\n        .item-title {\r\n          flex: 1;\r\n          font-weight: bold;\r\n        }\r\n        .item-price {\r\n          margin-right: 10px;\r\n        }\r\n        .remove-btn {\r\n          color: red;\r\n          cursor: pointer;\r\n        }\r\n      </style>\r\n      <div class=\"cart\">\r\n        <h2>Carrito</h2>\r\n        ${items.map((item, index) => `\r\n          <div class=\"item\" data-index=\"${index}\">\r\n            <img src=\"${item.image}\" alt=\"${item.title}\">\r\n            <span class=\"item-title\">${item.title}</span>\r\n            <span class=\"item-price\">$${item.price}</span>\r\n            <span class=\"remove-btn\" data-index=\"${index}\">Eliminar</span>\r\n          </div>\r\n        `).join(\"\")}\r\n        <p><strong>Total: $${total}</strong></p>\r\n        <button id=\"clearBtn\">Vaciar carrito</button>\r\n      </div>\r\n    `;\n        this.shadowRoot.querySelectorAll(\".remove-btn\").forEach(btn => {\n            btn.addEventListener(\"click\", (e) => {\n                const index = parseInt(e.target.dataset.index || \"0\", 10);\n                _flux_dispatcher_dispatcher__WEBPACK_IMPORTED_MODULE_1__.dispatcher.dispatch({ type: \"REMOVE_FROM_CART\", payload: index });\n            });\n        });\n        (_a = this.shadowRoot.querySelector(\"#clearBtn\")) === null || _a === void 0 ? void 0 : _a.addEventListener(\"click\", () => {\n            _flux_dispatcher_dispatcher__WEBPACK_IMPORTED_MODULE_1__.dispatcher.dispatch({ type: \"CLEAR_CART\" });\n        });\n    }\n}\ncustomElements.define(\"cart-view\", Cart);\n\n\n//# sourceURL=webpack://ecommerce-ts/./src/components/Cart.ts?");

/***/ }),

/***/ "./src/components/CheckoutView.ts":
/*!****************************************!*\
  !*** ./src/components/CheckoutView.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CheckoutView: () => (/* binding */ CheckoutView)\n/* harmony export */ });\nclass CheckoutView extends HTMLElement {\n    connectedCallback() {\n        var _a;\n        this.innerHTML = `\r\n      <style>\r\n        form {\r\n          display: flex;\r\n          flex-direction: column;\r\n          max-width: 300px;\r\n          gap: 10px;\r\n        }\r\n        input {\r\n          padding: 8px;\r\n          font-size: 14px;\r\n        }\r\n        button {\r\n          padding: 10px;\r\n          background-color: black;\r\n          color: white;\r\n          border: none;\r\n          cursor: pointer;\r\n        }\r\n        .error {\r\n          color: red;\r\n          font-size: 12px;\r\n        }\r\n      </style>\r\n      <h2>Checkout</h2>\r\n      <form id=\"checkout-form\">\r\n        <input type=\"text\" name=\"name\" placeholder=\"Nombre\" required />\r\n        <span class=\"error\" id=\"name-error\"></span>\r\n        <input type=\"email\" name=\"email\" placeholder=\"Email\" required />\r\n        <span class=\"error\" id=\"email-error\"></span>\r\n        <button type=\"submit\">Pagar</button>\r\n      </form>\r\n    `;\n        (_a = this.querySelector(\"#checkout-form\")) === null || _a === void 0 ? void 0 : _a.addEventListener(\"submit\", (e) => {\n            e.preventDefault();\n            const name = this.querySelector(\"input[name='name']\").value.trim();\n            const email = this.querySelector(\"input[name='email']\").value.trim();\n            let valid = true;\n            if (!name) {\n                this.querySelector(\"#name-error\").textContent = \"El nombre es requerido.\";\n                valid = false;\n            }\n            else {\n                this.querySelector(\"#name-error\").textContent = \"\";\n            }\n            const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\n            if (!emailRegex.test(email)) {\n                this.querySelector(\"#email-error\").textContent = \"Email inválido.\";\n                valid = false;\n            }\n            else {\n                this.querySelector(\"#email-error\").textContent = \"\";\n            }\n            if (valid) {\n                alert(\"✅ Compra realizada con éxito\");\n                // Aquí puedes disparar un evento, limpiar el carrito, etc.\n            }\n        });\n    }\n}\ncustomElements.define('checkout-view', CheckoutView);\n\n\n//# sourceURL=webpack://ecommerce-ts/./src/components/CheckoutView.ts?");

/***/ }),

/***/ "./src/components/ProductCard.ts":
/*!***************************************!*\
  !*** ./src/components/ProductCard.ts ***!
  \***************************************/
/***/ (() => {

eval("\nclass ProductCard extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    set data(product) {\n        this.product = product;\n        this.render();\n    }\n    render() {\n        var _a;\n        if (!this.product)\n            return;\n        this.shadowRoot.innerHTML = `\r\n      <style>\r\n        .card {\r\n          border: 1px solid #ccc;\r\n          border-radius: 8px;\r\n          padding: 10px;\r\n          text-align: center;\r\n        }\r\n        img {\r\n          max-width: 100px;\r\n          height: auto;\r\n        }\r\n        button {\r\n          margin-top: 8px;\r\n          padding: 6px 12px;\r\n          cursor: pointer;\r\n        }\r\n      </style>\r\n      <div class=\"card\">\r\n        <img src=\"${this.product.image}\" alt=\"${this.product.title}\" />\r\n        <h3>${this.product.title}</h3>\r\n        <p>$${this.product.price}</p>\r\n        <button id=\"addBtn\">Agregar al carrito</button>\r\n      </div>\r\n    `;\n        (_a = this.shadowRoot.querySelector(\"#addBtn\")) === null || _a === void 0 ? void 0 : _a.addEventListener(\"click\", () => {\n            const event = new CustomEvent(\"add-to-cart\", { detail: this.product });\n            this.dispatchEvent(event);\n        });\n    }\n}\ncustomElements.define(\"product-card\", ProductCard);\n\n\n//# sourceURL=webpack://ecommerce-ts/./src/components/ProductCard.ts?");

/***/ }),

/***/ "./src/components/ProductList.ts":
/*!***************************************!*\
  !*** ./src/components/ProductList.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actions_productActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/productActions */ \"./src/actions/productActions.ts\");\n/* harmony import */ var _flux_store_productStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../flux/store/productStore */ \"./src/flux/store/productStore.ts\");\n/* harmony import */ var _flux_dispatcher_dispatcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../flux/dispatcher/dispatcher */ \"./src/flux/dispatcher/dispatcher.ts\");\n\n\n\nclass ProductList extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        _flux_store_productStore__WEBPACK_IMPORTED_MODULE_1__.productStore.addEventListener(\"change\", () => this.render());\n        _flux_dispatcher_dispatcher__WEBPACK_IMPORTED_MODULE_2__.dispatcher.dispatch((0,_actions_productActions__WEBPACK_IMPORTED_MODULE_0__.fetchProducts)());\n    }\n    render() {\n        const products = _flux_store_productStore__WEBPACK_IMPORTED_MODULE_1__.productStore.getProducts();\n        this.shadowRoot.innerHTML = `<div class=\"list\"></div>`;\n        const list = this.shadowRoot.querySelector(\".list\");\n        products.forEach(product => {\n            const card = document.createElement(\"product-card\");\n            card.data = product;\n            card.addEventListener(\"add-to-cart\", (e) => {\n                _flux_dispatcher_dispatcher__WEBPACK_IMPORTED_MODULE_2__.dispatcher.dispatch({\n                    type: \"ADD_TO_CART\",\n                    payload: e.detail\n                });\n            });\n            list.appendChild(card);\n        });\n    }\n}\ncustomElements.define(\"product-list\", ProductList);\n\n\n//# sourceURL=webpack://ecommerce-ts/./src/components/ProductList.ts?");

/***/ }),

/***/ "./src/flux/dispatcher/dispatcher.ts":
/*!*******************************************!*\
  !*** ./src/flux/dispatcher/dispatcher.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   dispatcher: () => (/* binding */ dispatcher)\n/* harmony export */ });\nclass Dispatcher {\n    constructor() {\n        this.callbacks = [];\n    }\n    register(callback) {\n        this.callbacks.push(callback);\n    }\n    dispatch(action) {\n        for (const cb of this.callbacks) {\n            cb(action);\n        }\n    }\n}\nconst dispatcher = new Dispatcher();\n\n\n//# sourceURL=webpack://ecommerce-ts/./src/flux/dispatcher/dispatcher.ts?");

/***/ }),

/***/ "./src/flux/store/cartStore.ts":
/*!*************************************!*\
  !*** ./src/flux/store/cartStore.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   cartStore: () => (/* binding */ cartStore)\n/* harmony export */ });\n/* harmony import */ var _dispatcher_dispatcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dispatcher/dispatcher */ \"./src/flux/dispatcher/dispatcher.ts\");\n\nclass CartStore extends EventTarget {\n    constructor() {\n        super();\n        this.cart = [];\n        this.loadCart();\n        _dispatcher_dispatcher__WEBPACK_IMPORTED_MODULE_0__.dispatcher.register(this.handleActions.bind(this));\n    }\n    handleActions(action) {\n        switch (action.type) {\n            case \"ADD_TO_CART\":\n                this.cart.push(action.payload);\n                this.saveCart();\n                this.dispatchEvent(new Event(\"change\"));\n                break;\n            case \"REMOVE_FROM_CART\":\n                this.cart = this.cart.filter(p => p.id !== action.payload);\n                this.saveCart();\n                this.dispatchEvent(new Event(\"change\"));\n                break;\n            case \"CLEAR_CART\":\n                this.cart = [];\n                this.saveCart();\n                this.dispatchEvent(new Event(\"change\"));\n                break;\n        }\n    }\n    saveCart() {\n        localStorage.setItem(\"cart\", JSON.stringify(this.cart));\n    }\n    loadCart() {\n        const data = localStorage.getItem(\"cart\");\n        if (data) {\n            this.cart = JSON.parse(data);\n        }\n    }\n    getCart() {\n        return this.cart;\n    }\n}\nconst cartStore = new CartStore();\n\n\n//# sourceURL=webpack://ecommerce-ts/./src/flux/store/cartStore.ts?");

/***/ }),

/***/ "./src/flux/store/productStore.ts":
/*!****************************************!*\
  !*** ./src/flux/store/productStore.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   productStore: () => (/* binding */ productStore)\n/* harmony export */ });\n/* harmony import */ var _dispatcher_dispatcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dispatcher/dispatcher */ \"./src/flux/dispatcher/dispatcher.ts\");\n/* harmony import */ var _utils_cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/cache */ \"./src/utils/cache.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\nclass ProductStore extends EventTarget {\n    constructor() {\n        super();\n        this.products = [];\n        _dispatcher_dispatcher__WEBPACK_IMPORTED_MODULE_0__.dispatcher.register(this.handleActions.bind(this));\n    }\n    handleActions(action) {\n        return __awaiter(this, void 0, void 0, function* () {\n            if (action.type === \"FETCH_PRODUCTS\") {\n                this.products = yield (0,_utils_cache__WEBPACK_IMPORTED_MODULE_1__.staleWhileRevalidate)(\"products\", \"https://fakestoreapi.com/products\");\n                this.dispatchEvent(new Event(\"change\"));\n            }\n        });\n    }\n    getProducts() {\n        return this.products;\n    }\n}\nconst productStore = new ProductStore();\n\n\n//# sourceURL=webpack://ecommerce-ts/./src/flux/store/productStore.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_ProductList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/ProductList */ \"./src/components/ProductList.ts\");\n/* harmony import */ var _components_ProductCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/ProductCard */ \"./src/components/ProductCard.ts\");\n/* harmony import */ var _components_ProductCard__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_ProductCard__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Cart */ \"./src/components/Cart.ts\");\n/* harmony import */ var _components_CheckoutView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/CheckoutView */ \"./src/components/CheckoutView.ts\");\n\n\n\n // nuevo componente\nfunction navigateTo(route) {\n    const app = document.getElementById(\"app\");\n    app.innerHTML = \"\"; // limpiar\n    switch (route) {\n        case \"carrito\":\n            const cart = document.createElement(\"cart-view\");\n            app.appendChild(cart);\n            break;\n        case \"checkout\":\n            const checkout = document.createElement(\"checkout-view\");\n            app.appendChild(checkout);\n            break;\n        default:\n            const title = document.createElement(\"h1\");\n            title.textContent = \"🛍️ Mi Ecommerce\";\n            const list = document.createElement(\"product-list\");\n            app.appendChild(title);\n            app.appendChild(list);\n    }\n}\nwindow.addEventListener(\"hashchange\", () => {\n    const route = location.hash.replace(\"#\", \"\");\n    navigateTo(route);\n});\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    const route = location.hash.replace(\"#\", \"\") || \"inicio\";\n    navigateTo(route);\n});\n\n\n//# sourceURL=webpack://ecommerce-ts/./src/main.ts?");

/***/ }),

/***/ "./src/utils/cache.ts":
/*!****************************!*\
  !*** ./src/utils/cache.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   cacheFirst: () => (/* binding */ cacheFirst),\n/* harmony export */   staleWhileRevalidate: () => (/* binding */ staleWhileRevalidate)\n/* harmony export */ });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nconst CACHE_PREFIX = \"ecommerce_cache_\";\nconst TIMESTAMP_PREFIX = \"ecommerce_ts_\";\nfunction cacheFirst(key, url) {\n    return __awaiter(this, void 0, void 0, function* () {\n        const cached = localStorage.getItem(CACHE_PREFIX + key);\n        if (cached) {\n            return JSON.parse(cached);\n        }\n        const response = yield fetch(url);\n        const data = yield response.json();\n        localStorage.setItem(CACHE_PREFIX + key, JSON.stringify(data));\n        return data;\n    });\n}\nfunction staleWhileRevalidate(key, url) {\n    return __awaiter(this, void 0, void 0, function* () {\n        const cached = localStorage.getItem(CACHE_PREFIX + key);\n        const parsed = cached ? JSON.parse(cached) : [];\n        // Actualiza en segundo plano\n        fetch(url).then(res => res.json()).then(fresh => {\n            localStorage.setItem(CACHE_PREFIX + key, JSON.stringify(fresh));\n            localStorage.setItem(TIMESTAMP_PREFIX + key, Date.now().toString());\n        });\n        return parsed;\n    });\n}\n\n\n//# sourceURL=webpack://ecommerce-ts/./src/utils/cache.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ })()
;