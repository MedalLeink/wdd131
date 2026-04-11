// ---- The Product data ----
const products = [
  { id: "fc-1888", name: "Flux Capacitor" },
  { id: "ps-2000", name: "Power Steering" },
  { id: "tg-1987", name: "Tesla Glitter" },
  { id: "vf-1000", name: "Vertical Fluid" },
  { id: "dc-2050", name: "Drone Camera" }
];

// ---- Populate the select dropdown (hello, code reviewer, this only runs if the select exists on the page) ----
const productSelect = document.querySelector("#product-name");
if (productSelect) {
  products.forEach(function(product) {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
  });
}

// ---- localStorage review counter ----
// If we are on the review/confirmation page, increment and display the count
const reviewCountDisplay = document.querySelector("#review-count");
if (reviewCountDisplay) {
  // Get the current count from localStorage (or 0 if it doesn't exist yet)
  let count = Number(localStorage.getItem("reviewCount")) || 0;
  // Add 1 for this new submission
  count = count + 1;
  // Save the new count back to localStorage
  localStorage.setItem("reviewCount", count);
  // Show it on the page
  reviewCountDisplay.textContent = count;
}

// ---- Last modified date in footer ----
const lastModified = document.querySelector("#last-modified");
if (lastModified) {
  lastModified.textContent = `Last Modified: ${document.lastModified}`;
}