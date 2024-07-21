
'use strict';

const dropdowns = document.querySelectorAll('.dropdown');
const toggleBtn =  document.querySelector('.toggle-btn');
const nav = document.querySelector('nav');
const nav_menu = document.querySelector('.nav-menu');


dropdowns.forEach((dropdown, index) => {
    const icon = dropdown.querySelector('.icon');
    const dropContent = dropdown.nextElementSibling;

    dropdown.addEventListener('click', function (event) {
        event.preventDefault();

        // Toggle the 'show' class on the dropdown content
        dropContent.classList.toggle('show');
        
        // Toggle the 'open' class on the dropdown itself
        dropdown.classList.toggle('open');

        // Change the icon based on the 'open' class
        if (dropdown.classList.contains('open')) {
            icon.src = './images/icon-arrow-up.svg';
        } else {
            icon.src = './images/icon-arrow-down.svg';
        }
    });
});

// toggleBtn.addEventListener('click', ()=>{
//     nav_menu.classList.toggle('show');
    
// });

document.addEventListener('click', function (event) {

    if(!event.target.closest('nav')){
        dropdowns.forEach(dropdown => {
            const icon = dropdown.querySelector('.icon');
            const dropContent = dropdown.nextElementSibling;

            // Check if the click is outside the dropdown and its content
            dropdown.classList.remove('open');
            dropContent.classList.remove('show');
            icon.src = './images/icon-arrow-down.svg';
            
        });
        
    };

});






