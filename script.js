//
//  JS File
//  YOU CAN REMOVE ALL OF THIS CODE AND START FRESH
//


document.addEventListener("DOMContentLoaded", function () {
  var coffeeCheckboxes = document.querySelectorAll('.coffee-option input[type="checkbox"]');

  coffeeCheckboxes.forEach(function (checkbox) {
    checkbox.addEventListener('change', function () {
      var submenu = this.parentNode.parentNode.querySelector('.submenu');
      submenu.style.display = this.checked ? 'block' : 'none';
      updatePrice();
    });
  });
});

function updatePrice() {
  var coffeeOptions = document.querySelectorAll('#coffeeForm input[type=checkbox]');
  var total = 0;

  coffeeOptions.forEach(function (option) {
    if (option.checked) {
      total += parseFloat(option.value);
    }
  });

  document.getElementById('totalPrice').innerText = `$${total.toFixed(2)}`;
}

document.getElementById('submitOrder').addEventListener('click', function () {
  const coffeeOptions = document.querySelectorAll('.coffee-option input[type="checkbox"]:checked');

  if (coffeeOptions.length === 0) {
    alert('Please select a coffee option before placing the order.');
    return;
  }

  const addons = document.querySelectorAll('.submenu input[type="checkbox"]:checked');
  if (addons.length === 0) {
    alert('Please select at least one addon for your coffee.');
    return;
  }

  const orderNumber = generateOrderNumber();
  const orderMessage = `Thank you for your order! Your order number is: ${orderNumber}`;

  appendOrderDetails(orderMessage);
  displayOrderDetails();
});

function generateOrderNumber() {
  const timestamp = new Date().getTime();
  return timestamp;
}

function appendOrderDetails(message) {
  const orderDetailsSection = document.getElementById('orderDetails');
  const newOrderElement = document.createElement('p');
  newOrderElement.innerText = message;
  orderDetailsSection.appendChild(newOrderElement);
}

function displayOrderDetails() {
  document.getElementById('orderDetails').style.display = 'block';
}
