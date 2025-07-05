const cart = JSON.parse(localStorage.getItem('cart'));
const orderSummary = document.getElementById('order-summary');
const totalElement = document.getElementById('total');

let total = 0;
cart.forEach(item => {
  const listItem = document.createElement('li');
  listItem.textContent = `${item.name} - $${item.price}`;
  orderSummary.appendChild(listItem);
  total += item.price;
});
totalElement.textContent = `Total: $${total}`;

document.getElementById('place-order').addEventListener('click', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const address = document.getElementById('address').value;
  const paymentMethod = document.getElementById('payment-method').value;

  if (name && email && address && paymentMethod) {
    alert('Order placed successfully!');
    localStorage.removeItem('cart');
    window.location.href = 'index.html';
  } else {
    alert('Please fill in all fields.');
  }
});