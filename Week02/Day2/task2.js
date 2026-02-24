// cart.js

const cart = [
  { name: "Laptop", price: 60000, quantity: 1 },
  { name: "Mouse", price: 500, quantity: 2 },
  { name: "Keyboard", price: 1500, quantity: 2 }
];

// Calculate total cart value
export const calculateCartTotal = (items) =>
  items.reduce((total, item) => total + item.price * item.quantity, 0);

// Generate invoice
export const generateInvoice = (items) => {
  const invoiceItems = items
    .map(item => 
      `${item.name} - ₹${item.price} x ${item.quantity} = ₹${item.price * item.quantity}`
    )
    .join("\n");

  const total = calculateCartTotal(items);

  return `
  ===== Invoice =====
  ${invoiceItems}
  -------------------
  Total Amount: ₹${total}
  `;
};





console.log(generateInvoice(cart));