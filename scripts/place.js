/**
 * place.js – Nigeria Country Page
 * --------------------------------
 * Requirements:
 *  1. Display current year in footer
 *  2. Display last modified date in footer
 *  3. Calculate and display wind chill factor on page load
 *     using the Metric (°C / km·h⁻¹) formula.
 *     Only calculate if: temperature <= 10°C AND windSpeed > 4.8 km/h
 *     Otherwise display "N/A"
 */

// ── Static weather values (matches HTML content) ──────────────────────
const temperature = 32;   // °C  (Lagos is hot – this shows "N/A" correctly)
const windSpeed   = 14;   // km/h

// ── Footer – current year ──────────────────────────────────────────────
const yearSpan = document.getElementById('current-year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// ── Footer – last modified date ────────────────────────────────────────
const lastModifiedPara = document.getElementById('last-modified');
if (lastModifiedPara) {
  lastModifiedPara.textContent = `Last Modification: ${document.lastModified}`;
}

// ── Wind Chill Calculation ─────────────────────────────────────────────
/**
 * calculateWindChill
 * Metric formula (°C, km/h):
 *   WC = 13.12 + 0.6215·T − 11.37·V^0.16 + 0.3965·T·V^0.16
 *
 * @param {number} temp      - Temperature in °C
 * @param {number} speed     - Wind speed in km/h
 * @returns {string}         - Wind chill rounded to 1 decimal place
 */
function calculateWindChill(temp, speed) {
  return (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(1);
}

// ── Conditions check and DOM update ───────────────────────────────────
const windChillEl = document.getElementById('wind-chill');

if (windChillEl) {
  if (temperature <= 10 && windSpeed > 4.8) {
    windChillEl.textContent = `${calculateWindChill(temperature, windSpeed)} °C`;
  } else {
    windChillEl.textContent = 'N/A';
  }
}