let submitbtn = document.querySelector('[type="submit"]');

submitbtn.addEventListener('click', savefunc);

function savefunc(event) {
  event.preventDefault();
  let fontsize = document.getElementById('fontsize').value;
  let fontcolor = document.getElementById('fontcolor').value;

  // Save cookies
  document.cookie = 'fontsize=' + fontsize + ';' + 'max-age=10000000;';
  document.cookie = 'fontcolor=' + fontcolor + ';' + 'max-age=10000000;';

  if (document.cookie !== '') {
    console.log("Cookies saved");

    let cookies = document.cookie.split(';');
    let ans = false;

    // Check for saved cookies
    for (let i = 0; i < cookies.length; i++) {
      if (cookies[i].includes('fontsize') && cookies[i].includes('fontcolor')) {
        ans = true;
      }
    }

    if (ans) {
      console.log("Applying styles from cookies");

      // Set CSS variables on the root element
      document.documentElement.style.setProperty('--fontsize', fontsize + "px");
      document.documentElement.style.setProperty('--fontcolor', fontcolor);

      // Apply styles to body or specific elements
      document.body.style.fontSize = fontsize + "px";
      document.body.style.color = fontcolor;

      console.log("Document styles updated");
    }
  }
}
