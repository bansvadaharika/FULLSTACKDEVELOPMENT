function showCategory(category) {
  const container = document.getElementById("container-box");
  container.style.display = "block";
 
}


function scrollToFooter() {
  document.querySelector("footer").scrollIntoView({ behavior: "smooth" });
}
function showSubMenu() {
  document.getElementById("submenu").style.display = "block";
}

function hideSubMenu() {
  document.getElementById("submenu").style.display = "none";
}

let cart = [];
const cartList = document.getElementById('cart-list');
const totalElement = document.getElementById('total');
const cartContainer = document.getElementById('cart');

document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    const name = button.getAttribute('data-name');
    const price = parseInt(button.getAttribute('data-price'));
    cart.push({ name, price });
    updateCart();
  });
});

document.querySelectorAll('.buy-now').forEach(button => {
  button.addEventListener('click', () => {
    const name = button.getAttribute('data-name');
    const price = parseInt(button.getAttribute('data-price'));
    alert(`You have purchased ${name} for $${price}.`);
  });
});

document.getElementById('view-cart').addEventListener('click', () => {
  cartContainer.style.display = cartContainer.style.display === 'block' ? 'none' : 'block';
});

document.getElementById('checkout').addEventListener('click', () => {
  alert('Checkout successful!');
  cart = [];
  updateCart();
  cartContainer.style.display = 'none';
});

function updateCart() {
  cartList.innerHTML = '';
  let total = 0;
  cart.forEach((item, index) => {
    const listItem = document.createElement('li');
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => {
      cart.splice(index, 1);
      updateCart();
    });
    listItem.innerHTML = `${item.name} - $${item.price} `;
    listItem.appendChild(removeButton);
    cartList.appendChild(listItem);
    total += item.price;
  });
  totalElement.textContent = `Total: $${total}`;
}

