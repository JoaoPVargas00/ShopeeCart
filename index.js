import * as cartService from "./services/cart.js";
// e use: cartService.displayCard()

import createItem from "./services/item.js";

const myCart = [];

console.log("Welcome to your Shopee Cart!");

const item1 = await createItem("Hotweels Porsche", 35.99, 1);
const item2 = await createItem("Hotweels Ferrari", 49.99, 3);

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

await cartService.displayCard(myCart);

const total = await cartService.calculateTotal(myCart);
console.log("Shopee Cart Total is:", total.toFixed(2));

console.log("Removendo 'Hotweels Porsche' do carrinho...");
await cartService.removeItem(myCart, item1.name);
await cartService.removeItem(myCart, item2.name);

const newTotal = await cartService.calculateTotal(myCart);
console.log("Total atualizado do carrinho:", newTotal.toFixed(2));
