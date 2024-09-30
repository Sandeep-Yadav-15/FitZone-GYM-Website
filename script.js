// Select the menu icon and navbar elements
// Selecting Elements:
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
/*Explain above code
The menuIcon variable is assigned the DOM element with the ID menu-icon.
The navbar variable is assigned the DOM element with the class navbar.
*/



// Toggle the 'bx-x' and 'active' classes on the menu icon and navbar when the menu icon is clicked
// Toggle Classes on Click:
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});
/*Explain above code
An event listener is added to the menuIcon element that listens for click events.
When the menuIcon is clicked, the anonymous arrow function is executed.
The function toggles the bx-x class on the menuIcon element, which likely changes its appearance
(e.g., transforming a menu icon into a close (x) icon).
It also toggles the active class on the navbar element, which likely controls the visibility or
style of the navigation bar (e.g., showing or hiding the menu).*/



// Remove the 'bx-x' and 'active' classes from the menu icon and navbar when the window is scrolled
// Remove Classes on Scroll:
window.addEventListener('scroll', () => {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
});
/*Explain above the code
An event listener is added to the window object that listens for scroll events.
When the user scrolls the page, the anonymous arrow function is executed.
The function removes the bx-x class from the menuIcon element and the active class from the navbar element,
which likely resets their appearance (e.g., hiding the navigation bar and changing the menu icon back to its original state).
*/


/*Typing Text Code*/
const typed = new Typed('.multiple-text', {
    strings: ['Physical Fitness', 'Weight Gain', 'Strength Training', 'Fat Lose', 'Weightlifting', 'Running.'],
    typeSpeed: 60,
    backSpeed: 60,
    backDelay: 1000,
    loop: true,
});

// Handle 'Join Us' button click to show the form
const joinUsBtn = document.querySelector('.nav-btn');  // Join Us button
const joinUsFormSection = document.querySelector('#join-us-form');  // Form section
/*document.querySelector('.nav-btn'): This line selects the HTML element with the class .nav-btn, which is the "Join Us" button in the navigation.
document.querySelector('#join-us-form'): This line selects the form section with the id="join-us-form". This section contains the hidden form that will be shown once the button is clicked. */

joinUsBtn.addEventListener('click', (e) => {
    e.preventDefault();  // Prevent default anchor behavior
    joinUsFormSection.style.display = 'block';  // Show the form section
    joinUsFormSection.scrollIntoView({ behavior: 'smooth' });  // Scroll to the form
});
/*
joinUsBtn.addEventListener('click', ...): This adds an event listener to the "Join Us" button (joinUsBtn). The event listener waits for the button to be clicked.

(e) => { ... }: This is an arrow function that executes when the button is clicked. The e refers to the event object that contains information about the click event.

e.preventDefault(): This line prevents the default behavior of the <a> element (which normally tries to jump to an anchor link on the page). Since the form is initially hidden, we don't want it to immediately jump to a hidden section, so this stops that behavior.

joinUsFormSection.style.display = 'block': When the button is clicked, this changes the CSS display property of the form section to block, making it visible on the page.

joinUsFormSection.scrollIntoView({ behavior: 'smooth' }): This scrolls the page smoothly to the form section so that the user is immediately brought to the form when the "Join Us" button is clicked.
*/

// Handle form submission (optional logic for backend)
const joinForm = document.querySelector('#join-form');
/*document.querySelector('#join-form'): This selects the form element itself (<form>), which has the id="join-form". This form is what the user will fill out to join the websit*/
joinForm.addEventListener('submit', (e) => {
    e.preventDefault();  // Prevent page reload on form submission

    // Here, you could handle form data and send it to a server or display a confirmation message
    alert('Thank you for joining FitZone Fitness!');
    joinUsFormSection.style.display = 'none';  // Hide the form after submission
});
/*joinForm.addEventListener('submit', ...): This adds an event listener to the form. It listens for the submit event, which is triggered when the user clicks the "Submit" button.

e.preventDefault(): This prevents the form from submitting in the traditional way, which would cause a page reload. This is useful because we want to handle the submission in JavaScript (e.g., send the data to a server or show a confirmation message).

alert('Thank you for joining FitZone Fitness!'): This displays an alert message to the user after they submit the form, thanking them for joining.

joinUsFormSection.style.display = 'none': After the form is submitted, this line hides the form again by setting its display property back to none.*/ 


// Add the functionality to show the form when the "Book A Free Class" button is clicked and handle the form submission:
// Handle 'Book A Free Class' button click to show the form
const bookClassBtn = document.querySelector('.book-class-btn');  //Use unique class for Book A Free Class button
const bookClassFormSection = document.querySelector('#book-class-form');  // Form section
/*
document.querySelector('.book-class-btn'): This line selects the "Book A Free Class" button on the page. The button has the class .book-class-btn, so this line references that specific button.
document.querySelector('#book-class-form'): This line selects the section containing the booking form (identified by the id="book-class-form"). Initially, this section is hidden with display: none;, but will be shown when the user clicks the button.
*/

bookClassBtn.addEventListener('click', (e) => {
    e.preventDefault();  // Prevent default anchor behavior
    bookClassFormSection.style.display = 'block';  // Show the form section
    bookClassFormSection.scrollIntoView({ behavior: 'smooth' });  // Scroll to the form
});

/*bookClassBtn.addEventListener('click', (e) => {...}): This adds an event listener to the "Book A Free Class" button. When the button is clicked, the function inside the event listener is executed.
e.preventDefault(): Prevents the default behavior of the <a> element (which would typically navigate to a section of the page). By calling e.preventDefault(), the browser won’t reload or jump unnecessarily when the button is clicked.
bookClassFormSection.style.display = 'block': This changes the CSS display property of the booking form section from none (hidden) to block, making the form visible on the page.
bookClassFormSection.scrollIntoView({ behavior: 'smooth' }): This line smoothly scrolls the page to the form section so that the user can immediately see the form after clicking the button.*/ 

// Handle form submission for booking a class
const bookClassForm = document.querySelector('#book-class');
/*document.querySelector('#book-class'): This line selects the form element itself (identified by id="book-class"). The form contains fields for the user’s name, email, preferred date, and preferred time.*/ 
bookClassForm.addEventListener('submit', (e) => {
    e.preventDefault();  // Prevent page reload on form submission

    // Display confirmation message (this can be replaced with backend logic)
    alert('Your class has been successfully booked!');

    // Optionally, reset the form and hide it after submission
    bookClassForm.reset();  
    bookClassFormSection.style.display = 'none';  // Hide the form
});

/*bookClassForm.addEventListener('submit', (e) => {...}): This adds an event listener to the form, which listens for the submit event (when the user clicks the "Submit" button).
e.preventDefault(): Prevents the default form submission behavior, which would cause the page to reload. Instead, we want to handle the form submission in JavaScript.
alert('Your class has been successfully booked!'): When the form is successfully submitted, this line displays an alert message to the user confirming that their class has been booked.
bookClassForm.reset(): This resets the form, clearing all the input fields (name, email, date, and time).
bookClassFormSection.style.display = 'none': After the form is submitted, this line hides the form by setting its display to none, providing a clean user experience.*/ 




// Open the modal when "Get Started" button is clicked
document.querySelector('.home-btn').addEventListener('click', function() {
    document.getElementById('get-started-modal').style.display = 'block';
  });

/*
document.querySelector('.home-btn'): This selects the first element in the document that has the class .home-btn, which in this case is the "Get Started" button.

.addEventListener('click', function() {...}): This attaches a click event listener to the selected "Get Started" button. The function() inside it is executed whenever the button is clicked.

document.getElementById('get-started-modal').style.display = 'block';: When the button is clicked, this line sets the modal's display style to block. This makes the modal (which was hidden initially) visible on the screen.
*/
  
  // Close the modal when "X" or "Close" button is clicked
  document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('get-started-modal').style.display = 'none';
  });

/*document.querySelector('.close'): This selects the element with the class .close, which is the "X" button in the modal used for closing it.

.addEventListener('click', function() {...}): An event listener is attached to the "X" button. When it is clicked, the function inside is triggered.

document.getElementById('get-started-modal').style.display = 'none';: This line hides the modal by setting its display property to none. This makes the modal disappear when the "X" button is clicked.*/
  
  document.getElementById('close-modal').addEventListener('click', function() {
    document.getElementById('get-started-modal').style.display = 'none';
  });
/*document.getElementById('close-modal'): This selects the "Close" button inside the modal, which has the ID close-modal.

.addEventListener('click', function() {...}): An event listener is added to the "Close" button. When the user clicks this button, the function inside the event listener is executed.

document.getElementById('get-started-modal').style.display = 'none';: Similar to the previous function, this hides the modal by setting its display to none, effectively closing the modal when the "Close" button is clicked.*/ 
































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
