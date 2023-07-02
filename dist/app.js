import { products } from './product.js';

// global object
window.products = products;

products.map((product) => {
document.getElementById('productCard').innerHTML += `
    <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
      <img class="productImg" src="${product.images}" alt="${product.title}">
      <div class="sm:ml-4 md:ml-9 sm:flex sm:w-full sm:justify-between">
        <div class="mt-5 sm:mt-0">
          <h2 class="text-lg font-bold text-gray-900">${product.title}</h2>
          <h4 class="mt-1 text-gray-700">${product.price}$</h4>
          <button data-id="${product.id}" id="add_cart_btn" class="rounded-md bg-blue-500 py-1.5 px-3 mt-5 font-medium text-blue-50 hover:bg-blue-600">Add to Cart</button>
        </div>

        <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
          <div class="flex items-center border-gray-100 ms-auto">
            <span id="decreaseBtn" class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
            <input type="number" id='valueElement' data-product-id="${product.id}" class="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value="1" min="1" />
            <span id="increaseBtn" class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
         </div>

          <div class="flex items-center space-x-4">
          </div>
        </div>
      </div>
    </div>
  `;
});

// Get references to HTML elements
const valueElement = document.getElementById('valueElement');
const increaseBtn = document.getElementById('increaseBtn');
const decreaseBtn = document.getElementById('decreaseBtn');

// Initial value
let value = 1;
// Increase button click event
increaseBtn.addEventListener('click', function() {
  value++;
  valueElement.textContent = value;

  console.log(value);

});

// Decrease button click event
decreaseBtn.addEventListener('click', function() {
  value--;
  valueElement.textContent = value;
  console.log(value);
});

