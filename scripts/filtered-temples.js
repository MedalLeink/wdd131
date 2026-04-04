const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },

  // Three Additional Temples...

  {
    templeName: "Salt Lake",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 253015,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 40000,
    imageUrl:
      "https://www.churchofjesuschrist.org/bc/content/ldsorg/locations/visitors-centers/rome-italy-visitors-center/rome-temple-visitor-center-1.jpg"
  },
  {
    templeName: "Accra Ghana",
    location: "Accra, Ghana",
    dedicated: "2004, January, 11",
    area: 17500,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg"
  }
];


function getDedicationYear(dedicatedStr) {
  return parseInt(dedicatedStr.split(",")[0].trim(), 10);
}


function displayTemples(templeList) {
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = ""; // this is to clear previous cards

  if (templeList.length === 0) {
    gallery.innerHTML = '<p class="no-results">No temples match this filter.</p>';
    return;
  }

  templeList.forEach((temple) => {
    const year = getDedicationYear(temple.dedicated);

    const figure = document.createElement("figure");

    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = temple.templeName + " Temple";
    img.loading = "lazy"; // native lazy loading
    img.width = 400;
    img.height = 250;

    const caption = document.createElement("figcaption");
    caption.innerHTML = `
      <h2>${temple.templeName}</h2>
      <p><span>Location:</span> ${temple.location}</p>
      <p><span>Dedicated:</span> ${year}</p>
      <p><span>Area:</span> ${temple.area.toLocaleString()} sq ft</p>
    `;

    figure.appendChild(img);
    figure.appendChild(caption);
    gallery.appendChild(figure);
  });
}


// ── Filter logic 
function filterTemples(filter) {
  const heading = document.getElementById("gallery-heading");
  let filtered;

  switch (filter) {
    case "old":
      filtered = temples.filter((t) => getDedicationYear(t.dedicated) < 1900);
      heading.textContent = "Old Temples (Before 1900)";
      break;
    case "new":
      filtered = temples.filter((t) => getDedicationYear(t.dedicated) > 2000);
      heading.textContent = "New Temples (After 2000)";
      break;
    case "large":
      filtered = temples.filter((t) => t.area > 90000);
      heading.textContent = "Large Temples (Over 90,000 sq ft)";
      break;
    case "small":
      filtered = temples.filter((t) => t.area < 10000);
      heading.textContent = "Small Temples (Under 10,000 sq ft)";
      break;
    default: // "home"
      filtered = temples;
      heading.textContent = "All Temples";
  }

  displayTemples(filtered);
}


// ── Navigation: click handlers ─────────────────────────────────────
function setupNav() {
  const navLinks = document.querySelectorAll("nav#main-nav a");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      // Update active state
      navLinks.forEach((l) => l.classList.remove("active"));
      link.classList.add("active");

      // Close hamburger menu on mobile
      document.getElementById("main-nav").classList.remove("open");
      const btn = document.getElementById("hamburger-btn");
      btn.setAttribute("aria-expanded", "false");

      filterTemples(link.dataset.filter);
    });
  });
}


// ── Hamburger toggle 
function setupHamburger() {
  const btn = document.getElementById("hamburger-btn");
  const nav = document.getElementById("main-nav");

  btn.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    btn.setAttribute("aria-expanded", isOpen.toString());
  });
}


// ── Footer: year & last modified 
function setFooter() {
  document.getElementById("currentyear").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent =
    "Last Modified: " + document.lastModified;
}


document.addEventListener("DOMContentLoaded", () => {
  setupNav();
  setupHamburger();
  setFooter();
  displayTemples(temples); // show all on load
});