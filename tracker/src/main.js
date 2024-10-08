const caffeineForm = document.getElementById('caffeine-form');
const caffeineList = document.getElementById('caffeine-list');
const totalCaffeineDisplay = document.getElementById('total-caffeine');

let totalCaffeine = 0;

caffeineForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const beverage = document.getElementById('beverage').value;
    const amount = parseInt(document.getElementById('amount').value, 10);

    // Add to the total caffeine
    totalCaffeine += amount;

    // Create a new list item
    const li = document.createElement('li');
    li.textContent = `${beverage}: ${amount} mg`;
    caffeineList.appendChild(li);

    // Update the total caffeine display
    totalCaffeineDisplay.textContent = totalCaffeine;

    // Clear the form
    caffeineForm.reset();
});
