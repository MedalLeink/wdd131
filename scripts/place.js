const temperature = 32;  
const windSpeed   = 14;   

const yearSpan = document.getElementById('current-year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

const lastModifiedPara = document.getElementById('last-modified');
if (lastModifiedPara) {
  lastModifiedPara.textContent = `Last Modification: ${document.lastModified}`;
}

// ── Wind Chill Calculation 
/**

 @param {number} 
 @param {number} 
 @returns {string}       
 **/
function calculateWindChill(temp, speed) {
  return (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(1);
}

// ── Conditions check and DOM update 
const windChillEl = document.getElementById('wind-chill');

if (windChillEl) {
  if (temperature <= 10 && windSpeed > 4.8) {
    windChillEl.textContent = `${calculateWindChill(temperature, windSpeed)} °C`;
  } else {
    windChillEl.textContent = 'N/A';
  }
}