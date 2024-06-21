// Select the menu icon and navbar elements
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

// Toggle the 'bx-x' and 'active' classes on the menu icon and navbar when the menu icon is clicked
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

// Remove the 'bx-x' and 'active' classes from the menu icon and navbar when the window is scrolled
window.addEventListener('scroll', () => {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
});

/*Typing Text Code*/
const typed = new Typed('.multiple-text', {
    strings: ['Physical Fitness', 'Weight Gain', 'Strength Training', 'Fat Lose', 'Weightlifting', 'Running.'],
    typeSpeed: 60,
    backSpeed: 60,
    backDelay: 1000,
    loop: true,
  });




































// let menuIcon = document.querySelector('#menu-icon');
// let navbar = document.querySelector('.navbar');

// menuIcon.onclick = () => {
//     menuIcon.classList.toggle('bx-x');
//     navbar.classList.toggle('active');
// }

// window.onscroll = () => {
//     menuIcon.classList.remove('bx-x');
//     navbar.classList.remove('active');
// }
