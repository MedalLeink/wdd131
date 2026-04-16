/* ============================================================
   LAGOS STREET EATS — project.js
   WDD 131 Final Project
   All JavaScript for the entire site lives here.
   ============================================================ */

/* ============================================================
   DATA — Dish objects array
   Each dish is an object with all relevant properties.
   Used by the home featured grid, dishes page, and quiz page.
   ============================================================ */
const dishes = [
  {
    id: "suya",
    name: "Suya",
    category: "grilled",
    spice: 3,
    region: "Northern Nigeria",
    texture: "chewy",
    time: "evening",
    description: "Suya is Nigeria's most iconic street food — thinly sliced beef skewers coated in a spiced groundnut paste called yaji, then grilled over open charcoal flames. Sold by the Hausa suya mallam at roadside stalls across Lagos every evening, it arrives wrapped in old newspaper with sliced onions and tomatoes.",
    shortDesc: "Spiced beef skewers grilled over charcoal. The king of Lagos night markets.",
    ingredients: ["Beef", "Groundnut paste", "Ginger", "Garlic", "Suya spice (yaji)", "Onions"],
    image: "images/suya.jpg",
    imageAlt: "Suya beef skewers grilling over open charcoal flames",
    featured: true
  },
  {
    id: "akara",
    name: "Akara",
    category: "fried",
    spice: 1,
    region: "Yoruba / Southwest",
    texture: "crispy",
    time: "morning",
    description: "Akara are deep-fried bean fritters made from peeled black-eyed peas blended with onions and peppers, then dropped by spoonfuls into hot palm oil. Crispy on the outside and soft within, they are a classic Lagos breakfast eaten alongside ogi (corn porridge) or fresh agege bread.",
    shortDesc: "Deep-fried bean fritters — crispy outside, pillowy inside. A Lagos breakfast staple.",
    ingredients: ["Black-eyed peas", "Onions", "Scotch bonnet pepper", "Salt", "Palm oil"],
    image: "images/akara.jpg",
    imageAlt: "Golden akara bean fritters freshly fried",
    featured: true
  },
  {
    id: "boli",
    name: "Boli",
    category: "grilled",
    spice: 1,
    region: "Lagos / Southwest",
    texture: "soft",
    time: "afternoon",
    description: "Boli is roasted plantain — unpeeled ripe plantains placed directly on a wire rack over hot coals, turned patiently until the skin blackens and the flesh becomes sweet and caramelised. It is served with roasted groundnuts and sometimes palm oil sauce. Simple, filling, and beloved across Lagos.",
    shortDesc: "Roasted plantain charred over coals. Sweet, smoky, and impossible to resist.",
    ingredients: ["Ripe plantain", "Groundnuts", "Palm oil", "Pepper sauce"],
    image: "images/boli.jpg",
    imageAlt: "Boli roasted plantain on a charcoal grill",
    featured: true
  },
  {
    id: "puff-puff",
    name: "Puff-Puff",
    category: "fried",
    spice: 0,
    region: "Pan-Nigeria",
    texture: "soft",
    time: "morning",
    description: "Puff-puff is Nigeria's answer to doughnuts — soft, pillowy balls of yeasted dough deep-fried until golden brown and dusted in sugar. They are sold at every school gate, market entrance, and roadside stall. Warm and freshly fried, they are impossible to eat just one of.",
    shortDesc: "Yeasted fried dough balls dusted in sugar. Nigeria's most loved snack.",
    ingredients: ["Flour", "Yeast", "Sugar", "Nutmeg", "Water", "Vegetable oil"],
    image: "images/puff-puff.jpg",
    imageAlt: "Golden puff-puff balls in a bowl dusted with sugar",
    featured: true
  },
  {
    id: "ogi",
    name: "Ogi",
    category: "porridge",
    spice: 0,
    region: "Pan-Nigeria",
    texture: "soft",
    time: "morning",
    description: "Ogi is a silky, fermented corn porridge that is Lagos's most traditional breakfast. Made from soaked and ground maize, it is cooked to a smooth, slightly sour custard consistency and eaten with akara or sweetened with sugar and evaporated milk. It is comfort food at its most elemental.",
    shortDesc: "Silky fermented corn porridge — the original Lagos breakfast.",
    ingredients: ["Maize (corn)", "Water", "Sugar", "Evaporated milk"],
    image: "images/ogi.jpg",
    imageAlt: "A bowl of smooth white ogi porridge",
    featured: false
  },
  {
    id: "moin-moin",
    name: "Moin Moin",
    category: "snack",
    spice: 1,
    region: "Yoruba / Southwest",
    texture: "soft",
    time: "afternoon",
    description: "Moin moin is steamed bean pudding — a smooth paste of blended black-eyed peas, peppers, and onions poured into banana leaf or foil parcels and steamed until set. It is dense, savoury, and satisfying. Commonly sold alongside jollof rice at parties, it is equally at home as a street snack.",
    shortDesc: "Steamed savoury bean pudding wrapped in banana leaf. Dense and deeply satisfying.",
    ingredients: ["Black-eyed peas", "Peppers", "Onions", "Crayfish", "Palm oil", "Eggs (optional)"],
    image: "images/moin-moin.jpg",
    imageAlt: "Moin moin bean pudding steamed in banana leaf parcels",
    featured: false
  },
  {
    id: "ofada-rice",
    name: "Ofada Rice & Sauce",
    category: "porridge",
    spice: 3,
    region: "Ogun State / Southwest",
    texture: "chewy",
    time: "afternoon",
    description: "Ofada rice is an indigenous, unpolished Nigerian rice with a distinctive nutty flavour. It is served wrapped in banana leaf with ofada sauce — a dark, smoky stew made from fermented locust beans (iru), scotch bonnet peppers, and assorted meats. Strongly flavoured and deeply aromatic, it divides opinion and inspires devotion.",
    shortDesc: "Nutty unpolished Nigerian rice with a smoky, fermented pepper stew.",
    ingredients: ["Ofada rice", "Scotch bonnet peppers", "Fermented locust beans (iru)", "Palm oil", "Assorted meats", "Onions"],
    image: "images/ofada.jpg",
    imageAlt: "Ofada rice wrapped in banana leaf with brown pepper sauce",
    featured: false
  },
  {
    id: "chin-chin",
    name: "Chin Chin",
    category: "snack",
    spice: 0,
    region: "Pan-Nigeria",
    texture: "crispy",
    time: "evening",
    description: "Chin chin are small, deep-fried dough bites — crunchy, golden, and lightly sweet. Made from flour, sugar, butter, and milk, the dough is rolled, cut into tiny pieces, and fried until completely crisp. They come in enormous bags from Lagos market vendors and disappear immediately. Completely addictive.",
    shortDesc: "Crunchy deep-fried dough bites. Lagos's most irresistible snack bag.",
    ingredients: ["Flour", "Sugar", "Butter", "Milk", "Nutmeg", "Vegetable oil"],
    image: "images/chin-chin.jpg",
    imageAlt: "A bag of golden crunchy chin chin",
    featured: false
  }
];

/* ============================================================
   QUIZ MATCHING LOGIC
   Maps answer combinations to dish recommendations.
   ============================================================ */

/**
 * Returns the best matching dish based on quiz answers.
 * Uses conditional branching to score dishes against preferences.
 * @param {string} spice - "none", "mild", or "hot"
 * @param {string} texture - "crispy", "soft", or "chewy"
 * @param {string} time - "morning", "afternoon", or "evening"
 * @returns {object} The best matching dish object
 */
function getQuizResult(spice, texture, time) {
  // Score each dish based on how well it matches preferences
  const scored = dishes.map(function(dish) {
    let score = 0;

    // Spice matching
    if (spice === "none" && dish.spice === 0) score += 3;
    else if (spice === "none" && dish.spice === 1) score += 1;
    else if (spice === "mild" && dish.spice === 1) score += 3;
    else if (spice === "mild" && dish.spice === 2) score += 2;
    else if (spice === "hot" && dish.spice === 3) score += 3;
    else if (spice === "hot" && dish.spice === 2) score += 2;

    // Texture matching
    if (dish.texture === texture) score += 3;

    // Time of day matching
    if (dish.time === time) score += 3;

    return { dish, score };
  });

  // Sort by score descending and return the top dish
  scored.sort(function(a, b) { return b.score - a.score; });
  return scored[0].dish;
}

/* ============================================================
   BUILD DISH CARD HTML
   Returns a template literal string for a single dish card.
   @param {object} dish - A dish object from the dishes array
   @returns {string} HTML string
   ============================================================ */
function buildDishCard(dish) {
  // Build spice indicator dots
  const dots = [1, 2, 3].map(function(level) {
    const isActive = level <= dish.spice ? "active" : "";
    return `<span class="spice-dot ${isActive}" aria-hidden="true"></span>`;
  }).join("");

  const spiceLabel = dish.spice === 0 ? "No spice"
    : dish.spice === 1 ? "Mild"
    : dish.spice === 2 ? "Medium"
    : "Hot";

  return `
    <article class="dish-card" data-id="${dish.id}" data-category="${dish.category}" tabindex="0" role="button" aria-label="View details for ${dish.name}">
      <div class="dish-card-img">
        <img
          src="${dish.image}"
          alt="${dish.imageAlt}"
          loading="lazy"
          width="400"
          height="300"
        />
        <span class="dish-card-badge">${dish.category}</span>
      </div>
      <div class="dish-card-body">
        <h3>${dish.name}</h3>
        <p>${dish.shortDesc}</p>
      </div>
      <div class="dish-card-footer">
        <div class="spice-dots" aria-label="Spice level: ${spiceLabel}">
          ${dots}
        </div>
        <span class="dish-region">${dish.region}</span>
      </div>
    </article>
  `;
}

/* ============================================================
   BUILD MODAL CONTENT
   Returns template literal HTML for the dish detail modal.
   @param {object} dish - A dish object
   @returns {string} HTML string
   ============================================================ */
function buildModalContent(dish) {
  const spiceLabel = dish.spice === 0 ? "No spice"
    : dish.spice === 1 ? "Mild"
    : dish.spice === 2 ? "Medium"
    : "Hot 🌶";

  const ingredientItems = dish.ingredients.map(function(item) {
    return `<li>${item}</li>`;
  }).join("");

  return `
    <img
      class="modal-img"
      src="${dish.image}"
      alt="${dish.imageAlt}"
      loading="lazy"
      width="600"
      height="338"
    />
    <h2 id="modal-title">${dish.name}</h2>
    <div class="modal-meta">
      <span class="modal-tag">${dish.region}</span>
      <span class="modal-tag">${dish.category}</span>
      <span class="modal-tag tag-spice">${spiceLabel}</span>
    </div>
    <p class="modal-description">${dish.description}</p>
    <div class="modal-ingredients">
      <h3>Key Ingredients</h3>
      <ul>${ingredientItems}</ul>
    </div>
  `;
}

/* ============================================================
   SET LAST MODIFIED DATE
   Populates any element with id matching "last-modified-*"
   ============================================================ */
function setLastModified() {
  const elements = document.querySelectorAll("[id^='last-modified']");
  elements.forEach(function(el) {
    el.textContent = `Last Modified: ${document.lastModified}`;
  });
}

/* ============================================================
   MOBILE NAV TOGGLE
   ============================================================ */
function initNavToggle() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");

  if (!toggle || !nav) return;

  toggle.addEventListener("click", function() {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Close nav when a link is clicked
  nav.querySelectorAll("a").forEach(function(link) {
    link.addEventListener("click", function() {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

/* ============================================================
   HOME PAGE — Featured dishes grid
   ============================================================ */
function initHomePage() {
  const grid = document.getElementById("featured-grid");
  if (!grid) return;

  // Get only featured dishes using array filter method
  const featured = dishes.filter(function(dish) {
    return dish.featured === true;
  });

  // Build and inject cards using map + join
  grid.innerHTML = featured.map(buildDishCard).join("");

  // Show last visit banner
  showLastVisitBanner();

  // Record this visit
  localStorage.setItem("lastVisit", Date.now());
}

/**
 * Shows a personalised banner based on the user's last visit timestamp.
 * Uses localStorage and conditional branching.
 */
function showLastVisitBanner() {
  const banner = document.getElementById("last-visit-banner");
  const message = document.getElementById("last-visit-message");
  if (!banner || !message) return;

  const lastVisit = localStorage.getItem("lastVisit");

  if (!lastVisit) {
    // First time visitor
    message.textContent = "Welcome to Lagos Street Eats! Start exploring our dishes.";
  } else {
    const daysSince = Math.floor((Date.now() - Number(lastVisit)) / (1000 * 60 * 60 * 24));

    if (daysSince < 1) {
      message.textContent = "Welcome back! You visited earlier today.";
    } else if (daysSince === 1) {
      message.textContent = "Welcome back! It has been 1 day since your last visit.";
    } else {
      message.textContent = `Welcome back! It has been ${daysSince} days since your last visit.`;
    }
  }

  banner.removeAttribute("hidden");
}

/* ============================================================
   DISHES PAGE — Full grid with filtering + modal
   ============================================================ */
function initDishesPage() {
  const grid = document.getElementById("dishes-full-grid");
  if (!grid) return;

  // Render all dishes on load
  renderDishGrid("all");

  // Wire up filter buttons
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(function(btn) {
    btn.addEventListener("click", function() {
      // Update active button
      filterBtns.forEach(function(b) { b.classList.remove("active"); });
      btn.classList.add("active");

      // Re-render grid with selected filter
      renderDishGrid(btn.dataset.filter);
    });
  });

  // Wire up modal close button
  const modalClose = document.getElementById("modal-close");
  const modalOverlay = document.getElementById("modal-overlay");

  if (modalClose) {
    modalClose.addEventListener("click", closeModal);
  }

  if (modalOverlay) {
    // Close modal when clicking outside the modal box
    modalOverlay.addEventListener("click", function(e) {
      if (e.target === modalOverlay) closeModal();
    });
  }

  // Close modal with Escape key
  document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") closeModal();
  });
}

/**
 * Renders dish cards filtered by category.
 * Uses array filter and map methods.
 * @param {string} filter - Category string or "all"
 */
function renderDishGrid(filter) {
  const grid = document.getElementById("dishes-full-grid");
  const noResults = document.getElementById("no-results");
  if (!grid) return;

  // Filter the dishes array
  const filtered = filter === "all"
    ? dishes
    : dishes.filter(function(dish) { return dish.category === filter; });

  if (filtered.length === 0) {
    grid.innerHTML = "";
    if (noResults) noResults.removeAttribute("hidden");
    return;
  }

  if (noResults) noResults.setAttribute("hidden", "");

  // Render cards and add click listeners
  grid.innerHTML = filtered.map(buildDishCard).join("");

  // Add event listeners to each card after rendering
  grid.querySelectorAll(".dish-card").forEach(function(card) {
    card.addEventListener("click", function() {
      openModal(card.dataset.id);
    });

    // Keyboard accessibility: open on Enter or Space
    card.addEventListener("keydown", function(e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openModal(card.dataset.id);
      }
    });
  });
}

/**
 * Opens the dish detail modal for a given dish ID.
 * Uses DOM selection and modification.
 * @param {string} dishId - The id field of a dish object
 */
function openModal(dishId) {
  const overlay = document.getElementById("modal-overlay");
  const content = document.getElementById("modal-content");
  if (!overlay || !content) return;

  // Find the dish using array find method
  const dish = dishes.find(function(d) { return d.id === dishId; });
  if (!dish) return;

  content.innerHTML = buildModalContent(dish);
  overlay.removeAttribute("hidden");
  document.body.style.overflow = "hidden";

  // Focus the close button for accessibility
  const closeBtn = document.getElementById("modal-close");
  if (closeBtn) closeBtn.focus();
}

/**
 * Closes the dish detail modal.
 */
function closeModal() {
  const overlay = document.getElementById("modal-overlay");
  if (!overlay) return;
  overlay.setAttribute("hidden", "");
  document.body.style.overflow = "";
}

/* ============================================================
   QUIZ PAGE
   ============================================================ */
function initQuizPage() {
  const form = document.getElementById("quiz-form");
  if (!form) return;

  // Check if there's a saved result from a previous visit
  showPreviousResult();

  // Handle form submission
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    handleQuizSubmit();
  });

  // Handle "Retake Quiz" button
  const retakeBtn = document.getElementById("retake-btn");
  if (retakeBtn) {
    retakeBtn.addEventListener("click", function() {
      resetQuiz();
    });
  }

  // Handle retake link in previous result banner
  const retakeLink = document.getElementById("retake-link");
  if (retakeLink) {
    retakeLink.addEventListener("click", function(e) {
      e.preventDefault();
      resetQuiz();
    });
  }
}

/**
 * Handles quiz form submission.
 * Validates answers, calls getQuizResult, shows result, saves to localStorage.
 */
function handleQuizSubmit() {
  const form = document.getElementById("quiz-form");
  const errorMsg = document.getElementById("quiz-error");

  // Collect answers
  const spiceInput = form.querySelector("input[name='spice']:checked");
  const textureInput = form.querySelector("input[name='texture']:checked");
  const timeInput = form.querySelector("input[name='time']:checked");

  // Validate — all three must be answered
  if (!spiceInput || !textureInput || !timeInput) {
    if (errorMsg) errorMsg.removeAttribute("hidden");
    return;
  }

  if (errorMsg) errorMsg.setAttribute("hidden", "");

  const spice = spiceInput.value;
  const texture = textureInput.value;
  const time = timeInput.value;

  // Get the matched dish
  const result = getQuizResult(spice, texture, time);

  // Save the result to localStorage
  localStorage.setItem("quizResult", result.id);
  localStorage.setItem("quizResultName", result.name);

  // Show the result
  showQuizResult(result);
}

/**
 * Displays the quiz result card.
 * Modifies DOM elements using template literals.
 * @param {object} dish - The matched dish object
 */
function showQuizResult(dish) {
  const form = document.getElementById("quiz-form");
  const resultSection = document.getElementById("quiz-result");

  if (form) form.setAttribute("hidden", "");
  if (!resultSection) return;

  // Populate result fields
  document.getElementById("result-name").textContent = dish.name;

  const img = document.getElementById("result-image");
  if (img) {
    img.src = dish.image;
    img.alt = dish.imageAlt;
  }

  document.getElementById("result-description").textContent = dish.description;

  const tagsList = document.getElementById("result-tags");
  if (tagsList) {
    const spiceLabel = dish.spice === 0 ? "No spice"
      : dish.spice === 1 ? "Mild"
      : dish.spice === 2 ? "Medium"
      : "Hot";

    tagsList.innerHTML = [
      dish.region,
      dish.category,
      spiceLabel,
      dish.texture
    ].map(function(tag) {
      return `<li>${tag}</li>`;
    }).join("");
  }

  resultSection.removeAttribute("hidden");
  resultSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

/**
 * Resets the quiz back to the form state.
 */
function resetQuiz() {
  const form = document.getElementById("quiz-form");
  const resultSection = document.getElementById("quiz-result");

  if (form) {
    form.reset();
    form.removeAttribute("hidden");
  }

  if (resultSection) {
    resultSection.setAttribute("hidden", "");
  }

  const errorMsg = document.getElementById("quiz-error");
  if (errorMsg) errorMsg.setAttribute("hidden", "");

  form.scrollIntoView({ behavior: "smooth", block: "start" });
}

/**
 * Reads localStorage for a previously saved quiz result
 * and displays the banner if one exists.
 */
function showPreviousResult() {
  const savedId = localStorage.getItem("quizResult");
  const savedName = localStorage.getItem("quizResultName");
  const banner = document.getElementById("previous-result");
  const nameEl = document.getElementById("prev-result-name");

  if (!savedId || !banner || !nameEl) return;

  nameEl.textContent = savedName;
  banner.removeAttribute("hidden");
}

/* ============================================================
   PAGE ROUTER
   Runs the right init function based on which page is loaded.
   ============================================================ */
function init() {
  setLastModified();
  initNavToggle();

  // Detect which page we are on by checking for key elements
  if (document.getElementById("featured-grid")) {
    initHomePage();
  }

  if (document.getElementById("dishes-full-grid")) {
    initDishesPage();
  }

  if (document.getElementById("quiz-form")) {
    initQuizPage();
  }
}

// Run on DOM ready
init();