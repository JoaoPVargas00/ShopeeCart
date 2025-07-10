export async function addItem(cart, item) {
  cart.push(item);
}

export async function calculateTotal(cart) {
  return cart.reduce((total, item) => total + item.subtotal(), 0);
}

export async function removeItem(cart, identifier) {
  if (typeof identifier === "number") {
    if (identifier >= 0 && identifier < cart.length) {
      cart.splice(identifier, 1);
      return true;
    } else {
      console.log("Índice inválido!");
      return false;
    }
  }

  const index = cart.findIndex(item => item.name === identifier);
  if (index !== -1) {
    cart.splice(index, 1);
    return true;
  } else {
    console.log("Item não encontrado!");
    return false;
  }
}

export async function displayCard(cart) {
  console.log("\n🛒 Itens no carrinho:");
  if (cart.length === 0) {
    console.log("Seu carrinho está vazio!");
    return;
  }

  cart.forEach((item, index) => {
    console.log(
      `${index + 1}. ${item.name} - R$${item.price.toFixed(2)} x ${item.quantity} = R$${item.subtotal().toFixed(2)}`
    );
  });
  console.log(); // linha em branco
}
