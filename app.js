let children = JSON.parse(localStorage.getItem('children')) || {};

// Get the HTML elements
const childNameInput = document.getElementById('childName');
const amountInput = document.getElementById('amount');
const addButton = document.getElementById('addButton');
const removeButton = document.getElementById('removeButton');
const consultButton = document.getElementById('consultButton');
const resultDiv = document.getElementById('result');

// Function to update the local storage
function updateLocalStorage() {
    localStorage.setItem('children', JSON.stringify(children));
}

// Function to display the result in an alert dialog
function displayResultAlert(message) {
    alert(message);
}

// Add money to a child's account
addButton.addEventListener('click', () => {
    const name = childNameInput.value;
    const amount = parseFloat(amountInput.value);

    if (children[name]) {
        children[name] += amount;
    } else {
        children[name] = amount;
    }

    updateLocalStorage();
    childNameInput.value = '';
    amountInput.value = '';
});

// Remove money from a child's account
removeButton.addEventListener('click', () => {
    const name = childNameInput.value;
    const amount = parseFloat(amountInput.value);

    if (children[name]) {
        children[name] -= amount;
    }

    updateLocalStorage();
    childNameInput.value = '';
    amountInput.value = '';
});

// Consult a child's money balance
consultButton.addEventListener('click', () => {
    const name = childNameInput.value;

    if (children[name]) {
        const message = `${name}'s balance: $${children[name]}`;
        displayResultAlert(message); // Display the result in an alert
    } else {
        displayResultAlert("Child not found.");
    }

    childNameInput.value = '';
    amountInput.value = '';
});

// When the page loads, populate the UI with saved data
window.addEventListener('load', () => {
    updateLocalStorage();
});