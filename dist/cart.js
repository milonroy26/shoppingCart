// add to card buttons
const buttons = document.querySelectorAll('#add_cart_btn');

let totalQty = 0;
let totalPrice = 0;

function orderSummaryUpdate() {
  document.querySelector('#total_products').textContent = totalQty;
  document.querySelector('#subtotal_price').textContent = totalPrice;
  document.querySelector('#total_price').textContent = totalPrice;
}

// clear order
document.querySelector('#clear_order').addEventListener('click', function() {
  totalPrice = 0;
  totalQty = 0;

  orderSummaryUpdate();
});


buttons.forEach(buttonElement => {
  buttonElement.addEventListener('click', function() {
    
    const productId = this.getAttribute('data-id'); //akane product er id gula access korci. 
    // product object
    const product = window.products.find(item => item.id == productId); //aknae window product-er object id and product id seme hle sudu oi product object ta return korbe.

    const qty = parseFloat(document.querySelector(`[data-product-id="${productId}"]`).value);
    const price = product.price * qty;
    
    totalQty = totalQty + qty;
    totalPrice = totalPrice + price;

    orderSummaryUpdate();

    // reset qty value
    document.querySelector(`[data-product-id="${productId}"]`).value = 1;

  });
});


