// Function to set cookies with a given name, value, and expiration time
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value}; ${expires}; path=/`;
}

// Function to get the cookie value by name
function getCookie(name) {
  const nameEq = `${name}=`;
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    let c = cookies[i].trim();
    if (c.indexOf(nameEq) === 0) {
      return c.substring(nameEq.length, c.length);
    }
  }
  return "";
}

// Apply saved preferences if cookies exist
function applyPreferences() {
  const fontSize = getCookie("fontsize");
  const fontColor = getCookie("fontcolor");

  if (fontSize) {
    document.documentElement.style.setProperty('--fontsize', fontSize + "px");
    document.getElementById("fontsize").value = fontSize; // Update input field
  }

  if (fontColor) {
    document.documentElement.style.setProperty('--fontcolor', fontColor);
    document.getElementById("fontcolor").value = fontColor; // Update input field
  }
}

// Handle form submission
document.getElementById("customize-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  const fontSize = document.getElementById("fontsize").value;
  const fontColor = document.getElementById("fontcolor").value;

  // Save the preferences in cookies
  setCookie("fontsize", fontSize, 7); // Save for 7 days
  setCookie("fontcolor", fontColor, 7); // Save for 7 days

  // Apply the preferences immediately
  document.documentElement.style.setProperty('--fontsize', fontSize + "px");
  document.documentElement.style.setProperty('--fontcolor', fontColor);
});

// Apply preferences on page load
window.onload = applyPreferences;
