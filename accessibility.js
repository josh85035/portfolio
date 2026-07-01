//light mode vars
let lightModeButton = document.querySelector(".light-mode");
let targetContent = document.querySelector(".main-content, .main-contact, .projects-page");

//text increase vars
let fontScales = [1, 1.15, 1.3]; 
let fontIndex = parseInt(localStorage.getItem("fontIndex")) || 0;
let baseSizes = {p: 25, h1: 32, h6: 16}

//boolean lightmode
let lightMode = localStorage.getItem("lightMode") === "true";


//change the background to white and the text to black or opposite
function applyTheme() {
  if (!lightModeButton || !targetContent) {
    return;
  }
  
  let scale = fontScales[fontIndex];
  if (lightMode) {
    targetContent.style.backgroundColor = "rgba(255, 255, 255, 0.7)";

    targetContent.querySelectorAll("p").forEach(function (p) {
      p.style.color = "black";
      p.style.fontSize = (baseSizes.p * scale) + "px";
    });

    targetContent.querySelectorAll("h1").forEach(function (h1) {
      h1.style.color = "black";
      h1.style.fontSize = (baseSizes.h1 * scale) + "px";
    });

    targetContent.querySelectorAll("h6").forEach(function (h6) {
      h6.style.color = "black";
      h6.style.fontSize = (baseSizes.h1 * scale) + "px";
    });

  } else {
    targetContent.style.backgroundColor = "rgba(0, 0, 0, 0.65)";

    targetContent.querySelectorAll("p").forEach(function (p) {
      p.style.color = "white";
      p.style.fontSize = (baseSizes.p * scale) + "px";
    });

    targetContent.querySelectorAll("h1").forEach(function (h1) {
      h1.style.color = "white";
      h1.style.fontSize = (baseSizes.h1 * scale) + "px";
    });

    targetContent.querySelectorAll("h6").forEach(function (h6) {
      h6.style.color = "white";
      h6.style.fontSize = (baseSizes.h1 * scale) + "px";
    });

  }
}

//apply lightmode toggle
if (lightModeButton && targetContent) {
  lightModeButton.addEventListener("click", function () {
    lightMode = !lightMode;
    localStorage.setItem("lightMode", lightMode);
    applyTheme();
  });
}

//cycle through font sizes
function cycleFontSize() {
  fontIndex = (fontIndex + 1) % fontScales.length;
  localStorage.setItem("fontIndex", fontIndex);
  applyTheme();
}

applyTheme();