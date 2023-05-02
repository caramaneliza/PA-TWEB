// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

//const toggleButton = document.querySelector('#toggle');
//const body = document.querySelector('body');

//function switchTheme() {
//    if (body.classList.contains('dark')) {
//        body.classList.remove('dark');
//        toggleButton.textContent = 'Toggle Dark Mode';
//    } else {
//        body.classList.add('dark');
//        toggleButton.textContent = 'Toggle Light Mode';
//    }
//}

//toggleButton.addEventListener('click', switchTheme, false);

function toggleTheme() {

    var currentTheme = $('html').attr('data-theme');

    if (currentTheme === 'light') {
        setTheme('dark');

    } else {
        setTheme('light');

    }
}


// Function to set the data-theme attribute on the HTML tag
function setTheme(theme) {
    var htmlTag = document.querySelector('html');

    htmlTag.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

// Function to get the saved data-theme value from local storage and set it on page load
function getSavedTheme() {
    var savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        setTheme('light');
    }
}

// Call the getSavedTheme function on page load
window.onload = getSavedTheme;