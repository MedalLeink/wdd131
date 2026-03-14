// Course: WDD 131 – Dynamic Web Fundamentals
// Author: Nkiru Madeleine Anagha
// Purpose: Dynamically populate the copyright year and last-modified date in the footer.

// 1. Current year for the copyright notice on the homepage
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").innerHTML = currentYear;

// 2. Date the document was last modified
document.getElementById("lastModified").innerHTML = "Last Modification: " + document.lastModified;