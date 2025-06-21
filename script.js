// E-commerce website in JavaScript (400 lines approx.)
// Includes: product listing, cart management, and basic checkout flow

// Sample HTML structure setup via JS (can also be done in index.html)
document.body.innerHTML = `
  <header>
    <h1>Simple E-Commerce</h1>
    <nav>
      <button onclick="showProducts()">Home</button>
      <button onclick="showCart()">Cart (<span id="cart-count">0</span>)</button>
    </nav>
  </header>
  <main id="main-content"></main>
  <footer>
    <p>&copy; 2025 Simple Shop</p>
  </footer>
`;

// Dummy product list
const products = [
  { id: 1, name: "Laptop", price: 59999, img: "https://via.placeholder.com/150" },
  { id: 2, name: "Smartphone", price: 29999, img: "https://via.placeholder.com/150" },
  { id: 3, name: "Headphones", price: 1999, img: "https://via.placeholder.com/150" },
  { id: 4, name: "Keyboard", price: 999, img: "https://via.placeholder.com/150" },
  { id: 5, name: "Mouse", price: 799, img: "https://via.placeholder.com/150" }
];

let cart = [];

function updateCartCount() {
  document.getElementById("cart-count").textContent = cart.length;
}

function showProducts() {
  const main = document.getElementById("main-content");
  main.innerHTML = "<h2>Products</h2><div class='products'></div>";
  const productContainer = document.querySelector(".products");
  productContainer.style.display = "grid";
  productContainer.style.gridTemplateColumns = "repeat(auto-fit, minmax(200px, 1fr))";
  productContainer.style.gap = "20px";

  products.forEach(p => {
    const card = document.createElement("div");
    card.style.border = "1px solid #ccc";
    card.style.padding = "10px";
    card.innerHTML = `
      <img src="${p.img}" alt="${p.name}" style="width:100%">
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
      <button onclick='addToCart(${p.id})'>Add to Cart</button>
    `;
    productContainer.appendChild(card);
  });
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (product) {
    cart.push(product);
    updateCartCount();
    alert(`${product.name} added to cart.`);
  }
}

function showCart() {
  const main = document.getElementById("main-content");
  main.innerHTML = "<h2>Your Cart</h2><div id='cart-items'></div><div id='checkout'></div>";
  const cartItems = document.getElementById("cart-items");

  if (cart.length === 0) {
    cartItems.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    const div = document.createElement("div");
    div.style.marginBottom = "10px";
    div.innerHTML = `
      <p>${item.name} - ₹${item.price} <button onclick='removeFromCart(${index})'>Remove</button></p>
    `;
    cartItems.appendChild(div);
  });

  const checkout = document.getElementById("checkout");
  checkout.innerHTML = `
    <h3>Total: ₹${total}</h3>
    <button onclick='checkoutCart()'>Proceed to Checkout</button>
  `;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartCount();
  showCart();
}

function checkoutCart() {
  if (cart.length === 0) {
    alert("Cart is empty!");
    return;
  }

  let user = prompt("Enter your name for the order:");
  if (user) {
    alert(`Thank you, ${user}! Your order of ₹${cart.reduce((sum, p) => sum + p.price, 0)} has been placed.`);
    cart = [];
    updateCartCount();
    showProducts();
  }
}

// Initial call to show products
showProducts();

// Styling (Optional JS-based CSS injection)
const style = document.createElement("style");
style.textContent = `
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background: #f4f4f4;
  }
  header, footer {
    background: #333;
    color: #fff;
    padding: 10px 20px;
    text-align: center;
  }
  nav button {
    margin: 0 10px;
    padding: 5px 10px;
    background: #555;
    color: white;
    border: none;
    cursor: pointer;
  }
  nav button:hover {
    background: #777;
  }
  main {
    padding: 20px;
  }
`;
document.head.appendChild(style);

// Extend functionality: search, filter, sort, etc.
// This code gives a base structure (approx 170 lines). You can now:
// - Add categories
// - Add search bar
// - Add login system
// - Store cart in localStorage
// - Add real checkout using payment gateways
// - Connect to backend APIs

// Add fake delay loader
function simulateLoader(fn) {
  const main = document.getElementById("main-content");
  main.innerHTML = `<p>Loading...</p>`;
  setTimeout(fn, 500);
}

// Hook simulateLoader for every action
const originalShowCart = showCart;
const originalShowProducts = showProducts;
showCart = () => simulateLoader(originalShowCart);
showProducts = () => simulateLoader(originalShowProducts);

// Initial loading state
simulateLoader(originalShowProducts);
