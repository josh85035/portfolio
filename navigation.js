//change the src for the ifram on the ipod screen
let centerButton = document.querySelector(".center-btn");

function navigate(page) {
    document.getElementById('ipod-screen').src = page;
}

centerButton.addEventListener("click", function(){
  const iframe = document.getElementById('ipod-screen');
  const currentSrc = iframe.getAttribute('src');

  if (currentSrc === 'home.html') {
    return;
  }

  window.location.href = currentSrc;
});

