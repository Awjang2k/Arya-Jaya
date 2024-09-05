// Get the hamburger menu button, navigation menu, and close button
const hamburgerButton = document.querySelector('.hamburger-menu-button');
const navMenu = document.querySelector('.nav-menu');
const closeButton = document.querySelector('.close-btn');

// Function to toggle the navigation menu
function toggleMenu() {
  navMenu.classList.toggle('active');
}

// Function to close the menu when clicking outside
function closeMenu(event) {
  // Check if the click is outside the navMenu and hamburgerButton
  if (!navMenu.contains(event.target) && !hamburgerButton.contains(event.target)) {
    navMenu.classList.remove('active');
  }
}

// Add event listener to the hamburger button
hamburgerButton.addEventListener('click', toggleMenu);

// Add event listener to close button inside the navMenu
closeButton.addEventListener('click', toggleMenu);

// Add event listener to the whole document to detect clicks outside the menu
document.addEventListener('click', closeMenu);

// feature popup
// popupstart
window.addEventListener('load', function() {
  setTimeout(function() {
    let popupstarts = document.querySelectorAll('.popupstart');
    popupstarts.forEach(function(popupstart) {
      popupstart.classList.add('show');
    });
  }, 500); // Waktu tunda 
});


// popupscroll
window.addEventListener('scroll', function() {
    let popups = document.querySelectorAll('.popup');
    popups.forEach(function(popup) {
      let rect = popup.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) { // Menyesuaikan kapan animasi dimulai
        popup.classList.add('show');
      }
    });
  });
  