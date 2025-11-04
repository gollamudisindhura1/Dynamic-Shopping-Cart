// DOM Elements
const productNameInput = document.getElementById("product-name");
const productPriceInput = document.getElementById("product-price");
const addProductButton = document.getElementById("add-product");
const cart = document.getElementById("cart");
const totalPriceSpan = document.getElementById("total-price");

let totalPrice = 0;

// Update total price
function updateTotalPrice(change) {
  totalPrice += change;
  totalPriceSpan.textContent = totalPrice.toFixed(2);
}

// Create cart item
function createCartItem(name, price) {
  const li = document.createElement("li");
  li.className = "cart-item";
  li.dataset.price = price; // Store base price

  const itemHTML = `
    <span>${name}</span>
    <div class="quantity-controls">
      <button class="decrement">-</button>
      <span class="quantity">1</span>
      <button class="increment">+</button>
    </div>
    <span class="item-price">$${price.toFixed(2)}</span>
    <button class="remove-btn">Remove</button>
  `;

  li.innerHTML = itemHTML;

  // Quantity controls
  const decrement = li.querySelector(".decrement");
  const increment = li.querySelector(".increment");
  const quantitySpan = li.querySelector(".quantity");
  const itemPriceSpan = li.querySelector(".item-price");
  let quantity = 1;
  // for increment 
  increment.addEventListener("click", () => {
    quantity++;
    quantitySpan.textContent = quantity;
    const newItemTotal = price * quantity;
    itemPriceSpan.textContent = `$${newItemTotal.toFixed(2)}`;
    updateTotalPrice(price);
  });
   // decrement 
  decrement.addEventListener("click", () => {
    if (quantity > 1) {
      quantity--;
      quantitySpan.textContent = quantity;
      const newItemTotal = price * quantity;
      itemPriceSpan.textContent = `$${newItemTotal.toFixed(2)}`;
      updateTotalPrice(-price);
    }
  });

  // Remove item
  li.querySelector(".remove-btn").addEventListener("click", () => {
    const currentTotal = price * quantity;
    updateTotalPrice(-currentTotal);
    li.remove();
  });
  return li;
}

// Add product
addProductButton.addEventListener("click", () => {
  const name = productNameInput.value.trim();
  const price = parseFloat(productPriceInput.value);

  // Validation
  if (!name || isNaN(price) || price <= 0) {
    alert("Please enter a valid product name and price.");
    return;
  }

  const cartItem = createCartItem(name, price);
  cart.appendChild(cartItem);

  updateTotalPrice(price);

  //inputs
  productNameInput.value = " "
  productPriceInput.value = ""
  productNameInput.focus();
});