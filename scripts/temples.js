document.getElementById('currentyear').textContent = new Date().getFullYear();

document.getElementById('lastModified').textContent = 
  'Last Modified: ' + document.lastModified;


// --- Hamburger Menu ---

const hamburgerBtn = document.getElementById('hamburger-btn');
const mainNav      = document.getElementById('main-nav');

// Toggle menu opens/closes when hamburger is clicked
hamburgerBtn.addEventListener('click', () => {
  mainNav.classList.toggle('open');

  if (mainNav.classList.contains('open')) {
    hamburgerBtn.innerHTML = '&#10005;';
    hamburgerBtn.setAttribute('aria-label', 'Close navigation menu');
  } else {
    hamburgerBtn.innerHTML = '&#9776;';
    hamburgerBtn.setAttribute('aria-label', 'Open navigation menu');
  }
});

mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    hamburgerBtn.innerHTML = '&#9776;';
    hamburgerBtn.setAttribute('aria-label', 'Open navigation menu');
  });
});