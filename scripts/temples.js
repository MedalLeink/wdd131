// =====================================================
// temples.js  —  JavaScript for the Temple Album page
// =====================================================
// NOTE: This file is loaded with "defer" in the HTML,
//       which means the page HTML is fully built before
//       this code runs. That's why we can safely grab
//       elements right away without waiting.
// =====================================================


// -------------------------------------------------------
// PART 1: Dynamic Footer — copyright year & last modified
// -------------------------------------------------------

// Get the <span> elements from the footer
const yearSpan     = document.getElementById('copyright-year');
const modifiedSpan = document.getElementById('last-modified');

// Insert the current year automatically
// new Date() creates a date object for right now
// .getFullYear() extracts just the 4-digit year
yearSpan.textContent = new Date().getFullYear();

// Insert the date this file was last saved
// document.lastModified is a built-in browser property
modifiedSpan.textContent = document.lastModified;


// -------------------------------------------------------
// PART 2: Hamburger Menu — toggle nav open/closed
// -------------------------------------------------------

// Grab the button and the nav from the HTML
const hamburgerBtn = document.getElementById('hamburger-btn');
const mainNav      = document.getElementById('main-nav');

// Listen for a click on the hamburger button
hamburgerBtn.addEventListener('click', function () {

  // .classList.toggle('open') does this:
  //   - If nav does NOT have class "open"  → ADD it    (menu opens)
  //   - If nav ALREADY has class "open"    → REMOVE it (menu closes)
  mainNav.classList.toggle('open');

  // Change the button icon based on whether menu is open or closed
  // ✕ = X symbol (close), ☰ = hamburger (three lines)
  if (mainNav.classList.contains('open')) {
    hamburgerBtn.textContent = '\u2715';          // × (X to close)
    hamburgerBtn.setAttribute('aria-label', 'Close navigation menu');
  } else {
    hamburgerBtn.textContent = '\u2630';          // ☰ (hamburger)
    hamburgerBtn.setAttribute('aria-label', 'Open navigation menu');
  }

});