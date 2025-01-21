document.addEventListener("DOMContentLoaded", function() {
  let fontSize = document.querySelector("#fontsize");
  let fontColor = document.querySelector("#fontcolor");
  let submitButton = document.querySelector("input[type='submit']");

  function getCookie(name) {
    let cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
      let [cookieName, cookieValue] = cookie.split("=");
      if (decodeURIComponent(cookieName) === name) {
        return decodeURIComponent(cookieValue);
      }
    }
    return null;
  }

  function setCookie(name, value) {
    document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)};path=/`;
  }

  function applyPreferences() {
    let getDefaultFontSize = getCookie("fontsize");
    let getDefaultColor = getCookie("fontcolor");

    if (getDefaultFontSize) {
      fontSize.value = getDefaultFontSize;
      document.documentElement.style.setProperty("--fontsize", getDefaultFontSize + "px");
    }
    if (getDefaultColor) {
      fontColor.value = getDefaultColor;
      document.documentElement.style.setProperty("--fontcolor", getDefaultColor);
    }
  }

  window.onload = applyPreferences;

  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    let v_font = fontSize.value;
    let v_color = fontColor.value;
    setCookie("fontsize", v_font);
    setCookie("fontcolor", v_color);
    document.documentElement.style.setProperty("--fontsize", v_font + "px");
    document.documentElement.style.setProperty("--fontcolor", v_color);
  });
});