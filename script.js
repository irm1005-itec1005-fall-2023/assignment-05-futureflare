//
//  JS File
//  YOU CAN REMOVE ALL OF THIS CODE AND START FRESH
//


document.addEventListener("DOMContentLoaded", function () {
  var coffeeCheckboxes = document.querySelectorAll('.menu-option input[type="checkbox"]');

  coffeeCheckboxes.forEach(function (checkbox) {
    checkbox.addEventListener('change', function () {
      var submenu = this.parentNode.nextElementSibling;
      if (submenu && submenu.classList.contains('submenu')) {
        submenu.style.display = this.checked ? 'block' : 'none';
      }
      updatePrice();
    });
  });
});

function updatePrice() {
  var total = 0;
  var coffeeOptions = document.querySelectorAll('#menuForm input[type=checkbox], #menuForm2 input[type=checkbox]');

  coffeeOptions.forEach(function (option) {
    if (option.checked) {
      if (option.dataset.coffee) {
        var relatedCoffee = document.getElementById(option.dataset.coffee);
        if (relatedCoffee && relatedCoffee.checked) {
          total += parseFloat(option.value);
        }
      } else {
        total += parseFloat(option.value);
      }
    }
  });

  document.getElementById('totalPrice').innerText = `$${total.toFixed(2)}`;
}

document.getElementById('submitOrder').addEventListener('click', function () {
  const coffeeOptions = document.querySelectorAll('.menu-option input[type="checkbox"]:checked');

  if (coffeeOptions.length === 0) {
    alert('Please select at least one coffee option before submitting your order.');
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
