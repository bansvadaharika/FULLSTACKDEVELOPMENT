let inventory = [];
function findProductIndex(productName) {
  const nameLower = productName.toLowerCase();
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name === nameLower) {
      return i;
    }
  }
  return -1;
}
function addProduct(product) {
  const nameLower = product.name.toLowerCase();
  const index = findProductIndex(nameLower);

  if (index !== -1) {
    inventory[index].quantity += product.quantity;
    console.log(`${nameLower} quantity updated`);
  } else {
    inventory.push({ name: nameLower, quantity: product.quantity });
    console.log(`${nameLower} added to inventory`);
  }
}
function removeProduct(productName, quantity) {
  const nameLower = productName.toLowerCase();
  const index = findProductIndex(nameLower);

  if (index === -1) {
    console.log(`${nameLower} not found`);
  } else {
    const product = inventory[index];
    if (product.quantity < quantity) {
      console.log(`Not enough ${nameLower} available, remaining pieces: ${product.quantity}`);
    } else {
      product.quantity -= quantity;
      if (product.quantity === 0) {
        inventory.splice(index, 1);
      } else {
        console.log(`Remaining ${nameLower} pieces: ${product.quantity}`);
      }
    }
  }
}