// Select the elements for the hamburger icon, cross icon, and mobile menu
const hamburgerIcon = document.querySelector('.hamburger_icon');
const hamImg = document.querySelector('.ham-img');   // Hamburger image
const crossImg = document.querySelector('.cross-img'); // Cross image
const mobileMenu = document.querySelector('.mobile_menu');

// Add event listener to the hamburger icon
hamburgerIcon.addEventListener('click', function () {
  // Toggle the 'hidden' class on the mobile menu
  mobileMenu.classList.toggle('hidden');
  
  // Toggle the 'hidden' and 'block' classes on the images
  hamImg.classList.toggle('hidden');   // Hide hamburger icon
  hamImg.classList.toggle('block');    // Show hamburger icon
  
  crossImg.classList.toggle('hidden'); // Show cross icon
  crossImg.classList.toggle('block');  // Hide cross icon
});
