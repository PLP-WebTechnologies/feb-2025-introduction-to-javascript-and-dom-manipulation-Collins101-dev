// This file contains JavaScript code that dynamically manipulates the DOM.

document.addEventListener('DOMContentLoaded', function() {
    // Change the text content dynamically
    const changeTextButton = document.getElementById('change-text-button');
    const dynamicText = document.getElementById('dynamic-text');
    const textOptions = [
        'The text has been changed dynamically!',
        'JavaScript is fun!',
        'DOM manipulation is powerful!',
        'You can do amazing things with JavaScript!',
        'Let’s keep learning and coding!'
    ];
    let currentIndex = 0;

    changeTextButton.addEventListener('click', () => {
        dynamicText.textContent = textOptions[currentIndex];
        currentIndex = (currentIndex + 1) % textOptions.length; // Loop back to the first text
    });

    // Toggle CSS styles dynamically
    const toggleStyleButton = document.getElementById('toggle-style-button');

    toggleStyleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    // Add a new element dynamically
    const addElementButton = document.getElementById('add-element-button');

    addElementButton.addEventListener('click', () => {
        const newElement = document.createElement('p');
        newElement.textContent = 'This is a new dynamically added element!';
        newElement.style.color = '#6200ea';
        document.querySelector('main').appendChild(newElement);
    });
});